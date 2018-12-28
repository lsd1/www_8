class MinerGoods extends eui.ItemRenderer{
	private static shared:MinerGoods;
	public static Shared() {
		if(this.shared == null){
			this.shared = new MinerGoods();
		}
		return this.shared;
	}
	public minerGoods:eui.Group;
	private btn_close:eui.Image;
	private group_good:eui.Group;//物品盒子
	private group_egg:eui.Group;//蛋盒子

	private no_egg:eui.Label;

	//道具数量数组
	public toolList = [];
	public toolArr = [];

	public constructor() {
		super();
		this.top = 0;
        this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.skinName = 'resource/garden_skin/miner/MinerGoods.exml';
		this.data = Main.Shared().lang_config;
		this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseTheGoods,this);
		this.no_egg.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGoPayEgg,this);
	}
	//关闭物品框
	public onCloseTheGoods() {
		this.minerGoods.visible = false;
		Working.Shared().full_mask.visible = false;
	}
	//前往购买
	private onGoPayEgg() {
		this.onCloseTheGoods();
		Working.Shared().parent.addChild(Transaction.Shared());
		Working.Shared().parent.removeChild(Working.Shared());
		Transaction.Shared().onTransactionLists({}, 2);
	}

	//界面显示
	public onShowMinerGood(data) {
		// this.group_good.removeChildren();
		this.group_egg.removeChildren();
		if(data.toolList.eggs.length ==0) {
			this.no_egg.visible = true;
		}else {
			this.no_egg.visible = false;
		}
		var toolList = data.toolList;
		var k = 0;//区分大类
		var list = new eui.List();//创建icon
		var collection = [];//储存数据
		list.itemRenderer = MinerGoodList;
		list.dataProvider = new eui.ArrayCollection(collection);
		list.x = 25;
		var tlayout = new eui.TileLayout();//设置icon布局
		tlayout.horizontalGap = 20;
		tlayout.verticalGap = 50;
		tlayout.requestedColumnCount = 4;
		list.layout = tlayout;
		//遍历大类
		for(var j in toolList) {
			var titleImage = new eui.Image('auction_json.shutiao');//大类标题
			var title_content = new eui.Label();
			switch(j){   
				case 'miner':
					title_content.text = this.data.minerGoods.miner;															
				break;
				case 'eggs':
					title_content.text = this.data.minerGoods.eggs;													
				break;
			}
			for(var i = 0; i < toolList[j].length; i++){//遍历icon
				this.toolList[j+toolList[j][i].id] = toolList[j][i];
				var x = (i % 4) * 130 + 25;//x值
				if(k>0){
					toolList[j][i].key = j + toolList[j][i].id;
					collection.push(toolList[j][i]);
				}else{
					var y = 50 + 235 * Math.floor(i / 4);
					var toolsList = new MinerGoodList(j + toolList[j][i].id, x, y);			
					this.group_good.addChild(toolsList);	
					this.toolArr[j + toolList[j][i].id] = toolsList;											
				}
			}
			titleImage.x = 25;//大类标题样式
			titleImage.y = 265 * (k * 2);
			title_content.textColor= 0x5E4609;
			title_content.bold= true;
			title_content.x = 45;
			title_content.y = 265 * (k * 2);
			this.group_good.addChild(titleImage);//添加标题
			this.group_good.addChild(title_content);
			k++;
		}
		this.group_egg.height = 270 * Math.ceil(i / 4);
		this.group_egg.addChild(list);
		this.group_egg.cacheAsBitmap = true;
		this.group_good.cacheAsBitmap = true;
	}
}