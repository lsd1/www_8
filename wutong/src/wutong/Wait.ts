class Wait extends eui.ItemRenderer {
    private group_wait:eui.Group;
    private group_mc:eui.Group;
    private waitting:any;
    private full_mask:eui.Rect;

    public constructor(){
        super();
        this.skinName = "resource/garden_skin/wutong/Wait.exml";      
        this.data = Main.Shared().lang_config;
        this.right = 0;
		this.left = 0;
		this.top = 0;
		this.bottom = 0;
    }

    public show(){
        this.parent.setChildIndex(this, -1);        
        if(!this.waitting){
            Common.Shared().mc('loading', 100, 100, null, true).then((mc:any)=>{
                this.waitting = mc;
                this.waitting.gotoAndPlay(0, -1);
                this.group_mc.addChild(this.waitting);
            });
        }
        this.full_mask.visible = true;
        this.group_wait.visible = true;
    }

    public hide(){
        this.full_mask.visible = false;
        this.group_wait.visible = false;
    }
}