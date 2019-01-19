class MinerGoodList extends eui.ItemRenderer{
	private toolsList:eui.Group;//道具框
	private list_image:eui.Image;//图片
	public list_num:eui.Label;//数量
	private list_name:eui.Label;//名称
	private list_btn:eui.Group;
	//背景
	private image_bg:eui.Image;
	//是否可批量使用
	private isBatch:number;
	//是否可购买
	private isBuy:number;
	//价格
	private price:number;
	//数量
	public num:number;
	//id
	public id:number;
	//key,该道具在toollist里面的对应key.
	public key:any;

	public constructor(i?:any, x?:number, y?:number) {
		super();
		this.skinName = 'resource/garden_skin/miner/MinerGoodList.exml';
		if(i) {
			this.x = x ? x : 0;
			this.y = y ? y : 0;
			this.list_name.text = MinerGoods.Shared().toolList[i].toolName;
			this.list_num.text = 'X' + MinerGoods.Shared().toolList[i].num;
			this.num = MinerGoods.Shared().toolList[i].num;
			this.id = MinerGoods.Shared().toolList[i].id;
			if(this.id == 17) {
				this.image_bg.source = 'minerV1_json.clz_dk_2x';
			}else {
				this.image_bg.source = 'wutong_json.frame_white_gray';
			}
			this.key = i;			
			this.price = MinerGoods.Shared().toolList[i].mgcoin;
			this.isBuy = MinerGoods.Shared().toolList[i].isBuy;
			this.isBatch = MinerGoods.Shared().toolList[i].isBatch;
			Common.Shared().loadImg(MinerGoods.Shared().toolList[i].icon).then((texture:egret.Texture)=>{
            	this.list_image.source = texture;
			});
		}
		this.toolsList.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClickIcon,this);
	}
	//点击道具
	private onClickIcon(e:egret.TouchEvent) {
		MinerGoods.Shared().onCloseTheGoods();
		Working.Shared().addChild(GoodsIntro.Shared());
		Working.Shared().full_mask.visible = true;
		GoodsIntro.Shared().onShowIntro(this.key, e.currentTarget);
	}

	protected dataChanged():void{
		this.list_name.text = this.data.toolName;
		this.list_num.text = 'X' + this.data.num;
		this.num = this.data.num;
		this.id = this.data.id;	
		if(this.id == 17) {
			this.image_bg.source = 'minerV1_json.clz_dk_2x';
		}
		this.key = this.data.key;			
		this.price = this.data.mgcoin;
		this.isBuy = this.data.isBuy;
		this.isBatch = this.data.isBatch;
		Common.Shared().loadImg(this.data.icon).then((texture:egret.Texture)=>{
            this.list_image.source = texture;
		});
		// RES.getResByUrl(this.data.icon, (texture:egret.Texture) => {
        //     this.list_image.source = texture;
        // }, this, RES.ResourceItem.TYPE_IMAGE);
		MinerGoods.Shared().toolArr[this.data.key] = this;
	}
}