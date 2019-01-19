class AuctionResultList extends eui.ItemRenderer{



	private gender:eui.Image;
	private ph_img:eui.Image;
	private ph_num:eui.Label;
	private ph_xp:eui.Label;
	//几代凤凰头部显示
	private gender_group:eui.Group;
	//字体显示
	private g_text:eui.Label;
	//列表Id
	private id:number;
	//类型
	private type:number;
	//最高价
	private high_price:eui.Label;

	private langData:any;	

	public constructor() {
		super();
		this.skinName = "resource/garden_skin/auction/AuctionResultList.exml";
		this.cacheAsBitmap = true;
		this.langData = Main.Shared().lang_config;
	}

	protected dataChanged():void{
        //数据改变时，会自动调用 dataChanged 这个方法
		this.id = this.data.id;
		this.type = this.data.type;
		//头像框判断
		this.gender.source = Common.Shared().getPh(this.data.level, this.data.gender, this.data.type);
		//是鸟还是蛋
		this.ph_img.source = Common.Shared().getPhImg(this.data.type, this.data.gender);
		//文字显示
		this.g_text.text = this.data.title;
		this.g_text.horizontalCenter = Common.Shared().getPhText(this.data.type, this.data.level);
		
		//编号
		this.ph_num.text = this.data.NO;
		//生命上限
		this.ph_xp.text = this.data.lifeValue;
		//最高价
		this.high_price.text = this.data.maxPrice;
		
		
		
    }

}