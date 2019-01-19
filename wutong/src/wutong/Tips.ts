class Tips extends eui.ItemRenderer{
	//全剧这遮罩
	private full_mask:eui.Rect;
	//tips面板组
	private group_tips:eui.Group;
	//提示内容
	private tips_text:eui.Label;
	//关闭按钮
	private tips_close:eui.Group;

	public constructor() {
		super();
		this.right = 0;
		this.left = 0;
		this.top = 0;
		this.bottom = 0;
		this.data = Main.Shared().lang_config;
		this.skinName = "resource/garden_skin/wutong/Tips.exml";
		this.tips_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTipsCloseTap, this);
	}

	//点击确定关闭提示框
	private onTipsCloseTap(e:egret.TouchEvent){
		this.closeTips();
	}

	//打开提示框
	public showTips(tips:any){
		this.parent.setChildIndex(this, -1);		
		this.full_mask.visible = true;
		this.tips_text.text = tips;
		this.group_tips.visible = true;
	}

	//关闭提示框
	public closeTips(){
		this.full_mask.visible = false;
		this.tips_text.text = '';
		this.group_tips.visible = false;
	}
}