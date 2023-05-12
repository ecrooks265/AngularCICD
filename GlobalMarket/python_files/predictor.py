from flask import Flask, jsonify, request
import yfinance as yf
import pandas as pd
import os
import datetime as dt
import torch
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)



def get_data(ticker):
    ###catch instances where ticker has a ^ preceding it
    try:
        stock_data = yf.Ticker(ticker).history(period="max")
    except ValueError:
        stock_data = yf.Ticker("^" + ticker).history(period="max")
    return stock_data

def predict_stock(ticker):
    # Load data
    if ticker + ".csv" in os.listdir("."):
        df = pd.read_csv(ticker + ".csv")
    else:
        stock = get_data(ticker)
        df = stock.history(period="max")
        df.to_csv(ticker + ".csv")
    
    # Organize data
    df["Date"] = pd.to_datetime(df["Date"],format='%Y-%m-%d', utc = True).dt.tz_localize(None)
    df.index = df["Date"].dt.tz_localize(None)
    df.index = pd.to_datetime(df.index, format="%Y-%m-%d", utc = True).tz_convert("US/Central") - dt.timedelta(hours=5)
    del df["Date"]
    del df["Dividends"]
    del df["Stock Splits"]
    df["Tomorrow"] = df["Close"].shift(-1)
    df["Target"] = (df["Tomorrow"] > df["Close"]).astype(int)
    df = df.loc[pd.to_datetime("1990-01-01", format='%Y-%m-%d', utc = True).tz_localize(None):].copy()

    # Create new predictors
    horizons = [2,5,60,250,1000]
    new_predictors = []
    for horizon in horizons:
        rolling_averages = df.rolling(horizon).mean()
        ratio_column = f"Close_Ratio_{horizon}"
        df[ratio_column] = df["Close"] / rolling_averages["Close"]
        trend_column = f"Trend_{horizon}"
        df[trend_column] = df.shift(1).rolling(horizon).sum()["Target"]
        new_predictors+= [ratio_column, trend_column]
    df = df.dropna(subset=df.columns[df.columns != "Tomorrow"])
    
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

@app.route('/predict', methods=['GET','POST'])
def predict():

    ticker = request.json['ticker']
    prediction = predict_stock(ticker)
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
