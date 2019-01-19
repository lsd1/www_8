class ScrollerProfitLogs extends eui.ItemRenderer{
	private scrollerProfitLogs:eui.Scroller;
	
	//组控件
	// private list_group:eui.Group = new eui.Group();
	//宣传图
	// private content_img:eui.Component;
	private transactionArr:any[];
	
	private list:eui.List = new eui.List();
	//0:数据加载完成；1：需要加载更多；-1：没有更多
	public is_need_more = 0;
	public lastId:number = 0;
	//语言包
	private langData:any;
	public constructor(logs, lastId) {
		super();
		this.skinName = 'resource/garden_skin/miner/ScrollerProfitLogs.exml';
		this.langData = Main.Shared().lang_config;
		this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.lastId = lastId;
		this.transactionArr = logs;
		this.list.itemRenderer = RecordsIncomeList;
		this.list.dataProvider = new eui.ArrayCollection(this.transactionArr);
		this.scrollerProfitLogs.viewport = this.list;
		this.cacheAsBitmap = false;
		//获取更多
		this.scrollerProfitLogs.addEventListener(eui.UIEvent.CHANGE,this.moveHandler,this);
		this.scrollerProfitLogs.addEventListener(eui.UIEvent.CHANGE_END,this.outHandler,this);
	}
	//获取更多
	public moveHandler(e:eui.UIEvent){
		if(this.scrollerProfitLogs.viewport.scrollV > (this.scrollerProfitLogs.viewport.contentHeight - this.scrollerProfitLogs.viewport.height) + 40){  
			if (this.is_need_more > -1) {
				this.is_need_more = 1;
			} else {
				Records.Shared().tips.showTips(this.langData.scrollerMyBuyHistoryTs.no_more);
			}
        }  
	}

	public outHandler(e:eui.UIEvent){
		if(this.is_need_more > 0){
			this.is_need_more = 0;
			this.loreMore();
		}
	}
	//加载更多
	private loreMore(){
		Records.Shared().wait.show();
		//实例化一个参数对象。
		var params = new Params('miner/wallet/profit_logs');
		//合并参数
		var paramsData = params.mergeDataByJsonStr({lastId:this.lastId});
		// //ws发送信息
		Working.Shared().ws.sendData({
            data:paramsData,
            receiveCallBack:(res)=>{
                //请求道具或者工具信息
                if(res.code == 0) {
					var dataLogs = res.data.logs;
					if(dataLogs.length != 0) {
						for(var i in dataLogs) {
							this.transactionArr.push(dataLogs[i]);
						}
						this.lastId = dataLogs[dataLogs.length -1].id;
					}else {
						Records.Shared().tips.showTips(this.langData.scrollerMyBuyHistoryTs.no_more);
						this.is_need_more = -1;
					}
                }else {
					Records.Shared().tips.showTips(res.msg);
				}
				Records.Shared().wait.hide();
            }
        });
	}

}