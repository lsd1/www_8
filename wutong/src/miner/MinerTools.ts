class MinerTools extends eui.ItemRenderer{
	private static shared:MinerTools;
	public static Shared() {
		if(this.shared == null){
			this.shared = new MinerTools();
		}
		return this.shared;
	}

	//装备界面
	public theTools:eui.Group;
	private head_img:eui.Image;

	private service:eui.Image;//维修
	private rise:eui.Image;//支付
	private btn_close_theTool:eui.Image;
	//当前列
	private now_list:eui.Group;
	private now_img:eui.Image;//物品图片
	private now_name:eui.Label;//物品名字
	private now_duration:eui.Label;//耐久度
	private now_useTime:eui.Label;//使用时长
	private now_addWeight:eui.Label;//1工具提升的效率/2/装备降低的消耗
	private the_now_type:eui.Label;//1提升效率/2/降低消耗
	//箭头
	private arrow_img:eui.Image;
	//升级列 
	private next_list:eui.Group;
	private next_img:eui.Image;//物品图片
	private next_name:eui.Label;//物品名字
	private next_duration:eui.Label;//耐久度
	private next_useTime:eui.Label;//使用时长
	private next_addWeight:eui.Label;//1工具提升效率//2装备降低消耗
	private the_next_type:eui.Label;//1提升效率/2/降低消耗

	//购买界面
	private pay:eui.Group;
	private head_pay_img:eui.Image;
	private btn_close_pay:eui.Image;
	private btn_pay:eui.Group;//支付按钮
	private btn_success:eui.Group;//确定按钮
	private status_txt:eui.Label;//支付状态
	//装备详情储存
	private payDetail:any;
	private type:number;
	private features:number;//区分升级还是维修1升级2维修




	public constructor() {
		super();
		this.top = 0;
        this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.skinName = 'resource/garden_skin/miner/MinerTools.exml';
		this.cacheAsBitmap = true;
		this.data = Main.Shared().lang_config;
		this.btn_close_theTool.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeTheTools,this);//关闭按钮
		this.service.addEventListener(egret.TouchEvent.TOUCH_TAP,this.servicePush,this);//维修请求
		this.btn_pay.addEventListener(egret.TouchEvent.TOUCH_TAP,this.payToolInfo,this);//维修支付确定

		this.btn_close_pay.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closePayTips,this);//关闭支付界面
		this.btn_success.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnPaySuccess,this);//确定按钮关闭
		this.rise.addEventListener(egret.TouchEvent.TOUCH_TAP,this.riseClick,this);//升级
	}

	//关闭按钮
	private closeTheTools() {
		this.theTools.visible = false;
		Working.Shared().full_mask.visible = false;
	}
	//生成界面
	public onShowTheTool(type:number) {
		this.type = type;
		Working.Shared().wait.show();
        //实例化一个参数对象。
		var params = new Params('miner/prop/prop_info');
		//合并参数
		var paramsData = params.mergeDataByJsonStr({propType:type});
		// //ws发送信息
        Working.Shared().ws.sendData({
            data:paramsData,
            receiveCallBack:(res)=>{
                Working.Shared().wait.hide();
                //请求道具或者工具信息
                if(res.code == 0) {
                    //生成页面
					Working.Shared().full_mask.visible = true;
					this.theTools.visible = true;
					this.refresh(res.data);
                }else {
                    Working.Shared().tips.showTips(res.msg);
                }
            }
        });
	}
	//刷新界面
	public refresh(theData) {
		//当前使用
		var nowData = theData.propInfo;
		Common.Shared().loadImg(nowData.icon).then((texture:egret.Texture)=>{
			this.now_img.source = texture;
		});
		this.now_name.text = nowData.name;
		this.now_duration.text = nowData.duration + '/' + nowData.maxDuration;
		this.now_useTime.text = nowData.useTime;
		
		this.now_addWeight.text = nowData.addWeight + '%';
		//升级以后
		var nextData = theData.nextPropInfo;
		if(nextData.length != 0) {
			this.rise.visible = true;
			this.next_list.visible = true;
			this.arrow_img.visible = true;
			this.theTools.height = 888;
			Common.Shared().loadImg(nextData.icon).then((texture:egret.Texture)=>{
				this.next_img.source = texture;
			});
			this.next_name.text = nextData.name;
			this.next_duration.text = nextData.duration + '/' + nextData.maxDuration;
			this.next_useTime.text = nextData.useTime;
			this.next_addWeight.text = nextData.addWeight + '%';
		}else {
			this.theTools.height = 500;
			this.rise.visible = false;
			this.arrow_img.visible = false;
			this.next_list.visible = false;
		}
		//装备与工具的区分
		if(this.type == 1) {
			this.head_img.source = this.data.minerTools.tool;
			this.now_addWeight.text = nowData.addWeight + '%';
			this.the_now_type.text = this.data.minerTools.improve;
			this.next_addWeight.text = nextData.addWeight + '%';
			this.the_next_type.text = this.data.minerTools.improve;
		}else {
			this.head_img.source = this.data.equips.equip;
			this.now_addWeight.text = nowData.cutExpend + '%';
			this.the_now_type.text = this.data.equips.reduce;
			this.next_addWeight.text = nextData.cutExpend + '%';
			this.the_next_type.text = this.data.equips.reduce;
		}
	}
	//维修请求发送
	public servicePush() {
		this.features = 1;
		Working.Shared().wait.show();
		//实例化一个参数对象。
		var params = new Params('miner/prop/put_repair_order');
		//合并参数
		var paramsData = params.mergeDataByJsonStr({propType:MinerTools.Shared().type});
		// //ws发送信息
		Working.Shared().ws.sendData({
            data:paramsData,
            receiveCallBack:(res)=>{
				Working.Shared().wait.hide();
                //请求道具或者工具信息
                if(res.code == 0) {
					this.payDetail = res.data;
					MinerTools.Shared().serviceClick(this.payDetail);
                }else {
                    Working.Shared().tips.showTips(res.msg);
                }
            }
        });
	}
	//维修&升级确定界面//储存数据
	public serviceClick(data) {
		this.pay.visible = true;
		this.theTools.visible = false;
		this.btn_pay.visible = true;
		this.btn_success.visible = false;
		var frontTxt = '';
		var behindTxt = '';
		if(this.type == 1) {
			this.head_pay_img.source = this.data.minerTools.tool;
		}else {
			this.head_pay_img.source = this.data.equips.equip;
		}
		if(this.features == 1) {
			this.status_txt.text = this.data.minerTools.does + data.amount + this.data.minerTools.shared + this.now_name.text + '?';
		}else {
			this.status_txt.text = this.data.minerTools.upgarde + data.amount + this.data.minerTools.sharedUp + this.now_name.text + this.data.minerTools.to + this.next_name.text + '?';
		}

	}
	public payToolInfo() {
		Common.Shared().secondPwd(this.afterPwd, MinerTools.Shared().pay, true, this.payDetail);
	}
	public afterPwd(pwd:string, afterData?:any) {
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
					MinerTools.Shared().btnGoPayClick();
                }else {
                    Working.Shared().tips.showTips(res.msg);
                }
            }
        });
	}
	//支付成功
	public btnGoPayClick() {
		this.pay.visible = true;
		this.theTools.visible = false;
		this.btn_pay.visible = false;
		this.btn_success.visible = true;
		if(this.features == 2) {
			this.status_txt.text = this.data.minerTools.up_success;
		}else {
			if(this.type == 1) {
				this.status_txt.text = this.data.minerTools.congratulations;
			}else {
				this.status_txt.text = this.data.equips.congratulations;
			}
		}
		if(this.type == 1) {
			this.head_pay_img.source = this.data.minerTools.tool;
		}else {
			this.head_pay_img.source = this.data.equips.equip;
		}
	}
	//确定按钮关闭
	private btnPaySuccess() {
		this.pay.visible = false;
		Working.Shared().full_mask.visible = false;
	}
	//升级请求发送
	private riseClick() {
		this.features = 2;
		Working.Shared().wait.show();
		//实例化一个参数对象。
		var params = new Params('miner/prop/put_upgrade_order');
		//合并参数
		var paramsData = params.mergeDataByJsonStr({propType:MinerTools.Shared().type});
		// //ws发送信息
		Working.Shared().ws.sendData({
            data:paramsData,
            receiveCallBack:(res)=>{
				Working.Shared().wait.hide();
                //请求道具或者工具信息
                if(res.code == 0) {
					this.payDetail = res.data;
					MinerTools.Shared().serviceClick(this.payDetail);
                }else {
                    Working.Shared().tips.showTips(res.msg);
                }
            }
        });
	}
	private closePayTips() {
		this.pay.visible = false;
		this.theTools.visible = true;
	}
}