class GainContent extends eui.ItemRenderer{
	private static shared:GainContent;
	public static Shared() {
		if(this.shared == null){
			this.shared = new GainContent();
		}
		return this.shared;
	}
	private gain_group:eui.Group;//增益group
	private btn_close:eui.Image;//关闭按钮
	private btn_success:eui.Group;//确定按钮
	private list_box:eui.Group;

	public constructor() {
		super();
		this.top = 0;
        this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.skinName = "resource/garden_skin/miner/GainContent.exml";
		this.data = Main.Shared().lang_config;
		this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseGain,this);
		this.btn_success.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseGain,this);
	}
	//显示列表
	public showGainContent(theData:any) {
		this.gain_group.visible = true;
		Working.Shared().full_mask.visible = true;
		var k = 0;
		var theName = '';
		for(var i in theData) {
			if(theData[i] != 0) {
				switch(i) {
					case 'basic':
						theName = this.data.gainContent.basic_user;
					break;
					case 'phoenix':
						theName = this.data.gainContent.ph_bird;
					break;
					case 'fruitToken':
						theName = this.data.gainContent.fruit;
					break;
					case 'unionMember':
						theName = this.data.gainContent.alliance_maker;
					break;
					case 'unionMerchant':
						theName = this.data.gainContent.member;
					break;
					case 'minerSkin':
						theName = this.data.gainContent.miner_skin;
					break;
					case 'medalAward':
						theName = this.data.gainContent.invite;
					break;
				}
				
				if(i != 'total') {
					var list = new GainList;//创建icon
					list.the_text.text = theName + 'x' + theData[i];
					list.y = k * 45;
					k++;
					list.x = 0;
					this.list_box.addChild(list);
				}
			}
		}
		switch(k) {
			case 6:
				this.gain_group.height = 690;
			break;
			case 5:
				this.gain_group.height = 650;
			break;
			case 4:
				this.gain_group.height = 610;
			break;
			case 3:
				this.gain_group.height = 560;
			break;
			case 2:
				this.gain_group.height = 520;
			break;
			case 1:
				this.gain_group.height = 480;
			break;
		}
		
	}
	//关闭显示列表
	private onCloseGain() {
		this.list_box.removeChildren();
		this.gain_group.visible = false;
		Working.Shared().full_mask.visible = false;
	}

}