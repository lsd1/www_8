class ChangeLink extends eui.ItemRenderer{
	private static shared:ChangeLink;
	public static Shared() {
		if(this.shared == null){
			this.shared = new ChangeLink();
		}
		return this.shared;
	}

	//申请验证码
	private get_code:eui.Group;
	private btn_close_code:eui.Image;//关闭按钮
	private code_input:eui.EditableText;//验证码输入框
	private btn_getCode:eui.Group;//获取验证码按钮
	private btn_get_txt:eui.Label;//倒计时
	private btn_push_code:eui.Group;//提交验证码按钮
	//输入钱包地址
	private wallet_address:eui.Group;
	private btn_close_address:eui.Image;//关闭按钮
	private address_input:eui.EditableText;//地址输入框
	private btn_wallet:eui.Group;//更改按钮
	//确认更换
	private go_pay:eui.Group;
	private btn_close_pay:eui.Image;//关闭按钮
	private btn_confrim:eui.Group;//确认按钮
	//更换状态
	private pay_status:eui.Group;
	private btn_close_status:eui.Image;//关闭按钮
	private status_txt:eui.Label;//状态说明
	private btn_status_confrim:eui.Group;//状态说明确定

	//手续费说明
	private the_dec:eui.Label;
	
	private contdown:number;
	public timer:any;
	//钱包地址
	private theLink:string = '';
	//申请验证码状态  0，为未申请  1，为已申请
	private codeStatus:number = 0;

	public constructor() {
		super();
		this.top = 0;
        this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.skinName = 'resource/garden_skin/miner/ChangeLink.exml';
		this.code_input.maxChars = 6;
		this.code_input.restrict = "0-9";
		this.code_input.inputType = egret.TextFieldInputType.TEL;
		this.address_input.restrict = "A-Da-d0-9";
		this.data = Main.Shared().lang_config;
		//申请验证码
		this.btn_getCode.addEventListener(egret.TouchEvent.TOUCH_TAP,this.getTheCode,this);
		// this.code_input.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);
		// 关闭申请验证码
		this.btn_close_code.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseCode,this);
		this.btn_close_address.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseCode,this);
		this.btn_close_pay.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseCode,this);
		this.btn_close_status.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseCode,this);
		this.btn_status_confrim.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseCode,this);
		
		//提交验证码按钮
		this.btn_push_code.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnPushCode,this);
		//显示支付界面
		this.btn_wallet.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showPayHand,this);
		//支付请求
		this.btn_confrim.addEventListener(egret.TouchEvent.TOUCH_TAP,this.pushNewWallet,this);
	}
	//申请验证码
	public getTheCode(e:egret.TouchEvent) {
		this.code_input.text = '';
		Records.Shared().wait.show();
		this.contdown = 60;
		var params = new Params('miner/sms/send_sms');
		//合并参数
		var paramsData = params.mergeDataByJsonStr({});
		//ws发送信息
		Records.Shared().ws.sendData({
            data:paramsData,
            receiveCallBack:(res)=>{
				Records.Shared().wait.hide();
                // 申请成功
                if(res.code == 0) {
					ChangeLink.Shared().codeStatus = 1;
					ChangeLink.Shared().inputEnabled();
					ChangeLink.Shared().timer = setInterval(function() {
				    	if (ChangeLink.Shared().contdown > 0) {
					      	ChangeLink.Shared().contdown--;
							ChangeLink.Shared().btn_getCode.touchEnabled = false;
							ChangeLink.Shared().btn_getCode.touchChildren = false;
					      	ChangeLink.Shared().btn_get_txt.text = ChangeLink.Shared().contdown + 'S';
					    }
					    else {
							ChangeLink.Shared().clearTimer();
				    	}
	  				}, 1000);
					Records.Shared().tips.showTips(this.data.changeLink.sms_has);
                }else {
                    Records.Shared().tips.showTips(res.msg);
                }
            }
        });
	}
	//清除定时器
	public clearTimer() {
		this.btn_getCode.touchChildren = true;
		this.btn_getCode.touchEnabled = true;
		this.btn_get_txt.text = ChangeLink.Shared().data.changeLink.get_code;
      	clearInterval(this.timer);
	}
	//提交验证码按钮
	private btnPushCode() {
		if(this.code_input.text == '') {
			Records.Shared().tips.showTips(this.data.changeLink.enter_code);
		}else {
			Records.Shared().wait.show();
			var theCode:number = Number(this.code_input.text);
			var params = new Params('miner/sms/verify_code');
			//合并参数
			var paramsData = params.mergeDataByJsonStr({verifycode:theCode});
			//ws发送信息
			Records.Shared().ws.sendData({
				data:paramsData,
				receiveCallBack:(res)=>{
					Records.Shared().wait.hide();
					if(res.code == 0) {
						// 提交成功
						ChangeLink.Shared().code_input.text = '';
						ChangeLink.Shared().showWalletAddress();
					}else {
						Records.Shared().tips.showTips(res.msg);
					}
				}
			});
		}
		
	}
	//提交新钱包地址,支付
	private pushNewWallet() {
		Common.Shared().secondPwd(this.afterPwd, ChangeLink.Shared().go_pay, true, this.theLink);
		
	}
	public afterPwd(pwd:any, afterData?:any) {
		Records.Shared().wait.show();
		var pinCode = hex_md5(pwd);
		var params = new Params('miner/wallet/change_wallet');
		//合并参数
		var paramsData = params.mergeDataByJsonStr({wallet:afterData, pinCode:pinCode});
		//ws发送信息
		Records.Shared().ws.sendData({
            data:paramsData,
            receiveCallBack:(res)=>{
				Records.Shared().wait.hide();
                if(res.code == 0) {
                    // 支付成功
					ChangeLink.Shared().onSuccessStatus();
                }else {
					//支付失败
					ChangeLink.Shared().onLoserStatus();
                }
            }
        });
	}
	
	//显示申请界面
	public showGetCode(e:egret.TouchEvent) {
		this.contdown = 0;
		this.inputEnabled();
		this.get_code.visible = true;
		this.wallet_address.visible = false;
		this.go_pay.visible = false;
		this.pay_status.visible = false;
		// this.getTheCode(e);
	}
	//显示钱包更换界面
	private showWalletAddress() {
		this.get_code.visible = false;
		this.wallet_address.visible = true;
		this.go_pay.visible = false;
		this.pay_status.visible = false;
	}
	//显示支付界面
	private showPayHand() {
		this.theLink = this.address_input.text;
		this.the_dec.text = this.data.changeLink.you_have + Records.Shared().taxNum + this.data.changeLink.the_money;
		this.get_code.visible = false;
		this.wallet_address.visible = false;
		this.go_pay.visible = true;
		this.pay_status.visible = false;
	}

	//关闭申请验证码
	private onCloseCode() {
		this.codeStatus = 0;
		this.clearTimer();
		this.code_input.text = '';
		this.get_code.visible = false;
		this.wallet_address.visible = false;
		this.go_pay.visible = false;
		this.pay_status.visible = false;
		Records.Shared().full_mask.visible = false;
	}
	//支付成功
	private onSuccessStatus() {
		this.get_code.visible = false;
		this.wallet_address.visible = false;
		this.go_pay.visible = false;
		this.pay_status.visible = true;
		this.status_txt.text = this.data.changeLink.pay_succe + this.theLink;
		ScrollerRecordsIncome.Shared().the_link.text = this.theLink;
	}
	//支付失败
	private onLoserStatus() {
		this.get_code.visible = false;
		this.wallet_address.visible = false;
		this.go_pay.visible = false;
		this.pay_status.visible = true;
		this.status_txt.text =  this.data.changeLink.faild;
	}
	//在第一次进入申请验证码界面时，如果未进行验证码申请，则不能输入
	private inputEnabled() {
		if(this.codeStatus == 0) {
			console.log(1);
			this.code_input.touchEnabled = false;
		}else {
			console.log(2);
			this.code_input.touchEnabled = true;
		}
		
	}
}