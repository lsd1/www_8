class InteractiveList extends eui.ItemRenderer{
	private interactive_list:eui.Group;
	private username:eui.Label;
	private treeLevel:eui.Label;
	private countdown:eui.Label;
	private top_img:eui.Image;
	private water_img:eui.Image;
	private uid:number;

	public constructor() {
		super();
		this.skinName = 'resource/garden_skin/wutong/InteractiveList.exml';
		//this.data = Main.Shared().lang_config;
		this.cacheAsBitmap = true;		
		var shape:egret.Shape = new egret.Shape();
		shape.graphics.lineStyle( 2, 0xBB9F93 );
		shape.alpha = 0.5;
		shape.graphics.moveTo(60, 128);
		shape.graphics.lineTo(530, 128);
		this.interactive_list.addChild(shape);
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onListTap, this);
	}

	private onListTap(e:egret.TouchEvent){
		Index.Shared().parent.addChild(new OtherGarden(this.uid));
		Index.Shared().parent.removeChild(Index.Shared());
	}
	
	protected dataChanged():void{
        //数据改变时，会自动调用 dataChanged 这个方法
		this.uid = this.data.uid;
		this.username.text = this.data.userNote ? this.data.userNote : this.data.username;
		this.treeLevel.text = 'LV.' + this.data.treeLevel;
		Common.Shared().createCircleMask(78, 78, this.data.avatar, 48 , 25, true).then((group:any)=>{
			this.interactive_list.addChild(group);			
		});
		if(this.data.isWater > 0){
			this.water_img.visible = true;
		}else{
			this.water_img.visible = false;			
		}

		if(this.data.matureTime > 0){
			this.cacheAsBitmap = false;
			this.top_img.visible = true;
			this.top_img.source = 'wutong_json.countdown';
			var matureTime = this.data.matureTime;
			this.countdown.visible = true;			
			var t = setInterval(()=>{
				if(matureTime > 0){
					this.countdown.text = Common.Shared().secondToTime(matureTime);
					matureTime--;
				}else{
					clearInterval(t);
					this.countdown.visible = false;
					this.top_img.source = 'wutong_json.pick';
				}
			},999);
		}else if(this.data.isAntiTheft > 0){
			this.top_img.visible = true;
			this.top_img.source = 'wutong_json.cover_1';
		}else if(this.data.isSteal > 0){
			this.top_img.visible = true;
			this.top_img.source = 'wutong_json.pick';
		}
    }
}