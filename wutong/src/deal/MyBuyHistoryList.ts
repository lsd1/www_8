class MyBuyHistoryList extends eui.ItemRenderer{
	private myBidMoneyList:eui.Group;
	//性别
	private gender:eui.Image;
	//小鸟图片
	private ph_img:eui.Image;
	//编号
	private ph_num:eui.Label;
	//生命上限
	private ph_xp:eui.Label;
	//价格
	private ph_host:eui.Label;
	//几代凤凰头部显示
	private gender_group:eui.Group;
	//字体显示
	private g_text:eui.Label;
	//性别显示
	private g_gender:eui.Image;
	//购买时间
	private shelf_time:eui.Label;
	// 生命值
	private life_txt:eui.Label;


	//梧桐果
	private wt_group:eui.Group;
	private wt_name:eui.Label;
	private wt_num:eui.Label;
	private wt_price:eui.Label;
	private wt_shelf_time:eui.Label;
	
	private langData:any;

	public constructor() {
		super();
		this.skinName = 'resource/garden_skin/deal/MyBuyHistoryList.exml';
		this.langData = Main.Shared().lang_config;
		this.cacheAsBitmap = true;
	}

	protected dataChanged():void{
        //数据改变时，会自动调用 dataChanged 这个方法
		// this.bidId = this.data.id;
		if(this.data.goodsType == 3) {
			this.wt_group.visible = true;
			this.myBidMoneyList.visible = false;
			this.wt_name.text = this.data.title;
			this.wt_num.text = this.data.num;
			this.wt_price.text = String(Math.floor(Number(this.data.amount)));
			this.wt_shelf_time.text = this.data.finishtime;
		}else {
			this.wt_group.visible = false;
			this.myBidMoneyList.visible = true;
			//头像框判断
			this.gender.source = Common.Shared().getPh(this.data.level, this.data.gender, this.data.goodsType);
			//是鸟还是蛋
			this.ph_img.source = Common.Shared().getPhImg(this.data.goodsType, this.data.gender);
			//文字显示
			this.g_text.text = this.data.title;
			this.g_text.horizontalCenter = Common.Shared().getPhText(this.data.goodsType, this.data.level);
			
			//价格
			this.ph_host.text = String(Math.floor(Number(this.data.amount)));
			//编号
			this.ph_num.text = this.data.goodsNO;

			if(this.data.goodsType == 1) {
				//生命上限
				this.life_txt.text = this.langData.myBuyHistoryList.life_limit;
				this.ph_xp.text = this.data.lifeValue;
			}else {
				//生命值
				this.life_txt.text = this.langData.myBuyHistoryList.life;
				this.ph_xp.text = this.data.lifeValue + '/' + this.data.maxLifeValue;
			}
			
			//时间
			this.shelf_time.text = this.data.finishtime;
		}
		
    }
}