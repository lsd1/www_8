class Creation extends eui.ItemRenderer{
	private static shared:Creation;
	public static Shared() {
		if(this.shared == null){
			this.shared = new Creation();
		}
		return this.shared;
	}
	//返回按钮
	private btn_go_back:eui.Group;
	//大控件
	private creation:eui.Group;
	//list容器
	private the_group:eui.Group;
	//底部按钮
	//创世
	private cre:eui.Group;
	//我的拍卖
	private my_auc:eui.Group;

	public tips:Tips = new Tips();
	public wait:Wait = new Wait();
	//弹框
	public tip_groups:eui.Group;
	private full_mask:eui.Rect;
	private tip:eui.Group;
	private btn_close_tip:eui.Image;
	private tip_txt:eui.Label;
	private btn_go_pay:eui.Group;
	public currentBirdId:any;
	//底部栏目
	private auc_bottom:eui.Group;
	public creation_scroller:any;
	//规则
	private btn_rule:eui.Label;
	//上次拍卖时间
	public prevTime:any
	//暂无拍卖纪录
	private no_auction:eui.Label;
	//banner
	public ads:any;
	public prevList:any;
	

	public constructor() {
		super();
		this.skinName = "resource/garden_skin/auction/Creation.exml";
		this.data = Main.Shared().lang_config;
		//this.cacheAsBitmap = true;
		this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.addChild(this.tips);
		this.addChild(this.wait);
		//返回按钮
		this.btn_go_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goBackIndex,this);
		//我的拍卖
		this.my_auc.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goMyAucInter,this);
		//关闭弹框
		this.btn_close_tip.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseTip,this);
		//缴纳保证金
		this.btn_go_pay.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGoPayMargin,this);
		//点击规则
		this.btn_rule.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnRule,this);
	}

	//返回按钮
	private goBackIndex() {
		this.parent.addChild(Index.Shared());
		this.parent.removeChild(this);
	}
	//关闭弹框
	private onCloseTip() {
		this.tip_groups.visible = false;
		this.tip_txt.text = '';
	}
	//开启弹框
	public onShowTip(num?:number) {
		this.tip_groups.visible = true;
		this.tip_txt.text = this.data.creationTs.pay_shared + num + this.data.creationTs.margin;
	}
	//我的拍卖
	private goMyAucInter() {
		MyAuction.Shared().onBidMoneyList();
		this.parent.addChild(MyAuction.Shared());
		this.parent.removeChild(this);
	}

	
	//现世界面显示
	public onShowCreation() {
		if(this.the_group.contains(this.creation_scroller)) {
			this.the_group.removeChild(this.creation_scroller);
		}
		this.wait.show();
        var httpReq  = new HttpReq();
        var url:string = "v1.1/bird/auction/creation_list";
        httpReq.GET({
            url:url,
            data:{},
            success:(res) =>{
                var res = JSON.parse(res);
                if(res.code == 0) {
					var creationList = res.data.auctionList;
					this.prevList = res.data.prevList;
					this.prevTime = res.data.prevTime;
					this.ads = res.data.ads;
					if(creationList.length > 0 && res.data.countDown == -1) {
						this.no_auction.visible = false;
						this.creation_scroller = ScrollerCreation.Shared(creationList, res.data.countDown);
						this.the_group.addChild(this.creation_scroller);
						this.auc_bottom.visible = true;
					}else if(res.data.countDown > 0){
						this.no_auction.visible = false;
						this.auc_bottom.visible = false;
						//拍卖结束显示拍卖结果。
						this.creation_scroller = ScrollerCreation.Shared(this.prevList, res.data.countDown);
						this.the_group.addChild(this.creation_scroller);
					}else{
						this.no_auction.visible = true;
						this.auc_bottom.visible = true;												
					}
                }else {
                    this.tips.showTips(res.msg);
                }
                this.wait.hide();   
            },
            error:(error) =>{
                this.wait.hide();                   
                this.tips.showTips(this.data.creationTs.network_error);
            }
        });
	}
	
	//交纳保证金
	private onGoPayMargin() {
		//交纳保证金请求
		Common.Shared().secondPwd(this.afterPayMargin, Creation.Shared().tip_groups, true);
	}

	public afterPayMargin(pwd:string, afterData?:any) {
		var pinCode = hex_md5(pwd);
		Creation.Shared().wait.show();
		var httpReq  = new HttpReq();
		var url:string = "v1.1/bird/auction/member/put_deposit";
		httpReq.POST({
			url:url,
			data:{auctionId:Creation.Shared().currentBirdId, pinCode:pinCode},
			success:(res) =>{
				var res = JSON.parse(res);
				if(res.code == 0) {
					this.onShowTip();
					this.tip_txt.text = this.data.creationTs.pay_success;
					this.tip_groups.visible = false;
				}else {
					Creation.Shared().tips.showTips(res.msg);
				}
				Creation.Shared().wait.hide();
			},
			error:(error) =>{
				Creation.Shared().wait.hide();
				Creation.Shared().tips.showTips(this.data.CteationTs.network_error);
			}
		});
	}

	public onBtnRule(e:egret.TouchEvent){
		if(!this.contains(AuctionRule.Shared())){
			this.addChild(AuctionRule.Shared());
		}
		AuctionRule.Shared().showRule();
	}
}