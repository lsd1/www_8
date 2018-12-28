class ChangeNameCommit extends eui.ItemRenderer{
    public static shared:ChangeNameCommit;
    public static Shared(){
        if(!this.shared){
            this.shared = new ChangeNameCommit();
        }
        return this.shared;
    }
    //新昵称
    private newName:eui.EditableText;
    //提交
    private commit:eui.Group;
    public constructor() {
        super();
        this.skinName = "resource/garden_skin/phoenix/ChangeNameCommit.exml";
        this.commit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCommitTap, this);
    }

    private onCommitTap(e:egret.TouchEvent){
        this.hide();
        //TODO提交数据
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