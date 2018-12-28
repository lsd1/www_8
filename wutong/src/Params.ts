class Params {
	

	private clientType:any;

	private lang:any;

	private network:any;
	
	private timestamp:any;

	private uid:any;

	private version:any;

	private sign:any;

	private token:any;

	private uuid:any;

	private action:any;

	private params:any;

	public constructor(action:string) {
		var lang = localStorage.getItem('lang');
		this.lang = lang ? lang : 1;

		var uid = localStorage.getItem('uid');
		this.uid = uid ? uid : 1696538;

		this.action = action;

		var clientType = localStorage.getItem('clientType');
		this.clientType = clientType ? clientType : 0;

		var network = localStorage.getItem('network');
		this.network = network ? network : 1;

		var version = localStorage.getItem('version');
		this.version = version ? version : '9.9.9';

		var token = localStorage.getItem('token');
		this.token = token ? token : 'f29b9ee1c1405bdbb8fff776972895ed';

		this.timestamp = new Date().getTime();

		this.uuid =this.timestamp.toString() + Common.Shared().getRndNum(5).toString();

		this.params = "clientType=" + this.clientType + "&lang=" + this.lang + "&network=" + this.network + "&timestamp=" + this.timestamp + "&uid=" + this.uid + "&version=" + this.version;
		
		this.sign = hex_md5(this.params + "token=" + this.token + "uuid=" + this.uuid + "action=" + this.action);
	}

	public getParamsByJson(){	
		var data = {
			"clientType":this.clientType,
			"lang":this.lang,
			"network":this.network,
			"timestamp":this.timestamp,
			"uid":this.uid,
			"version":this.version,
			"sign":this.sign,
			"token":this.token,
			"uuid":this.uuid,
			"action":this.action
		};
		return data;
	}

	public mergeDataByJsonStr(data){
		return JSON.stringify(Common.Shared().mergeObj(this.getParamsByJson(), data));
	}
}