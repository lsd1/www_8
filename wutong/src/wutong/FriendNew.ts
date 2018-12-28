class FriendNew extends eui.ItemRenderer{
	//控件
	private friend_new:eui.Group;
	//三种动态
	private status_img:eui.Image;
	private new_sun:eui.Image;
	private new_pick:eui.Image;
	private more_text:eui.Label;
	private logInfo:any;

	public constructor(logInfo:any, x?:number, y?:number) {
		super();
		this.skinName = "resource/garden_skin/wutong/FriendNew.exml";
		this.data = Main.Shared().lang_config;
		this.cacheAsBitmap = true;
		this.logInfo = logInfo;
	
		this.x = x ? x : 0;
		this.y = y ? y : 0;
	}

	public async addGroup(){
		var newList:any;
		switch(this.logInfo.curType){
			case 1:
				this.status_img.source = 'wutong_json.come';
				newList = await Common.Shared().createCircleMask(78, 78, this.logInfo.avatar, null, null, true);
				this.friend_new.addChild(newList);
				this.friend_new.setChildIndex(this.status_img, -1);
				this.friend_new.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onListTap,this);	
			break;
			case 2:
				this.status_img.source = 'wutong_json.water_1';
				newList = await Common.Shared().createCircleMask(78, 78, this.logInfo.avatar, null, null, true)
				this.friend_new.addChild(newList);
				this.friend_new.setChildIndex(this.status_img, -1);
				this.friend_new.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onListTap,this);	
			break;
			case 3:
				this.status_img.source = 'wutong_json.pick';	
				newList = await Common.Shared().createCircleMask(78, 78, this.logInfo.avatar, null, null, true)		
				this.friend_new.addChild(newList);
				this.friend_new.setChildIndex(this.status_img, -1);
				this.friend_new.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onListTap,this);	
			break;
			case 4:
				this.status_img.visible = false;
				this.more_text.visible = true;		
				newList = await Common.Shared().createImage(78, 78, 'wutong_json.green_lighting');
				this.friend_new.addChild(newList);
				this.friend_new.setChildIndex(this.more_text, -1);									
				this.friend_new.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onFriendHeadClick,this);	
		}
	}

	private onFriendHeadClick() {
		Index.Shared().full_mask.visible = true;
		Index.Shared().addChildAt(NewDynamic.Shared(), -1);
		NewDynamic.Shared().showNewDynamic();
	}

	private onListTap(e:egret.TouchEvent){
		//判断拜访是否开启
		if(Index.Shared().isVisit == 0) return false;
		Index.Shared().parent.addChild(new OtherGarden(this.logInfo.uid));
		Index.Shared().parent.removeChild(Index.Shared());
	}
}