class Empty extends eui.ItemRenderer{
	//大控件
	public empty:eui.Group;
	//文字
	public empty_text:eui.Label;

	public constructor() {
		super();
		this.skinName = "resource/garden_skin/wutong/Empty.exml";
		this.data = Main.Shared().lang_config;
	}
	//显示文本
	public onShowEmpty() {
		this.empty.visible = true;
	}
	//隐藏文本
	public onHiddenEmpty() {
		this.empty.visible = false;
	}
}