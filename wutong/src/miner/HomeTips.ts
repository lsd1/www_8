class HomeTips extends eui.ItemRenderer{
	private static shared:HomeTips;
	public static Shared() {
		if(this.shared == null){
			this.shared = new HomeTips();
		}
		return this.shared;
	}
	//购买初始工具
	public pay_tool:eui.Group;
	private btn_pay_tools:eui.Group;
	private tool_explain:eui.Label;
	private btn_close_tool:eui.Image;
	//购买物品
	public pay_goods:eui.Group;
	private btn_pay_goods:eui.Group;
	private btn_close_goods:eui.Image;

	//初始道具信息储存
	private payDetail:any;

	public constructor() {
		super();
		this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.skinName = 'resource/garden_skin/miner/HomeTips.exml';
		this.data = Main.Shared().lang_config;
		this.btn_pay_tools.addEventListener(egret.TouchEvent.TOUCH_TAP,this.payTool,this);
		this.btn_pay_goods.addEventListener(egret.TouchEvent.TOUCH_TAP,this.payGoods,this);
		//关闭按钮
		this.btn_close_tool.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGoBack,this);
		this.btn_close_goods.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClose,this);
	}
	//关闭按钮
	private onClose() {
		this.pay_goods.visible = false;
		this.pay_tool.visible = false;
		Working.Shared().full_mask.visible = false;
	}
	//返回梧桐树
	private onGoBack() {
		Working.Shared().parent.addChild(Index.Shared());
		Working.Shared().parent.removeChild(Working.Shared());
		// Index.Shared().
	}
	//道具详情显示
	public showTool(detail) {
		this.pay_tool.visible = true;
		this.pay_goods.visible = false;
		this.tool_explain.text = this.data.homeTips.minerDont + detail.amount + this.data.homeTips.toBuy;
	}
	//请求购买初始道具信息
	public payToolInfo() {
		//实例化一个参数对象。
		var params = new Params('miner/prop/put_prop_order');
		//合并参数
		var paramsData = params.mergeDataByJsonStr({});
		//ws发送信息
		Working.Shared().ws.sendData({
            data:paramsData,
            receiveCallBack:(res)=>{
                if(res.code == 0) {
					this.payDetail = res.data;
                    if(!Working.Shared().contains(HomeTips.Shared())) {
                        Working.Shared().addChild(HomeTips.Shared());
                    }
                    HomeTips.Shared().showTool(this.payDetail);
                    Working.Shared().full_mask.visible = true;
                }else {
                    Working.Shared().tips.showTips(res.msg);
                }
            }
        });
	}
	//购买初始道具
	private payTool() {
		Common.Shared().secondPwd(this.afterPwd, HomeTips.Shared().pay_tool, true, this.payDetail);
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
                if(res.code == 0) {
					//初始道具购买
					HomeTips.Shared().onPaySuccess();
                }else {
                    Working.Shared().tips.showTips(res.msg);
                }
            }
        })
	}
	//购买成功
	public onPaySuccess() {
		this.pay_tool.visible = false;
		this.pay_goods.visible = true;
	}
	//前往物品
	public payGoods() {
		//跳转
		Working.Shared().removeChild(this);
		Working.Shared().showTheGoods();
	}
}