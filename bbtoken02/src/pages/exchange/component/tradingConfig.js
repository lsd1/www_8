/*
 * @Author: Administrator
 * @Date:   2018-08-09 20:59:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-10-15 11:17:41
 */
import 'tradingview/charting_library.min';
export default function initTradingView(symbol, datafeed) {
    const widget = window.tvWidget = new TradingView.widget({
        fullscreen: true,
        symbol: symbol,
        interval: '1',
        timezone: 'Asia/Shanghai',
        toolbar_bg: '#18202a',
        container_id: "kline_container",
        datafeed: datafeed,
        library_path: "js/charting_library/",
        locale: "zh",
        debug: false,
        drawings_access: { type: 'black', tools: [{ name: "Regression Trend" }] },
        disabled_features: ["header_resolutions","header_settings","header_indicators","header_symbol_search", "header_chart_type", "header_compare", "header_undo_redo", "header_screenshot", "header_saveload", "use_localstorage_for_settings", "volume_force_overlay"],
        enabled_features: ["hide_last_na_study_output", "move_logo_to_main_pane",'hide_left_toolbar_by_default'],
        custom_css_url: 'bundles/common.css',
        supported_resolutions: ["1", "5", "15", "30", "60", "240", "1D", "1W", "1M"],
        charts_storage_url: 'http://saveload.tradingview.com',
        charts_storage_api_version: "1.1",
        client_id: 'tradingview.com',
        user_id: 'public_user_id',
        numeric_formatting: { decimal_sign: "." },

        overrides: {
            "paneProperties.background": "#1B1E2E",
            "paneProperties.vertGridProperties.color": "#102238",
            "paneProperties.horzGridProperties.color": "#102238",
            "scalesProperties.textColor": "#4e5b85",
            "mainSeriesProperties.candleStyle.upColor": "#589065",
            "mainSeriesProperties.candleStyle.downColor": "#AE4E54",
            "mainSeriesProperties.candleStyle.drawBorder": false,
            "mainSeriesProperties.candleStyle.wickUpColor": "#589065",
            "mainSeriesProperties.candleStyle.wickDownColor": "#AE4E54",
            "paneProperties.legendProperties.showLegend": false,
            "mainSeriesProperties.areaStyle.color1": "#4e5b85",
            "mainSeriesProperties.areaStyle.color2": "#4e5b85",
            "mainSeriesProperties.areaStyle.linecolor": "#9194a4",
        },
        time_frames: [
            { text: "1min", resolution: "1", description: "realtime", title:'分时' },
            { text: "1min", resolution: "1", description: "1min" },
            { text: "5min", resolution: "5", description: "5min" },
            { text: "15min", resolution: "15", description: "15min" },
            { text: "30min", resolution: "30", description: "30min" },
            { text: "1hour", resolution: "60", description: "1hour", title: "1hour" },
            { text: "1day", resolution: "1D", description: "1day", title: "1day" },
            { text: "1week", resolution: "1W", description: "1week", title: "1week" },
            { text: "1mon", resolution: "1M", description: "1mon" }
        ]
    });
    widget.onChartReady(function() {
        widget.chart().createStudy("Moving Average", false, false, [5], null, {
            "plot.color": "#589065"
        });
        widget.chart().createStudy("Moving Average", false, false, [10], null, {
            "plot.color": "#84AAD5"
        });
        widget.subscribe('toggle_sidebar',(flag)=>{
            //  console.log(args);

        });
    });
}
