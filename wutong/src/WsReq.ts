class WsReq {
	private static share:WsReq = null;
	public static Shared(){
		if(this.share == null){
			this.share = new WsReq();
		}
		return this.share;
	}

	//ws
	private ws:any;
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
	//接收消息回调
	public afterReceivePool:any[] = [];

	private isReady:boolean = false;

	private isClose:boolean = true;

	public constructor() {
		this.initWebSocket();
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
			WsReq.Shared().serverTimeoutObj = egret.setTimeout(function(){
				console.log('与服务器断开连接');
				WsReq.Shared().ws.close();//如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
			},WsReq.Shared(), 30000);
			var params = new Params('ping');
			//合并参数
			var paramsData = params.mergeDataByJsonStr({});
			//ws发送信息
			WsReq.Shared().sendData({
				data:paramsData
			});	
		},WsReq.Shared(), 30000);
	}

	//初始化ws
    public async initWebSocket() {
		this.ws = new WebSocket(localStorage.getItem('ws_url'));  
		this.ws.onopen = this.onSocketOpen;
		this.ws.onerror =  this.onSocketError;
		this.ws.onmessage = this.onReceiveMessage;
		this.ws.onclose = this.onSocketClose;
    }

	//重连
	public reconnect(){
		this.setReconnect = egret.setTimeout(()=>{
			console.log('ws连接重连!');	
			this.ws = new WebSocket(localStorage.getItem('ws_url'));
			this.ws.onopen = this.onSocketOpen;
			this.ws.onerror =  this.onSocketError;
			this.ws.onmessage = this.onReceiveMessage;
			this.ws.onclose = this.onSocketClose;
			egret.clearTimeout(this.setReconnect);
		},this,3000);
	}

	//发送消息
	private sendData(obj:any) {

		var data = JSON.parse(obj.data);
		if(WsReq.Shared().isReady){
			if(WsReq.Shared().isClose) return false;	
			if(data.action === 'close') WsReq.Shared().isClose = true;
			this.afterReceivePool[data.action] = obj.receiveCallBack;
			this.ws.send(obj.data);
			if(WsReq.Shared().isClose) {
				WsReq.share = null;
			}
		}else{
			var timeloop = egret.setInterval(()=>{
				if(WsReq.Shared().isReady){
					if(WsReq.Shared().isClose) return false;	
					if(data.action === 'close') WsReq.Shared().isClose = true;
					WsReq.Shared().afterReceivePool[data.action] = obj.receiveCallBack;
					WsReq.Shared().ws.send(obj.data);
					egret.clearInterval(timeloop);
					if(WsReq.Shared().isClose) {
						WsReq.share = null;
					}
				}
			}, this, 100);
		}
    }

	//收到消息
	private onReceiveMessage(evt) {
		var res = JSON.parse(evt.data);
		WsReq.Shared().resetTime();
		switch(res.action) {
			case 'system':
				Working.Shared().system(res.data);
			break;
			case 'system_prop':
				Working.Shared().updateSkin(Working.Shared().speed, Working.Shared().minerStatus, res.data.suit.level, res.data.tool.level);
			break;
		}
		if(WsReq.Shared().afterReceivePool[res.action]){
			WsReq.Shared().afterReceivePool[res.action](res);
			delete WsReq.Shared().afterReceivePool[res.action];
		}
	}

	//链接成功
    private onSocketOpen(evt) {
		WsReq.Shared().isReady = true;
		WsReq.Shared().isClose = false;
		console.log('ws连接创建成功!');
    }

	//链接关闭
    private onSocketClose(evt):void {
		if(!WsReq.Shared().isClose){
			WsReq.Shared().isReady = false;
			console.log('ws连接意外中断!');
			WsReq.Shared().reconnect();
		}else{
			WsReq.Shared().isReady = false;			
			WsReq.share = null;//销毁 WsReq
			console.log('ws连接已关闭!');									
		}
    }

	//链接失败	
    private onSocketError(evt):void {
		console.log('ws连接失败!');				
		WsReq.Shared().reconnect();		
    }
}