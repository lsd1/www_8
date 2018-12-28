class ScrollerCreation extends eui.Scroller{
	public static shared:ScrollerCreation;
	public static Shared(creationList:any, time:any){
		return  new ScrollerCreation(creationList, time);
	}
	
	// 大控件
	private scrollerCreation:eui.Scroller;
	//组控件
	private list_group:eui.Group = new eui.Group();
	//宣传图
	private content_img:eui.Component;
	private creationList:any[];
	
	private list:eui.List = new eui.List();
	

	public constructor(creationList:any, time:any) {
		super();
		this.skinName = "resource/garden_skin/auction/ScrollerCreation.exml";
		this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.content_img = new AuctionBanner();
		this.list_group.addChild(this.content_img);
		this.list.useVirtualLayout = false;
		if(time > 0){
			this.list.itemRenderer = AuctionResultList;	
			var countDown = new AuctionResultCount(time, Creation.Shared().prevTime);
			if(creationList.length > 0){

			}
			this.list_group.addChild(countDown);
		}else if(time == -1){
			this.list.itemRenderer = CreationList;	
		}
		this.creationList = creationList;
		this.list.dataProvider = new eui.ArrayCollection(this.creationList);
		this.list_group.addChild(this.list);
		this.scrollerCreation.viewport = this.list_group;			
		// this.content_img.scaleX = 0.8;
		// this.content_img.y = 150;
		this.list.y = time > 0 ? 640 : 340;
		// this.list_group.height = 1430;
	}
}