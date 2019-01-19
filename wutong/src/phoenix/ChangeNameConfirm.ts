class ChangeNameConfirm extends eui.ItemRenderer{
    public static shared:ChangeNameConfirm;
    public static Shared(){
        if(!this.shared){
            this.shared = new ChangeNameConfirm();
        }
        return this.shared;
    }
    private wait:eui.Group;
    private confirm:eui.Group;
    public constructor() {
        super();
        this.skinName = "resource/garden_skin/phoenix/ChangeNameConfirm.exml";
        this.wait.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onWaitTap, this);
        this.confirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onConfirmTap, this);
    }
    
    private onWaitTap(e:egret.TouchEvent){
        this.hide();        
    }

    private onConfirmTap(e:egret.TouchEvent){
        //TODOPIN码验证。
        this.hide();        
        if(!Detail.Shared().contains(ChangeNameCommit.Shared())){
            Detail.Shared().addChild(ChangeNameCommit.Shared());
            ChangeNameCommit.Shared().verticalCenter = 0;
            ChangeNameCommit.Shared().horizontalCenter = 0;
        }
        ChangeNameCommit.Shared().show();
    }

    public show(){
        FullMask.Shared().visible = true;
        this.visible = true;
    }

    public hide(){
        FullMask.Shared().visible = false;        
        this.visible = false;
    }
}