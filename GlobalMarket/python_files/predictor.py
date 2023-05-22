from flask import Flask, jsonify, request
import yfinance as yf
import pandas as pd
import os
import datetime as dt
import torch
import joblib
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)



def get_data(ticker):
    ###catch instances where ticker has a ^ preceding it
    try:
        stock_data = yf.Ticker(ticker).history(period="max")
    except ValueError:
        stock_data = yf.Ticker("^" + ticker).history(period="max")
    return stock_data.reset_index()

def predict_stock(ticker):
    # Load data
    if ticker + ".csv" in os.listdir("."):
        df = pd.read_csv(ticker + ".csv")
    else:
        stock = get_data(ticker)
        df = stock
        df.to_csv(ticker + ".csv")
    
    # Print the data frame before modification
    print("Before modification:")
    print(df.head())
   
    # Organize data
    df.index = pd.to_datetime(df["Date"]).dt.tz_convert("US/Central") - dt.timedelta(hours=5)
    #df.index = pd.to_datetime(df.index, format="%Y-%m-%d", utc = True).tz_convert("US/Central") - dt.timedelta(hours=5)

    # Print the data frame after modification
    print("After modification:")
    print(df.head())

    del df["Dividends"]
    del df["Stock Splits"]
    df["Tomorrow"] = df["Close"].shift(-1)
    df["Target"] = (df["Tomorrow"] > df["Close"]).astype(int)
    df.index = df["Date"]

    # Set the index as a datetime object
    df.index = pd.to_datetime(df.index)
     # Create new predictors
    horizons = [2, 5, 60, 250, 1000]
    new_predictors = []
    for horizon in horizons:
        numeric_columns = df.select_dtypes(include=[np.number]).columns
        rolling_averages = df[numeric_columns].rolling(horizon).mean()
        ratio_column = f"Close_Ratio_{horizon}"
        df[ratio_column] = df["Close"] / rolling_averages["Close"]

        # Convert Target column to numeric
        df["Target"] = pd.to_numeric(df["Target"], errors="coerce")

        trend_column = f"Trend_{horizon}"
        df[trend_column] = df.shift(1).rolling(horizon).sum()["Target"]
        new_predictors += [ratio_column, trend_column]
    df = df.dropna(subset=df.columns[df.columns != "Tomorrow"])
    df = df.dropna(subset=["Target"])  # Drop rows with non-numeric values in Target column
    
    # Load model
    model = joblib.load("model.pkl")
    
    # Preprocess data
    X = df[new_predictors].values.astype('float32')
    
    # Make prediction
    with torch.no_grad():
        X_tensor = torch.from_numpy(X)
        y_pred_tensor = model(X_tensor)
        y_pred = y_pred_tensor.detach().numpy()
    
    return y_pred[0][0]

@app.route('/predict', methods=['POST', 'GET'])
def predict():

    ticker = request.args.get('ticker')
    prediction = predict_stock(ticker)
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
