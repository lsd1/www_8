class MyAuction extends eui.ItemRenderer{
	private static shared:MyAuction;
	public static Shared() {
		if(this.shared == null){
			this.shared = new MyAuction();
		}
		return this.shared;
	}

	//大控件
	private myAuction:eui.Group;
	//导航栏
	private auc_nav:eui.Group;
	//出价记录
	private bid_money:eui.Group;
	private bid_one:eui.Image;
	private bid_scroller:any;
	//上架记录
	private shelf_money:eui.Group;
	private shelf_one:eui.Image;
	private shelf_scroller:any;
	//列表盒子
	private list_group:eui.Group;
	//返回主界面按钮
	private btn_go_back:eui.Group;
	//创世现世
	private cre:eui.Group;
	
	private empty:Empty = new Empty;

	public bidMoney_scroller:any;
	public shelfMoney_scroller:any;
	public tips:Tips;
	public wait:Wait;
	
	public constructor() {
		super();
		this.skinName = "resource/garden_skin/auction/MyAuction.exml";
		this.data = Main.Shared().lang_config;
		this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.tips = new Tips();
		this.wait = new Wait();
		this.addChild(this.tips);		
		this.addChild(this.wait);
		//出价记录
		this.bid_money.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBidMoneyList,this);
		//创世现世
		this.cre.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goCreInter,this);
		//返回主界面按钮
		this.btn_go_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goBackIndex,this);
	}
	//返回主界面按钮
	private goBackIndex() {
		this.parent.addChild(Index.Shared());
		this.parent.removeChild(this);
	}
	//创世现世
	private goCreInter() {
		this.parent.addChild(Creation.Shared());
		Creation.Shared().onShowCreation();
		this.parent.removeChild(this);
	}

	//出价记录
	public onBidMoneyList() {
		if(this.list_group.contains(this.bid_scroller)) {
			this.list_group.removeChild(this.bid_scroller);
		}
		if(this.list_group.contains(this.shelf_scroller)) {
			this.list_group.removeChild(this.shelf_scroller);
		}
		if(this.list_group.contains(this.empty)) {
			this.list_group.removeChild(this.empty);
		}
		this.shelf_one.visible = false;
		this.bid_one.visible = true;
		// this.bidMoney_scroller = new ScrollerBidMoney;
		// this.list_group.addChild(this.bidMoney_scroller);
		MyAuction.Shared().wait.show();
		var httpReq  = new HttpReq();
		var url:string = "v1.1/bird/auction/member/bid_list";
		httpReq.GET({
			url:url,
			data:{},
			success:(res) =>{
				var res = JSON.parse(res);
				if(res.code == 0) {
					var bidList = res.data.bidList;
					var lastTime = res.data.lastTime;
					if(bidList.length >0) {
						this.bid_scroller = new ScrollerBidMoney(bidList, lastTime);
						this.list_group.addChild(this.bid_scroller);
					}else {
						this.empty.onShowEmpty();
						this.empty.empty_text.text = this.data.myAuctionTs.no_bid;
						this.empty.horizontalCenter = 0;
						this.list_group.addChild(this.empty);
					}
				}else {
					MyAuction.Shared().tips.showTips(res.msg);
				}
				MyAuction.Shared().wait.hide();   
			},
			error:(error) =>{
				MyAuction.Shared().wait.hide();                   
				MyAuction.Shared().tips.showTips(this.data.myAuctionTs.network_error);
			}
		});
	}
}