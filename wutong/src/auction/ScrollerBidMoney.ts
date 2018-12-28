class ScrollerBidMoney extends eui.Scroller{
	private list:eui.List = new eui.List;
	private scroller_group:eui.Scroller;
	private bidList:any[];
	private list_group:eui.Group = new eui.Group;
	private is_need_more:number = 0;
	private lastTime:string;
	private langData:any;

	public constructor(bidList:any, lastTime) {
		super();
		this.skinName =  "resource/garden_skin/auction/ScrollerBidMoney.exml";
		this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.langData = Main.Shared().lang_config;
		this.list.itemRenderer = MyBidMoneyList;
		this.bidList = bidList;
		this.list.dataProvider = new eui.ArrayCollection(this.bidList);
		this.list_group.addChild(this.list);
		this.lastTime = lastTime;
		this.scroller_group.viewport = this.list_group;
		this.list.useVirtualLayout = false;
		this.scroller_group.addEventListener(eui.UIEvent.CHANGE, this.moveHandler, this);  
        this.scroller_group.addEventListener(eui.UIEvent.CHANGE_END, this.outHandler, this);  

	}

	public moveHandler(e:eui.UIEvent){
		if(this.scroller_group.viewport.scrollV > (this.scroller_group.viewport.contentHeight - this.scroller_group.viewport.height) + 40){  
			if (this.is_need_more > -1) {
				this.is_need_more = 1;
			} else {
				MyAuction.Shared().tips.showTips(this.langData.scrollerBidMoneyTs.no_more);
			}
        }  
	}

	public outHandler(e:eui.UIEvent){
		if(this.is_need_more > 0){
			this.is_need_more = 0;
			this.loreMore();
		}
	}

	//加载更多出价记录
	private loreMore(){
		MyAuction.Shared().wait.show();
		var httpReq = new HttpReq();
		var url = 'v1.1/bird/auction/member/bid_list';
		httpReq.GET({
			url:url,
			data:{"lastTime":this.lastTime},
			success:(res:any)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					var bidList = res.data.bidList;
					var lastTime = res.data.lastTime;
					if(bidList.length > 0 ){
						for(let i = 0; i<bidList.length; i++){
							this.bidList.push(bidList[i]);
						}
						this.lastTime = lastTime;
					}else{
						MyAuction.Shared().tips.showTips(this.langData.scrollerBidMoneyTs.no_more);
						this.is_need_more = -1;
					}
				}else{
					MyAuction.Shared().tips.showTips(res.msg);
				}
				MyAuction.Shared().wait.hide();
			},
			error:()=>{
				MyAuction.Shared().wait.hide();				
				MyAuction.Shared().tips.showTips(this.langData.scrollerBidMoneyTs.network_error);
			}
		});
	}
}