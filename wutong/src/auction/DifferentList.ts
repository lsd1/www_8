class DifferentList extends eui.ItemRenderer{
	
	public diffList:eui.Group;
	public diff_txt:eui.Label;
	public diff_cur:eui.Image;

	public constructor() {
		super();
		this.skinName = "resource/garden_skin/auction/DifferentList.exml";
	}
}