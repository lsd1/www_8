class CreationList extends eui.ItemRenderer{
	//大控件
	private creationList:eui.Group;
	//性别
	private gender:eui.Image;
	//小鸟图片
	private ph_img:eui.Image;
	//编号
	private ph_num:eui.Label;
	//生命上限
	private ph_xp:eui.Label;
	//起拍价
	private start_price:eui.Label;
	//最高价
	private high_price:eui.Label;
	//倒计时
	private time_down:eui.Label;
	//出价
	private btn_go_pay:eui.Group;
	//再次出价
	private btn_go_pay_again:eui.Group;
	//出价领先
	private the_first:eui.Group;
	//几代凤凰头部显示
	private gender_group:eui.Group;
	//字体显示
	private g_text:eui.Label;
	//性别显示
	private g_gender:eui.Image;
	//拍卖ID
	public bidId:number;
	// //是否缴纳保证金
	// private hasPayDeposit:number;
	//保证金金额
	private caseDeposit:number;
	
	private langData:any;
	
	
	
	public constructor() {
		super();
		this.skinName = "resource/garden_skin/auction/CreationList.exml";
		this.langData = Main.Shared().lang_config;
		this.cacheAsBitmap = true;
		//出价
		this.btn_go_pay.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGoPayClick,this);
		this.btn_go_pay_again.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGoPayClick,this);
	}

	//出价
	private onGoPayClick(e:egret.TouchEvent) {
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
					Creation.Shared().currentBirdId = bidId;
					Creation.Shared().parent.addChild(Bid.Shared());
					Bid.Shared().initWebSocket(bidId);
					Creation.Shared().parent.removeChild(Creation.Shared());
                }else {
					Creation.Shared().tips.showTips(res.msg);
                }
                Creation.Shared().wait.hide();   
            },
            error:(error) =>{
                Creation.Shared().wait.hide();                   
                Creation.Shared().tips.showTips(this.langData.creationListTs.network_error);
            }
        });
	}
	
	protected dataChanged():void{
		
        //数据改变时，会自动调用 dataChanged 这个方法
		//小鸟判断
		this.bidId = this.data.id;
		//头像框判断
		this.gender.source = Common.Shared().getPh(this.data.level, this.data.gender, this.data.goodsType);
		//是鸟还是蛋
		this.ph_img.source = Common.Shared().getPhImg(this.data.goodsType, this.data.gender);
		//文字显示
		this.g_text.text = this.data.title;
		this.g_text.horizontalCenter = Common.Shared().getPhText(this.data.goodsType, this.data.level);
		
		//保证金金额
		this.caseDeposit = this.data.caseDeposit;
		// //是否缴纳保证金
		// this.hasPayDeposit = this.data.hasPayDeposit;
		//是否领先
		if(this.data.isTop == 1) {
			this.the_first.visible = true;
		}else {
			this.the_first.visible = false;
		}
		//是否出价
		if(this.data.hasBid == 0) {
			this.btn_go_pay.visible = true;
			this.btn_go_pay_again.visible = false;
		}else {
			this.btn_go_pay.visible = false;
			this.btn_go_pay_again.visible = true;
		}

		//倒计时
		var Timer = this.data.countDown;
		let t = setInterval(()=>{
			if(Timer > 0) {
				this.time_down.text = Common.Shared().secondToTime(Timer);
				Timer--;
			}else{
				clearTimeout(t);
				this.time_down.text = "00:00:00";
			}
		}, 1000);
		//起拍价
		this.start_price.text = this.data.basePrice;
		//最高价
		this.high_price.text = this.data.maxPrice;
		//编号
		this.ph_num.text = this.data.NO;
		//生命上限
		this.ph_xp.text = this.data.lifeValue;

    }
}