class ScrollerInteractive extends eui.Scroller{

	public static shared:ScrollerInteractive;
	public static Shared(collection?:any, lastId?:number){
		if(!this.shared){
			this.shared = new ScrollerInteractive(collection, lastId);
		}
		return this.shared;
	}

	private list:eui.List = new eui.List();
	private scroller_interactive:eui.Scroller;
	//0:数据加载完成；1：需要加载更多；-1：没有更多
	public is_need_more = 0;
	public collection:any[];
	public lastId:number = 0;
	private langData:any;
	public constructor(collection:any, lastId:number) {
		super();
		this.skinName = 'resource/garden_skin/wutong/ScrollerInteractive.exml';
		this.langData = Main.Shared().lang_config;
		this.list.itemRenderer = InteractiveList;
		this.collection = collection;
		this.lastId = lastId;
		this.list.dataProvider = new eui.ArrayCollection(this.collection);
		this.list.useVirtualLayout = false;
		this.scroller_interactive.viewport = this.list;	
		//尾部果园互动消息列表
		this.scroller_interactive.addEventListener(eui.UIEvent.CHANGE, this.moveHandler, this);  
        this.scroller_interactive.addEventListener(eui.UIEvent.CHANGE_END, this.outHandler, this);  
	}

	public moveHandler(e:eui.UIEvent){
		if(this.scroller_interactive.viewport.scrollV > (this.scroller_interactive.viewport.contentHeight - this.scroller_interactive.viewport.height) + 40){  
			if (this.is_need_more > -1) {
				this.is_need_more = 1;
			} else {
				Index.Shared().tips.showTips(this.langData.scrollerInteractiveTs.no_more);
			}
        }  
	}

	public outHandler(e:eui.UIEvent){
		if(this.is_need_more > 0){
			this.is_need_more = 0;
			this.loreMore();
		}
	}

	//加载更多
	private loreMore(){
		Index.Shared().wait.show();
		var httpReq = new HttpReq();
		var url = 'v1.0/wutong/list_friend';
		httpReq.GET({
			url:url,
			data:{"lastId":this.lastId},
			success:(res:any)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					var treeInfo = res.data.treeInfo;
					if(treeInfo.length > 0 ){
						for(let i = 0; i<treeInfo.length; i++){
							this.collection.push(treeInfo[i]);
						}
						this.lastId = treeInfo[treeInfo.length - 1].id;
					}else{
						Index.Shared().tips.showTips(this.langData.scrollerInteractiveTs.no_more);
						this.is_need_more = -1;
					}
				}else{
					Index.Shared().tips.showTips(res.msg);
				}
				Index.Shared().wait.hide();
			},
			error:()=>{
				Index.Shared().wait.hide();				
				Index.Shared().tips.showTips(this.langData.scrollerInteractiveTs.network_error);
			}
		});
	}

}