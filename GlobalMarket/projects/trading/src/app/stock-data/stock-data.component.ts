import { Component } from '@angular/core';
import { StockDataService } from '../../services/stock-data.service';

@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html'
  
})
export class StockDataComponent {

  prediction?: string;
  ticker = "AAPL";

  constructor(private stockDataService: StockDataService) { }

  ngOnInit() {
    this.getPrediction();
  }
  getPrediction() {
    this.stockDataService.predictStock(this.ticker).subscribe(
      (data: any) => {
        this.prediction = data.prediction;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
