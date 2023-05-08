import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'http://18.118.120.98:5000/predict';

  predictStock(ticker: string): Observable<any> {
    //const url = `http://18.118.120.98:5000/predict?ticker=${ticker}`;
    //return this.http.get<any>(url);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = { ticker: ticker };
    return this.http.post<any>(this.apiUrl, body, httpOptions);
  }
}
