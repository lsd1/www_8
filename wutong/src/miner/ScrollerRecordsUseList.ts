class ScrollerRecordsUseList extends eui.Scroller{
	private static shared:ScrollerRecordsUseList;
	public static Shared(useList:any, lastId:number) {
		if(this.shared == null){
			this.shared = new ScrollerRecordsUseList(useList, lastId);
		}
		return this.shared;
	}
	//大组件
	private scroller_use:eui.Scroller;
	private transactionArr:any[];
	private list:eui.List = new eui.List();

	//0:数据加载完成；1：需要加载更多；-1：没有更多
	public is_need_more = 0;
	public lastId:number = 0;
	//语言包
	private langData:any;


	public constructor(useList:any, lastId:number) {
		super();
		this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.skinName = 'resource/garden_skin/miner/ScrollerRecordsUseList.exml';
		this.lastId = lastId;
		this.langData = Main.Shared().lang_config;
		this.list.itemRenderer = RecordsUseList;
		this.transactionArr = useList;
		this.list.dataProvider = new eui.ArrayCollection(this.transactionArr);
		this.scroller_use.viewport = this.list;
		this.cacheAsBitmap = false;
		//获取更多
		this.scroller_use.addEventListener(eui.UIEvent.CHANGE,this.moveHandler,this);
		this.scroller_use.addEventListener(eui.UIEvent.CHANGE_END,this.outHandler,this);


	}
	//获取更多
	public moveHandler(e:eui.UIEvent){
		if(this.scroller_use.viewport.scrollV > (this.scroller_use.viewport.contentHeight - this.scroller_use.viewport.height) + 40){  
			if (this.is_need_more > -1) {
				this.is_need_more = 1;
			} else {
				Records.Shared().tips.showTips(this.langData.scrollerMyBuyHistoryTs.no_more);
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
		Records.Shared().wait.show();
		//实例化一个参数对象。
		var params = new Params('miner/tool/log_list');
		//合并参数
		var paramsData = params.mergeDataByJsonStr({lastIds:this.lastId});
		// //ws发送信息
		Working.Shared().ws.sendData({
            data:paramsData,
            receiveCallBack:(res)=>{
                //请求道具或者工具信息
                if(res.code == 0) {
					var dataLogs = res.data.logs;
					if(dataLogs.length != 0) {
						for(var i in dataLogs) {
							if(Records.Shared().logArr.indexOf(i) == -1) {
								Records.Shared().logArr.push(i);
							}
							for(var k = 0; k < dataLogs[i].length; k++) {
								Records.Shared().logArr.push(dataLogs[i][k]);
							}
						}
						this.lastId = res.data.lastIds;
					}else {
						Records.Shared().tips.showTips(this.langData.scrollerMyBuyHistoryTs.no_more);
						this.is_need_more = -1;
					}
					
					
                }else {
					Records.Shared().tips.showTips(res.msg);
                }	
				Records.Shared().wait.hide();
            }
        });
	}

}