class Loading extends eui.ItemRenderer  {
	private static share:Loading = null;
	public static Shared(){
		if(this.share == null){
			this.share = new Loading();
		}
		return this.share;
	}

	//进度条
	public prog_bar:eui.Image;
	//百分比
	public percent:eui.Label;

	public constructor() {
		super();
		this.skinName = "resource/garden_skin/wutong/Loading.exml";
		this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;

	}
}