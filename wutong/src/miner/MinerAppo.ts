class MinerAppo extends eui.ItemRenderer{
	private static shared:MinerAppo;
    public static Shared(){
        if(!this.shared){
            this.shared = new MinerAppo();
        }
        return this.shared;
    }

	private tips:Tips = new Tips();
	private wait:Wait = new Wait();
	
	private miner_appo:eui.Group;
	private btn_go_back:eui.Image;
	private mc_box:eui.Group;
	private res_time:eui.Label;

	private mc_res:any;

	//弹框
	private full_mask:eui.Rect;
	private btn_close:eui.Image;
	private appo_txt:eui.Label;
	private reser_txt:eui.Label;
	private tip:eui.Group;
	private btn_go_appo:eui.Group;
	private btn_success:eui.Group;

	//页面信息
	public startTime:string;
	public endTime:string;
	public bookPrice:number;
	//订单信息
	private payDetail:any;
	
	//语言包
	private langData:any;

	public constructor() {
		super();
		this.skinName = "resource/garden_skin/miner/MinerAppo.exml";
		this.langData = Main.Shared().lang_config;
		this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.addChild(this.tips);
		this.addChild(this.wait);
		this.onShowReser();	
		//返回
		this.btn_go_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGoBack,this);
		//预约弹框
		this.mc_box.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAppoMine,this);
		//预约请求发送
		this.btn_go_appo.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGoPay,this);
		
		this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onHideTip,this);
		this.btn_success.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onHideTip,this);
	}
	//返回
	private onGoBack() {
		this.parent.addChild(Index.Shared());
		this.parent.removeChild(this);
	}
	//mc动画
	public onShowReser() {
		Common.Shared().mc('reserve_'+  (Main.Shared().lang), 200 , 200, null, true).then((mc:any)=>{
			this.mc_res = mc;
			this.mc_box.addChild(this.mc_res);
			this.mc_res.gotoAndPlay(0, -1);
		});

		//获取页面信息
		this.wait.show();
		var httpReq = new HttpReq();
		var url:string = 'v1.1/miner/show_book';
		httpReq.GET({
			url:url,
			data:{},
			success:(res) =>{
				var res = JSON.parse(res);
				if(res.code == 0) {
					this.startTime = res.data.bookInfo.startTime;
					this.endTime = res.data.bookInfo.endTime;
					this.bookPrice = res.data.bookInfo.bookPrice;
					this.res_time.text = this.startTime + this.langData.minerAppoTs.to + this.endTime;
				}else {
					this.tips.showTips(res.msg);
				}
				this.wait.hide();  
			},
			error:(error) =>{
				this.wait.hide();                   
				this.tips.showTips(this.langData.minerAppoTs.network_error);
			}
		});	
	}
	//预约弹框
	private onAppoMine() {
		this.full_mask.visible = true;
		this.tip.visible = true;
		this.btn_go_appo.visible = true;
		this.res_time.text = this.startTime + this.langData.minerAppoTs.to + this.endTime;
		this.reser_txt.text = this.langData.minerAppoTs.booking_miner;
		this.appo_txt.text = this.langData.minerAppoTs.need_pay + this.bookPrice + this.langData.minerAppoTs.shared_worth;

		//预约请求发送
		MinerAppo.Shared().wait.show();
		var httpReq = new HttpReq();
		var url:string = 'v1.1/miner/put_book';
		httpReq.POST({
			url:url,
			data:{},
			success:(res) =>{
				var res = JSON.parse(res);
				if(res.code == 0) {
					this.payDetail = res.data;
				}else if(res.code == 111) {
					MinerAppo.Shared().onHideTip();
					MinerAppo.Shared().onFailTip();
				}
				else {
					MinerAppo.Shared().tips.showTips(res.msg);
				}
				MinerAppo.Shared().wait.hide();  
			},
			error:(error) =>{
				MinerAppo.Shared().wait.hide();                   
				MinerAppo.Shared().tips.showTips(this.langData.minerAppoTs.network_error);
			}
		});	
		
	}
	//关闭弹框
	private onHideTip() {
		this.full_mask.visible = false;
		this.tip.visible = false;
		this.reser_txt.text = '';
		this.appo_txt.text = '';
		this.btn_go_appo.visible = false;
		this.btn_success.visible = false;
	}
	//预约成功
	private onSuccessTip() {
		this.full_mask.visible = true;
		this.tip.visible = true;
		this.btn_go_appo.visible = false;
		this.btn_success.visible = true;
		this.reser_txt.text = this.langData.minerAppoTs.success_booking;
		this.appo_txt.visible = false;
	}
	//重复预约
	private onFailTip() {
		this.full_mask.visible = true;
		this.tip.visible = true;
		this.btn_success.visible = false;
		this.btn_go_appo.visible = false;
		this.reser_txt.text =  this.langData.minerAppoTs.no_repeat_again;
		this.appo_txt.visible = false;
	}

	//确认支付
	private onGoPay() {
		Common.Shared().secondPwd(this.afterPwd, MinerAppo.Shared().btn_go_appo, true, this.payDetail);
	}
	public afterPwd(pwd:string, afterData?:any) {
		let pinCode = hex_md5(pwd);
		MinerAppo.Shared().wait.show();
		var httpReq = new HttpReq();
		var url:string = 'v1.1/pay/confirm_pay';
		httpReq.POST({
			url:url,
			data:{orderId:afterData.orderId, payType:afterData.payType, payOrder:afterData.payOrder, pinCode:pinCode},
			success:(res) =>{
				var res = JSON.parse(res);
				if(res.code == 0) {
					MinerAppo.Shared().onHideTip();
					MinerAppo.Shared().onSuccessTip();
				}else {
					MinerAppo.Shared().tips.showTips(res.msg);
				}
				MinerAppo.Shared().wait.hide();  
			},
			error:(error) =>{
				MinerAppo.Shared().wait.hide();                   
				MinerAppo.Shared().tips.showTips(this.langData.minerAppoTs.network_error);
			}
		});	
	}
}