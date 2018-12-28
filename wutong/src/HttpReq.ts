class HttpReq extends egret.HttpRequest{
	
	private api_domain:string = localStorage.getItem('api_domain');
	private params:Params;

	public constructor() {
		super();
	}

	public GET(actionParams:any, target?:any){
		if(target){
			target.touchEnabled = false;
			target.touchChildren = false;
		}

		this.params = new Params(actionParams.url);
		var url = this.api_domain + actionParams.url;
		//合并参数
		var data = Common.Shared().mergeObj(this.params.getParamsByJson(), actionParams.data);

		//拼接参数到url
		url += '?'+ Object.keys(data).map((key)=>{
			return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
		}).join("&");
		var request = new egret.HttpRequest();
		request.withCredentials = true;
		request.responseType = egret.HttpResponseType.TEXT;
		request.open(url, egret.HttpMethod.GET);
		//设置响应头
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		//发送参数
		request.send();

		request.addEventListener(egret.Event.COMPLETE,(event:egret.Event)=>{
			var request = <egret.HttpRequest>event.currentTarget;
			if(actionParams.success){
				if(target){
					target.touchEnabled = true;
					target.touchChildren = true;
				}
				actionParams.success(request.response);
			}
		}, this);

		request.addEventListener(egret.IOErrorEvent.IO_ERROR,()=>{
			if(actionParams.error){
				if(target){
					target.touchEnabled = true;
					target.touchChildren = true;
				}
				actionParams.error();
			}
		}, this);

		request.addEventListener(egret.ProgressEvent.PROGRESS,()=>{
			if(actionParams.progress){
				if(target){
					target.touchEnabled = true;
					target.touchChildren = true;
				}
				actionParams.progress();
			}
		}, this);
	}

	public POST(actionParams:any, target?:any){
		if(target){
			target.touchEnabled = false;
			target.touchChildren = false;
		}

		var url = this.api_domain + actionParams.url;	
		this.params = new Params(actionParams.url);
		//合并参数并将JSON对象转化为字符串。
		var data = JSON.stringify(Common.Shared().mergeObj(this.params.getParamsByJson(), actionParams.data));

		var request = new egret.HttpRequest();
		request.withCredentials = true;		
		request.responseType = egret.HttpResponseType.TEXT;
		request.open(url, egret.HttpMethod.POST);
		//设置响应头
		request.setRequestHeader("Content-Type", "application/json");
		//request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		//发送参数
		request.send(data);

		request.addEventListener(egret.Event.COMPLETE,(event:egret.Event)=>{
			var request = <egret.HttpRequest>event.currentTarget;
			if(actionParams.success){
				if(target){
					target.touchEnabled = true;
					target.touchChildren = true;
				}
				actionParams.success(request.response);
			}
		}, this);

		request.addEventListener(egret.IOErrorEvent.IO_ERROR,()=>{
			if(actionParams.error){
				if(target){
					target.touchEnabled = true;
					target.touchChildren = true;
				}
				actionParams.error();
			}
		}, this);

		request.addEventListener(egret.ProgressEvent.PROGRESS,()=>{
			if(actionParams.progress){
				if(target){
					target.touchEnabled = true;
					target.touchChildren = true;
				}
				actionParams.progress();
			}
		}, this);
	}
}