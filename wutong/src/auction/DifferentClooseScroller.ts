class DifferentClooseScroller extends eui.Scroller {
	private static shared:DifferentClooseScroller;
	public static Shared() {
		if(this.shared == null){
			this.shared = new DifferentClooseScroller();
		}
		return this.shared;
	}
	public differentClooseScroller:eui.Scroller;
	public list:any = new eui.List();
	private collection:any[];
	private langData:any;

	public constructor() {
		super();
		this.skinName = "resource/garden_skin/auction/DifferentClooseScroller.exml";
		this.langData = Main.Shared().lang_config;
		this.list.addEventListener(egret.Event.CHANGE,this.onListClick,this);
		
	}
	//显示
	public initShow(collection:any) {
		this.list.itemRenderer = DifferentList;
		this.collection = collection;
		// this.list.useVirtualLayout = false;
		this.list.dataProvider = new eui.ArrayCollection(this.collection);
		this.differentClooseScroller.viewport = this.list;
		this.cacheAsBitmap = false;
		this.list.useVirtualLayout = true;
	}


	//点击事件
	private onListClick(e:egret.Event) {
		// for(var i = 0; i < this.list.$children.length; i++) {
		// 	this.list.$children[i].diff_cur.visible = false;
		// 	this.list.$children[i].diff_txt.bold = false;
		// }
		// this.list.$children[this.list.selectedIndex].diff_cur.visible = true;
		// this.list.$children[this.list.selectedIndex].diff_txt.bold = true;
		Transaction.Shared().theNum = this.list.selectedIndex;
		switch(Transaction.Shared().theName){
			case "type":
				if(Transaction.Shared().theNum == 0) {
					Transaction.Shared().theDataList.lastId = 0;
					Transaction.Shared().theDataList.level = -1;
					Transaction.Shared().theDataList.goodsType = 0;
					Transaction.Shared().theDataList.orderBy = '';
					Transaction.Shared().theDataList.sort = '';
					Transaction.Shared().no_1.text = this.langData.transaction.type;
				}else if(Transaction.Shared().theNum == 1) {
					Transaction.Shared().theDataList.lastId = 0;
					Transaction.Shared().theDataList.goodsType = 2;
				}else if(Transaction.Shared().theNum == 2){
					Transaction.Shared().theDataList.lastId = 0;
					Transaction.Shared().theDataList.goodsType =  1;
				}else if(Transaction.Shared().theNum == 3){
					//梧桐果筛选
					Transaction.Shared().theDataList.lastId = 0;
					Transaction.Shared().theDataList.goodsType =  3;
				}
				Transaction.Shared().no_1.text = this.langData.differentCloose.typeList[Transaction.Shared().theNum];
				Transaction.Shared().no_2.text = this.langData.transaction.algebra;
				Transaction.Shared().no_3.text = this.langData.transaction.sorting;
				break;
			case "algebra":
				if(Transaction.Shared().theDataList.goodsType == 3) {
					Transaction.Shared().theDataList.lastId = 0;
					Transaction.Shared().theDataList.level = -1;
					if(Transaction.Shared().theNum == 0) {
						Transaction.Shared().no_2.text = this.langData.differentCloose.typeList[0];
					}
				}else {
					Transaction.Shared().theDataList.lastId = 0;
					Transaction.Shared().theDataList.level = Transaction.Shared().theNum;
					Transaction.Shared().no_2.text = this.langData.differentCloose.algebraList[Transaction.Shared().theNum];
				}
				break;
			case "sorting":
				if(Transaction.Shared().theNum == 0) {
					Transaction.Shared().theDataList.lastId = 0;
					Transaction.Shared().theDataList.orderBy ="date";
					Transaction.Shared().theDataList.sort = "desc";
				}else {
					Transaction.Shared().theDataList.lastId = 0;
					Transaction.Shared().theDataList.orderBy = "price";
					Transaction.Shared().theDataList.sort = "asc";
				}
				Transaction.Shared().no_3.text = this.langData.differentCloose.sortingList[Transaction.Shared().theNum];
				break;
		}
		Transaction.Shared().onTransactionLists(Transaction.Shared().theDataList);
		//清空索引号
		this.list.selectedIndex = null;
	}
}