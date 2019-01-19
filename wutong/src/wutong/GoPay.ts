class GoPay extends eui.ItemRenderer {
	public static share:GoPay;
	public static Shared() {
		if(this.share == null) {
			this.share = new GoPay();
		}
		return this.share;
	}
	

	public goPay:eui.Group;
	//关闭按钮
	private btn_close_goPay:eui.Image;
	//显示框
	private mgCoin:eui.Group;
	// 稍后按钮
	private btn_later_goPay:eui.Group;
	//前往购买按钮
	private btn_up_goPay:eui.Group;

	public constructor() {
		super();
		this.top = 0;
		this.right = 0;
		this.left = 0;
		this.bottom = 0;
		this.skinName = "resource/garden_skin/wutong/GoPayGB.exml";
		this.data = Main.Shared().lang_config;
		this.btn_close_goPay.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseGoPay,this);
		this.btn_later_goPay.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseGoPay,this);
		this.btn_up_goPay.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGoPayClick,this);
	}
	// 关闭按钮
	private onCloseGoPay() {
		this.goPay.visible = false;
		Index.Shared().full_mask.visible = false;
		UsePay.Shared().onShow();
	}

	// 弹出界面
	public onShowGoPay() {
		this.goPay.visible = true;
		UsePay.Shared().onHidden();
	}
	//跳转购买金币
	private onGoPayClick() {
		Common.Shared().setCookie('app_method', '{"type":"buyMgecoin","url":"' + localStorage.getItem('buyMgecoinUrl') + '}"', 30);
		setTimeout(()=>{
			PropsIntro.Shared().onShowProps();
		}, 5000);
	}

	//跳转关闭
	public onCloseAgain() {
		this.goPay.visible = false;
		
	}
	
}