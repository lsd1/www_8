class GoodsPay extends eui.ItemRenderer{
	private static shared:GoodsPay;
	public static Shared() {
		if(this.shared == null){
			this.shared = new GoodsPay();
		}
		return this.shared;
	}

	//购买控件
	public goodsPay:eui.Group;
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
		this.top = 0;
        this.left = 0;
        this.right = 0;
        this.bottom = 0;
		this.skinName = 'resource/garden_skin/miner/GoodsPay.exml';
		if(!this.usePayinput){
			this.usePayinput = new UsePayInput();
			this.use_pay_num.addChild(this.usePayinput);
		}
		this.data = Main.Shared().lang_config;
		//关闭按钮
		this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseGoodsPay,this);
		// 增加数量
		this.use_pay_add.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onPayAddClick,this);
		//减少数量
		this.use_pay_dec.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onPayDecClick,this);
		//输入事件
		this.usePayinput.text_type.addEventListener(egret.TouchEvent.CHANGE,this.reCount,this);
		this.usePayinput.text_type.addEventListener(egret.Event.FOCUS_OUT,this.reCount,this);
		//确认购买
		this.use_pay_dete.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGoPay,this);

	}
	//关闭按钮
	private onCloseGoodsPay() {
		this.goodsPay.visible = false;
		this.theNum = null;
		this.usePayinput.text_type.text = '1';
		GoodsIntro.Shared().props.visible = true;
	}

	//显示窗口
	public onShowGoodsPay(info:any, key:any) {
		this.key = key;
		this.toolInfo = info;
		Common.Shared().loadImg(this.toolInfo.icon).then((texture:egret.Texture)=>{
			this.use_pay_img.source = texture;
		});
		console.log(this.toolInfo.id);
		if(this.toolInfo.id == 17) {
			this.use_pay_bg.source = 'minerV1_json.clz_jwj _2x';
		}else {
			this.use_pay_bg.source = 'auction_json.baidikuang';
		}
		this.reCount();
		this.goodsPay.visible = true;
	}
	//确认购买
	private onGoPay() {
		Working.Shared().wait.show();
		var num = parseInt(this.usePayinput.text_type.text);
		//请求使用物品
		//实例化一个参数对象。
		var params = new Params('miner/tool/put_order');
		//合并参数
		var paramsData = params.mergeDataByJsonStr({toolId:this.toolInfo.id, num:num});
		// //ws发送信息
		Working.Shared().ws.sendData({
			data:paramsData,
			receiveCallBack:(res)=>{
				Working.Shared().wait.hide();
				//请求道具或者工具信息
				if(res.code == 0) {
					var data = res.data;
					let toolNum = MinerGoods.Shared().toolList[this.key].num;
					this.theNum = toolNum + num;
					Common.Shared().secondPwd(this.afterPwd, this.goodsPay, true, data);
				}else {
					Working.Shared().tips.showTips(res.msg);
				}
			}
		});
	}

	public afterPwd(pwd:any, afterData:any) {
		Working.Shared().wait.show();
		var pinCode = hex_md5(pwd);
		//实例化一个参数对象。
		var params = new Params('pay/confirm_pay');
		//合并参数
		var paramsData = params.mergeDataByJsonStr({orderId:afterData.orderId, payOrder:afterData.payOrder, payType:afterData.payType, pinCode:pinCode});
		//ws发送信息
		Working.Shared().ws.sendData({
            data:paramsData,
            receiveCallBack:(res)=>{
				Working.Shared().wait.hide();
                //购买成功
                if(res.code == 0) {
					//更新使用提示框数量
					MinerGoods.Shared().toolList[GoodsPay.Shared().key].num = GoodsPay.Shared().theNum;
					MinerGoods.Shared().toolArr[GoodsPay.Shared().key].list_num.text = 'x' + (GoodsPay.Shared().theNum);
					GoodsPay.Shared().onCloseGoodsPay();
					GoodsIntro.Shared().onUseTool();
                }else {
                    Working.Shared().tips.showTips(res.msg);
                }
            }
        });
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
	//刷新总价
	public reCount(){
		var unitPrice = '';
		if(this.toolInfo.id == 20) {
			unitPrice = this.data.usePayTs.geb_go_pay;
		}else {
			unitPrice = this.data.usePayTs.to_go_pay;
		}
		if(this.usePayinput.text_type.text == '') {
			this.use_pay_conf.text = this.data.usePayTs.if_spend + '0' + unitPrice;
		}else {
			this.use_pay_conf.text = this.data.usePayTs.if_spend + (parseInt(this.usePayinput.text_type.text) *  parseInt(this.toolInfo.price)) + unitPrice;
		}
	}
}