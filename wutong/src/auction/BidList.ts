class BidList extends eui.ItemRenderer{

	private price_text:eui.Label;
	private bidder_text:eui.Label;
	private auc_time:eui.Label;
	private list:eui.List;
	public constructor() {
		super();
		this.skinName = "resource/garden_skin/auction/BidList.exml";
		this.cacheAsBitmap = true;
	}
	protected dataChanged():void{
		//数据改变时，会自动调用 dataChanged 这个方法
		this.price_text.text = this.data.price;
		this.bidder_text.text = this.data.username;
		this.auc_time.text = this.data.datetime;
	}
}