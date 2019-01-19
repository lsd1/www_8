class ScrollerShelfDetail extends eui.Scroller{
	private static shared:ScrollerShelfDetail;
	public static Shared(collection:any,lastId:number) {
		if(this.shared == null){
			this.shared = new ScrollerShelfDetail(collection, lastId);
		}
		return this.shared;
	}

	private scroller_auctionDeta:eui.Scroller;
	private list:eui.List = new eui.List();
	private collection:any[];
	//0:数据加载完成；1：需要加载更多；-1：没有更多
	public is_need_more = 0;
	public lastId:number = 0;
	//语言包
	private langData:any;
	
	
	public constructor(collection:any, lastId:number) {
		super();
		this.skinName = "resource/garden_skin/deal/ScrollerShelfDetail.exml";
		this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.lastId = lastId;
		this.langData = Main.Shared().lang_config;
		this.collection = collection; 
		this.list.itemRenderer = ShelfDetailList;
		this.scroller_auctionDeta.viewport = this.list;
		this.list.dataProvider = new eui.ArrayCollection(this.collection);
		this.cacheAsBitmap = false;
		//获取更多
		this.scroller_auctionDeta.addEventListener(eui.UIEvent.CHANGE,this.moveHandler,this);
		this.scroller_auctionDeta.addEventListener(eui.UIEvent.CHANGE_END,this.outHandler,this);
	}


		public moveHandler(e:eui.UIEvent){
		if(this.scroller_auctionDeta.viewport.scrollV > (this.scroller_auctionDeta.viewport.contentHeight - this.scroller_auctionDeta.viewport.height) + 40){  
			if (this.is_need_more > -1) {
				this.is_need_more = 1;
			} else {
				ShelfDetail.Shared().tips.showTips(this.langData.scrollerShelfDetailTs.no_more);
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
		ShelfDetail.Shared().wait.show();
		var httpReq = new HttpReq();
		var url = "v1.1/bird/trade/package_list";
		httpReq.GET({
			url:url,
			data:{"lastId":this.lastId},
			success:(res:any)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					var packageList = res.data.packageList;
					if(packageList.length > 0 ){
						for(let i = 0; i < packageList.length; i++){
							this.collection.push(packageList[i]);
						}
						this.lastId = packageList[packageList.length - 1].id;
					}else{
						ShelfDetail.Shared().tips.showTips(this.langData.scrollerShelfDetailTs.no_more);
						this.is_need_more = -1;
					}
				}else{
					ShelfDetail.Shared().tips.showTips(res.msg);
				}
				ShelfDetail.Shared().wait.hide();
			},
			error:()=>{
				ShelfDetail.Shared().wait.hide();
				ShelfDetail.Shared().tips.showTips(this.langData.scrollerShelfDetailTs.network_error);
			}
		});
	}


}