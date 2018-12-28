class ScrollerFruit extends eui.Scroller{

	public static shared:ScrollerFruit;
	public static Shared(collection?:any, lastId?:number){
		if(!this.shared){
			this.shared = new ScrollerFruit(collection, lastId);
		}
		return this.shared;
	}

	private list:eui.List = new eui.List();
	private scroller_content:eui.Scroller;
	//0:数据加载完成；1：需要加载更多；-1：没有更多
	private is_need_more = 0;
	public collection:any[];
	public lastId:number = 0;
	private langData:any;
	public constructor(collection:any, lastId:number) {
		super();
		this.skinName = 'resource/garden_skin/wutong/ScrollerFruit.exml';
		this.langData = Main.Shared().lang_config;
		this.list.itemRenderer = FruitList;
		this.list.useVirtualLayout = false;
		this.collection = collection;
		this.lastId = lastId;
		this.list.dataProvider = new eui.ArrayCollection(this.collection);

		this.scroller_content.viewport = this.list;	
		//尾部果园互动消息列表
		this.scroller_content.addEventListener(eui.UIEvent.CHANGE, this.moveHandler, this);  
        this.scroller_content.addEventListener(eui.UIEvent.CHANGE_END, this.outHandler, this);  
	}

	public moveHandler(e:eui.UIEvent){
		if(this.scroller_content.viewport.scrollV > (this.scroller_content.viewport.contentHeight - this.scroller_content.viewport.height) + 40){  
			if (this.is_need_more > -1) {
				this.is_need_more = 1;  
			} else {
				Index.Shared().tips.showTips(this.langData.scrollerFruitTs.no_more);
			}
        }  
	}

	public outHandler(e:eui.UIEvent){
		if(this.is_need_more > 0){
			this.is_need_more = 0;
			this.loreMore();
		}
	}

	//加载更多果园信息
	private loreMore(){
		Index.Shared().wait.show();
		var httpReq = new HttpReq();
		var url = 'v1.0/wutong/list_fruit';
		httpReq.GET({
			url:url,
			data:{"lastId":this.lastId},
			success:(res:any)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					var fruitList = res.data.fruitList;
					if(fruitList.length > 0 ){
						for(let i = 0; i<fruitList.length; i++){
							this.collection.push(fruitList[i]);
						}
						this.lastId = fruitList[fruitList.length - 1].id;
					}else{
						Index.Shared().tips.showTips(this.langData.scrollerFruitTs.no_more);
						this.is_need_more = -1;
					}
				}else{
					Index.Shared().tips.showTips(res.msg);
				}
				Index.Shared().wait.hide();
			},
			error:()=>{
				Index.Shared().wait.hide();				
				Index.Shared().tips.showTips(this.langData.scrollerFruitTs.network_error);
			}
		});
	}

}