class TransactionList extends eui.ItemRenderer {
	//鳳凰
	private ph_group:eui.Group;
	//性别
	private gender:eui.Image;
	//编号
	private ph_num:eui.Label;
	//生命上限
	private ph_xp:eui.Label;
	//最高价
	private high_price:eui.Label;
	//倒计时
	private shelf_time:eui.Label;
	//出价
	private btn_go_pay:eui.Group;
	//几代凤凰头部显示
	private gender_group:eui.Group;
	//字体显示
	private g_text:eui.Label;
	//性别显示
	private g_gender:eui.Image;
	//小鸟图片
	private ph_img:eui.Image;
	// 生命值
	private life_txt:eui.Label;
	//拍卖ID
	private tradeId:any;
	//支付金额
	private amount:number;
	//语言包
	private langData:any;

	//梧桐果
	private wt_group:eui.Group;
	private wt_name:eui.Label;//梧桐名称
	private wt_num:eui.Label;//梧桐数量
	private wt_price:eui.Label;//价格
	private wt_shelf_time:eui.Label;//时间
	private btn_go_pay_wt:eui.Group;//购买



	public constructor() {
		super();
		this.skinName = "resource/garden_skin/deal/TransactionList.exml";
		this.langData = Main.Shared().lang_config;
		this.cacheAsBitmap = true;
		//购买
		this.btn_go_pay.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGoPayClick,this);
		this.btn_go_pay_wt.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGoPayClick,this);
	}

	//购买
	private onGoPayClick() {
		Transaction.Shared().wait.show();
		var httpReq  = new HttpReq();
		var url:string = "v1.1/bird/trade/put_order";
		httpReq.POST({
			url:url,
			data:{tradeId:this.tradeId},
			success:(res) =>{
				var res = JSON.parse(res);
				if(res.code == 0) {
					var data = res.data;
					Common.Shared().secondPwd(this.afterPwd,null,null,data);
				}else {
					Transaction.Shared().tips.showTips(res.msg);
				}
				Transaction.Shared().wait.hide();   
			},
			error:(error) =>{
				Transaction.Shared().wait.hide();                   
				Transaction.Shared().tips.showTips(this.langData.transactionListTs.network_error);
			}
		});
	}

	private afterPwd(pwd,afterData){
		let pinCode = hex_md5(pwd);
		Transaction.Shared().wait.show();
		var httpReq  = new HttpReq();
		var url = 'v1.1/pay/confirm_pay';
        httpReq.POST({
            url:url,
            data:{orderId:afterData.orderId, payType:afterData.payType, payOrder:afterData.payOrder,  pinCode:pinCode},
            success:(res) =>{
                var res = JSON.parse(res);
                if(res.code == 0) {
					Transaction.Shared().tips.showTips('购买成功！');
					Transaction.Shared().onTransactionLists({});
                }else {
					Transaction.Shared().tips.showTips(res.msg);
                }
                Transaction.Shared().wait.hide();   
            },
            error:(error) =>{
                Transaction.Shared().wait.hide();                   
				Transaction.Shared().tips.showTips(Transaction.Shared().data.transactionListTs.network_error);
            }
        });
	}

	protected dataChanged():void{
		//数据改变时，会自动调用 dataChanged 这个方法
		this.tradeId = this.data.id;
		if(this.data.goodsType == 3) {
			this.ph_group.visible = false;
			this.wt_group.visible = true;
			this.wt_name.text = this.data.title;
			this.wt_num.text = this.data.num;
			this.wt_price.text = String(Math.floor(Number(this.data.amount)));
			//时间
			this.wt_shelf_time.text = this.data.datetime;
		}else {
			this.ph_group.visible = true;
			this.wt_group.visible = false;
			//头像框判断
			this.gender.source = Common.Shared().getPh(this.data.level, this.data.gender, this.data.goodsType);
			//是鸟还是蛋
			this.ph_img.source = Common.Shared().getPhImg(this.data.goodsType, this.data.gender);
			//文字显示
			this.g_text.text = this.data.title;
			this.g_text.horizontalCenter = Common.Shared().getPhText(this.data.goodsType, this.data.level);
			//价格
			this.high_price.text = String(Math.floor(Number(this.data.amount)));
			//编号
			this.ph_num.text = this.data.goodsNO;
			if(this.data.goodsType == 1) {
				//生命上限
				this.life_txt.text = this.langData.myBuyHistoryList.life_limit;
				this.ph_xp.text = this.data.lifeValue;
			}else {
				//生命值
				this.life_txt.text = this.langData.myBuyHistoryList.life;
				this.ph_xp.text = this.data.lifeValue + '/' + this.data.maxLifeValue;
			}
			//时间
			this.shelf_time.text = this.data.datetime;
		}
        
	
    }
}