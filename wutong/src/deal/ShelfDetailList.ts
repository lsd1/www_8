class ShelfDetailList extends eui.ItemRenderer{

	private auctionDetaList:eui.Group;
	private gender:eui.Image;
	private ph_img:eui.Image;
	private ph_num:eui.Label;
	private ph_xp:eui.Label;
	//卖出按钮
	private btn_pay:eui.Group;
	//状态显示
	private status_text:eui.Label;
	//几代凤凰头部显示
	private gender_group:eui.Group;
	//字体显示
	private g_text:eui.Label;
	//列表Id
	private id:number;
	//类型
	private type:number;
	//页面数据
	private packageInfo:any;
	private auctionConfig:any;
	//生命值
	private life_txt:eui.Label;
	
	private wutongguoList:eui.Group;
	private wt_num:eui.Label;
	private wt_name:eui.Label;
	private btn_pay_wt:eui.Group;
	
	private langData:any;

	public constructor() {
		super();
		this.skinName = "resource/garden_skin/deal/ShelfDetailList.exml";
		this.cacheAsBitmap = true;
		this.langData = Main.Shared().lang_config;
		this.btn_pay.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onShowInfo,this);
		this.btn_pay_wt.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onShowWTInfo,this);
	}
	private onShowInfo(e:egret.TouchEvent) {
		ShelfDetail.Shared().wait.show();
		var httpReq  = new HttpReq();
		var url:string = "v1.1/bird/trade/package_info";
		httpReq.GET({
			url:url,
			data:{packageId:this.id, type:this.type},
			success:(res) =>{
				var res = JSON.parse(res);
				if(res.code == 0) {
					ShelfDetail.Shared().parent.addChild(ShelfDetailInfo.Shared());
					ShelfDetailInfo.Shared().onShowBidInfo(res.data.packageInfo, res.data.tradeTaxRate);
					ShelfDetail.Shared().parent.removeChild(ShelfDetail.Shared());
				}else {
					ShelfDetail.Shared().tips.showTips(res.msg);
				}
				ShelfDetail.Shared().wait.hide();   
			},
			error:(error) =>{
				ShelfDetail.Shared().wait.hide();                   
				ShelfDetail.Shared().tips.showTips(this.langData.shelfDetailListTs.network_error);
			}
		});
	}
	private onShowWTInfo() {
		ShelfDetail.Shared().wait.show();
		var httpReq  = new HttpReq();
		var url:string = "v1.1/bird/trade/wutongguo_info";
		httpReq.GET({
			url:url,
			data:{},
			success:(res) =>{
				var res = JSON.parse(res);
				if(res.code == 0) {
					ShelfDetail.Shared().parent.addChild(ShelfDetailInfo.Shared());
					ShelfDetailInfo.Shared().onShowWTInfo(res.data.packageInfo, res.data.tradeTaxRate);
					ShelfDetail.Shared().parent.removeChild(ShelfDetail.Shared());
				}else {
					ShelfDetail.Shared().tips.showTips(res.msg);
				}
				ShelfDetail.Shared().wait.hide();   
			},
			error:(error) =>{
				ShelfDetail.Shared().wait.hide();                   
				ShelfDetail.Shared().tips.showTips(this.langData.shelfDetailListTs.network_error);
			}
		});
	}
	protected dataChanged():void{
        //数据改变时，会自动调用 dataChanged 这个方法
		this.id = this.data.id;
		this.type = this.data.type;
		if(this.data.type == 3) {
			this.auctionDetaList.visible = false;
			this.wutongguoList.visible = true;
			this.wt_num.text = this.data.num;
			this.wt_name.text = this.data.title;
		}else {
			this.auctionDetaList.visible = true;
			this.wutongguoList.visible = false;
			//头像框判断
			this.gender.source = Common.Shared().getPh(this.data.level, this.data.gender, this.data.type);
			//是鸟还是蛋
			this.ph_img.source = Common.Shared().getPhImg(this.data.type, this.data.gender);
			//文字显示
			this.g_text.text = this.data.title;
			this.g_text.horizontalCenter = Common.Shared().getPhText(this.data.type, this.data.level);
			
			//状态判断
			if(this.data.status == 1) {
				this.btn_pay.visible = true;
				this.status_text.visible = false;
			}else {
				this.btn_pay.visible = false;
				this.status_text.text = this.data.reason;
			}
			//编号
			this.ph_num.text = this.data.NO;
			//生命上限
			if(this.data.type == 1) {
				//生命上限
				this.life_txt.text = this.langData.myBuyHistoryList.life_limit;
				this.ph_xp.text = this.data.lifeValue;
			}else {
				//生命值
				this.life_txt.text = this.langData.myBuyHistoryList.life;
				this.ph_xp.text = this.data.lifeValue + '/' + this.data.maxLifeValue;
			}
		
		}
		
		
    }

}