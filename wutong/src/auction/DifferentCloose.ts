class DifferentCloose extends eui.ItemRenderer{
	private static shared:DifferentCloose;
	public static Shared() {
		if(this.shared == null){
			this.shared = new DifferentCloose();
		}
		return this.shared;
	}
	
	private differentCloose:eui.ItemRenderer;


	public constructor() {
		super();
		this.skinName = "resource/garden_skin/auction/DifferentCloose.exml";
	}	
}