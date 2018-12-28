class ScrollerDynamic extends eui.Scroller{

	public static shared:ScrollerDynamic;
	public static Shared(collection?:any, lastId?:number){
		if(!this.shared){
			this.shared = new ScrollerDynamic(collection, lastId);
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
		this.skinName = 'resource/garden_skin/wutong/ScrollerDynamic.exml';
		this.langData = Main.Shared().lang_config;
		this.list.itemRenderer = DynamicList;
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
				Index.Shared().tips.showTips('没有更多了！');
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
		var url = 'v1.0/wutong/my_message';
		httpReq.GET({
			url:url,
			data:{"lastId":this.lastId},
			success:(res:any)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					var treeLog = res.data.treeLog;
					if(treeLog.length > 0 ){
						for(let i = 0; i < treeLog.length; i++){
							if(Index.Shared().DynamicDateArr[treeLog[i].date]){
								treeLog[i].date = '';						
							}else{					
								Index.Shared().DynamicDateArr[treeLog[i].date] = true;
							}
							this.collection.push(treeLog[i]);
						}
						this.lastId = treeLog[treeLog.length - 1].id;
					}else{
						Index.Shared().tips.showTips(this.langData.scrollerDynamicTs.no_more);
						this.is_need_more = -1;
					}
				}else{
					Index.Shared().tips.showTips(res.msg);
				}
				Index.Shared().wait.hide();
			},
			error:()=>{
				Index.Shared().wait.hide();				
				Index.Shared().tips.showTips(this.langData.scrollerDynamicTs.network_error);
			}
		});
	}

}