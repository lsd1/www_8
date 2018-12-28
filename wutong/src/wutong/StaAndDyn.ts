class StaAndDyn extends eui.ItemRenderer{
	private static share:StaAndDyn = null;
	public static Shared(){
		if(this.share == null){
			this.share = new StaAndDyn();
		}
		return this.share;
	}
	//大控件
	private tree:eui.Group;
	//删除按钮
	private btn_close_tree:eui.Image;

	//梧桐果成熟界面
	public fruit:eui.Group;
	private sta_text:eui.Label;
	private sta_rect:eui.Rect;

	//梧桐果动态
	private dynamic:eui.Group;
	private dyn_text:eui.Label;
	private dyn_rect:eui.Rect;

	//果子成熟、动态下拉列表
	public content_list:eui.Group;

	//果子成熟列表
	private fruitScroller:any;
	//暂无动态样式
	public empty:Empty = new Empty;

	//动态列表
	public dynamicScroller:any;

	public constructor() {
		super();
		this.skinName = "resource/garden_skin/wutong/StaAndDyn.exml";
		this.data = Main.Shared().lang_config;
		//this.cacheAsBitmap = true;
        this.top = 0;
        this.left = 0;
        this.right = 0;
        this.bottom = 0;
		this.fruit.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onFruitList,this);
		this.dynamic.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onDynamicList,this);
		this.btn_close_tree.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseGroup,this);
		this.empty.onShowEmpty();
		this.content_list.addChild(this.empty);
	}

	//成熟界面下拉框
	public onFruitList() {
		this.sta_text.bold = true;
		this.sta_rect.visible = true;
		this.dyn_rect.visible = false;
		this.dyn_text.bold = false;
		if(this.content_list.contains(this.dynamicScroller)){
			this.content_list.removeChild(this.dynamicScroller);
		}
		if(this.content_list.contains(this.fruitScroller)){
			this.content_list.removeChild(this.fruitScroller);
		}
		if(this.content_list.contains(this.empty)) {
			this.content_list.removeChild(this.empty);
		}
		Index.Shared().wait.show();					
		var httpReq = new HttpReq();
		var url = 'v1.0/wutong/list_fruit';
		httpReq.GET({
			url:url,
			data:{},
			success:(res:any)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					var fruitList = res.data.fruitList;
					if(fruitList.length > 0 ){
						this.fruitScroller = new ScrollerFruit(fruitList, fruitList[fruitList.length - 1]);
						this.content_list.addChild(this.fruitScroller);
					}else{
						this.empty.onShowEmpty();
						this.empty.empty_text.text = this.data.staAndDynTs.no_fertilizer;
						this.empty.horizontalCenter = 0;
						this.content_list.addChild(this.empty);
					}
				}else{
					Index.Shared().tips.showTips(res.msg);
				}
				Index.Shared().wait.hide();
			},
			error:()=>{
				Index.Shared().wait.hide();				
				Index.Shared().tips.showTips(this.data.staAndDynTs.network_error);
			}
		});
	}

	//动态界面下拉框
	private onDynamicList() {
		Index.Shared().DynamicDateArr = [];
		this.dyn_text.bold = true;
		this.sta_rect.visible = false;
		this.dyn_rect.visible = true;
		this.sta_text.bold = false;
		if(this.content_list.contains(this.dynamicScroller)){
			this.content_list.removeChild(this.dynamicScroller);
		}
		if(this.content_list.contains(this.fruitScroller)){
			this.content_list.removeChild(this.fruitScroller);
		}
		if(this.content_list.contains(this.empty)) {
			this.content_list.removeChild(this.empty);
		}
		Index.Shared().wait.show();
		var httpReq = new HttpReq();
		var url = 'v1.0/wutong/my_message';
		httpReq.GET({
			url:url,
			data:{},
			success:(res:any)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					var treeLog = res.data.treeLog;
					if(treeLog.length > 0 ){
						for(var i = 0; i < treeLog.length; i++){
							if(Index.Shared().DynamicDateArr[treeLog[i].date]){
								treeLog[i].date = '';						
							}else{					
								Index.Shared().DynamicDateArr[treeLog[i].date] = true;
							}
						}
						this.dynamicScroller = new ScrollerDynamic(treeLog, treeLog[treeLog.length - 1].id);
						this.content_list.addChild(this.dynamicScroller);
					}else{
						this.empty.onShowEmpty();
						this.empty.empty_text.text = this.data.staAndDynTs.no_dynamic;
						this.empty.horizontalCenter = 0;
						this.content_list.addChild(this.empty);			
					}
				}
				Index.Shared().wait.hide();										
			},
			error:()=>{
				Index.Shared().wait.hide();				
				Index.Shared().tips.showTips(this.data.staAndDynTs.network_error);
			}
		});
	}
	//显示界面
	public onShowStaAndDyn() {
		this.tree.visible = true;
	}

	private onCloseGroup() {
		this.tree.visible = false;
		Index.Shared().full_mask.visible = false;
	}


}