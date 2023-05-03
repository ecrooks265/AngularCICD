import { Component } from '@angular/core';
import { ITradingViewWidget, Themes } from 'tradingview-widget'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  widgetConfig: ITradingViewWidget = {
    symbol: 'MSFT',
    widgetType: 'widget',
    allow_symbol_change: true,
    height: 540,
    width: 980,
    hideideas: true,
    hide_legend: false,
    hide_side_toolbar: true,
    hide_top_toolbar: false,
    theme: Themes.LIGHT,
  };

  constructor() {
  
  }

  title = 'GlobalMarket';
}

