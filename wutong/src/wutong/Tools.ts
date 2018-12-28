class Tools extends eui.ItemRenderer {
	//单例
	private static shared:Tools;
	public static Shared() {
		if(this.shared == null) {
			this.shared = new Tools();
		}
		return this.shared;
	}

	//物品列表
	public group_inter:eui.Group;
	//物品组件
	private group_tool:eui.Group;
	//关闭按钮
	public btn_close_interaction:eui.Image;
	//道具数量数组
	public toolList = [];
	public toolArr = [];
	public x:number;
	public y:number;
	//暂无凤凰蛋
	public no_egg:eui.Label;

	//道具列表
	public toolsList:eui.DataGroup = new eui.DataGroup();
	//蛋列表
	public group_egg:eui.Group;
	
	public constructor() {
		super();
		this.skinName = "resource/garden_skin/wutong/ToolsSkin.exml";
		this.data = Main.Shared().lang_config;
		this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.btn_close_interaction.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseTools,this);
	}

	//关闭物品界面
	public onCloseTools() {
		this.closeTools();
		Index.Shared().full_mask.visible = false;
	}

	//开启界面
	public showTools() {
		this.group_egg.removeChildren();		
		this.group_inter.visible = true;
		Index.Shared().wait.show();
		var httpReq = new HttpReq();
		var url:string = 'v1.1/wutong/tool_list';
		httpReq.GET({
			url:url,
			data:{},
			success:(res)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					if(res.data.toolList.eggs.length < 1){
						this.no_egg.visible = true;
					}else{
						this.no_egg.visible = false;
					}
					var toolList = res.data.toolList;
					var k = 0;
					var list = new eui.List();
					var collection = [];
					list.itemRenderer = ToolsList;
					list.dataProvider = new eui.ArrayCollection(collection);
					list.x = 25;
					var tlayout = new eui.TileLayout();
					tlayout.horizontalGap = 20;
					tlayout.verticalGap = 25;
					tlayout.requestedColumnCount = 4;
					list.layout = tlayout;
					for(var j in toolList){
						var title_img = new eui.Image('auction_json.shutiao');
						title_img.x = 25;
						title_img.y = 270*k;
						var title_content = new eui.Label();
						title_content.textColor= 0x5E4609;
						title_content.bold= true;
						title_content.x = 45;
						title_content.y = 270*k;
						switch(j){
							case 'tree':
								title_content.text = this.data.toolsTs.tree;															
							break;
							case 'bird':
								title_content.text = this.data.toolsTs.bird;															
							break;
							case 'eggs':
								title_content.text = this.data.toolsTs.egg;													
							break;
						}
						this.group_tool.addChild(title_img);
						this.group_tool.addChild(title_content);
						for(var i = 0; i < toolList[j].length; i++){
							this.toolList[j+toolList[j][i].id] = toolList[j][i];
							var x = (i % 4) * 130 + 25;
							if(k>1){
								toolList[j][i].key = j + toolList[j][i].id;
								collection.push(toolList[j][i]);
							}else{
								var y = 50 + 270 * k;	
								var toolsList = new ToolsList(j + toolList[j][i].id, x, y);			
								this.group_tool.addChild(toolsList);	
								this.toolArr[j + toolList[j][i].id] = toolsList;											
							}
						}
						k++;
					}
					this.group_egg.height = 200 * Math.ceil(i/4);
					this.group_egg.addChild(list);
					this.group_egg.cacheAsBitmap = true;
					this.group_tool.cacheAsBitmap = true;
				}else{
					Index.Shared().tips.showTips(res.msg);
				}
				Index.Shared().wait.hide();
			},
			error:(error)=>{
				Index.Shared().wait.hide();
				Index.Shared().tips.showTips(this.data.toolsTs.network_error);
			}
		}, Index.Shared().goods);
	}

	public closeTools() {
		this.group_inter.visible = false;
		Index.Shared().full_mask.visible = false;
	}
	public onShowGoods() {
		Index.Shared().full_mask.visible = true;
		this.group_inter.visible = true;
		Index.Shared().addChildAt(Tools.Shared(), -1);
		Index.Shared().setChildIndex(Tools.Shared(), -1);
	}
}