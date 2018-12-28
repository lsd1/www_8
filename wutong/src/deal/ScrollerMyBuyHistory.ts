class ScrollerMyBuyHistory extends eui.Scroller{
	public static shared:ScrollerMyBuyHistory;
	public static Shared(tradeList:any, lastId:number){
		if(!this.shared){
			this.shared = new ScrollerMyBuyHistory(tradeList, lastId);
		}
		return this.shared;
	}


	//大组件
	private scroller_group:eui.Scroller;
	private transactionArr:any[];
	private list:eui.List = new eui.List();

	//0:数据加载完成；1：需要加载更多；-1：没有更多
	public is_need_more = 0;
	public lastId:number = 0;
	//语言包
	private langData:any;

	public constructor(tradeList:any, lastId:number) {
		super();
		this.skinName = "resource/garden_skin/deal/ScrollerMyBuyHistory.exml";
		this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.lastId = lastId;
		this.langData = Main.Shared().lang_config;
		this.list.itemRenderer = MyBuyHistoryList;
		this.transactionArr = tradeList;
		this.list.dataProvider = new eui.ArrayCollection(this.transactionArr);
		this.scroller_group.viewport = this.list;
		this.cacheAsBitmap = false;
		//获取更多
		this.scroller_group.addEventListener(eui.UIEvent.CHANGE,this.moveHandler,this);
		this.scroller_group.addEventListener(eui.UIEvent.CHANGE_END,this.outHandler,this);
	}

	
	public moveHandler(e:eui.UIEvent){
		if(this.scroller_group.viewport.scrollV > (this.scroller_group.viewport.contentHeight - this.scroller_group.viewport.height) + 40){  
			if (this.is_need_more > -1) {
				this.is_need_more = 1;
			} else {
				MyTransaction.Shared().tips.showTips(this.langData.scrollerMyBuyHistoryTs.no_more);
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
		MyTransaction.Shared().wait.show();
		var httpReq = new HttpReq();
		var url = 'v1.1/bird/trade/buy_list';
		httpReq.GET({
			url:url,
			data:{"lastId":this.lastId},
			success:(res:any)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					var buyList = res.data.buyList;
					if(buyList.length > 0 ){
						for(let i = 0; i<buyList.length; i++){
							this.transactionArr.push(buyList[i]);
						}
						this.lastId = buyList[buyList.length - 1].id;
					}else{
						MyTransaction.Shared().tips.showTips(this.langData.scrollerMyBuyHistoryTs.no_more);
						this.is_need_more = -1;
					}
				}else{
					MyTransaction.Shared().tips.showTips(res.msg);
				}
				MyTransaction.Shared().wait.hide();
			},
			error:()=>{
				MyTransaction.Shared().wait.hide();
				MyTransaction.Shared().tips.showTips(this.langData.scrollerMyBuyHistoryTs.network_error);
			}
		});
	}
}