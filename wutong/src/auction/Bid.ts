class Bid extends eui.ItemRenderer{

	private static shared:Bid;
	private bidId:any;
	private paramsData:any;
	public static Shared() {
		if(this.shared == null){
			this.shared = new Bid();
		}
		return this.shared;
	}
    private ws:any;
	private btn_go_back:eui.Image;
	//弹框
	private tip:eui.Group;
	private btn_close:eui.Image;
	//凤凰顶部图标
	private gender:eui.Image;
	private gender_group:eui.Group;
	private g_gender:eui.Image;
	private g_text:eui.Label;
	private ph_img:eui.Image;
	//说明
	private ph_num:eui.Label;
	private high_price_name:eui.Label;
	private has_mgb:eui.Label;
	private count_down:eui.Label;
	//出价成功提示
	private status_group:eui.Group;
	private status_img:eui.Image;
	private status_text:eui.Label;
	//加价group
	private incre_pri:eui.Group;
	private percentage:eui.Label;
	private bid_text:eui.Label;
	private add_num:number;
	private high_price:eui.Label;
	private btn_add:eui.Group;
	private btn_go_pay:eui.Group;
	//竞拍列表
	private bid_list:eui.Group;
	private list:eui.List = new eui.List();

	private auctionInfo:any;
	private auctionLogs:any;
	private raiseRate:number;
	private memberAccount:any;
	private bidInfo:any;
	private bid_num:number;
	private tips:Tips;
	private timer:number;
	private t:any;
	//我的出价
	private myPrice:number;
	//心跳定时器
	public serverTimeoutObj = null;
	//timeoutObj
	public timeoutObj = null;
	//是否重连
	private isReconnect:boolean = false;
	//重连
	private setReconnect = null;
	//语言包
	private lang:any;
	
	public constructor() {
		super();
		this.skinName = "resource/garden_skin/auction/Bid.exml";
		this.data = Main.Shared().lang_config;
		this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.cacheAsBitmap = true;
		this.tips = new Tips();
		this.addChild(this.tips);
		this.btn_go_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGoBackCreation,this);
		this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGoBackCreation,this);
		this.btn_add.addEventListener(egret.TouchEvent.TOUCH_TAP,this.addBid,this);
		this.btn_go_pay.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goPayAuc,this);
	}

	//重置时间
	private resetTime(){
		if(this.timeoutObj){egret.clearTimeout(this.timeoutObj);}
		if(this.serverTimeoutObj){egret.clearTimeout(this.serverTimeoutObj);}
　　　　 this.socketTimeOut();
	}

	//开始计算连接时长
	private socketTimeOut(){
		this.timeoutObj = egret.setTimeout(function(){
			Bid.Shared().serverTimeoutObj = egret.setTimeout(function(){
				Bid.Shared().ws.close();//如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
			},Bid.Shared(), 30000);
			var params = new Params('heartBeat');
			//合并参数
			var paramsData = params.mergeDataByJsonStr({});
			//ws发送信息
			Bid.Shared().sendData(paramsData);	
		},Bid.Shared(), 30000);
	}

	//初始化ws
    public initWebSocket(bidId):void {
		this.bidId = bidId;
		this.ws = new WebSocket(localStorage.getItem('ws_url'));  
		this.ws.onopen = this.onSocketOpen;
		this.ws.onerror =  this.onSocketError;
		this.ws.onmessage = this.onReceiveMessage;
		this.ws.onclose = this.onSocketClose;
    }

	public reconnect(){
		this.setReconnect = egret.setTimeout(()=>{
			this.ws = new WebSocket(localStorage.getItem('ws_url'));
			this.ws.onopen = this.onSocketOpen;
			this.ws.onerror =  this.onSocketError;
			this.ws.onmessage = this.onReceiveMessage;
			this.ws.onclose = this.onSocketClose;
			egret.clearTimeout(this.setReconnect);
		}, Bid.Shared(), 3000);
	}

	private onBidTap(e:egret.TouchEvent){
		
	}

	//发送消息
    private sendData(str):void {
      	this.ws.send(str);
    }

	//收到消息
	private onReceiveMessage(evt):void {
		var res = JSON.parse(evt.data);
		Bid.Shared().resetTime();
		switch(res.action) {
			case 'ping':
				//ws发送信息
			break;
			case 'auctionBid':
				if(res.code == 0) {
					Bid.Shared().bidInfo = res.data.bidInfo;
					Bid.Shared().highPrice(Bid.Shared().bidInfo);
					//出价列表请求
					Bid.Shared().bidList();
					if(res.uid == localStorage.getItem('uid')){
						Bid.Shared().has_mgb.text = String(Number(Bid.Shared().has_mgb.text) - Bid.Shared().myPrice);
						Bid.Shared().tips.showTips(res.msg);
					}
				}else{
					if(res.uid == localStorage.getItem('uid')){
						Bid.Shared().tips.showTips(res.msg);
					}		
				}
			break;
			case 'getAuctionInfo':
				if(res.code == 0) {
					Bid.Shared().auctionInfo = res.data.auctionInfo;
					Bid.Shared().auctionLogs = res.data.auctionLogs;
					Bid.Shared().raiseRate = res.data.raiseRate;
					Bid.Shared().memberAccount = res.data.memberAccount;
					Bid.Shared().onShowBidInfo(Bid.Shared().auctionInfo);
					Bid.Shared().onShowBidLog(Bid.Shared().auctionLogs);
					//Bid.Shared().addBid();
				}else{
					Bid.Shared().tips.showTips(res.msg);										
				}
			break;
			case 'getAuctionLogs':
				if(res.code == 0) {
					Bid.Shared().auctionLogs = res.data.auctionLogs;
					if(Bid.Shared().contains(this.list)) {
						Bid.Shared().removeChild(this.list);
					}
					Bid.Shared().onShowBidLog(Bid.Shared().auctionLogs);
				}else{
					Bid.Shared().tips.showTips(res.msg);										
				}
			break;
		}
    }

	//链接成功
    private onSocketOpen(evt):void {
		//实例化一个参数对象。
		var params = new Params('getAuctionInfo');
		//合并参数
		var paramsData = params.mergeDataByJsonStr({"auctionId":Bid.Shared().bidId});
		//ws发送信息
		Bid.Shared().sendData(paramsData);
    }

	//链接关闭
    private onSocketClose(evt):void {
		Bid.Shared().reconnect();
    }

	//链接失败	
    private onSocketError(evt):void {
		//Bid.Shared().tip.visible = true;
		Bid.Shared().reconnect();		
    }

	//返回按钮
	private onGoBackCreation() {
		this.sendData(JSON.stringify({"action": "close"}));
		this.parent.addChild(Creation.Shared());
		Creation.Shared().onShowCreation();
		this.parent.removeChild(this);
	}

	//显示拍卖出价详情
	public onShowBidInfo(auctionInfo) {
		//头像框判断
		this.gender.source = Common.Shared().getPh(this.data.level, this.data.gender, this.data.goodsType);
		//是鸟还是蛋
		this.ph_img.source = Common.Shared().getPhImg(this.data.goodsType, this.data.gender);
		//文字显示
		this.g_text.text = this.data.title;
		this.g_text.horizontalCenter = Common.Shared().getPhText(this.data.goodsType, this.data.level);
		//编号
		this.ph_num.text = auctionInfo.NO;
		//最高价
		this.bid_num = Math.ceil(Number(auctionInfo.maxPrice));
		this.high_price.text = String(this.bid_num);
		this.bid_text.text = String(this.bid_num);
		//最高出价者
		this.high_price_name.text = auctionInfo.bidUserName;
		//拥有金币
		this.has_mgb.text = this.memberAccount;

		//加价百分比
		this.percentage.text = this.data.bidTs.incer + Math.floor(this.raiseRate * 100) + '%';
		//倒计时
		this.timer = auctionInfo.countDown;
		this.showCountDown();
	}

	//显示倒计时
	public showCountDown(){
		if(this.t) return false;
		this.t = setInterval(()=>{
			if(this.timer > 0) {
				this.count_down.text = Common.Shared().secondToTime(this.timer);
				this.timer--;
			}else{
				clearTimeout(this.t);
				this.count_down.text = "00:00:00";
			}
		}, 1000);
	}

	//显示出价列表
	private onShowBidLog(auctionLogs) {
		this.list.itemRenderer = BidList;
		this.list.dataProvider = new eui.ArrayCollection(auctionLogs);
		this.bid_list.addChild(this.list);
	}
	
	//加价
	private addBid() {
		var new_num = this.bid_num + this.bid_num * Bid.Shared().raiseRate;
		var add_num = this.bid_num * Bid.Shared().raiseRate;
		if(add_num > this.memberAccount){
			Bid.Shared().tips.showTips(this.data.bidTs.no_shared);
			this.btn_go_pay.touchEnabled = false;
			this.btn_go_pay.touchChildren = false;
			this.btn_go_pay.alpha = 0.5;			
		}else{
			this.btn_go_pay.touchEnabled = true;
			this.btn_go_pay.touchChildren = true;			
			this.btn_go_pay.alpha = 1;			
			this.bid_num = new_num;
			this.bid_text.text = String(Math.ceil(this.bid_num));
		}
	}
	//出价请求
	private goPayAuc() {
		//实例化一个参数对象。
		var params = new Params('auctionBid');
		//合并参数
		var paramsData = params.mergeDataByJsonStr({"auctionId":Bid.Shared().bidId, "price":Bid.Shared().bid_text.text});
		this.myPrice = Number(Bid.Shared().bid_text.text);
		//ws发送信息
		Bid.Shared().sendData(paramsData);
	}
	//最高价
	private highPrice(bidInfo) {
		//最高价
		this.high_price.text = bidInfo.maxPrice;
		//最高出价者
		this.high_price_name.text = bidInfo.username;
		//更新当前价格
		this.bid_num = bidInfo.maxPrice;
		this.bid_text.text = String(this.bid_num);
	}
	//出价列表请求
	private bidList() {
		//实例化一个参数对象。
		var params = new Params('getAuctionLogs');
		//合并参数
		var paramsData = params.mergeDataByJsonStr({"auctionId":Bid.Shared().bidId, "limit":5});
		//ws发送信息
		Bid.Shared().sendData(paramsData);
	}
}