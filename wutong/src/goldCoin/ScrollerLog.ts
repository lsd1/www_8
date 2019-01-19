class ScrollerLog extends eui.Scroller {
    public static Shared(collection:any, log_last_id:number) {
        if(this.share == null){
            this.share = new ScrollerLog(collection, log_last_id);
        }
        return this.share;
    }

    private static share:ScrollerLog;
    private list:eui.List = new eui.List;
	private scroller_log:eui.Scroller;
	//0:数据加载完成；1：需要加载更多；-1：没有更多
	private is_need_more = 0;
	public collection:any[];
	public log_last_id:number = 0;
    private langData:any;

	public constructor (collection:any, log_last_id:number) {
        super();
        this.top = 0;
        this.left = 0;
        this.right = 0;
        this.bottom = 0;
        this.skinName = "resource/garden_skin/goldCoin/ScrollerLog.exml";
        this.langData = Main.Shared().lang_config;
        this.list.itemRenderer = GoldLogList;
		this.collection = collection;
		this.log_last_id = log_last_id;
		this.list.dataProvider = new eui.ArrayCollection(this.collection);
		this.scroller_log.viewport = this.list;
		this.scroller_log.addEventListener(eui.UIEvent.CHANGE, this.moveHandler, this);  
        this.scroller_log.addEventListener(eui.UIEvent.CHANGE_END, this.outHandler, this);  

    }
   
    public moveHandler(e:eui.UIEvent){
		if(this.scroller_log.viewport.scrollV > (this.scroller_log.viewport.contentHeight - this.scroller_log.viewport.height) + 40){  
			if (this.is_need_more > -1) {
				this.is_need_more = 1;  
			} else {
				Gold.Shared().tips.showTips(this.langData.scrollerEmailTs.no_more);
			}
        }  
	}

	public outHandler(e:eui.UIEvent){
		if(this.is_need_more > 0){
			this.is_need_more = 0;
			this.loreMore();
		}
	}

    //加载更多log信息
	private loreMore(){
		Gold.Shared().wait.show();
		var httpReq = new HttpReq();
		var url = 'v1.1/coin/show_logs';
		return httpReq.GET({
			url:url,
			data:{'lastId':this.log_last_id},
			success:(res:any)=>{
				var res = JSON.parse(res);
				if(res.code == 0){	
					var loglList = res.data.coinLogs;
					if(loglList.length > 0){
						for(let i = 0; i< loglList.length; i++){
							this.collection.push(loglList[i]);
							// Email.Shared().loglLists.push(loglList[i]);
						}
						this.log_last_id = loglList[loglList.length - 1].id;
					}else{
						Gold.Shared().tips.showTips(this.langData.scrollerEmailTs.no_more);
						this.is_need_more = -1;
					}
				}else{
					Gold.Shared().tips.showTips(res.msg);
				}	
				Gold.Shared().wait.hide();
			},
			error:()=>{
				Gold.Shared().wait.hide();
				Gold.Shared().tips.showTips(this.langData.scrollerEmailTs.network_error);
			}
		});     
	}
}
