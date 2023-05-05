import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TradingviewWidgetModule } from 'tradingview-widget';
import { StockDataComponent } from './stock-data/stock-data.component'

@NgModule({
  declarations: [
    AppComponent,
    StockDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TradingviewWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
