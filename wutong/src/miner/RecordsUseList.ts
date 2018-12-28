class RecordsUseList extends eui.ItemRenderer{
	//日期
	private the_timer:eui.Group;
	private	txt_dayTime:eui.Label;
	//事件
	private the_content:eui.Group;
	private txt_name:eui.Label;
	private txt_timer:eui.Label;


	public constructor() {
		super();
		this.skinName = "resource/garden_skin/miner/RecordsUseList.exml";
	}
	protected dataChanged():void{
		//数据改变时会自动调用 dataChanged 这个方法
		if(this.data.id) {
			this.the_timer.visible = false;
			this.the_content.visible = true;
			this.txt_name.text = this.data.toolName + 'x' + this.data.num;
			this.txt_timer.text = this.data.datetime;
		}else {
			this.the_timer.visible = true;
			this.the_content.visible = false;
			this.txt_dayTime.text = this.data;
		}
	}
}