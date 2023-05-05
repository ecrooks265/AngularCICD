import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TradingviewWidgetModule } from 'tradingview-widget';
import { StockDataComponent } from './stock-data/stock-data.component'
import { StockDataModule } from './stock-data/stock-data.module';

@NgModule({
  declarations: [
    AppComponent,
    StockDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TradingviewWidgetModule,
    StockDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
