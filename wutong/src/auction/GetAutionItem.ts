class GetAutionItem extends eui.ItemRenderer{

	private price_text:eui.Label;
	private bidder_text:eui.Label;
	private auc_time:eui.Label;
	private list:eui.List;
	private btn_get:eui.Group;
	public group_get_item:eui.Group;
	private langData:any;
	

	public constructor() {
		super();
		this.skinName = "resource/garden_skin/auction/GetAutionItem.exml";
		this.langData = Main.Shared().lang_config;
		this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.btn_get.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBtnGetTap, this);
	}

	public onBtnGetTap(e:egret.TouchEvent){
		var httpReq  = new HttpReq();
        var url:string = "v1.1/bird/auction/receive_auction";
        httpReq.POST({
            url:url,
            data:{auctionId:Index.Shared().auctionInfo.auctionId},
            success:(res) =>{
                var res = JSON.parse(res);
                if(res.code == 0) {
					Index.Shared().tips.showTips(this.langData.getAutionItemTs.recei_success);
					this.visible = false;
                }else {
					Index.Shared().tips.showTips(res.msg);
                }
                Index.Shared().wait.hide();   
            },
            error:(error) =>{
				Index.Shared().wait.hide();                   
                Index.Shared().tips.showTips(this.langData.getAutionItemTs.network_error);
            }
        });
	}

	// protected dataChanged():void{
	// 	//数据改变时，会自动调用 dataChanged 这个方法
	// 	this.price_text.text = this.data.price;
	// 	this.bidder_text.text = this.data.username;
	// 	this.auc_time.text = this.data.datetime;
	// }
}