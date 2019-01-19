class Winding extends eui.ItemRenderer{
	private static shared:Winding;
	public static Shared() {
		if(this.shared == null){
			this.shared = new Winding();
		}
		return this.shared;
	}
	//上链组
	private winding:eui.Group;
	private winding_num:eui.EditableText;
	private btn_push_winding:eui.Group;
	private the_1:eui.Label;
	private the_2:eui.Label;
	private wind_close:eui.Image;
	//确定上链地址
	private confirm_wind:eui.Group;
	private btn_close_confirm:eui.Image;
	private the_wallet:eui.Label;
	private btn_confirm:eui.Group;
	//等待开放组
	private wait_wind:eui.Group;
	private btn_close_wait:eui.Image;
	private btn_success:eui.Group;

	public constructor() {
		super();
		this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.skinName = 'resource/garden_skin/miner/Winding.exml';
		this.data = Main.Shared().lang_config;
		this.winding_num.restrict = "0-9.";
		this.winding_num.inputType = egret.TextFieldInputType.TEL;
		// 输入事件监听
		this.winding_num.addEventListener(egret.TouchEvent.CHANGE,this.digits,this);
		//关闭事件
		this.wind_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeWinding,this);
		this.btn_close_wait.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeWinding,this);
		this.btn_success.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeWinding,this);
		this.btn_close_confirm.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeConfirm,this);
		//提交上链数
		this.btn_push_winding.addEventListener(egret.TouchEvent.TOUCH_TAP,this.confirmTheWallet,this);

	}
	//上链位数限制
	private digits(e:egret.TouchEvent) {
		var theText = this.winding_num.text;
		if(theText == '' || Number(theText) <= 0) {
			theText = '';
		}
		var y = String(theText).indexOf(".") + 1;//获取小数点的位置
		var count = String(theText).length - y;//获取小数点后的个数
		if(count >= 5) {
			var theTextNum = Number(this.winding_num.text);
			this.winding_num.text = String(Math.floor(theTextNum * 100000) / 100000);
		}
	}
	// 关闭按钮
	private closeWinding() {
		this.winding.visible = false;
		this.wait_wind.visible = false;
		this.winding_num.text = '';
		Records.Shared().full_mask.visible = false;
	}
	//关闭确认页面
	private closeConfirm() {
		this.confirm_wind.visible = false;
		this.winding.visible = false;
		this.the_wallet.text = '';
		Records.Shared().full_mask.visible = false;
	}
	//显示上链
	public showWinding(thedata:any) {
		this.winding.visible = true;
		this.the_1.text = this.data.winding.lowest + thedata.coChainMinVSCNum;
		this.the_2.text = this.data.winding.chain + thedata.walletCoChainTax  + this.data.winding.aVSC;
		this.wait_wind.visible = false;
		Records.Shared().full_mask.visible = true;
	}
	//跳转确认上链地址
	private confirmTheWallet() {
		if(Number(this.winding_num.text) < 100) {
			Records.Shared().tips.showTips(this.data.winding.number_of_windings);
		}else {
			this.winding.visible = false;
			this.confirm_wind.visible = true;
			this.the_wallet.text = this.data.winding.wallet_address + ScrollerRecordsIncome.Shared().wallet + this.data.winding.confirm_it;
		}
	}
	//显示等待
	public showWaitWind() {
		this.wait_wind.visible = true;
		this.winding.visible = false;
		Records.Shared().full_mask.visible = true;
	}
}