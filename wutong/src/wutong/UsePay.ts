class UsePay extends eui.ItemRenderer{
	private static shared:UsePay;
	public static Shared() {
		if(this.shared == null){
			this.shared = new UsePay();
		}
		return this.shared;
	}


	//购买控件
	public use_pay:eui.Group;
	//全局遮罩
	// public full_mask:eui.Rect;
	//背景图片
	private use_pay_bg:eui.Image;
	//关闭按钮
	private btn_close:eui.Image;
	//购买物品图片
	private use_pay_img:eui.Image;
	//购买数量
	private use_pay_num:eui.Group;
	//增加按钮
	private use_pay_add:eui.Button;
	//减少按钮
	private use_pay_dec:eui.Button;
	//确认提示
	private use_pay_conf:eui.Label;
	//确认按钮
	private use_pay_dete:eui.Group;
	//数量
	public theNum:number;
	//输入框
	public usePayinput:any;

	//道具信息
	private toolInfo:any;
	public orderId:number;
	//key,该道具在toollist里面的对应key.
	public key:any;

	public constructor() {
		super();
		this.skinName = "resource/garden_skin/wutong/UsePay.exml";
		this.data = Main.Shared().lang_config;
		this.top = 0;
        this.left = 0;
        this.right = 0;
        this.bottom = 0;

		if(!this.usePayinput){
			this.usePayinput = new UsePayInput();
			this.use_pay_num.addChild(this.usePayinput);
		}

		//关闭事件
		this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnCloseClick,this);
		// 增加数量
		this.use_pay_add.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onPayAddClick,this);
		//减少数量
		this.use_pay_dec.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onPayDecClick,this);
		//购买确认
		this.use_pay_dete.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBuySuccess,this);
		//输入事件
		this.usePayinput.text_type.addEventListener(egret.TouchEvent.CHANGE,this.reCount,this);
		this.usePayinput.text_type.addEventListener(egret.Event.FOCUS_OUT,this.reCount,this);
	}

	//关闭窗口
	public onBtnCloseClick() {
		// this.full_mask.visible = false;
		this.use_pay.visible = false;
		this.theNum = null;
		this.usePayinput.text_type.text = '1';
		Index.Shared().full_mask.visible = true;
        //Index.Shared().setChildIndex(Index.Shared().full_mask, -1);
		PropsIntro.Shared().onShowProps();
        Index.Shared().addChildAt(PropsIntro.Shared(), -1);
	}

	//开启窗口
	public async showPayclick(toolInfo, key:any) {
		this.key = key;
		this.toolInfo = toolInfo;
		this.use_pay_img.source = await Common.Shared().loadImg(this.toolInfo.icon);
		// RES.getResByUrl(this.toolInfo.icon, (texture:egret.Texture) => {
        //     	this.use_pay_img.source = texture;
        // 	}, this, RES.ResourceItem.TYPE_IMAGE);
		this.reCount();
		this.use_pay.visible = true;
	}

	//增加按钮
	private onPayAddClick() {
		this.usePayinput.addClick();
		this.reCount();
	}

	//减少按钮
	private onPayDecClick() {
		this.usePayinput.decClick();
		this.reCount();
	}

	//购买按钮
	private onBuySuccess(e:egret.TouchEvent) {
		var num = parseInt(this.usePayinput.text_type.text);		
		Index.Shared().wait.show();
		var httpReq = new HttpReq();
		var url:string = 'v1.1/wutong/tool/put_order';
		httpReq.POST({
			url:url,
			data:{toolId:this.toolInfo.id, num:num},
			success:(res)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					var data = res.data;
					let toolNum = Tools.Shared().toolList[this.key].num;
					this.theNum = toolNum + num;
					Common.Shared().secondPwd(this.afterPwd, this.use_pay, true, data);
				}else if(res.code == 111){
					Index.Shared().tips.showTips(res.msg);		
				}else{
					GoPay.Shared().onShowGoPay();
					Index.Shared().full_mask.visible = true;
					Index.Shared().addChildAt(GoPay.Shared(), -1);
				}
				Index.Shared().wait.hide();
			},
			error:(error)=>{
				Index.Shared().wait.hide();
				Index.Shared().tips.showTips(this.data.usePayTs.network_error);				
			}
		}, e.currentTarget);
	}

	//输入PIN码之后
	public afterPwd(pwd, afterData){
		Index.Shared().wait.show();
		var pinCode = hex_md5(pwd);
		var httpReq = new HttpReq();
		var url:string = 'v1.1/pay/confirm_pay';
		httpReq.POST({
			url:url,
			data:{orderId:afterData.orderId, payOrder:afterData.payOrder, pinCode:pinCode, payType:afterData.payType},
			success:(res) =>{
				var res = JSON.parse(res);
				if(res.code == 0) {
					//更新使用提示框数量
					Tools.Shared().toolList[UsePay.Shared().key].num = UsePay.Shared().theNum;
					Tools.Shared().toolArr[UsePay.Shared().key].list_num.text = 'X' + (UsePay.Shared().theNum);
					UsePay.Shared().onBtnCloseClick();
					PropsIntro.Shared().onBtnUseClick();
				}else if(res.code == 335){
						let confirm = res.msg + this.data.usePayTs.go_pay;
						let confirmText = Common.Shared().getITextElement(confirm, 478, 240, 30, 50 ,80);
						//confirmText.verticalAlign = true;
						Index.Shared().mgCoin.addChild(confirmText);
						// Index.Shared().goPay.visible = true;
				}else{
					Index.Shared().tips.showTips(res.msg);		
				}
				Index.Shared().wait.hide();
			},
			error:(error)=>{
				Index.Shared().wait.hide();
				Index.Shared().tips.showTips(this.data.usePayTs.network_error);				
			}
		});
	}

	//刷新总价
	public reCount(){
		if(this.usePayinput.text_type.text == '') {
			this.use_pay_conf.text = this.data.usePayTs.if_spend + '0' + this.data.usePayTs.to_go_pay;
		}else {
			this.use_pay_conf.text = this.data.usePayTs.if_spend + (parseInt(this.usePayinput.text_type.text) *  parseInt(this.toolInfo.price)) + this.data.usePayTs.to_go_pay;
		}
	}

	//重新隐藏界面
	public onHidden() {
		this.use_pay.visible = false;
	}
	//重新开启界面
	public onShow() {
		this.use_pay.visible = true;
	}

}