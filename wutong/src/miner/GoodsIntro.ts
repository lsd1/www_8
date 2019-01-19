class GoodsIntro extends eui.ItemRenderer{
	private static shared:GoodsIntro;
	public static Shared() {
		if(this.shared == null){
			this.shared = new GoodsIntro();
		}
		return this.shared;
	}
	public props:eui.Group;
	private use_prop_bg:eui.Image;

	private btn_close:eui.Group;//关闭按钮
	private use_prop_img:eui.Image;//物品图片
	private intro_group:eui.Label;//内容展示
	private goods_name:eui.Label;//蛋或者物品名称
	private goods_intro:eui.Group;//物品详情
	private egg_num_group:eui.Group;//蛋编号盒子
	private egg_num:eui.Label;//蛋的编号


	private group_btn:eui.Group;//按钮盒子
	private btn_use_tool:eui.Group;//使用物品
	private btn_buy_tool:eui.Group;//购买物品
	private btn_use_tool_1:eui.Group;//使用物品
	

	//详情数据
	private toolInfo:any;
	//道具数量
	public num:number;
	//道具Id
	private goodId:number;
	//价格
	private priceHtml:any;
	//描述
	private introHtml:any;
	// //购买成功提示
	// public buySuccess:any;

	//key,该道具在toollist里面的对应key.
	public key:any;


	public constructor() {
		super();
		this.top = 0;
        this.left = 0;
        this.right = 0;
        this.bottom = 0;
		this.skinName = 'resource/garden_skin/miner/GoodsIntro.exml';
		this.data = Main.Shared().lang_config;
		this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseGoodsIntro,this);
		//使用物品
		this.btn_use_tool.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onUseTool,this);
		this.btn_use_tool_1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onUseTool,this);
		//购买物品
		this.btn_buy_tool.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onPayTool,this);
	}	
	//关闭按钮
	private onCloseGoodsIntro() {
		this.goods_name.text = '';
		this.props.visible = false;
		MinerGoods.Shared().minerGoods.visible = true;
		// Working.Shared().full_mask.visible = false;
	}

	//显示界面
	public onShowIntro(key:any, target?:any) {
		Working.Shared().wait.show();
		this.goods_intro.removeChildren();
		this.props.visible = true;
		this.key = key;
		this.num = 0; //初始化数据
		this.goodId = 0;
		var goodId = MinerGoods.Shared().toolList[key].id;
		if(goodId == 17) {
			this.use_prop_bg.source = 'minerV1_json.clz_jwj _2x';
		}else {
			this.use_prop_bg.source = 'auction_json.baidikuang';
		}
		if(key.indexOf('egg') == -1) {
			//实例化一个参数对象。
			var params = new Params('miner/tool/tool_info');
			//合并参数
			var paramsData = params.mergeDataByJsonStr({toolId:goodId});
			// //ws发送信息
			Working.Shared().ws.sendData({
				data:paramsData,
				receiveCallBack:(res)=>{
					Working.Shared().wait.hide();
					//请求道具或者工具信息
					if(res.code == 0) {
						MinerGoods.Shared().toolList[this.key] = res.data.toolInfo;
						this.toolInfo = MinerGoods.Shared().toolList[this.key];
						Common.Shared().loadImg(res.data.toolInfo.icon).then((texture:any)=>{
							this.use_prop_img.source = texture;
						});
						var extra =  this.toolInfo.extra;
						this.num = this.toolInfo.num;
						this.goodId = this.toolInfo.id;
						console.log(this.goodId);
						//miner物品
						//单价
						if(this.goodId == 20) {
							this.goods_name.text = parseInt(this.toolInfo.price) + this.data.goodsIntro.mge_num;
						}else {
							this.goods_name.text = parseInt(this.toolInfo.price) + this.data.goodsIntro.shared_num;
						}
						this.egg_num_group.visible = false;
						if(this.toolInfo.isBuy == 1) {
							this.btn_buy_tool.visible = true;
							this.btn_use_tool.visible = true;
							this.btn_use_tool_1.visible = false;
							this.goods_name.visible = true;
						}else {
							this.btn_buy_tool.visible = false;
							this.btn_use_tool.visible = false;
							this.btn_use_tool_1.visible = true;
							this.goods_name.visible = false;
						}
						this.introHtml = Common.Shared().getITextElement(this.toolInfo.tips, 427, this.goods_intro.height, 30, 0, 0);//物品说明
						// console.log(this.introHtml.height);
						this.goods_intro.addChild(this.introHtml);
						console.log(this.goods_intro.height);
						var baseHeight = this.introHtml.height - 100;
						this.goods_intro.height = baseHeight + 100;
						this.props.height = baseHeight + 640;
						this.intro_group.height = baseHeight + 30;
					}else {
						Working.Shared().tips.showTips(res.msg);
					}
				}
			});

		}else {
			//实例化一个参数对象。
			var params = new Params('miner/tool/egg_info');
			//合并参数
			var paramsData = params.mergeDataByJsonStr({eggId:goodId});
			//ws发送信息
			Working.Shared().ws.sendData({
				data:paramsData,
				receiveCallBack:(res)=>{
					Working.Shared().wait.hide();
					//请求道具或者工具信息
					if(res.code == 0) {
						MinerGoods.Shared().toolList[this.key] = res.data.eggInfo;
						this.toolInfo = MinerGoods.Shared().toolList[this.key];
						Common.Shared().loadImg(res.data.eggInfo.icon).then((texture:any)=>{
							this.use_prop_img.source = texture;
						});
						var extra =  this.toolInfo.extra;
						this.num = this.toolInfo.num;
						this.goodId = this.toolInfo.id;
						//蛋
						this.goods_name.text = extra.fullName;//几代
						this.egg_num_group.visible = true;//蛋的编号盒子
						this.egg_num.text = extra.NO;
						this.btn_buy_tool.visible = true;
						this.btn_use_tool.visible = true;
						this.btn_use_tool_1.visible = false;
						this.introHtml = Common.Shared().getITextElement('<font color="#3C2405" face="PingFang SC">  增加' + this.toolInfo.extra.minerAddHP + '点体力值</font>', 427, this.goods_intro.height, 30, 0, 0);//物品说明
						this.goods_intro.addChild(this.introHtml);

						var baseHeight = this.introHtml.height - 100;
						this.goods_intro.height = baseHeight + 180;
						this.props.height = baseHeight + 680;
						this.intro_group.height = baseHeight + 150;
					}else {
						Working.Shared().tips.showTips(res.msg);
					}
				}
			});
		}
	}

	//使用物品
	public onUseTool() {
		if(this.toolInfo.num == 0) {
			Working.Shared().tips.showTips(this.data.propsIntroTs.not_enough);
			return false;
		}
		this.props.visible = false;
		var goodsUse = GoodsUse.Shared();
		goodsUse.onShowTheUse(this.toolInfo, this.key);
		Working.Shared().addChild(goodsUse);
		// if(this.key.indexOf('egg') == -1) {
		// 	//物品使用
		// 	//实例化一个参数对象。
		// 	var params = new Params('miner/tool/tool_info');
		// 	//合并参数
		// 	var paramsData = params.mergeDataByJsonStr({toolId:goodId});
		// 	// //ws发送信息
		// 	Working.Shared().ws.sendData({

		// 	});
		// }
	}
	//购买物品
	private onPayTool() {
		if(this.key.indexOf('egg') == -1) {
			this.props.visible = false;
			var goodsPay = GoodsPay.Shared();
			goodsPay.onShowGoodsPay(this.toolInfo, this.key);
			Working.Shared().addChild(goodsPay);
		}else {
			this.onCloseGoodsIntro();
			MinerGoods.Shared().onCloseTheGoods();
			Working.Shared().parent.addChild(Transaction.Shared());
			Working.Shared().parent.removeChild(Working.Shared());
			Transaction.Shared().onTransactionLists({}, 2);
		}
		
	}
}