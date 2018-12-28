class MyBidMoneyList extends eui.ItemRenderer{

	//大控件
	private myBidMoneyList:eui.Group;
	
	//性别
	private gender:eui.Image;
	//小鸟图片
	private ph_img:eui.Image;
	//编号
	private ph_num:eui.Label;
	//生命上限
	private ph_xp:eui.Label;
	//持有者
	private ph_host:eui.Label;
	//最高价
	private the_high_group:eui.Group;
	private the_text:eui.Label;
	private high_price:eui.Label;
	//拍卖支付状态
	private pay_status:eui.Label;
	//再次出价
	private btn_go_on:eui.Group;
	//立即支付
	private btn_get_auction_back:eui.Group;
	//拍卖状态
	private status_group:eui.Group;
	//状态图片
	private status_img:eui.Image;
	//状态文字
	private status_text:eui.Label;
	//几代凤凰头部显示
	private gender_group:eui.Group;
	//字体显示
	private g_text:eui.Label;
	//性别显示
	private g_gender:eui.Image;
	
	//拍卖ID
	private bidId:any;
	//已取回
	private has_get:eui.Label;

	private langData:any;

	public constructor() {
		super();
		this.skinName = "resource/garden_skin/auction/MyBidMoneyList.exml";
		this.langData = Main.Shared().lang_config;
		this.cacheAsBitmap = true;
		//再次出价
		this.btn_go_on.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGoPayClick,this);
		//取回
		this.btn_get_auction_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnGetAuctionBack,this);
		
	}

	//再次出价
	private onGoPayClick() {
		Common.Shared().secondPwd(this.afterPwd,null,null,this.bidId);
	}

	private afterPwd(pwd,bidId){
		var httpReq  = new HttpReq();
		var url = 'v1.1/member/check_secpwd';
        httpReq.POST({
            url:url,
            data:{secPwd: hex_md5(pwd)},
            success:(res) =>{
                var res = JSON.parse(res);
                if(res.code == 0) {
					MyAuction.Shared().parent.addChild(Bid.Shared());
					Bid.Shared().initWebSocket(bidId);
					MyAuction.Shared().parent.removeChild(MyAuction.Shared());
                }else {
					MyAuction.Shared().tips.showTips(res.msg);
                }
                MyAuction.Shared().wait.hide();   
            },
            error:(error) =>{
                MyAuction.Shared().wait.hide();                   
                MyAuction.Shared().tips.showTips(this.langData.myBidMoneyListTs.network_error);
            }
        });
	}
	//取回拍卖金
	private onBtnGetAuctionBack(){
		var httpReq  = new HttpReq();
		var url = 'v1.1/bird/auction/receive_deposit';
		var auctionId = this.bidId;
		MyAuction.Shared().wait.show(); 
        httpReq.POST({
            url:url,
            data:{auctionId:auctionId},
            success:(res) =>{
                var res = JSON.parse(res);
                if(res.code == 0) {
					MyAuction.Shared().tips.showTips(this.langData.myBidMoneyListTs.reco_success);
					this.btn_get_auction_back.visible = false;
					this.has_get.visible = true;
                }else {
					MyAuction.Shared().tips.showTips(res.msg);
                }
               	MyAuction.Shared().wait.hide();   
            },
            error:(error) =>{
                MyAuction.Shared().wait.hide();                   
                MyAuction.Shared().tips.showTips(this.langData.myBidMoneyListTs.network_error);
            }
        });
	}

	protected dataChanged():void{
		//数据改变时，会自动调用 dataChanged 这个方法
		this.bidId = this.data.id;
		//头像框判断
		this.gender.source = Common.Shared().getPh(this.data.level, this.data.gender, this.data.goodsType);
		//是鸟还是蛋
		this.ph_img.source = Common.Shared().getPhImg(this.data.goodsType, this.data.gender);
		//文字显示
		this.g_text.text = this.data.title;
		this.g_text.horizontalCenter = Common.Shared().getPhText(this.data.goodsType, this.data.level);
		
		//最高价
		this.high_price.text = this.data.maxPrice;
		//编号
		this.ph_num.text = this.data.NO;
		//生命上限
		this.ph_xp.text = this.data.lifeValue;
		//持有者
		this.ph_host.text = this.data.ownName;
		let result = this.data.result;
		//状态显示
		switch (result) {
			case -1://拍卖失败
				this.the_high_group.visible = true;

				//拍卖状态徽章
				this.status_img.source = "auction_json.auc_lose";
				this.status_text.text = this.langData.myBidMoneyListTs.f_auc;
				this.status_text.textColor = 0xA07B49;
				this.status_group.visible = true;
				//继续出价
				this.btn_go_on.visible = false;
				//取回保证金
				this.btn_get_auction_back.visible = false;
				//已取回保证金
				this.has_get.visible = false;

				break;
			case 0://拍卖中
				this.the_high_group.visible = true;
				this.the_text.text = this.langData.myBidMoneyListTs.high_bid;
				//继续出价
				this.btn_go_on.visible = true;
				//取回保证金
				this.btn_get_auction_back.visible = false;
				//已取回保证金
				this.has_get.visible = false;
				break;
			case 1://可领回保证金
				this.the_high_group.visible = true;
				this.the_text.text = this.langData.myBidMoneyListTs.final_price;
				this.status_group.visible = false;
				//继续出价
				this.btn_go_on.visible = false;
				//取回保证金
				this.btn_get_auction_back.visible = true;
				//已取回保证金
				this.has_get.visible = false;
				break;
			case 2://拍卖成功
				this.the_high_group.visible = true;
				this.the_text.text = this.langData.myBidMoneyListTs.final_price;
				this.status_img.source = "auction_json.auc_success";
				this.status_text.text = this.langData.myBidMoneyListTs.success_auc;
				this.status_text.textColor = 0xF76005;
				this.status_group.visible = true;
				//继续出价
				this.btn_go_on.visible = false;
				//取回保证金
				this.btn_get_auction_back.visible = false;
				//已取回保证金
				this.has_get.visible = false;
				break;
			case 3://已经领回保证金
				this.the_high_group.visible = true;
				this.the_text.text = this.langData.myBidMoneyListTs.final_price;
				this.status_group.visible = false;
				//继续出价
				this.btn_go_on.visible = false;
				//取回保证金
				this.btn_get_auction_back.visible = false;
				//已取回保证金
				this.has_get.visible = true;
				this.has_get.text = this.langData.myBidMoneyListTs.reco_success;
				break;
		}
	}
}