import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {
  constructor(private http: HttpClient) { }
  // http://18.118.120.98:5000
  apiUrl = '/predict';


  predictStock(ticker: string): Observable<any> {
    const url = `${this.apiUrl}?ticker=${ticker}`;
    return this.http.get<any>(url);
  }
}
