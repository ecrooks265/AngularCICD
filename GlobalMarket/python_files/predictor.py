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
  try:    # load data
    if os.path.exists(ticker + ".csv"):
        df = pd.read_csv(ticker + ".csv")
    else:
        df = yf.Ticker(ticker)
        df = df.history(period="max")
        df.to_csv(ticker + ".csv")

    # preprocess data
    print("Date before preprocess")
    print(df.head())
    print("Data types after preprocess")
    print(df.types())

    df["Date"] = pd.to_datetime(df["Date"], format='%Y-%m-%d', utc=True).dt.tz_localize(None)
    df.index = df["Date"].dt.tz_localize(None)
    df.index = pd.to_datetime(df.index, format="%Y-%m-%d", utc=True).tz_convert("US/Central") - dt.timedelta(hours=5)
    del df["Date"]
    del df["Dividends"]
    del df["Stock Splits"]

    df["Tomorrow"] = df["Close"].shift(-1)
    df["Target"] = (df["Tomorrow"] > df["Close"]).astype(int)

    print("Date after preprocess")
    print(df.head())
    print("Data types after preprocess")
    print(df.types())

    df = df.loc[pd.to_datetime("1990-01-01", format='%Y-%m-%d', utc=True).tz_localize(None):].copy()

    horizons = [2, 5, 60, 250, 1000]

    new_predictors = []

    for horizon in horizons:
        rolling_averages = df.rolling(horizon).mean()
        ratio_column = f"Close_Ratio_{horizon}"
        df[ratio_column] = df["Close"] / rolling_averages["Close"]
        trend_column = f"Trend_{horizon}"
        df[trend_column] = df.shift(1).rolling(horizon).sum()["Target"]
        new_predictors += [ratio_column, trend_column]
    df = df.dropna(subset=df.columns[df.columns != "Tomorrow"])

    print("Date after for loop for horizons")
    print(df.head())
    print("Data types after for loop for horizons")
    print(df.types())
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
  except Exception as e:
    print("Error occurred during predictor creation:")
    print(e)
    return None


@app.route('/predict', methods=['POST', 'GET'])
def predict():

    ticker = request.args.get('ticker')
    prediction = predict_stock(ticker)
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
