export var BarStyles;
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
export var IntervalTypes;
(function (IntervalTypes) {
    IntervalTypes["D"] = "D";
    IntervalTypes["W"] = "W";
})(IntervalTypes || (IntervalTypes = {}));
;
export var RangeTypes;
(function (RangeTypes) {
    RangeTypes["YTD"] = "ytd";
    RangeTypes["ALL"] = "all";
})(RangeTypes || (RangeTypes = {}));
;
export var Themes;
(function (Themes) {
    Themes["LIGHT"] = "Light";
    Themes["DARK"] = "Dark";
})(Themes || (Themes = {}));
;
export const SCRIPT_ID = 'tradingview-widget-script';
export const CONTAINER_ID = `tradingview-widget-${Math.random()}`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZGluZ3ZpZXctd2lkZ2V0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdHJhZGluZ3ZpZXctd2lkZ2V0L3NyYy9saWIvdHJhZGluZ3ZpZXctd2lkZ2V0Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBTixJQUFZLFNBV1g7QUFYRCxXQUFZLFNBQVM7SUFDbkIsdUJBQVUsQ0FBQTtJQUNWLDBCQUFhLENBQUE7SUFDYixpQ0FBb0IsQ0FBQTtJQUNwQiw4QkFBaUIsQ0FBQTtJQUNqQix1QkFBVSxDQUFBO0lBQ1YsdUJBQVUsQ0FBQTtJQUNWLHdCQUFXLENBQUE7SUFDWCw2QkFBZ0IsQ0FBQTtJQUNoQix1QkFBVSxDQUFBO0lBQ1YsbUNBQXNCLENBQUE7QUFDeEIsQ0FBQyxFQVhXLFNBQVMsS0FBVCxTQUFTLFFBV3BCO0FBRUQsTUFBTSxDQUFOLElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUN2Qix3QkFBTyxDQUFBO0lBQ1Asd0JBQU8sQ0FBQTtBQUNULENBQUMsRUFIVyxhQUFhLEtBQWIsYUFBYSxRQUd4QjtBQUFBLENBQUM7QUFFRixNQUFNLENBQU4sSUFBWSxVQUdYO0FBSEQsV0FBWSxVQUFVO0lBQ3BCLHlCQUFXLENBQUE7SUFDWCx5QkFBVyxDQUFBO0FBQ2IsQ0FBQyxFQUhXLFVBQVUsS0FBVixVQUFVLFFBR3JCO0FBQUEsQ0FBQztBQUVGLE1BQU0sQ0FBTixJQUFZLE1BR1g7QUFIRCxXQUFZLE1BQU07SUFDaEIseUJBQWUsQ0FBQTtJQUNmLHVCQUFhLENBQUE7QUFDZixDQUFDLEVBSFcsTUFBTSxLQUFOLE1BQU0sUUFHakI7QUFBQSxDQUFDO0FBSUYsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLDJCQUEyQixDQUFDO0FBQ3JELE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxzQkFBc0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBCYXJTdHlsZXMge1xyXG4gIEJBUlMgPSAnMCcsXHJcbiAgQ0FORExFUyA9ICcxJyxcclxuICBIT0xMT1dfQ0FORExFUyA9ICc5JyxcclxuICBIRUlLSU5fQVNISSA9ICc4JyxcclxuICBMSU5FID0gJzInLFxyXG4gIEFSRUEgPSAnMycsXHJcbiAgUkVOS08gPSAnNCcsXHJcbiAgTElORV9CUkVBSyA9ICc3JyxcclxuICBLQUdJID0gJzUnLFxyXG4gIFBPSU5UX0FORF9GSUdVUkUgPSAnNidcclxufVxyXG5cclxuZXhwb3J0IGVudW0gSW50ZXJ2YWxUeXBlcyB7XHJcbiAgRCA9ICdEJyxcclxuICBXID0gJ1cnXHJcbn07XHJcblxyXG5leHBvcnQgZW51bSBSYW5nZVR5cGVzIHtcclxuICBZVEQgPSAneXRkJyxcclxuICBBTEwgPSAnYWxsJ1xyXG59O1xyXG5cclxuZXhwb3J0IGVudW0gVGhlbWVzIHtcclxuICBMSUdIVCA9ICdMaWdodCcsXHJcbiAgREFSSyA9ICdEYXJrJ1xyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgU0NSSVBUX0lEID0gJ3RyYWRpbmd2aWV3LXdpZGdldC1zY3JpcHQnO1xyXG5leHBvcnQgY29uc3QgQ09OVEFJTkVSX0lEID0gYHRyYWRpbmd2aWV3LXdpZGdldC0ke01hdGgucmFuZG9tKCl9YDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyYWRpbmdWaWV3V2lkZ2V0IHtcclxuICBhbGxvd19zeW1ib2xfY2hhbmdlPzogYm9vbGVhbjtcclxuICBhdXRvc2l6ZT86IGJvb2xlYW47XHJcbiAgY2FsZW5kYXI/OiBib29sZWFuO1xyXG4gIGRldGFpbHM/OiBib29sZWFuO1xyXG4gIGVuYWJsZV9wdWJsaXNoaW5nPzogYm9vbGVhbjtcclxuICBoZWlnaHQ/OiBudW1iZXI7XHJcbiAgaGlkZWlkZWFzPzogYm9vbGVhbjtcclxuICBoaWRlX2xlZ2VuZD86IGJvb2xlYW47XHJcbiAgaGlkZV9zaWRlX3Rvb2xiYXI/OiBib29sZWFuO1xyXG4gIGhpZGVfdG9wX3Rvb2xiYXI/OiBib29sZWFuO1xyXG4gIGhvdGxpc3Q/OiBib29sZWFuO1xyXG4gIGludGVydmFsPzpcclxuICAnMScgfFxyXG4gICczJyB8XHJcbiAgJzUnIHxcclxuICAnMTUnIHxcclxuICAnMzAnIHxcclxuICAnNjAnIHxcclxuICAnMTIwJyB8XHJcbiAgJzE4MCcgfFxyXG4gIEludGVydmFsVHlwZXMuRCB8XHJcbiAgSW50ZXJ2YWxUeXBlcy5XO1xyXG4gIGxvY2FsZT86IHN0cmluZztcclxuICBuZXdzPzogc3RyaW5nW107XHJcbiAgbm9fcmVmZXJyYWxfaWQ/OiBib29sZWFuO1xyXG4gIHBvcHVwX2hlaWdodD86IG51bWJlciB8IHN0cmluZztcclxuICBwb3B1cF93aWR0aD86IG51bWJlciB8IHN0cmluZztcclxuICByZWZlcnJhbF9pZD86IHN0cmluZztcclxuICByYW5nZT86XHJcbiAgJzFkJyB8XHJcbiAgJzVkJyB8XHJcbiAgJzFtJyB8XHJcbiAgJzNtJyB8XHJcbiAgJzZtJyB8XHJcbiAgUmFuZ2VUeXBlcy5ZVEQgfFxyXG4gICcxMm0nIHxcclxuICAnNjBtJyB8XHJcbiAgUmFuZ2VUeXBlcy5BTEw7XHJcbiAgc2F2ZV9pbWFnZT86IGJvb2xlYW47XHJcbiAgc2hvd19wb3B1cF9idXR0b24/OiBib29sZWFuO1xyXG4gIHN0dWRpZXM/OiBzdHJpbmdbXTtcclxuICBzdHlsZT86IEJhclN0eWxlcy5CQVJTIHxcclxuICBCYXJTdHlsZXMuQ0FORExFUyB8XHJcbiAgQmFyU3R5bGVzLkhPTExPV19DQU5ETEVTIHxcclxuICBCYXJTdHlsZXMuSEVJS0lOX0FTSEkgfFxyXG4gIEJhclN0eWxlcy5MSU5FIHxcclxuICBCYXJTdHlsZXMuQVJFQSB8XHJcbiAgQmFyU3R5bGVzLlJFTktPIHxcclxuICBCYXJTdHlsZXMuTElORV9CUkVBSyB8XHJcbiAgQmFyU3R5bGVzLktBR0kgfFxyXG4gIEJhclN0eWxlcy5QT0lOVF9BTkRfRklHVVJFO1xyXG4gIHN5bWJvbD86IHN0cmluZztcclxuICB0aGVtZT86IFRoZW1lcy5MSUdIVCB8IFRoZW1lcy5EQVJLO1xyXG4gIHRpbWV6b25lPzogc3RyaW5nO1xyXG4gIHRvb2xiYXJfYmc/OiBzdHJpbmc7XHJcbiAgd2F0Y2hsaXN0Pzogc3RyaW5nW107XHJcbiAgd2lkZ2V0VHlwZT86IHN0cmluZztcclxuICB3aWR0aD86IG51bWJlcjtcclxuICB3aXRoZGF0ZXJhbmdlcz86IGJvb2xlYW47XHJcbn1cclxuIl19