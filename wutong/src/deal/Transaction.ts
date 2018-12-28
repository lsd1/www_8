class Transaction extends eui.ItemRenderer{
	private static shared:Transaction;
	public static Shared() {
		if(this.shared == null){
			this.shared = new Transaction();
		}
		return this.shared;
	}
	public tips:Tips = new Tips();
	public wait:Wait = new Wait();

	//返回按钮
	private btn_go_back:eui.Group;
	//大控件
	private transaction:eui.Group;
	//我的拍卖
	private my_auc:eui.Group;

	//类型
	public no_1:eui.Label;
	private type:any;
	private type_c:eui.Image;
	private type_v:eui.Image;
	//代数
	public no_2:eui.Label;
	private algebra:any;
	private algebra_c:eui.Image;
	private algebra_v:eui.Image;
	//排序
	public no_3:eui.Label;
	private sorting:any;
	private sorting_c:eui.Image;
	private sorting_v:eui.Image;
	//导航栏
	private transaction_nav:eui.Group;
	//当前选择项
	private current:eui.Image;
	//列表盒子
	private list_group:eui.Group;

	

	private transaction_scroller:any;
	//暂无动态样式
	public empty:Empty = new Empty;
	//排序数据
	private diffArr:any;
	//选择框壳子
	private diff_group:eui.Group;
	private diff_show:any;
	//筛选列表的索引
	public theNum:number;
	//列表类别
	public theName:string;
	//筛选初始状态
	public theDataList:any = {level:-1, goodsType:0, orderBy:'', sort:'', lastId:0};

	//筛选返回页面
	public theStatus:number; // 1:梧桐首页 ，2：矿工物品 ,// 无， 正常返回


	public constructor() {
		super();
		this.skinName = "resource/garden_skin/deal/Transaction.exml";
		this.data = Main.Shared().lang_config;
		this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.addChild(this.wait);
		this.addChild(this.tips);
		//返回按钮
		this.btn_go_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goBackIndex,this);
		//我的交易
		this.my_auc.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goMyAucInter,this);
		this.type.theName = "type";
		this.algebra.theName = "algebra";
		this.sorting.theName = "sorting";
		this.transaction_nav.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onShowList,this);

	}

	//返回按钮
	private goBackIndex() {
		this.no_1.text = this.data.transaction.type;
		this.no_2.text = this.data.transaction.algebra;
		this.no_3.text = this.data.transaction.sorting;
		switch(this.theStatus) {
			case 1: //梧桐树首页
				this.parent.addChild(Index.Shared());
				this.parent.removeChild(this);
			break;
			case 2: //矿工物品，
				this.parent.addChild(Working.Shared());
				this.parent.removeChild(this);
				Working.Shared().showTheGoods();
			break;
			default:
				this.parent.addChild(Index.Shared());
				this.parent.removeChild(this);

		}
	}
	//我的交易
	private goMyAucInter() {
		this.parent.addChild(MyTransaction.Shared());
		MyTransaction.Shared().onBidMoneyList();
		this.parent.removeChild(this);
	}

	//默认排序
	public onTransactionLists(theData?:any, theStatus?:number) {
		if(theData == {}) {
			this.no_1.text = this.data.transaction.type;
			this.no_2.text = this.data.transaction.algebra;
			this.no_3.text = this.data.transaction.sorting;
		}
		this.theStatus = theStatus;
		if(this.list_group.contains(this.transaction_scroller)) {
			this.list_group.removeChild(this.transaction_scroller);
		}
		if(this.list_group.contains(this.empty)) {
			this.list_group.removeChild(this.empty);
		}
		this.default();
		Transaction.Shared().wait.show();
		var httpReq  = new HttpReq();
		var url:string = "v1.1/bird/trade/trade_list";
		httpReq.GET({
			url:url,
			data:theData,
			success:(res) =>{
				var res = JSON.parse(res);
				if(res.code == 0) {
					var tradeList = res.data.tradeList;
					if(tradeList.length > 0) {
						this.transaction_scroller = new ScrollerTransaction(tradeList, tradeList[tradeList.length - 1].id);
						this.list_group.addChild(this.transaction_scroller);
					}else {
						this.empty.onShowEmpty();
						this.empty.empty_text.text = this.data.transactionTs.no_history;
						this.empty.horizontalCenter = 0;
						this.list_group.addChild(this.empty);
					}
				}else {
					Transaction.Shared().tips.showTips(res.msg);
				}
				Transaction.Shared().wait.hide();   
			},
			error:(error) =>{
				Transaction.Shared().wait.hide();                   
				Transaction.Shared().tips.showTips(this.data.transactionTs.network_error);
			}
		});
	}
	//初始状态
	private default() {
		this.type_c.visible = false;
		this.type_v.skewX = 0;
		this.algebra_c.visible = false;
		this.algebra_v.skewX = 0;
		this.sorting_c.visible = false;
		this.sorting_v.skewX = 0;
		this.diff_show = '';
		this.diff_group.visible = false;
		// this.theNum = null;
		this.theName = '';
	}
	//显示列表
	private onShowList(e:egret.TouchEvent) {
		if(e.target.$children) {
			this.theName = e.target.theName;
		}else {
			this.theName = e.target.parent.theName;
		}
		if(this.diff_show == this.theName) {
			this.default();
			// //清空索引号
			// DifferentClooseScroller.Shared().list.selectedIndex = null;
		}else {
			this.distinguish();
		}
		
		
	}

	//筛选区分
	public distinguish() {
		switch(this.theName){
			case "type":
				this.diff_show = this.theName;
				this.onTypeList();
				break;
			case "algebra":
				this.diff_show = this.theName;
				this.onAlgebraList();
				break;
			case "sorting":
				this.diff_show = this.theName;
				this.onSortingList();
				break;
		}
	}
	//类型
	private onTypeList() {
		this.type_c.visible = true;
		this.type_v.skewX = 180;
		this.algebra_c.visible = false;
		this.algebra_v.skewX = 0;
		this.sorting_c.visible = false;
		this.sorting_v.skewX = 0;
		DifferentClooseScroller.Shared().initShow(this.data.differentCloose.typeList);
		this.diffArr = DifferentClooseScroller.Shared();
		this.diff_group.addChild(this.diffArr);
		this.diff_group.visible = true;
	}
	//代数
	private onAlgebraList() {
		this.type_c.visible = false;
		this.type_v.skewX = 0;
		this.algebra_c.visible = true;
		this.algebra_v.skewX = 180;
		this.sorting_c.visible = false;
		this.sorting_v.skewX = 0;
		if(Transaction.Shared().theDataList.goodsType ==3) {
			DifferentClooseScroller.Shared().initShow([this.data.differentCloose.typeList[0]]);
		}else {
			DifferentClooseScroller.Shared().initShow(this.data.differentCloose.algebraList);
		}
		this.diffArr = DifferentClooseScroller.Shared();
		this.diff_group.addChild(this.diffArr);
		this.diff_group.visible = true;
	}
	//排序
	private onSortingList() {
		this.type_c.visible = false;
		this.type_v.skewX = 0;
		this.algebra_c.visible = false;
		this.algebra_v.skewX = 0;
		this.sorting_c.visible = true;
		this.sorting_v.skewX = 180;
		DifferentClooseScroller.Shared().initShow(this.data.differentCloose.sortingList);
		this.diffArr = DifferentClooseScroller.Shared();
		this.diff_group.addChild(this.diffArr);
		this.diff_group.visible = true;
	}
	
}