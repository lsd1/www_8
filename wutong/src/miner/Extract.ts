class Extract extends eui.ItemRenderer{
	private static shared:Extract;
	public static Shared() {
		if(this.shared == null){
			this.shared = new Extract();
		}
		return this.shared;
	}
	private btn_go_back:eui.Group;//返回键
	private num_input:eui.EditableText;//输入框


	public constructor() {
		super();
		this.skinName = "resource/garden_skin/miner/Extract.exml";
		this.data = Main.Shared().lang_config;
		this.num_input.inputType = egret.TextFieldInputType.TEL;
		this.num_input.restrict = "0-9";
		//返回键
		this.btn_go_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.go_back,this);
	}


	//返回键
	private go_back() {
		if(!this.parent.contains(Records.Shared())) {
			this.parent.addChild(Records.Shared());
		}
		this.parent.removeChild(this);
		Records.Shared().onShowIncome();
		
	}
}