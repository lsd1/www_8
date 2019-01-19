class Guidance extends eui.ItemRenderer{
	private static shared:Guidance;
	public static Shared() {
		if(this.shared == null){
			this.shared = new Guidance();
		}
		return this.shared;
	}
	
	private guidance:eui.Group;
	private bg:eui.Image;
	private no1:eui.Image;
	private no2:eui.Image;
	private no3:eui.Image;
	private no4:eui.Image;
	private no5:eui.Image;
	private no6:eui.Image;

	private tips = new Tips();
	private wait = new Wait();

	public constructor() {
		super();
		this.top = 0;
        this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.addChild(this.tips);
		this.addChild(this.wait);
		this.data = Main.Shared().lang_config;
		this.skinName = "resource/garden_skin/miner/Guidance.exml";
		egret.ImageLoader.crossOrigin = 'anonymous';
		RES.getResByUrl(localStorage.getItem('imgUrl')+'miner/guide/guide.json', (data)=>{
			this.bg.texture = data._textureMap[this.data.guidance.bg];
			this.no1.texture = data._textureMap[this.data.guidance.no1];
			this.no2.texture = data._textureMap[this.data.guidance.no2];
			this.no3.texture = data._textureMap[this.data.guidance.no3];
			this.no4.texture = data._textureMap[this.data.guidance.no4];
			this.no5.texture = data._textureMap[this.data.guidance.no5];
			this.no6.texture = data._textureMap[this.data.guidance.no6];
		},this, RES.ResourceItem.TYPE_SHEET);
		this.guidance.addEventListener(egret.TouchEvent.TOUCH_END,this.onProcess,this);
	}
	//点击事件
	private onProcess() {
		if(this.no1.visible == true) {
			this.no1.visible = false;
			this.no2.visible = true;
		}else if(this.no2.visible == true) {
			this.no2.visible = false;
			this.no3.visible = true;
		}else if(this.no3.visible == true) {
			this.no3.visible = false;
			this.no4.visible = true;
		}else if(this.no4.visible == true) {
			this.no4.visible = false;
			this.no5.visible = true;
		}else if(this.no5.visible == true) {
			this.no5.visible = false;
			this.no6.visible = true;
		}else if(this.no6.visible == true) {
			this.no6.visible = false;
			this.wait.show();
			//请求接口
			//实例化一个参数对象。
			var params = new Params('miner/put_guide');
			//合并参数
			var paramsData = params.mergeDataByJsonStr({});
			//ws发送信息
			Working.Shared().ws.sendData({
          	  	data:paramsData,
            	receiveCallBack:(res)=>{
					//请求道具或者工具信息
					if(res.code == 0) {
						Guidance.Shared().parent.addChild(Working.Shared());
						Working.Shared().getMinerData();
						Guidance.Shared().parent.removeChild(Guidance.Shared());
					}else {
						Working.Shared().tips.showTips(res.msg);
					}
					this.wait.hide();
				}
			});
		}
	}
}