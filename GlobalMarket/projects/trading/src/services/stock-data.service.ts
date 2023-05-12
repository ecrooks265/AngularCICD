import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {
  constructor(private http: HttpClient) { }
  // http://18.118.120.98:5000
  apiUrl = '/predict';
  prediction: any;



  predictStock(ticker: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const url = `http://18.118.120.98:5000${this.apiUrl}?ticker=${ticker}`;

    this.http.post('http://18.118.120.98:5000/predict', { ticker: ticker }).subscribe((data: any) => {
     this.prediction = data.prediction;
    });

    return this.prediction;
  }
}
