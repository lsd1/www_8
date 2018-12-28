class ShelfDetailInfo extends eui.ItemRenderer{
	private static shared:ShelfDetailInfo;
	public static Shared() {
		if(this.shared == null){
			this.shared = new ShelfDetailInfo();
		}
		return this.shared;
	}
	private tips:Tips = new Tips();
	private wait:Wait = new Wait();
	private auction:eui.Group;
	private btn_go_back:eui.Group;
	private gender:eui.Image;
	private ph_img:eui.Image;
	private ph_num:eui.Label;
	private ph_xp:eui.Label;
	//代数控件
	private gender_group:eui.Group;
	private g_text:eui.Label;
	//上架按钮
	private btn_pay_fee:eui.Group;
	//弹框
	private auc_info_tips:eui.Group;
	private btn_close:eui.Image;
	private tip_txt:eui.Label;
	private btn_dete:eui.Group;
	private full_mask:eui.Rect;


	//起拍
	private start_price:eui.EditableText;//起拍价
	private auction_fee:eui.Label;//手续费
	private shouxufei:eui.Label;
	private shouxuNMB:number;
	

	private id:number;
	private type:number;

	private orderId:number;
	private price:number;
	private payOrder:string;
	
	//生命值
	private life_txt:eui.Label;

	//梧桐果上架
	private wutong_group:eui.Group;
	private btn_wt_go_back:eui.Group;
	private wt_title:eui.Label;//梧桐果名称
	public wt_tips:eui.Group;//梧桐果说明
	private start_num:eui.EditableText;//上架数量输入框
	private now_num:eui.Label;//当前拥有数量
	private unit_price:eui.EditableText;//梧桐果单价
	private total_price:eui.Label;//当前输入数量的总价
	private wt_fee:eui.Label;//手续费
	private fee_status:eui.Label;//手续费说明
	private btn_pay_wt:eui.Group;//上架按钮
	//梧桐果上架状态说明
	private wt_status:eui.Label


	//单价
	private unit_number:number = 0;
	//数量
	private start_number:number = 0;
	//总价
	private total_number:number;
	//总数量
	private allNum:number;
	//手续费
	private rate:number;

	public constructor() {
		super();
		this.skinName = "resource/garden_skin/deal/ShelfDetailInfo.exml";
		this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.start_price.prompt  = '0';
		this.start_price.promptColor  = 0xF76005;
		this.start_price.restrict = "0-9";
		this.start_num.restrict = "0-9";
		this.unit_price.restrict = "0-9.";
		this.start_num.inputType = egret.TextFieldInputType.TEL;
		this.unit_price.inputType = egret.TextFieldInputType.TEL;
		this.cacheAsBitmap = true;
		this.addChild(this.tips);
		this.addChild(this.wait);
		//语言包
		this.data = Main.Shared().lang_config;
		this.btn_go_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnReturn,this);
		this.btn_wt_go_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnReturn,this);
		//上架按钮
		this.btn_pay_fee.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onPayFee,this);
		//输入事件
		this.start_price.addEventListener(egret.Event.CHANGE,this.startChang,this);
		// //弹框关闭
		this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseTip,this);
		this.btn_dete.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseTip,this);
		//梧桐果单价输入
		this.unit_price.addEventListener(egret.Event.CHANGE,this.wutongguoChang,this);
		//数量输入
		this.start_num.addEventListener(egret.Event.CHANGE,this.wutongguoChang,this);
		//上架梧桐果
		this.btn_pay_wt.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onPayWT,this);

		//输入框监听
		this.start_num.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
	}
	
	//收到监听后重新设置显示区
	private onClick(e:egret.TouchEvent):void {
        this.start_num.setFocus();
        var clientWidth = document.documentElement.clientWidth;
        var clientHeight = document.documentElement.clientHeight;
        document.body.style.width = clientWidth + "px";
        document.body.style.height = clientHeight - 20 + "px";
    }

	//返回按钮
	private onBtnReturn() {
		this.unit_price.text = '';
		this.start_num.text = '';
		this.total_price.text = '0';
		this.wt_fee.text = 0 +  this.data.shelfDetailInfo.shared_value;
		this.start_price.text = '';
		this.parent.addChild(ShelfDetail.Shared());
		this.parent.removeChild(this);
	}
	//关闭弹框
	private onCloseTip() {
		this.auc_info_tips.visible = false;
		this.tip_txt.text = '';
		this.full_mask.visible = false;
	}
	
	//生成凤凰样式
	public onShowBidInfo(pack:any , rate:any) {
		this.auction.visible = true;
		this.wutong_group.visible = false;
		//头像框判断
		this.gender.source = Common.Shared().getPh(pack.level, pack.gender, pack.type);
		//是鸟还是蛋
		this.ph_img.source = Common.Shared().getPhImg(pack.type, pack.gender);
		//文字显示
		this.g_text.text = pack.title;
		this.g_text.horizontalCenter = Common.Shared().getPhText(pack.type, pack.level);
		//手续费
		this.auction_fee.text = 0 + this.data.shelfDetailInfoTs.shared_value;
		this.shouxufei.text = this.data.shelfDetailInfoTs.fees + rate * 100 + '%';
		this.shouxuNMB = rate;
		//编号
		this.ph_num.text = pack.NO;
		if(pack.type == 1) {
			//生命上限
			this.life_txt.text = this.data.myBuyHistoryList.life_limit;
			this.ph_xp.text = pack.lifeValue;
		}else {
			//生命值
			this.life_txt.text = this.data.myBuyHistoryList.life;
			this.ph_xp.text = pack.lifeValue + '/' + pack.maxLifeValue;
		}
		//id
		this.id = pack.id;
		//类型
		this.type = pack.type;
	}
	//凤凰输入事件
	private startChang() {
		if(this.start_price.text.length <= 9) {
			this.start_price.text = this.start_price.text;
		}else {
			this.start_price.text = this.start_price.text.slice(0, 9);
		}
		if(Number(this.start_price.text) == 0) {
			this.start_price.text = '';
		}else {
			this.auction_fee.text = Math.ceil(this.shouxuNMB * Number(this.start_price.text)) + this.data.shelfDetailInfoTs.shared_value;
		}
	}
	//生成梧桐果样式
	public onShowWTInfo(pack:any , rate:any) {
		this.auction.visible = false;
		this.wutong_group.visible = true;
		this.id = pack.id;
		this.wt_title.text = pack.name;
		var theStatus = pack.tips;
		this.wt_tips.addChild(Common.Shared().getITextElement(theStatus, ShelfDetailInfo.Shared().wt_tips.width, ShelfDetailInfo.Shared().wt_tips.height, 24, 0, 0));
		this.now_num.text = pack.num + this.data.shelfDetailInfoTs.one;
		this.allNum = pack.num;
		this.fee_status.text = this.data.shelfDetailInfo.head_fee + rate * 100 + '%';
		this.wt_fee.text = 0 + this.data.shelfDetailInfo.shared_value;
		this.rate = rate;
		this.shouxuNMB = rate;
	}
	//梧桐果输入事件
	private wutongguoChang() {
		this.unit_number = Number(this.unit_price.text);
		this.start_number = Number(this.start_num.text);
		this.total_number = this.unit_number * this.start_number;
		this.total_price.text = String(Math.ceil(this.total_number));
		if(this.start_number > this.allNum) {
			this.wt_status.text = this.data.shelfDetailInfoTs.number_fruit;
			this.btn_pay_wt.touchChildren = false;
			this.btn_pay_wt.touchEnabled = false;
		}else {
			this.wt_status.text = this.data.shelfDetailInfo.than_zero;
			this.btn_pay_wt.touchChildren = true;
			this.btn_pay_wt.touchEnabled = true;
		}
		this.wt_fee.text = String(Math.ceil(this.total_number * this.rate)) + this.data.shelfDetailInfo.shared_value;
	}
	//上架凤凰按钮
	private onPayFee() {
		if(this.start_price.text == '' || this.start_price.text == '0') {
			//未输入价格
			this.onShowTips();
			this.tip_txt.text = this.data.shelfDetailInfoTs.enter_price;
			
		}else {
			ShelfDetailInfo.Shared().wait.show();
			var httpReq  = new HttpReq();
			var url:string = "v1.1/bird/trade/on_sale";
			httpReq.POST({
				url:url,
				data:{packageId:this.id, goodsType:this.type, price:this.start_price.text},
				success:(res) =>{
					var res = JSON.parse(res);
					if(res.code == 0) {
						this.onBtnReturn();
						ShelfDetail.Shared().onShowTips();
						ShelfDetail.Shared().tip_txt.text = this.data.shelfDetailInfoTs.success;
						ShelfDetail.Shared().onShowAucDeta();
					}
					else{
						ShelfDetailInfo.Shared().tips.showTips(res.msg);
					}
					ShelfDetailInfo.Shared().wait.hide();
				},
				error:(error) =>{
					ShelfDetailInfo.Shared().wait.hide();                   
					ShelfDetailInfo.Shared().tips.showTips(this.data.shelfDetailInfoTs.network_error);
				}
			});
		}
		
	}
	//上架梧桐果
	private onPayWT() {
		if(this.unit_price.text == '0' || this.unit_price.text == '') {
			//未输入价格
			this.onShowTips();
			this.tip_txt.text = this.data.shelfDetailInfoTs.enter_price;
		}else if(this.start_num.text == '0' || this.start_num.text == ''){
			//未输入数量
			this.onShowTips();
			this.tip_txt.text = this.data.shelfDetailInfoTs.please_fruit;
		}
		else{
			ShelfDetailInfo.Shared().wait.show();
			var httpReq  = new HttpReq();
			var url:string = "v1.1/bird/trade/on_sale";
			httpReq.POST({
				url:url,
				data:{goodsType:3, price:this.unit_price.text, goodsNum:this.start_num.text},
				success:(res) =>{
					var res = JSON.parse(res);
					if(res.code == 0) {
						this.onBtnReturn();
						ShelfDetail.Shared().onShowTips();
						ShelfDetail.Shared().tip_txt.text = this.data.shelfDetailInfoTs.success;
						ShelfDetail.Shared().onShowAucDeta();
					}
					else{
						ShelfDetailInfo.Shared().tips.showTips(res.msg);
					}
					ShelfDetailInfo.Shared().wait.hide();
				},
				error:(error) =>{
					ShelfDetailInfo.Shared().wait.hide();                   
					ShelfDetailInfo.Shared().tips.showTips(this.data.shelfDetailInfoTs.network_error);
				}
			});
		}
	}
	//开启弹框
	private onShowTips() {
		this.auc_info_tips.visible = true;
		this.full_mask.visible = true;
	}
}