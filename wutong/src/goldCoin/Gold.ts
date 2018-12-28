class Gold extends eui.ItemRenderer {
    private static share:Gold;

    public static Shared() {
        if(this.share == null){
            this.share = new Gold();
        }
        return this.share;
    }

    public goldAmount:eui.Label;
    public goldAmountVal:number = 0;
    public confirmExchange:eui.Group;
    public goBack:eui.Image;
    private langData:any;
    public goldLog:eui.Group;
    //暂无日志样式
    public empty:Empty = new Empty;
    private scroller_log:eui.Scroller;
    public tips:Tips = new Tips();
	public wait:Wait = new Wait();

    public constructor () {
        super();
        this.top = 0;
        this.left = 0;
        this.right = 0;
        this.bottom = 0;
        this.skinName = "resource/garden_skin/goldCoin/Gold.exml";
        this.data = Main.Shared().lang_config;
        this.addChild(this.tips);
		this.addChild(this.wait);
        this.confirmExchange.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onToExchange, this);
        this.goBack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGoBack, this);
    }
    
    public onShowGold(){
        if(this.goldLog.contains(this.scroller_log)) {
            this.goldLog.removeChild(this.scroller_log);
        }
        var httpReq = new HttpReq();
		var url = 'v1.1/coin/show_logs';
        this.wait.show();
		return httpReq.GET({
			url:url,
			data:{'lastId':0},
			success:(res:any)=>{
				var res = JSON.parse(res);
				if(res.code == 0){	
					var coinLogs = res.data.coinLogs;
                    this.goldAmount.text = res.data.coin;
                    this.goldAmountVal = res.data.coin;
					if(coinLogs.length > 0){
                        this.scroller_log = new ScrollerLog(coinLogs, coinLogs[coinLogs.length - 1].id);
                        this.goldLog.addChild(this.scroller_log);
                    }else {
                        this.empty.onShowEmpty();
                        this.empty.empty_text.text = this.data.goldCoin.no_log;
                        this.empty.horizontalCenter = '0';
                        this.empty.verticalCenter = '0';
                        this.goldLog.addChild(this.empty);
                    }
				}else{
					this.tips.showTips(res.msg);
				}	
                this.wait.hide();
			},
			error:()=>{
				this.wait.hide();
				this.tips.showTips(this.langData.scrollerEmailTs.network_error);
			}
		});     
    }

    private onToExchange(e:egret.TouchEvent){
        this.parent.addChild(Exchange.Shared());
		this.parent.removeChild(this);
        Exchange.Shared().onShowExchange();
    }

    // 关闭按钮
	private onGoBack() {
        this.parent.addChild(Index.Shared());
		this.parent.removeChild(this);
	}
    
}