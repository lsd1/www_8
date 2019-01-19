class Interactive extends eui.ItemRenderer {
	private static share:Interactive = null;
	public static Shared(){
		if(this.share == null){
			this.share = new Interactive();
		}
		return this.share;
	}
	
	
	//互动框
	private group_interactive:eui.Group;
	//全屏遮罩
	// private full_mask:eui.Rect;
	//关闭按钮
	private btn_close:eui.Image;
	//好友列表
	private friend_list:eui.Group;
	//好友头像
	private friend_img:eui.Image;
	//好友Id
	private friend_name:eui.Label;
	//好友等级
	private friend_level:eui.Label;
	//好友动态
	private water_img:eui.Image;
	private cover_img:eui.Image;
	private pick_img:eui.Image;
	private group_countdown:eui.Group;
	private countdown_img:eui.Image;
	//倒计时
	private countdown:eui.Label;
	//列表组
	private group_list:eui.Group;
	//下拉列表
	private scroller_interactive:eui.Scroller;
	//暂无动态样式
	public empty:Empty = new Empty;

	public constructor() {
		super();
		this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.skinName = "resource/garden_skin/wutong/InteractiveSkin.exml";
		this.data = Main.Shared().lang_config;
		this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnCloseInteractive,this);
		this.empty.onShowEmpty();
		this.group_list.addChild(this.empty);
	}
	//关闭按钮
	public CloseInteractive() {
		// this.full_mask.visible = false;
		this.group_interactive.visible = false;
	}
	//显示页面
	public ShowInteractive() {

		if(this.group_list.contains(this.empty)) {
			this.group_list.removeChild(this.empty);
		}
		if(this.group_list.contains(this.scroller_interactive)){
			this.group_list.removeChild(this.scroller_interactive);
		}
		this.group_interactive.visible = true;
		Index.Shared().wait.show();
		var url = 'v1.0/wutong/list_friend';
        var httpReq = new HttpReq();
		httpReq.GET({
			url:url,
			data:{},
			success:(res)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					var treeInfo = res.data.treeInfo;
					if(treeInfo.length > 0){
							this.scroller_interactive = new ScrollerInteractive(treeInfo, treeInfo[treeInfo.length - 1].id);
							this.group_list.addChild(this.scroller_interactive);
					}else{
						this.empty.onShowEmpty();
						this.group_list.addChild(this.empty);
					}
				}else{
                    Index.Shared().tips.showTips(res.msg);
				}
				Index.Shared().wait.hide();
			},
			error:(error)=>{
				Index.Shared().wait.hide();
				Index.Shared().tips.showTips(this.data.interactiveTs.network_error);				
			}
		});
	}

	private OnCloseInteractive() {
		this.CloseInteractive();
		Index.Shared().full_mask.visible = false;
	}

}