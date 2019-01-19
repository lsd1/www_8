class MoodTips extends eui.ItemRenderer{
    public static shared:MoodTips;
    public static Shared(){
        if(!this.shared){
            this.shared = new MoodTips();
        }
        return this.shared;
    }

    private mood_tips_confirm:eui.Group;
    private mood_tips_close:eui.Image;

    public constructor(){
        super();
        this.skinName = "resource/garden_skin/phoenix/MoodTips.exml";
        this.mood_tips_confirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
        this.mood_tips_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
    }

    public close(e:egret.TouchEvent){
        this.visible = false;
        FullMask.Shared().visible = false;
    }

    public open(e:egret.TouchEvent){
        this.visible = true;
        FullMask.Shared().visible = true;  
    }
}