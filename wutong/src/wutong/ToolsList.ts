class ToolsList extends eui.ItemRenderer{
	//道具图片
	private list_image:eui.Image;
	//道具数量
	public list_num:eui.Label;
	//道具名称
	private list_name:eui.Label;
	//道具按钮
	private list_btn:eui.Group;
	//道具控件
	private toolsList:eui.Group;
	//是否可购买
	private isBuy:number;
	//是否可批量使用
	private isBatch:number;
	//价格
	private price:number;
	//数量
	public num:number;
	//id
	private id:number;
	//key,该道具在toollist里面的对应key.
	public key:any;

	public x:number;
	public y:number;

	public constructor(i?:any, x?:number, y?:number) {
		super();	
		this.skinName = "resource/garden_skin/wutong/ToolsList.exml";
		//this.data = Main.Shared().lang_config;
		if(i){
			this.x = x ? x : 0;
			this.y = y ? y : 0;
			this.list_name.text = Tools.Shared().toolList[i].toolName;
			this.list_num.text = 'X' + Tools.Shared().toolList[i].num;
			this.num = Tools.Shared().toolList[i].num;
			this.id = Tools.Shared().toolList[i].id;			
			this.key = i;			
			this.price = Tools.Shared().toolList[i].mgcoin;
			this.isBuy = Tools.Shared().toolList[i].isBuy;
			this.isBatch = Tools.Shared().toolList[i].isBatch;
			Common.Shared().loadImg(Tools.Shared().toolList[i].icon).then((texture:egret.Texture)=>{
            	this.list_image.source = texture;
			});
			// RES.getResByUrl(Tools.Shared().toolList[i].icon, (texture:egret.Texture) => {
            // 	this.list_image.source = texture;
        	// }, this, RES.ResourceItem.TYPE_IMAGE);
		}

		this.toolsList.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onListnameClick, this);
	}

	//点击道具按钮
	private onListnameClick(e:egret.TouchEvent) {
		Tools.Shared().onCloseTools();
		var propsIntro = PropsIntro.Shared();
		console.log(this.key);
		propsIntro.showPropsClick(this.key, e.currentTarget);
		Index.Shared().propsIntro = propsIntro;
		Index.Shared().full_mask.visible = true;
		Index.Shared().addChildAt(propsIntro, -1);
	} 

	protected dataChanged():void{
		this.list_name.text = this.data.toolName;
		this.list_num.text = 'X' + this.data.num;
		this.num = this.data.num;
		this.id = this.data.id;			
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
		Tools.Shared().toolArr[this.data.key] = this;
	}
}