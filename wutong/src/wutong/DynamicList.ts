class DynamicList extends eui.ItemRenderer{
	//大控件
	private dyn_list:eui.Group;
	//日期
	private dyn_day:eui.Label;

	
	//一行动态控件
	private dyn_one:eui.Group;
	//描述
	private dyn_one_text:eui.Label;
	//时刻
	private dyn_one_time:eui.Label;

	public constructor() {
		super();
		this.skinName = "resource/garden_skin/wutong/DynamicList.exml";
	}

	protected dataChanged():void{
		this.height = 90;
		//数据改变时，会自动调用 dataChanged 这个方法
		this.dyn_one_text.text = this.data.content;
		this.dyn_one_time.text = this.data.time;
		this.dyn_day.text = this.data.date;	
		if(this.data.date == ''){
			this.height = 60;
		}				
	}
}