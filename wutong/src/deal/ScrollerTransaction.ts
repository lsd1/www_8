class ScrollerTransaction extends eui.Scroller{
	public static shared:ScrollerTransaction;
	public static Shared(transactionList:any, lastId:number){
		if(!this.shared){
			this.shared = new ScrollerTransaction(transactionList, lastId);
		}
		return this.shared;
	}

	//大组件
	private scroller_transaction:eui.Scroller;
	private transactionArr:any[];
	private list:eui.List = new eui.List();
	//0:数据加载完成；1：需要加载更多；-1：没有更多
	public is_need_more = 0;
	public lastId:number = 0;
	//语言包
	private langData:any;

	public constructor(tradeList:any, lastId:number) {
		super();
		this.skinName = "resource/garden_skin/deal/ScrollerTransaction.exml";
		this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.langData = Main.Shared().lang_config;
		Transaction.Shared().theDataList.lastId = lastId;
		this.list.itemRenderer = TransactionList;
		this.transactionArr = tradeList;
		this.list.dataProvider = new eui.ArrayCollection(this.transactionArr);
		this.scroller_transaction.viewport = this.list;
		this.cacheAsBitmap = false;
		//获取更多
		this.scroller_transaction.addEventListener(eui.UIEvent.CHANGE,this.moveHandler,this);
		this.scroller_transaction.addEventListener(eui.UIEvent.CHANGE_END,this.outHandler,this);
	}


	public moveHandler(e:eui.UIEvent){
		if(this.scroller_transaction.viewport.scrollV > (this.scroller_transaction.viewport.contentHeight - this.scroller_transaction.viewport.height) + 40){  
			if (this.is_need_more > -1) {
				this.is_need_more = 1;
			} else {
				Transaction.Shared().tips.showTips(this.langData.scrollerTransactionTs.no_more);
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
		Transaction.Shared().wait.show();
		var httpReq = new HttpReq();
		var url = 'v1.1/bird/trade/trade_list';
		httpReq.GET({
			url:url,
			data:Transaction.Shared().theDataList,
			success:(res:any)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					var tradeList = res.data.tradeList;
					if(tradeList.length > 0 ){
						for(let i = 0; i<tradeList.length; i++){
							this.transactionArr.push(tradeList[i]);
						}
						Transaction.Shared().theDataList.lastId  = tradeList[tradeList.length - 1].id;
					}else{
						Transaction.Shared().tips.showTips(this.langData.scrollerTransactionTs.no_more);
						this.is_need_more = -1;
					}
				}else{
					Transaction.Shared().tips.showTips(res.msg);
				}
				Transaction.Shared().wait.hide();
			},
			error:()=>{
				Transaction.Shared().wait.hide();				
				Transaction.Shared().tips.showTips(this.langData.scrollerTransactionTs.work_error);
			}
		});
	}
}