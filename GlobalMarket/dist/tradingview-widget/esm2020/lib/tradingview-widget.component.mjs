import { Component, Input } from '@angular/core';
import { BarStyles, CONTAINER_ID, IntervalTypes, SCRIPT_ID, Themes } from './tradingview-widget.model';
import * as i0 from "@angular/core";
export class TradingviewWidgetComponent {
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
        const { widgetType, ...widgetConfig } = this.widgetConfig;
        const config = { ...widgetConfig, container_id: this.containerId };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGluZ3ZpZXctd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3RyYWRpbmd2aWV3LXdpZGdldC9zcmMvbGliL3RyYWRpbmd2aWV3LXdpZGdldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFzQixTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0FBVzNILE1BQU0sT0FBTywwQkFBMEI7SUF1Q3JDO1FBckNRLGtCQUFhLEdBQXVCLEVBQUUsQ0FBQztRQUN2QyxtQkFBYyxHQUF1QjtZQUMzQyxNQUFNLEVBQUUsYUFBYTtZQUNyQixtQkFBbUIsRUFBRSxJQUFJO1lBQ3pCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixNQUFNLEVBQUUsR0FBRztZQUNYLFNBQVMsRUFBRSxJQUFJO1lBQ2YsV0FBVyxFQUFFLEtBQUs7WUFDbEIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixnQkFBZ0IsRUFBRSxLQUFLO1lBQ3ZCLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUN6QixNQUFNLEVBQUUsSUFBSTtZQUNaLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxPQUFPO1lBQ3hCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixVQUFVLEVBQUUsU0FBUztZQUNyQixVQUFVLEVBQUUsUUFBUTtZQUNwQixLQUFLLEVBQUUsR0FBRztZQUNWLGNBQWMsRUFBRSxLQUFLO1NBQ3RCLENBQUM7UUFFRixVQUFLLEdBQU8sRUFBRSxDQUFDO1FBQ2YsZ0JBQVcs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bnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYXJTdHlsZXMsIENPTlRBSU5FUl9JRCwgSW50ZXJ2YWxUeXBlcywgSVRyYWRpbmdWaWV3V2lkZ2V0LCBTQ1JJUFRfSUQsIFRoZW1lcyB9IGZyb20gJy4vdHJhZGluZ3ZpZXctd2lkZ2V0Lm1vZGVsJztcblxuZGVjbGFyZSBjb25zdCBUcmFkaW5nVmlldzogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmFkaW5ndmlldy13aWRnZXQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzZWN0aW9uIFtpZF09XCJjb250YWluZXJJZFwiPiA8L3NlY3Rpb24+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgVHJhZGluZ3ZpZXdXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgX3dpZGdldENvbmZpZzogSVRyYWRpbmdWaWV3V2lkZ2V0ID0ge307XG4gIHByaXZhdGUgX2RlZmF1bHRDb25maWc6IElUcmFkaW5nVmlld1dpZGdldCA9IHtcbiAgICBzeW1ib2w6ICdOQVNEQVE6QUFQTCcsXG4gICAgYWxsb3dfc3ltYm9sX2NoYW5nZTogdHJ1ZSxcbiAgICBhdXRvc2l6ZTogZmFsc2UsXG4gICAgZW5hYmxlX3B1Ymxpc2hpbmc6IGZhbHNlLFxuICAgIGhlaWdodDogNjEwLFxuICAgIGhpZGVpZGVhczogdHJ1ZSxcbiAgICBoaWRlX2xlZ2VuZDogZmFsc2UsXG4gICAgaGlkZV9zaWRlX3Rvb2xiYXI6IHRydWUsXG4gICAgaGlkZV90b3BfdG9vbGJhcjogZmFsc2UsXG4gICAgaW50ZXJ2YWw6IEludGVydmFsVHlwZXMuRCxcbiAgICBsb2NhbGU6ICdlbicsXG4gICAgc2F2ZV9pbWFnZTogdHJ1ZSxcbiAgICBzaG93X3BvcHVwX2J1dHRvbjogZmFsc2UsXG4gICAgc3R5bGU6IEJhclN0eWxlcy5DQU5ETEVTLFxuICAgIHRoZW1lOiBUaGVtZXMuTElHSFQsXG4gICAgdGltZXpvbmU6ICdFdGMvVVRDJyxcbiAgICB0b29sYmFyX2JnOiAnI0YxRjNGNicsXG4gICAgd2lkZ2V0VHlwZTogJ3dpZGdldCcsXG4gICAgd2lkdGg6IDk4MCxcbiAgICB3aXRoZGF0ZXJhbmdlczogZmFsc2VcbiAgfTtcblxuICBzdHlsZToge30gPSB7fTtcbiAgY29udGFpbmVySWQgPSBDT05UQUlORVJfSUQ7XG5cbiAgQElucHV0KCd3aWRnZXRDb25maWcnKSBzZXQgd2lkZ2V0Q29uZmlnKHZhbHVlOiBJVHJhZGluZ1ZpZXdXaWRnZXQpIHtcbiAgICB0aGlzLl93aWRnZXRDb25maWcgPSB2YWx1ZTtcbiAgICB0aGlzLmNsZWFuV2lkZ2V0KCk7XG4gICAgdGhpcy5pbml0V2lkZ2V0KCk7XG4gIH1cblxuICBnZXQgd2lkZ2V0Q29uZmlnKCk6IElUcmFkaW5nVmlld1dpZGdldCB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZGdldENvbmZpZyB8fCB0aGlzLl9kZWZhdWx0Q29uZmlnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFwcGVuZFNjcmlwdCh0aGlzLmluaXRXaWRnZXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBpbml0V2lkZ2V0KCkge1xuICAgIC8qIGdsb2JhbCBUcmFkaW5nVmlldyAqL1xuICAgIGlmICh0eXBlb2YgVHJhZGluZ1ZpZXcgPT09ICd1bmRlZmluZWQnIHx8ICF0aGlzLmdldENvbnRhaW5lcigpKSByZXR1cm47XG5cbiAgICBjb25zdCB7IHdpZGdldFR5cGUsIC4uLndpZGdldENvbmZpZyB9ID0gdGhpcy53aWRnZXRDb25maWc7XG4gICAgY29uc3QgY29uZmlnID0geyAuLi53aWRnZXRDb25maWcsIGNvbnRhaW5lcl9pZDogdGhpcy5jb250YWluZXJJZCB9O1xuXG4gICAgaWYgKGNvbmZpZy5hdXRvc2l6ZSkge1xuICAgICAgZGVsZXRlIGNvbmZpZy53aWR0aDtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVpZ2h0O1xuICAgIH1cblxuXG4gICAgaWYgKGNvbmZpZy5wb3B1cF93aWR0aCAmJiB0eXBlb2YgY29uZmlnLnBvcHVwX3dpZHRoID09PSAnbnVtYmVyJykge1xuICAgICAgY29uZmlnLnBvcHVwX3dpZHRoID0gY29uZmlnLnBvcHVwX3dpZHRoLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5wb3B1cF9oZWlnaHQgJiYgdHlwZW9mIGNvbmZpZy5wb3B1cF9oZWlnaHQgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25maWcucG9wdXBfaGVpZ2h0ID0gY29uZmlnLnBvcHVwX2hlaWdodC50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuYXV0b3NpemUpIHtcbiAgICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICB9O1xuICAgIH1cbiAgICAvKiBnbG9iYWwgVHJhZGluZ1ZpZXcgKi9cbiAgICBuZXcgVHJhZGluZ1ZpZXdbd2lkZ2V0VHlwZSFdKGNvbmZpZyk7XG4gIH07XG5cbiAgYXBwZW5kU2NyaXB0KG9ubG9hZCA6IGFueSkge1xuICAgIGlmICghdGhpcy5jYW5Vc2VET00oKSkge1xuICAgICAgb25sb2FkKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2NyaXB0RXhpc3RzKCkpIHtcbiAgICAgIC8qIGdsb2JhbCBUcmFkaW5nVmlldyAqL1xuICAgICAgaWYgKHR5cGVvZiBUcmFkaW5nVmlldyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy51cGRhdGVPbmxvYWRMaXN0ZW5lcihvbmxvYWQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBvbmxvYWQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LmlkID0gU0NSSVBUX0lEO1xuICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vczMudHJhZGluZ3ZpZXcuY29tL3R2LmpzJztcbiAgICBzY3JpcHQub25sb2FkID0gb25sb2FkO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfTtcblxuICBjYW5Vc2VET00oKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICB3aW5kb3cuZG9jdW1lbnQgJiZcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50XG4gIH1cblxuICBzY3JpcHRFeGlzdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2NyaXB0RWxlbWVudCgpICE9PSBudWxsO1xuICB9XG5cbiAgdXBkYXRlT25sb2FkTGlzdGVuZXIob25sb2FkOiBhbnkpIHtcbiAgICBjb25zdCBzY3JpcHQgPSB0aGlzLmdldFNjcmlwdEVsZW1lbnQoKTtcbiAgICBjb25zdCBvbGRPbmxvYWQ6IGFueSA9IHNjcmlwdCEub25sb2FkIS5iaW5kKHNjcmlwdCEpO1xuICAgIHJldHVybiBzY3JpcHQhLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIG9sZE9ubG9hZCgpO1xuICAgICAgb25sb2FkKCk7XG4gICAgfTtcbiAgfTtcblxuICBnZXRTY3JpcHRFbGVtZW50KCkge1xuICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChTQ1JJUFRfSUQpO1xuICB9XG5cbiAgY2xlYW5XaWRnZXQoKSB7XG4gICAgaWYgKCF0aGlzLmNhblVzZURPTSgpKSByZXR1cm47XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5nZXRDb250YWluZXIoKTtcbiAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuICB9O1xuXG4gIGdldENvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5jb250YWluZXJJZCk7XG4gIH1cblxuXG5cbn1cbiJdfQ==