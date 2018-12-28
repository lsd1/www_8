class Binding extends eui.ItemRenderer {
	private static shared:Binding;
	public static Shared() {
		if(this.shared == null){
			this.shared = new Binding();
		}
		return this.shared;
	}
	//预约界面
	private binding:eui.Group;
	private head_img:eui.Image;
	private btn_success:eui.Group;
	private btn_goBinding:eui.Group;
	private btn_down:eui.Group;
	private btn_close:eui.Image;
	private status_txt:eui.Label;
	//绑定界面
	private goto_group:eui.Group;
	private btn_close_goto:eui.Image;
	private adderss:eui.EditableText;//钱包地址输入
	private btn_binding:eui.Group;//绑定按钮
	//绑定状态
	private binding_status:eui.Group;
	private btn_close_status:eui.Image;
	private directions:eui.Label;//绑定说明
	private btn_goPlay:eui.Group;
	//下载链接
	private down_group:eui.Group;
	private btn_close_down:eui.Image;
	private btn_down_group:eui.Group;


	private tips:Tips = new Tips();
	private wait:Wait = new Wait();

	public constructor() {
		super();
		this.top = 0;
        this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.skinName = "resource/garden_skin/miner/Binding.exml";
		this.data = Main.Shared().lang_config;
		this.addChild(this.tips);
		this.addChild(this.wait);
		// this.adderss.prompt = this.data.binding.enter_link;
		this.adderss.restrict = "A-Za-z0-9";
		this.adderss.textColor = 0xB1834E;
		//关闭消息框
		this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseBinding,this);
		this.btn_success.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseBinding,this);
		this.btn_close_status.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseStatus,this);
		//去绑定
		this.btn_goBinding.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGotoBinding,this);
		//去下载
		this.btn_down.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGoToWallet,this);
		//跳转浏览器
		this.btn_down_group.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goWallet, this);
		//关闭下载框
		this.btn_close_down.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseWallet,this);
		//关闭输入地址框
		this.btn_close_goto.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseGoto,this);
		//绑定事件
		this.btn_binding.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnBinding,this);
		//去上链
		this.btn_goPlay.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goToPlay,this);

	}

	//跳转到钱包下载页面
	public goWallet(e:egret.Event){
		Common.Shared().setCookie('app_method', '{"type":"goWallet","url":"http://www.maiguoer.com/data/download"}', 30);
	}

	//下次再预约
	public onNextTime() {
		this.head_img.source = this.data.binding.heat_img;
		this.binding.visible = true;
		this.goto_group.visible = false;
		this.binding_status.visible = false;
		this.status_txt.text = this.data.binding.unfortunately;
		this.btn_success.visible = true;
		this.btn_goBinding.visible = false;
		this.btn_down.visible = false;
	}
	//上链
	public onHasBinding() {
		this.head_img.source = this.data.binding.binding_img;
		this.binding.visible = true;
		this.goto_group.visible = false;
		this.binding_status.visible = false;
		this.status_txt.text = this.data.binding.successfully;
		this.btn_goBinding.visible = true;
		this.btn_down.visible = true;
		this.btn_success.visible = false;
	}
	//关闭消息框
	private onCloseBinding() {
		this.binding.visible = false;
		this.btn_goBinding.visible = false;
		this.btn_down.visible = false;
		this.btn_success.visible = false;
		this.down_group.visible = false;
		this.status_txt.text = '';
		Index.Shared().full_mask.visible = false;
		Records.Shared().full_mask.visible = false;		
		
	}
	//去绑定
	private onGotoBinding() {
		this.binding.visible = false;
		this.goto_group.visible = true;
		this.binding_status.visible = false;
		this.binding.visible = false;
	}
	//去下载
	private onGoToWallet() {
		this.down_group.visible = true;
		this.binding.visible = false;
	}
	//关闭下载
	private onCloseWallet() {
		this.down_group.visible = false;
		this.binding.visible = true;
	}
	//关闭输入地址框
	private onCloseGoto() {
		this.adderss.text = '';
		this.goto_group.visible = false;
		this.binding.visible = true;
	}
	//绑定事件
	private onBtnBinding() {
		//实例化一个参数对象。
		var params = new Params('miner/wallet/bind_wallet');
		//合并参数
		var paramsData = params.mergeDataByJsonStr({walletAddr:this.adderss.text});
		// //ws发送信息
		Records.Shared().ws.sendData({
            data:paramsData,
            receiveCallBack:(res)=>{
				this.wait.hide();
                //请求道具或者工具信息
                if(res.code == 0) {
					this.binding.visible = false;
					this.goto_group.visible = false;
					this.binding_status.visible = true;
					Records.Shared().onShowIncome();
                }else {
					Records.Shared().tips.showTips(res.msg);
                }
            }
        });
		// if(this.adderss.text == '') {
		// 	this.tips.showTips(this.data.binding.enter_adder);
		// }else {
		// 	var httpReq = new HttpReq();
		// 	var url:string = 'v1.1/miner/bind_wallet';
		// 	this.wait.show();
		// 	httpReq.POST({
		// 		url:url,
		// 		data:{walletAddr:this.adderss.text},
		// 		success:(res)=>{
		// 			var res = JSON.parse(res);
		// 			if(res.code == 0){
		// 				this.binding.visible = false;
		// 				this.goto_group.visible = false;
		// 				this.binding_status.visible = true;
		// 			}else{
		// 				this.tips.showTips(res.msg);
		// 			}
		// 			this.wait.hide();
		// 		},
		// 		error:(error)=>{
		// 			this.wait.hide();
		// 			this.tips.showTips(this.data.indexTs.network_error);				
		// 		}
		// 	});
		// }
		
	}
	private onCloseStatus() {
		this.binding_status.visible = false;
		Index.Shared().full_mask.visible = false;
	}
	//去上链
	private goToPlay() {
		//跳转到上链界面


		// //教程
		// Index.Shared().removeChild(Index.Shared().binding);
		// Index.Shared().full_mask.visible = false;
		// Index.Shared().parent.addChild(Guidance.Shared());
		// Index.Shared().parent.removeChild(Index.Shared());
	}
	
}