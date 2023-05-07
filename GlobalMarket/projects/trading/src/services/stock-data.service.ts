import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {
  constructor(private http: HttpClient) { }

  predictStock(ticker: string): Observable<any> {
    const url = `http://127.0.0.1:5000/predict?ticker=${ticker}`;
    return this.http.get<any>(url);
  }
}
