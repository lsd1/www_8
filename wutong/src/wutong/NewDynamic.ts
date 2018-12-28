class NewDynamic extends eui.ItemRenderer {
    private static shared:NewDynamic;
	public static Shared() {
		if(this.shared == null) {
			this.shared = new NewDynamic();
		}
		return this.shared;
	}
    //遮罩
    // public full_mask:eui.Rect;
    //界面
    public group_news:eui.Group;
    //关闭按钮
    private btn_close:eui.Image;
    //消息列表
    private group_new_list:eui.Group;
    private scrollerNews:any;

    public constructor() {
        super();
        this.skinName = "resource/garden_skin/wutong/NewDynamic.exml";
		this.data = Main.Shared().lang_config;
        this.top = 0;
        this.left = 0;
        this.right = 0;
        this.bottom = 0;
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseClick,this);

    }

    private onCloseClick() {
        // this.full_mask.visible = false;
        this.group_news.visible = false;
        Index.Shared().full_mask.visible = false;
        Index.Shared().wait.hide();

    }

    public showNewDynamic() {
        Index.Shared().DynamicDateArr = [];
        if(this.group_new_list.contains(this.scrollerNews)) {
            this.group_new_list.removeChild(this.scrollerNews);
        }
        Index.Shared().wait.show();
        var httpReq = new HttpReq();
		var url:string = 'v1.0/wutong/be_message';
		httpReq.GET({
			url:url,
			data:{},
			success:(res)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					var treeLog = res.data.treeLog;
                    for(let i = 0; i < treeLog.length; i++) {
                        if(Index.Shared().DynamicDateArr[treeLog[i].date]){
                            treeLog[i].date = '';						
                        }else{					
                            Index.Shared().DynamicDateArr[treeLog[i].date] = true;
                        }
                    }
                    this.scrollerNews = ScrollerNews.Shared(treeLog, treeLog[treeLog.length - 1].id);
                    this.group_new_list.addChild(this.scrollerNews)
				}else{
                    Index.Shared().tips.showTips(res.msg);
				}
                Index.Shared().wait.hide();
			},
			error:(error)=>{
                Index.Shared().wait.hide();
				Index.Shared().tips.showTips(this.data.newDynamicTs.network_error);				
			}
		});

        // this.full_mask.visible = true;
        this.group_news.visible = true;
    }
}