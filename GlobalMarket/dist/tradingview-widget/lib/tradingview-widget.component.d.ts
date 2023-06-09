import { OnInit } from '@angular/core';
import { ITradingViewWidget } from './tradingview-widget.model';
import * as i0 from "@angular/core";
export declare class TradingviewWidgetComponent implements OnInit {
    private _widgetConfig;
    private _defaultConfig;
    style: {};
    containerId: string;
    set widgetConfig(value: ITradingViewWidget);
    get widgetConfig(): ITradingViewWidget;
    constructor();
    ngOnInit(): void;
    initWidget(): void;
    appendScript(onload: any): void;
    canUseDOM(): false | {
        <K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions | undefined): HTMLElementTagNameMap[K];
        <K_1 extends keyof HTMLElementDeprecatedTagNameMap>(tagName: K_1, options?: ElementCreationOptions | undefined): HTMLElementDeprecatedTagNameMap[K_1];
        (tagName: string, options?: ElementCreationOptions | undefined): HTMLElement;
    };
    scriptExists(): boolean;
    updateOnloadListener(onload: any): () => void;
    getScriptElement(): HTMLElement | null;
    cleanWidget(): void;
    getContainer(): HTMLElement | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<TradingviewWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TradingviewWidgetComponent, "tradingview-widget", never, { "widgetConfig": "widgetConfig"; }, {}, never, never>;
}
