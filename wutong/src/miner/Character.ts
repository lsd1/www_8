class Character extends eui.ItemRenderer{
	private static shared:Character;
	public static Shared() {
		if(this.shared == null){
			this.shared = new Character();
		}
		return this.shared;
	}

	//ws初始化
    public ws:any;
	public tips:Tips = new Tips();
    public wait:Wait = new Wait();
	public btn_close:eui.Image;//关闭图片

	private list_box:eui.Group;

	//弹框
	public group_tips:eui.Group;
	private tips_text:eui.Label;
	private tips_close:eui.Group;
	private btn_buy:eui.Group;
	private btn_service:eui.Group;
	
	private skinId:number;
	private amount:number;

	//介绍
	private introduction:eui.Group;
	private btn_close_intro:eui.Image;
	private group_intro:eui.Group;
	private payDetail:any;

	public constructor() {
		super();
		this.skinName = "resource/garden_skin/miner/Character.exml";
		this.data = Main.Shared().lang_config;
		this.addChild(this.tips);
        this.addChild(this.wait);
		this.ws = WsReq.Shared();
		this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeSelf,this);
		this.tips_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeGroupTips,this);
		this.btn_buy.addEventListener(egret.TouchEvent.TOUCH_TAP,this.paySkin,this);
		this.btn_service.addEventListener(egret.TouchEvent.TOUCH_TAP,this.serveceInfo,this);
		this.introduction.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showIntroduction,this);
		this.btn_close_intro.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeIntroduction,this);
	}
	//请求上行
	public showCharacter() {
		Working.Shared().wait.show();

		//实例化一个参数对象。
		var params = new Params('miner/skins');
		//合并参数
		var paramsData = params.mergeDataByJsonStr({});
		//ws发送信息
        this.ws.sendData({
            data:paramsData,
            receiveCallBack:(res)=>{
				Working.Shared().wait.hide();
                //请求道具或者工具信息
                if(res.code == 0) {
					Working.Shared().full_mask.visible = true;
					console.log(res.data);
                    this.showRendering(res.data.skins);
                }else {
                    Character.Shared().tips.showTips(res.msg);
                }
            }
        });
	}
	//关闭大盒子
	private closeSelf() {
		Working.Shared().removeChild(Character.Shared());
		Working.Shared().full_mask.visible = false;
	}
	//显示数据
	private showRendering(skins) {
		this.list_box.removeChildren();
		var list = new eui.List();
		var collection = skins;
		list.itemRenderer = CharacterList;
		list.dataProvider = new eui.ArrayCollection(collection);
		this.list_box.addChild(list);
	}
	//显示介绍
	private showIntroduction() {
		this.group_intro.visible = true;
	}
	// 关闭介绍
	private closeIntroduction() {
		this.group_intro.visible = false;
	}
	//显示弹框
	public showGroup(text:string, type:number, id?:number) {
		this.group_tips.visible = true;
		
		// type=1为购买，=2为维修
		if(type == 1) {
			this.btn_service.visible = false;
			this.btn_buy.visible = true;
			this.tips_text.text = "尚未拥有该皮肤，是否花费" + text + "购买";
		}else {
			this.btn_service.visible = true;
			this.btn_buy.visible = false;
			this.tips_text.text = "是否花费" + text + "进行维修皮肤?";
		}
		if(id) {
			this.skinId = id;
		}

	}
	
	//再想想
	private closeGroupTips() {
		this.group_tips.visible = false;
	}
	// 购买
	private paySkin() {
		//实例化一个参数对象。
		var params = new Params('miner/skin/buy_skin');
		//合并参数
		var paramsData = params.mergeDataByJsonStr({skinId:this.skinId});
		//ws发送信息
        this.ws.sendData({
            data:paramsData,
            receiveCallBack:(res)=>{
				Working.Shared().wait.hide();
                //请求道具或者工具信息
                if(res.code == 0) {
					this.payDetail = res.data;
					Character.Shared().payToolInfo(this.payDetail);
                }else {
                    Character.Shared().tips.showTips(res.msg);
                }
            }
        });
	}
	private payToolInfo(data) {
		Common.Shared().secondPwd(this.payAfterPwd, Character.Shared().group_tips, false, data);
	}
	private payAfterPwd(pwd:string, afterData?:any) {
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
                //请求道具或者工具信息
                if(res.code == 0) {
					Character.Shared().showCharacter();
					Working.Shared().tips.showTips(Character.Shared().data.character.buy_succ);
                }else {
                    Working.Shared().tips.showTips(res.msg);
                }
            }
        });
	}

	//维修
	public servecePay(payDetail) {
		this.payDetail = payDetail;
	}
	private serveceInfo() {
		Common.Shared().secondPwd(this.payAfterPwd, Character.Shared().group_tips, false, this.payDetail);
	}
}