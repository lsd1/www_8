class Email extends eui.ItemRenderer {
    private static share:Email = null;
	public static Shared(){
		if(this.share == null){
			this.share = new Email();
		}
		return this.share;
	}


    //关闭按钮
    private btn_close_email:eui.Image;
    //邮箱列表
    private group_email_list:eui.Group;
    //遮罩
    // private full_mask:eui.Rect;
    //邮箱
    private group_email:eui.Group;
    //列表盒子
    public email_tool:eui.Group;
    // 列表
    public scroller_email:eui.Scroller;
    //暂无动态样式
    public empty:Empty = new Empty;

    private list:eui.List = new eui.List;
    private last_id:number = 0;
    //邮件列表
    // public emaillists:any[] = [];

    public constructor() {
        super();
        this.top = 0;
        this.left = 0;
        this.right = 0;
        this.bottom = 0;
        this.skinName = "resource/garden_skin/email/EmailSkin.exml";
        this.data = Main.Shared().lang_config;


		//this.cacheAsBitmap = true;
        this.btn_close_email.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseEmail,this);
        this.empty.onShowEmpty();
        this.email_tool.addChild(this.empty);
    }

    //关闭按钮
    public CloseEmail() {
        this.group_email.visible = false;
        // Index.Shared().full_mask.visible = false;
    }
    
    //打开皮肤
    public showEmail() {
        this.email_tool.removeChildren();
        this.group_email.visible = true;
        Index.Shared().wait.show();
        var httpReq  = new HttpReq();
        var url:string = "v1.1/wutong/email_list";
        httpReq.GET({
            url:url,
            data:{},
            success:(res) =>{
                var res = JSON.parse(res);
                if(res.code == 0) {
                    var emaillist = res.data.emailList;
                    if(emaillist.length > 0) {
                        this.scroller_email = new ScrollerEmail(emaillist, emaillist[emaillist.length - 1].id);
                        this.email_tool.addChild(this.scroller_email);
                    }else {
                        this.empty.onShowEmpty();
                        this.empty.empty_text.text = this.data.emailTs.no_mail;
                        this.empty.horizontalCenter = '0';
                        this.email_tool.addChild(this.empty);
                    }
                }else {
                    Index.Shared().tips.showTips(res.msg);
                }
                Index.Shared().wait.hide();   
            },
            error:(error) =>{
                Index.Shared().wait.hide();                   
                Index.Shared().tips.showTips(this.data.emailTs.network_error);
            }
        });
    }

    private onCloseEmail() {
        this.CloseEmail();
        Index.Shared().full_mask.visible = false;
    }

}