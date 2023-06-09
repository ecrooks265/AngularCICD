import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';
import { __rest } from 'tslib';
import { CommonModule } from '@angular/common';

class TradingviewWidgetService {
    constructor() { }
}
TradingviewWidgetService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: TradingviewWidgetService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
TradingviewWidgetService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: TradingviewWidgetService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: TradingviewWidgetService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

var BarStyles;
(function (BarStyles) {
    BarStyles["BARS"] = "0";
    BarStyles["CANDLES"] = "1";
    BarStyles["HOLLOW_CANDLES"] = "9";
    BarStyles["HEIKIN_ASHI"] = "8";
    BarStyles["LINE"] = "2";
    BarStyles["AREA"] = "3";
    BarStyles["RENKO"] = "4";
    BarStyles["LINE_BREAK"] = "7";
    BarStyles["KAGI"] = "5";
    BarStyles["POINT_AND_FIGURE"] = "6";
})(BarStyles || (BarStyles = {}));
var IntervalTypes;
(function (IntervalTypes) {
    IntervalTypes["D"] = "D";
    IntervalTypes["W"] = "W";
})(IntervalTypes || (IntervalTypes = {}));
;
var RangeTypes;
(function (RangeTypes) {
    RangeTypes["YTD"] = "ytd";
    RangeTypes["ALL"] = "all";
})(RangeTypes || (RangeTypes = {}));
;
var Themes;
(function (Themes) {
    Themes["LIGHT"] = "Light";
    Themes["DARK"] = "Dark";
})(Themes || (Themes = {}));
;
const SCRIPT_ID = 'tradingview-widget-script';
const CONTAINER_ID = `tradingview-widget-${Math.random()}`;

class TradingviewWidgetComponent {
    constructor() {
        this._widgetConfig = {};
        this._defaultConfig = {
            symbol: 'NASDAQ:AAPL',
            allow_symbol_change: true,
            autosize: false,
            enable_publishing: false,
            height: 610,
            hideideas: true,
            hide_legend: false,
            hide_side_toolbar: true,
            hide_top_toolbar: false,
            interval: IntervalTypes.D,
            locale: 'en',
            save_image: true,
            show_popup_button: false,
            style: BarStyles.CANDLES,
            theme: Themes.LIGHT,
            timezone: 'Etc/UTC',
            toolbar_bg: '#F1F3F6',
            widgetType: 'widget',
            width: 980,
            withdateranges: false
        };
        this.style = {};
        this.containerId = CONTAINER_ID;
    }
    set widgetConfig(value) {
        this._widgetConfig = value;
        this.cleanWidget();
        this.initWidget();
    }
    get widgetConfig() {
        return this._widgetConfig || this._defaultConfig;
    }
    ngOnInit() {
        this.appendScript(this.initWidget.bind(this));
    }
    initWidget() {
        /* global TradingView */
        if (typeof TradingView === 'undefined' || !this.getContainer())
            return;
        const _a = this.widgetConfig, { widgetType } = _a, widgetConfig = __rest(_a, ["widgetType"]);
        const config = Object.assign(Object.assign({}, widgetConfig), { container_id: this.containerId });
        if (config.autosize) {
            delete config.width;
            delete config.height;
        }
        if (config.popup_width && typeof config.popup_width === 'number') {
            config.popup_width = config.popup_width.toString();
        }
        if (config.popup_height && typeof config.popup_height === 'number') {
            config.popup_height = config.popup_height.toString();
        }
        if (config.autosize) {
            this.style = {
                width: '100%',
                height: '100%'
            };
        }
        /* global TradingView */
        new TradingView[widgetType](config);
    }
    ;
    appendScript(onload) {
        if (!this.canUseDOM()) {
            onload();
            return;
        }
        if (this.scriptExists()) {
            /* global TradingView */
            if (typeof TradingView === 'undefined') {
                this.updateOnloadListener(onload);
                return;
            }
            onload();
            return;
        }
        const script = document.createElement('script');
        script.id = SCRIPT_ID;
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://s3.tradingview.com/tv.js';
        script.onload = onload;
        document.getElementsByTagName('head')[0].appendChild(script);
    }
    ;
    canUseDOM() {
        return typeof window !== 'undefined' &&
            window.document &&
            window.document.createElement;
    }
    scriptExists() {
        return this.getScriptElement() !== null;
    }
    updateOnloadListener(onload) {
        const script = this.getScriptElement();
        const oldOnload = script.onload.bind(script);
        return script.onload = () => {
            oldOnload();
            onload();
        };
    }
    ;
    getScriptElement() {
        return document.getElementById(SCRIPT_ID);
    }
    cleanWidget() {
        if (!this.canUseDOM())
            return;
        const container = this.getContainer();
        if (container) {
            container.innerHTML = '';
        }
    }
    ;
    getContainer() {
        return document.getElementById(this.containerId);
    }
}
TradingviewWidgetComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: TradingviewWidgetComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TradingviewWidgetComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: TradingviewWidgetComponent, selector: "tradingview-widget", inputs: { widgetConfig: "widgetConfig" }, ngImport: i0, template: `
    <section [id]="containerId"> </section>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: TradingviewWidgetComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'tradingview-widget',
                    template: `
    <section [id]="containerId"> </section>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { widgetConfig: [{
                type: Input,
                args: ['widgetConfig']
            }] } });

class TradingviewWidgetModule {
}
TradingviewWidgetModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: TradingviewWidgetModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TradingviewWidgetModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: TradingviewWidgetModule, declarations: [TradingviewWidgetComponent], imports: [CommonModule], exports: [TradingviewWidgetComponent] });
TradingviewWidgetModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: TradingviewWidgetModule, providers: [], imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: TradingviewWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [TradingviewWidgetComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [TradingviewWidgetComponent],
                    providers: []
                }]
        }] });

/*
 * Public API Surface of tradingview-widget
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BarStyles, CONTAINER_ID, IntervalTypes, RangeTypes, SCRIPT_ID, Themes, TradingviewWidgetComponent, TradingviewWidgetModule, TradingviewWidgetService };
//# sourceMappingURL=tradingview-widget.mjs.map
