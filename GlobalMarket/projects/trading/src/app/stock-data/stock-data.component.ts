import { Component } from '@angular/core';
import { StockDataService } from '../../services/stock-data.service';

@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html'
  
})
export class StockDataComponent {

  stockData: any;
  ticker: string = "AAPL";

  constructor(private stockDataService: StockDataService) { }

  ngOnInit() {
    this.stockDataService.predictStock(this.ticker).subscribe(data => {
      this.stockData = data;
    });
  }
}
