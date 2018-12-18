import axios from 'axios';
import { stringify } from 'qs';

export  const WebsockFeed = function(url, coin, stompClient) {
    this._datafeedURL = url;
    this.coin = coin;
    this.stompClient = stompClient;
    this.lastBar = null;
    this.subscribe = true;
};


WebsockFeed.prototype.onReady = function(callback) {
    var config = {};
    config.exchanges = [];
    config.supported_resolutions = ["1", "5", "15", "30", "60", "240", "1D", "1W", "1M"];
    config.supports_group_request = false;
    config.supports_marks = false;
    config.supports_search = false;
    config.supports_time = true;
    config.supports_timescale_marks = false;
    const doc=document.getElementById(window.tvWidget.id).contentWindow.document;
    doc.addEventListener("click",function(event){

         const tar=event.target;
        if(tar.nodeName.toUpperCase()==='A'&&tar.classList.contains('date-range-preset-btn')){
            const list=Array.from(tar.parentNode.querySelectorAll('.date-range-preset-btn'));
            list.map(item=>{
                  if(item.textContent===tar.textContent){
                      item.classList.add('active');
                  }else{
                    item.classList.remove('active');
                  }

            });


            window.tvWidget.chart().setChartType(tar.textContent==="分时"?3:1);

        }

    });
    setTimeout(function() {
        callback(config);
    }, 0);
};

WebsockFeed.prototype.subscribeBars = function(symbolInfo, resolution, onRealtimeCallback, listenerGUID, onResetCacheNeededCallback) {
    var that = this;
    this.stompClient.subscribe('/topic/market/trade/' + symbolInfo.name, function(msg) {

        var resp = JSON.parse(msg.body);
        if (that.lastBar != null && resp.length > 0) {
            var price = resp[resp.length - 1].price;
            that.lastBar.close = price;
            if (price > that.lastBar.high) {
                that.lastBar.high = price;
            }
            if (price < that.lastBar.low) {
                that.lastBar.low = price;
            }
            onRealtimeCallback(that.lastBar);
        }
    });
    this.stompClient.subscribe('/topic/market/kline/' + symbolInfo.name, function(msg) {
        var resp = JSON.parse(msg.body);
        that.lastBar = { time: resp.time, open: resp.openPrice, high: resp.highestPrice, low: resp.lowestPrice, close: resp.closePrice, volume: resp.volume };
        onRealtimeCallback(that.lastBar);
    });
};

WebsockFeed.prototype.unsubscribeBars = function(subscriberUID) {
    this.subscribe = false;
};

WebsockFeed.prototype.resolveSymbol = function(symbolName, onSymbolResolvedCallback, onResolveErrorCallback) {
    // var data = {"name":this.coin.symbol,"exchange-traded":"","exchange-listed":"","minmov":1,"minmov2":0,"pointvalue":1,"has_intraday":true,"has_no_volume":false,"description":this.coin.symbol,"type":"bitcoin","session":"24x7","supported_resolutions":["1","5","15","30","60","240","1D","1W","1M"],"pricescale":500,"ticker":"","timezone":"Asia/Shanghai"};
    var data = { "name": this.coin.symbol, "exchange-traded": "", "exchange-listed": "", "minmov": 1, "volumescale": 10000, "has_daily": true, "has_weekly_and_monthly": true, "has_intraday": true, "description": this.coin.symbol, "type": "bitcoin", "session": "24x7", "supported_resolutions": ["1", "5", "15", "30", "60", "240", "1D", "1W", "1M"], "pricescale": 10000, "ticker": "", "timezone": "Asia/Shanghai" };
    setTimeout(function() {
        onSymbolResolvedCallback(data);
    }, 0);
};

WebsockFeed.prototype._send = function(url, params) {

    return axios.get(this._datafeedURL + `/history?${stringify(params)}`).then((response)=>response.body);
};

WebsockFeed.prototype.getBars = function(symbolInfo, resolution, from, to, onHistoryCallback, onErrorCallback, firstDataRequest) {
    var bars = [];
    var that = this;
    this._send(this._datafeedURL + '/history', {
            symbol: symbolInfo.name,
            from: from * 1000,
            to: firstDataRequest ? new Date().getTime() : to * 1000,
            resolution: resolution
        })
        .then(function(response) {


            var data = response;
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                bars.push({ time: item[0], open: item[1], high: item[2], low: item[3], close: item[4], volume: item[5] })
            }
            that.lastBar = bars.length > 0 ? bars[bars.length - 1] : null;
            var noData = bars.length == 0;
        
            var retBars = onHistoryCallback(bars, { noData: noData });
        })
        .catch(function(reason) {
            onErrorCallback(reason);
        });
};
WebsockFeed.prototype.periodLengthSeconds = function(resolution, requiredPeriodsCount) {
    var daysCount = 0;
    if (resolution === 'D') {
        daysCount = requiredPeriodsCount;
    } else if (resolution === 'M') {
        daysCount = 31 * requiredPeriodsCount;
    } else if (resolution === 'W') {
        daysCount = 7 * requiredPeriodsCount;
    } else if (resolution === 'H') {
        daysCount = requiredPeriodsCount * resolution / 24;
    } else {
        daysCount = requiredPeriodsCount * resolution / (24 * 60);
    }

    return daysCount * 24 * 60 * 60;
};



