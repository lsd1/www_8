class NewsList extends eui.ItemRenderer{
	
    //一天动态列表
    private dynamic_list:eui.Group;
	//日期
	private date:eui.Label;
	//时间
	private time:eui.Label;

	private friend_list:eui.Group;
	//头像控件
	private friend_head:eui.Group;
	//用户头像
	private new_friend_head:eui.Image;
	//用户名称
	private username:eui.Label;
	//用户等级
	private treeLevel:eui.Label;
	//描述
	private content:eui.Label;
	//状态图标
	private status_img:eui.Image;
	
	public uid:number;

	//自定义的 ItemRenderer
	public constructor() {
		super();
		this.skinName = 'resource/garden_skin/wutong/NewsList.exml';
		//this.data = Main.Shared().lang_config;
		this.cacheAsBitmap = true;
		this.friend_list.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onListTap,this);
	}


	private onListTap(e:egret.TouchEvent){
		Index.Shared().parent.addChild(new OtherGarden(this.uid));
		Index.Shared().parent.removeChild(Index.Shared());
	}

	protected dataChanged():void{
        //数据改变时，会自动调用 dataChanged 这个方法
		this.uid = this.data.uid;
		switch(this.data.curType){
			case 1:
				this.status_img.source = 'wutong_json.come';
				Common.Shared().createCircleMask(78, 78, this.data.avatar,null,null,true).then((newList:any)=>{
					this.friend_head.addChild(newList);
					this.friend_head.setChildIndex(this.status_img, -1);
				});
			break;
			case 2:
				this.status_img.source = 'wutong_json.water_1';
				Common.Shared().createCircleMask(78, 78, this.data.avatar,null,null,true).then((newList:any)=>{
					this.friend_head.addChild(newList);
					this.friend_head.setChildIndex(this.status_img, -1);
				});
			break;
			case 3:
				this.status_img.source = 'wutong_json.pick';	
				Common.Shared().createCircleMask(78, 78, this.data.avatar,null,null,true).then((newList:any)=>{
					this.friend_head.addChild(newList);
					this.friend_head.setChildIndex(this.status_img, -1);
				});		
			break;
		}
		if(this.data.content.length > 10) {
			let t = Common.Shared().getChar(this.data.content, 8);
			this.content.text = t + "...";
		}else {
			this.content.text = this.data.content;
		}
		this.username.text = this.data.userNote ? this.data.userNote : this.data.username;
		if(this.username.text.length > 8) {
			let t = Common.Shared().getChar(this.username.text, 8);
			this.username.text = t + "...";
		}else {
			this.username.text = this.username.text;
		}
		this.treeLevel.text = 'LV.' + this.data.treeLevel;
		this.time.text = this.data.time;
		this.date.text = this.data.date;
    }
}