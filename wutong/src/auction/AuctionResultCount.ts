class AuctionResultCount extends eui.ItemRenderer{
	private resultDate:eui.Label;
	private count:eui.Group;
	private time:any;
	private group_result:eui.Group
	public constructor(time:number, date:any) {
		super();
		this.skinName = "resource/garden_skin/auction/AuctionResultCount.exml";
        this.data = Main.Shared().lang_config;
		this.cacheAsBitmap = true;
		this.y = 340;
		this.time = time;
		this.resultDate.text = date;
		if(Creation.Shared().prevList.length > 0){
			this.group_result.visible = true;
		}else{
			this.group_result.visible = false;			
		}
		var t = setInterval(()=>{
			if(this.time >= 0){
				this.time --;
				this.setTime(Common.Shared().secondToTime(this.time));
			}else{
				clearInterval(t);
			}
		}, 900);
	}

	public setTime(sec){
		var c = 0;
		this.count.$children.forEach((a:any,b)=>{
			if(b > 5){
				a.text = sec[c];
				c++;
			}
		});
	}
}