class BirthTip extends eui.ItemRenderer{
	public constructor() {
		super();
		this.skinName = "resource/garden_skin/auction/BirthTip.exml";
		this.data = Main.Shared().lang_config;
		this.cacheAsBitmap = true;
	}
}