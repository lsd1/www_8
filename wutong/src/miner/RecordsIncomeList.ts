class RecordsIncomeList extends eui.ItemRenderer{
	private txt_name:eui.Label;
	private txt_timer:eui.Label;
	private txt_num:eui.Label;

	public constructor() {
		super();
		this.skinName = 'resource/garden_skin/miner/RecordsIncomeList.exml';

	}
	protected dataChanged(){
		this.txt_num.text = this.data.changeProfit;
		this.txt_name.text = this.data.content;
		this.txt_timer.text = this.data.datetime;
	}
}