class GoodsUse extends eui.ItemRenderer{
	private static shared:GoodsUse;
	public static Shared() {
		if(this.shared == null){
			this.shared = new GoodsUse();
		}
		return this.shared;
	}

    //使用道具控件
	private goodsUse:eui.Group;
	//关闭按钮
    private use_close:eui.Image;
    //道具图片
    private use_prop_img:eui.Image;
    //道具说明
    public use_prop_intro:eui.Group;
    public use_prop_bg:eui.Image;
    public use_prop_number:eui.Label;

    //叠加使用控件
    private use_pay:eui.Group;
    //购买数量
	private use_pay_num:eui.Group;
	//增加按钮
	private use_pay_add:eui.Button;
	//减少按钮
	private use_pay_dec:eui.Button;
    //输入框
	public usePayinput:any;
    public use_num:number;

    //确定按钮
    private use_prop_dete:eui.Group;
    //道具Id
    public toolId:number;
    //道具数量
    public num:number;
    //num_text
    public num_text:eui.Label;
    //使用按钮
    private use_btn:eui.Group;

	//toolInfo
    private toolInfo:any;
    //key,该道具在toollist里面的对应key.
	public key:any;


	public constructor() {
		super();
		this.top = 0;
        this.left = 0;
        this.right = 0;
        this.bottom = 0;
		this.data = Main.Shared().lang_config;
		this.skinName = 'resource/garden_skin/miner/GoodsUse.exml';
		// 增加数量
		this.use_pay_add.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onPayAddClick,this);
		//减少数量
		this.use_pay_dec.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onPayDecClick,this);
		//关闭按钮
		this.use_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseTheUse,this);
		//使用按钮
		this.use_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.useTheTool,this);
	}
	//关闭按钮
	private onCloseTheUse() {
		this.goodsUse.visible = false;
		// this.use_status.visible = false;
		GoodsIntro.Shared().props.visible = true;
	}

	//显示界面
	public onShowTheUse(info:any, key:any) {
		this.goodsUse.visible = true;
		this.key = key;
		this.toolInfo = info;
		this.toolId = info.id;
		console.log(this.toolId);
		if(this.toolId == 17) {
			this.use_prop_bg.source = 'minerV1_json.clz_jwj _2x';
		}else {
			this.use_prop_bg.source = 'auction_json.baidikuang';
		}
        this.num = info.num;
		if(info.isBatch == 1) {
            this.use_pay.visible = true;
            this.use_pay_num.removeChildren();
            this.usePayinput = new UsePayInput(this.num);
            this.use_num = parseInt(this.usePayinput.text_type.text);
            this.use_pay_num.addChild(this.usePayinput);
			this.goodsUse.height = 600;
        }else{
            this.use_pay.visible = false;
			this.goodsUse.height = 500;
        }
		this.num_text.text = MinerGoods.Shared().toolList[this.key].num + '个';
		Common.Shared().loadImg(info.icon).then((texture:egret.Texture)=>{
			this.use_prop_img.source = texture;
		});
	}
	//增加按钮
	private onPayAddClick() {
		this.usePayinput.addClick();
	}
    
    //减少按钮
	private onPayDecClick() {
		this.usePayinput.decClick();
	}

	//使用请求
	private useTheTool() {
		Working.Shared().wait.show();
		var useNum:number = 1;
        if(this.toolInfo.isBatch == 1){
            useNum = Number(this.usePayinput.text_type.text);
        }
		if(this.key.indexOf('egg') == -1) {
			//请求使用物品
			//实例化一个参数对象。
			var params = new Params('miner/tool/use_tool');
			//合并参数
			var paramsData = params.mergeDataByJsonStr({toolId:this.toolId, num:useNum});
			// //ws发送信息
			Working.Shared().ws.sendData({
				data:paramsData,
				receiveCallBack:(res)=>{
					Working.Shared().wait.hide();
					//请求道具或者工具信息
					if(res.code == 0) {
						//使用肾上腺素
						// if(this.toolId == 20) {
						// 	console.log('打个针');
						// 	Working.Shared().refreshAdren(10000);
						// }
						GoodsUse.Shared().goodsUse.visible = false;
						var theData = res.msg;
						Working.Shared().tips.showTips(theData);
						Working.Shared().full_mask.visible = false;
					}else {
						Working.Shared().tips.showTips(res.msg);
					}
				}
			});
		}else {
			Working.Shared().wait.hide();
			Common.Shared().secondPwd(this.afterPwd, GoodsUse.Shared().goodsUse, true);
		}
	}
	//使用蛋成功
	private afterPwd(pwd:string, afterData?:any) {
		var pinCode = hex_md5(pwd);
		//请求使用蛋
		//实例化一个参数对象。
		var params = new Params('miner/tool/use_egg');
		//合并参数
		var paramsData = params.mergeDataByJsonStr({eggId:GoodsUse.Shared().toolId, pinCode:pinCode});
		// //ws发送信息
		Working.Shared().ws.sendData({
			data:paramsData,
			receiveCallBack:(res)=>{
				Working.Shared().wait.hide();
				//请求道具或者工具信息
				if(res.code == 0) {
					Working.Shared().full_mask.visible = false;
					GoodsUse.Shared().goodsUse.visible = false;
					var theData = res.msg;
					Working.Shared().tips.showTips(theData);
				}else {
					Working.Shared().tips.showTips(res.msg);
				}
			}
		});
	}


}