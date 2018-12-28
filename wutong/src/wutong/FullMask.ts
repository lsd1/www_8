class FullMask extends eui.Component {
	public static shared:FullMask;
    public static Shared(){
        if(!this.shared){
            this.shared = new FullMask();
        }
        return this.shared;
    }
	public constructor() {
		super();
		this.skinName = "resource/garden_skin/wutong/FullMask.exml";
        this.visible = false;
        this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;
	}
}