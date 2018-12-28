class ToolsIcon extends eui.ItemRenderer {
	 
	//道具控件
	public group_tools:eui.Group;
	//道具图片
	public icon_img:eui.Image;
	//道具个数
	public icon_num:eui.Label;

	public constructor() {
		super();
		this.skinName = "resource/garden_skin/wutong/ToolsIcon.exml";
		this.data = Main.Shared().lang_config;
	}
}