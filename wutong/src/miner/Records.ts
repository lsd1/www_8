class Records extends eui.ItemRenderer{
	private static shared:Records;
	public static Shared() {
		if(this.shared == null){
			this.shared = new Records();
		}
		return this.shared;
	}

	//界面
	private records:eui.Group;
	//遮罩
	public full_mask:eui.Group;
	//返回
	private btn_go_back:eui.Group;
	//使用记录
	private use_record:eui.Group;
	private use_one:eui.Image;
	//我的收益
	private my_income:eui.Group;
	private income_one:eui.Image;
	//盒子
	private list_group:eui.Group;
	private list_scroller:any;

	//手续费
	public taxNum:number = null;
	public totalProfit:string;
	
	public logArr:any[] = [];

	public tips:Tips = new Tips();
	public wait:Wait = new Wait();
	public ws:any;

	public constructor() {
		super();
		this.top = 0;
        this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.ws = WsReq.Shared();
		this.addChild(this.tips);
		this.addChild(this.wait);
		this.skinName = 'resource/garden_skin/miner/Records.exml';
		this.data = Main.Shared().lang_config;
		//返回
		this.btn_go_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnGoBack,this);
		//使用记录
		this.use_record.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onShowRecord,this);
		//我的收益
		this.my_income.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onShowIncome,this);
	}
	//返回
	private btnGoBack() {
		this.parent.addChild(Working.Shared());
		this.parent.removeChild(this);
		Working.Shared().full_mask.visible = false;
	}
	//显示界面
	//使用记录
	public onShowRecord() {
		this.wait.show();
		this.list_group.removeChildren();
		this.logArr = [];
		this.use_one.visible = true;
		this.income_one.visible = false;
		//实例化一个参数对象。
		var params = new Params('miner/tool/log_list');
		//合并参数
		var paramsData = params.mergeDataByJsonStr({});
		// //ws发送信息
		Records.Shared().ws.sendData({
            data:paramsData,
            receiveCallBack:(res)=>{
				this.wait.hide();
                //请求道具或者工具信息
                if(res.code == 0) {
					var dataLogs = res.data.logs;
					var lastIds = res.data.lastIds;
					if(dataLogs.length != 0) {
						for(var i in dataLogs) {
							if(Records.Shared().logArr.indexOf(i) == -1) {
								Records.Shared().logArr.push(i);
							}
							for(var k = 0; k < dataLogs[i].length; k++) {
								Records.Shared().logArr.push(dataLogs[i][k]);
							}
						}
						this.list_scroller = new ScrollerRecordsUseList(Records.Shared().logArr, lastIds);
						this.list_group.addChild(this.list_scroller);
					}else {
						//记录为空
						this.list_scroller = new Empty();
						this.list_scroller.empty_text.text = this.data.records.no_use;
						this.list_scroller.horizontalCenter = 0;
						this.list_group.addChild(this.list_scroller);
					}
                }else {
					Records.Shared().tips.showTips(res.msg);
                }
            }
        });


	}
	//我的收益
	public onShowIncome() {
		this.wait.show();
		this.list_group.removeChildren();
		this.use_one.visible = false;
		this.income_one.visible = true;
		//实例化一个参数对象。
		var params = new Params('miner/wallet/profit_logs');
		//合并参数
		var paramsData = params.mergeDataByJsonStr({});
		// //ws发送信息
		Records.Shared().ws.sendData({
            data:paramsData,
            receiveCallBack:(res)=>{
				this.wait.hide();
                //请求道具或者工具信息
                if(res.code == 0) {
					this.totalProfit = res.data.totalProfit;
					var info = res.data;
					var list_scroller = ScrollerRecordsIncome.Shared();
					list_scroller.init(info);
					this.list_group.addChild(list_scroller);
					this.taxNum = res.data.taxNum;
                }else {
					Records.Shared().tips.showTips(res.msg);
                }
            }
        });
	}
}