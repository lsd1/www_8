class ScrollerEmail extends eui.Scroller{
	public static share:ScrollerEmail;
	public static Shared(collection?:any, news_last_id?:number){
		if(this.share){
			this.share = new ScrollerEmail(collection, news_last_id);
		}
		return this.share;
	}
	private list:eui.List = new eui.List;
	private scroller_email:eui.Scroller;
	//0:数据加载完成；1：需要加载更多；-1：没有更多
	private is_need_more = 0;
	public collection:any[];
	public news_last_id:number = 0;
	private langData:any;
	public constructor(collection:any, news_last_id:number) {
		super();
		this.skinName = 'resource/garden_skin/email/ScrollerEmail.exml';
		this.langData = Main.Shared().lang_config;
		this.list.itemRenderer = EmailList;
		this.collection = collection;
		this.news_last_id = news_last_id;
		this.list.dataProvider = new eui.ArrayCollection(this.collection);
		this.scroller_email.viewport = this.list;
		
		//尾部果园互动消息列表
		this.scroller_email.addEventListener(eui.UIEvent.CHANGE, this.moveHandler, this);  
        this.scroller_email.addEventListener(eui.UIEvent.CHANGE_END, this.outHandler, this);  
	}

	public moveHandler(e:eui.UIEvent){
		if(this.scroller_email.viewport.scrollV > (this.scroller_email.viewport.contentHeight - this.scroller_email.viewport.height) + 40){  
			if (this.is_need_more > -1) {
				this.is_need_more = 1;  
			} else {
				Index.Shared().tips.showTips(this.langData.scrollerEmailTs.no_more);
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
		var url = 'v1.1/wutong/email_list';
		return httpReq.GET({
			url:url,
			data:{'lastId':this.news_last_id},
			success:(res:any)=>{
				var res = JSON.parse(res);
				if(res.code == 0){	
					var emailList = res.data.emailList;
					if(emailList.length > 0){
						for(let i = 0; i< emailList.length; i++){
							this.collection.push(emailList[i]);
							// Email.Shared().emaillists.push(emailList[i]);
						}
						this.news_last_id = emailList[emailList.length - 1].id;
					}else{
						Index.Shared().tips.showTips(this.langData.scrollerEmailTs.no_more);
						this.is_need_more = -1;
					}
				}else{
					Index.Shared().tips.showTips(res.msg);
				}	
				Index.Shared().wait.hide();
			},
			error:()=>{
				Index.Shared().wait.hide();
				Index.Shared().tips.showTips(this.langData.scrollerEmailTs.network_error);
			}
		});     
	}

}