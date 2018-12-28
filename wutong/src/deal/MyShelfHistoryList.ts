class MyShelfHistoryList extends eui.ItemRenderer{
	private myShelfHistoryList:eui.Group;
	//性别
	private gender:eui.Image;
	//小鸟图片
	private ph_img:eui.Image;
	//编号
	private ph_num:eui.Label;
	//生命上限
	private ph_xp:eui.Label;
	//价格
	private high_price:eui.Label;
	//几代凤凰头部显示
	private gender_group:eui.Group;
	//字体显示
	private g_text:eui.Label;
	//性别显示
	private g_gender:eui.Image;
	//购买时间
	private shelf_time:eui.Label;
	//上架状态
	private status_group:eui.Group;
	private status_text:eui.Label;
	//下架按钮
	private btn_off:eui.Group;
	//Id
	private bidId:number;
	//语言包
	private langData:any;
	// 生命值
	private life_txt:eui.Label;

	//梧桐果
	private wt_group:eui.Group;
	private wt_name:eui.Label;
	private wt_num:eui.Label;
	private wt_price:eui.Label;
	private wt_shelf_time:eui.Label;
	private wt_status_group:eui.Group;//梧桐上架状态
	private wt_status_img:eui.Image;//状态图片
	private wt_status_text:eui.Label;//状态说明
	private btn_off_wt:eui.Group;//下架按钮
	


	public constructor() {
		super();
		this.skinName = 'resource/garden_skin/deal/MyShelfHistoryList.exml';
		this.langData = Main.Shared().lang_config;
		this.cacheAsBitmap = true;
		//下架按钮
		this.btn_off.addEventListener(egret.TouchEvent.TOUCH_TAP,this.offShelf,this);
		this.btn_off_wt.addEventListener(egret.TouchEvent.TOUCH_TAP,this.offShelf,this);
		
	}
	//下架按钮
	public offShelf() {
		MyTransaction.Shared().showPointTip(this.bidId);
	}
	protected dataChanged():void{
        //数据改变时，会自动调用 dataChanged 这个方法
		this.bidId = this.data.id;
		if(this.data.goodsType == 3) {
			this.myShelfHistoryList.visible = false;
			this.wt_group.visible = true;
			this.wt_name.text = this.data.title;
			this.wt_num.text = this.data.num;
			this.wt_price.text = String(Math.floor(Number(this.data.amount)));
			this.wt_shelf_time.text = this.data.datetime;
			//状态显示
			switch (this.data.status) {
				case -1:
					this.wt_status_group.visible = true;
					this.wt_status_text.text = this.langData.myShelfHistoryListTs.drop_off;
					this.btn_off_wt.visible = false;
					break;
				case 0:
					this.wt_status_group.visible = false;
					this.wt_status_text.text = '';
					this.btn_off_wt.visible = true;
					break;
				case 1:
					this.wt_status_group.visible = true;
					this.wt_status_text.text = this.langData.myShelfHistoryListTs.already_sold;
					this.btn_off_wt.visible = false;
					break;
			}
		}else {
			this.myShelfHistoryList.visible = true;
			this.wt_group.visible = false;
			//头像框判断
			this.gender.source = Common.Shared().getPh(this.data.level, this.data.gender, this.data.goodsType);
			//是鸟还是蛋
			this.ph_img.source = Common.Shared().getPhImg(this.data.goodsType, this.data.gender);
			//头像框文字显示
			this.g_text.text = this.data.title;
			this.g_text.horizontalCenter = Common.Shared().getPhText(this.data.goodsType, this.data.level);
			
			//状态显示
			switch (this.data.status) {
				case -1:
					this.status_group.visible = true;
					this.status_text.text = this.langData.myShelfHistoryListTs.drop_off;
					this.btn_off.visible = false;
					break;
				case 0:
					this.status_group.visible = false;
					this.status_text.text = '';
					this.btn_off.visible = true;
					break;
				case 1:
					this.status_group.visible = true;
					this.status_text.text = this.langData.myShelfHistoryListTs.already_sold;
					this.btn_off.visible = false;
					break;
			}

			//价格
			this.high_price.text = String(Math.floor(Number(this.data.amount)));
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
			this.shelf_time.text = this.data.datetime;
		}
		
		
		
		
		
    }
}