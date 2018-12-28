class ShelfDetail extends eui.ItemRenderer{
	private static shared:ShelfDetail;
	public static Shared() {
		if(this.shared == null){
			this.shared = new ShelfDetail();
		}
		return this.shared;
	}

	//大控件
	private auctionDeta:eui.Group;
	//list容器
	private the_group:eui.Group;
	//scroller组件
	private the_scroller:eui.Scroller;
	//头部
	private auc_top:eui.Group;
	//头部按钮
	private btn_go_back:eui.Group;
	//脚部
	private auc_bottom:eui.Group;

	//弹框
	private auc_info_tips:eui.Group;
	private btn_close:eui.Image;
	public tip_txt:eui.Label;
	private btn_dete:eui.Group;
	private full_mask:eui.Group;

	public tips:Tips = new Tips();
	public wait:Wait = new Wait();
	public constructor() {
		super();
		this.skinName = "resource/garden_skin/deal/ShelfDetail.exml";
		this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;
		// this.cacheAsBitmap = true;
		this.addChild(this.tips);
		this.addChild(this.wait);
		//语言包
		this.data = Main.Shared().lang_config;
		//返回主界面按钮
		this.btn_go_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goBackMyAuc,this);

		//弹框关闭
		this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseTip,this);
		this.btn_dete.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseTip,this);
	}


	//关闭弹框
	private onCloseTip() {
		this.auc_info_tips.visible = false;
		this.tip_txt.text = '';
		this.full_mask.visible = false;
	}
	// //返回按钮
	// private onBtnReturn() {
	// 	ShelfDetail.Shared().onShowAucDeta();
	// 	this.parent.addChild(ShelfDetail.Shared());
	// 	this.parent.removeChild(this);
	// }
	//开启弹框
	public onShowTips() {
		this.auc_info_tips.visible = true;
		this.full_mask.visible = true;
	}

	//返回主界面按钮
	private goBackMyAuc() {
		this.parent.addChild(MyTransaction.Shared());
		MyTransaction.Shared().onBidMoneyList();
		this.parent.removeChild(this);
	}
	//可拍卖物品显示
	public onShowAucDeta() {
		if(this.the_group.contains(this.the_scroller)) {
			this.the_group.removeChild(this.the_scroller);
		}
		ShelfDetail.Shared().wait.show();
		var httpReq  = new HttpReq();
		var url:string = "v1.1/bird/trade/package_list";
		httpReq.GET({
			url:url,
			data:{},
			success:(res) =>{
				var res = JSON.parse(res);
				if(res.code == 0) {
					var packageList = res.data.packageList;
					if(packageList.length > 0) {
						this.the_scroller = new ScrollerShelfDetail(packageList, packageList[packageList.length - 1].id);
						this.the_group.addChild(this.the_scroller);
					}
				}else {
					ShelfDetail.Shared().tips.showTips(res.msg);
				}
				ShelfDetail.Shared().wait.hide();   
			},
			error:(error) =>{
				ShelfDetail.Shared().wait.hide();                   
				ShelfDetail.Shared().tips.showTips(this.data.shelfDetailTs.network_error);
			}
		});
	}
}