class CharacterList extends eui.ItemRenderer{
	

	private chara_img:eui.Image;
	private chara_using:eui.Image;//现在使用图标
	private chara_durable:eui.Label;// 耐久
	private chara_gain:eui.Label;//美丽增益
	private chara_name:eui.Label;//名字
	private chara_price:eui.Label;//价格
	private chara_service:eui.Image;//更换
	private chara_replace:eui.Image;//维修
	private chara_id:number;
	private chara_isOwn:number;
	private chara_isUse:number;

	private list_data:any;

	




	//ws初始化
    public ws:any;

	public constructor() {
		super();
		this.list_data = Main.Shared().lang_config;
		this.ws = WsReq.Shared();
		this.skinName = 'resource/garden_skin/miner/CharacterList.exml';
		this.chara_service.addEventListener(egret.TouchEvent.TOUCH_TAP,this.service,this);
		this.chara_replace.addEventListener(egret.TouchEvent.TOUCH_TAP,this.replace,this);
	}
	protected dataChanged():void{
		this.chara_img.source = this.data.icon;

		this.chara_isUse = this.data.isUse;
		if(this.data.isUse == 1) {
			this.chara_using.visible = true;
		}else {
			this.chara_using.visible = false;
		}
		if(this.data.gender == 1) {
			this.chara_name.text = '人物-男';
		}else if(this.data.gender == 2) {
			this.chara_name.text = '人物-女';
		}
		this.chara_gain.text = this.data.weight;
		this.chara_durable.text = this.data.duration;
		this.chara_price.text = this.data.price + '金币';
		this.chara_id = this.data.id;
		this.chara_isOwn = this.data.isOwn;

	}
	//更换
	private service() {
		console.log(this.chara_isOwn);

		if(this.chara_isOwn == 0) {
			Character.Shared().showGroup(this.chara_price.text, 1, this.chara_id);
		}else {
			if(this.chara_isUse == 1) {
				Working.Shared().tips.showTips('当前正在使用');
				return false;
			}
			//实例化一个参数对象。
			var params = new Params('miner/skin/change_skin');
			//合并参数
			var paramsData = params.mergeDataByJsonStr({skinId:this.chara_id});
			//ws发送信息
			this.ws.sendData({
				data:paramsData,
				receiveCallBack:(res)=>{
					Working.Shared().wait.hide();
					//请求道具或者工具信息
					if(res.code == 0) {
						Character.Shared().showCharacter();
					}else {
						Character.Shared().tips.showTips(res.msg);
					}
				}
			});
		}
	}
	//维修
	private replace() {
		//实例化一个参数对象。
		var params = new Params('miner/skin/repair_skin');
		//合并参数
		var paramsData = params.mergeDataByJsonStr({skinId:this.chara_id});
		//ws发送信息
		this.ws.sendData({
			data:paramsData,
			receiveCallBack:(res)=>{
				Working.Shared().wait.hide();
				//请求道具或者工具信息
				if(res.code == 0) {
					Character.Shared().showGroup(res.data.amount + '金币', 2);
					Character.Shared().servecePay(res.data);
				}else {
					Character.Shared().tips.showTips(res.msg);
				}
			}
		});
		
		
	}
	//购买
	private paySkin() {
		//实例化一个参数对象。
		var params = new Params('miner/skin/buy_skin');
		//合并参数
		var paramsData = params.mergeDataByJsonStr({skinId:this.chara_id});
		//ws发送信息
        this.ws.sendData({
            data:paramsData,
            receiveCallBack:(res)=>{
				Working.Shared().wait.hide();
                //请求道具或者工具信息
                if(res.code == 0) {
					
                }else {
                    Character.Shared().tips.showTips(res.msg);
                }
            }
        });

	}

}