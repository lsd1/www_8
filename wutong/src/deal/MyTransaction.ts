class MyTransaction extends eui.ItemRenderer{
	private static shared:MyTransaction;
	public static Shared() {
		if(this.shared == null){
			this.shared = new MyTransaction();
		}
		return this.shared;
	}

	//大控件
	private myTransaction:eui.Group;
	//导航栏
	private auc_nav:eui.Group;
	private shelf_detail:eui.Label;
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
	private swap:eui.Group;
	//我的拍卖
	private my_auc:eui.Group;
	private empty:Empty = new Empty;
	//listId
	private listId:number;
	//下架提示
	private point:eui.Group;
	private btn_dete:eui.Group;
	private btn_cancel:eui.Group;

	public bidMoney_scroller:any;
	public shelfMoney_scroller:any;
	public tips:Tips;
	public wait:Wait;

	
	public constructor() {
		super();
		this.skinName = "resource/garden_skin/deal/MyTransaction.exml";
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
		//上架记录
		this.shelf_money.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onShelfShow,this);
		//交易所
		this.swap.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ShowSwap,this);
		//上架详情
		this.shelf_detail.addEventListener(egret.TouchEvent.TOUCH_TAP,this.shelfDetail,this);
		//取消下架
		this.btn_cancel.addEventListener(egret.TouchEvent.TOUCH_TAP,this.hidePointTip,this);
		//确认下架
		this.btn_dete.addEventListener(egret.TouchEvent.TOUCH_TAP,this.detailPointTips,this);


		//返回主界面按钮
		this.btn_go_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goBackIndex,this);
	}
	//返回主界面按钮
	private goBackIndex() {
		this.parent.addChild(Index.Shared());
		this.parent.removeChild(this);
	}
	//交易所
	private ShowSwap() {
		this.parent.addChild(Transaction.Shared());
		Transaction.Shared().onTransactionLists({});
		this.parent.removeChild(this);
	}
	//上架详情
	private shelfDetail() {
		this.parent.addChild(ShelfDetail.Shared());
		ShelfDetail.Shared().onShowAucDeta();
		this.parent.removeChild(this);
	}
	//下架提示
	public showPointTip(listId) {
		this.point.visible = true;
		this.listId = listId;

	}
	//关闭下架
	private hidePointTip() {
		this.point.visible = false;
	}
	//确定下架
	public detailPointTips(){
		this.point.visible = false;
		MyTransaction.Shared().wait.show();
		var httpReq  = new HttpReq();
		var url:string = "v1.1/bird/trade/off_sale";
		httpReq.POST({
			url:url,
			data:{tradeId:this.listId},
			success:(res) =>{
				var res = JSON.parse(res);
				if(res.code == 0) {
					MyTransaction.Shared().tips.showTips(this.data.myTransactionTs.succ_left);
					MyTransaction.Shared().onShelfShow();
				}else {
					MyTransaction.Shared().tips.showTips(res.msg);
				}
				MyTransaction.Shared().wait.hide();   
			},
			error:(error) =>{
				MyTransaction.Shared().wait.hide();                   
				MyTransaction.Shared().tips.showTips(this.data.myTransactionTs.network_error);
			}
		});
	}



	//购买记录
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
		MyTransaction.Shared().wait.show();
		var httpReq  = new HttpReq();
		var url:string = "v1.1/bird/trade/buy_list";
		httpReq.GET({
			url:url,
			data:{},
			success:(res) =>{
				var res = JSON.parse(res);
				if(res.code == 0) {
					var buyList = res.data.buyList;
					if(buyList.length >0) {
						this.bid_scroller = new ScrollerMyBuyHistory(buyList, buyList[buyList.length - 1].id);
						this.list_group.addChild(this.bid_scroller);
					}else {
						this.empty.onShowEmpty();
						this.empty.empty_text.text = this.data.myTransactionTs.no_pay;
						this.empty.horizontalCenter = 0;
						this.list_group.addChild(this.empty);
					}
				}else {
					MyTransaction.Shared().tips.showTips(res.msg);
				}
				MyTransaction.Shared().wait.hide();   
			},
			error:(error) =>{
				MyTransaction.Shared().wait.hide();                   
				MyTransaction.Shared().tips.showTips(this.data.myTransactionTs.network_error);
			}
		});
	}
	//上架记录
	private onShelfShow() {
		if(this.list_group.contains(this.bid_scroller)) {
			this.list_group.removeChild(this.bid_scroller);
		}
		if(this.list_group.contains(this.shelf_scroller)) {
			this.list_group.removeChild(this.shelf_scroller);
		}
		if(this.list_group.contains(this.empty)) {
			this.list_group.removeChild(this.empty);
		}
		this.shelf_one.visible = true;
		this.bid_one.visible = false;
		MyTransaction.Shared().wait.show();
		var httpReq  = new HttpReq();
		var url:string = "v1.1/bird/trade/sell_list";
		httpReq.GET({
			url:url,
			data:{},
			success:(res) =>{
				var res = JSON.parse(res);
				if(res.code == 0) {
					var sellList = res.data.sellList;
					if(sellList.length >0) {
						this.shelf_scroller = new ScrollerMyShelfHistory(sellList, sellList[sellList.length -1].id);
						this.list_group.addChild(this.shelf_scroller);
					}else {
						this.empty.onShowEmpty();
						this.empty.empty_text.text = this.data.myTransactionTs.no_shelves;
						this.empty.horizontalCenter = 0;
						this.list_group.addChild(this.empty);
					}
				}else {
					MyTransaction.Shared().tips.showTips(res.msg);
				}
				MyTransaction.Shared().wait.hide();   
			},
			error:(error) =>{
				MyTransaction.Shared().wait.hide();                   
				MyTransaction.Shared().tips.showTips(this.data.myTransactionTs.network_error);
			}
		});
	}

}