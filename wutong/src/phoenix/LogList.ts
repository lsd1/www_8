class LogList extends eui.ItemRenderer{
	private log_content:eui.Group;
	public constructor() {
		super();
		this.skinName = "resource/garden_skin/phoenix/LogList.exml";
	}
	protected dataChanged(){
		var content:any = Common.Shared().getITextElement(this.data.content, 480, 30, 25, 182, 16);
		if(content.height > 25){
			this.height = 120;
			content.y = 50;
		}else{
			this.height = 62;			
		}
		Detail.Shared().log_height += this.height;
		Detail.Shared().group_log.height =  Detail.Shared().log_height;
		this.log_content.addChild(content);
	}
}