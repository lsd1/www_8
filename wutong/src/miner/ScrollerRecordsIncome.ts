class ScrollerRecordsIncome extends eui.ItemRenderer{
	private static shared:ScrollerRecordsIncome;
	public static Shared() {
		if(this.shared == null){
			this.shared = new ScrollerRecordsIncome();
		}
		return this.shared;
	}

	private go_link:eui.Group;//上链按钮
	// private change_link:eui.Group;//更改链接
	private scroller_box:eui.Group;//日志盒子
	private exchange:eui.Group;

	private scroller_group:any;

	//现在收益
	private now_income:eui.Label;
	//累计收益
	private cumu_income:eui.Label;
	public group_logs:eui.Group;
	//当前链
	public the_link:eui.Label;
	//手续费
	private taxNum:number;

	//0:数据加载完成；1：需要加载更多；-1：没有更多
	public is_need_more = 0;
	public lastId:number = 0;
	public trnasactionArr:any[];
	//语言包
	private langData:any;

	//上链手续费储存
	public coChainTax:any;
	//钱包地址储存
	public wallet:string;

	public constructor() {
		super();
		this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.skinName = 'resource/garden_skin/miner/ScrollerRecordsIncome.exml';
		this.langData = Main.Shared().lang_config;
		//上链按钮
		// this.go_link.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goWinding,this);
		//更换按钮
		// this.change_link.addEventListener(egret.TouchEvent.TOUCH_TAP,this.changeLinking,this);
		//兑换按钮
		this.exchange.addEventListener(egret.TouchEvent.TOUCH_TAP,this.exchangeVSC,this);
	}


	//显示界面
	public init(info:any) {
		this.showLogs(info, info.logs);
		this.showIncome(info);
		this.coChainTax = info.config;
		this.wallet = info.wallet;
	}


	//显示日志
	public showLogs(info, listLog:any) {
		this.scroller_box.removeChildren();
		if(listLog.length != 0) {
			this.lastId = info.logs[info.logs.length - 1].id;
			this.scroller_group = new ScrollerProfitLogs(listLog, this.lastId);
		}else {
			this.scroller_group = new Empty();
			this.scroller_group.empty_text.text = this.langData.records.no_charge;
			this.scroller_group.horizontalCenter = 0;
		}
		this.scroller_box.addChild(this.scroller_group);
	}
	//界面内容
	public showIncome(info) {
		// this.change_link.visible = true;
		this.now_income.text = info.nowProfit;
		this.cumu_income.text = this.langData.scrollerRecordsIncome.cumulative +  info.totalProfit;
		// this.the_link.text = info.wallet;
		// console.log(this.the_link.text);
		this.taxNum = info.taxNum;
	}

	
	//上链按钮
	private goWinding() {
		//若未开放钱包则不能绑定钱包地址和上链
		if(this.coChainTax.walletAppIsOnline == 0) {
			//暂未开放
			Records.Shared().addChild(Winding.Shared());
			Winding.Shared().showWaitWind();
		}else {
			if(this.the_link.text != '') {
				//去上链
				Records.Shared().addChild(Winding.Shared());
				Winding.Shared().showWinding(ScrollerRecordsIncome.Shared().coChainTax);
			}else {
				//去绑定
				Records.Shared().addChild(Binding.Shared());
				Binding.Shared().onHasBinding();
				Records.Shared().full_mask.visible = true;
			}
		}
	}
	//更换按钮
	private changeLinking(e:egret.TouchEvent) {
		if(this.coChainTax.walletAppIsOnline == 0) {
			Records.Shared().tips.showTips(this.langData.scrollerRecordsIncome.stay_tuned);
		}else {
			Records.Shared().addChild(ChangeLink.Shared());
			ChangeLink.Shared().showGetCode(e);
			Records.Shared().full_mask.visible = true;
		}
	}
	//兑换按钮
	private exchangeVSC() {
		if(!Records.Shared().parent.contains(Extract.Shared())) {
			Records.Shared().parent.addChild(Extract.Shared());
		}
		Records.Shared().parent.removeChild(Records.Shared());
		console.log(22222);
	}
}