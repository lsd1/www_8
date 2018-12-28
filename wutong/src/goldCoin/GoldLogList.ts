class GoldLogList extends eui.ItemRenderer {
    private static share:GoldLogList;
    public static Shared() {
        if(this.share == null){
            this.share = new GoldLogList();
        }
        return this.share;
    }

    private logText:eui.Label;
    private logTime:eui.Label;
    private logChange:eui.Label;

    public constructor () {
        super();
        this.top = 0;
        this.left = 0;
        this.right = 0;
        this.bottom = 0;
        this.skinName = "resource/garden_skin/goldCoin/GoldLogList.exml";
        this.data = Main.Shared().lang_config;
        this.cacheAsBitmap = true;
    }

    protected dataChanged():void{
        //数据改变时，会自动调用 dataChanged 这个方法
        if(this.data.changeType == 1){
		    this.logChange.text = '+' + this.data.changeNum;
        }else{
		    this.logChange.text = '-' + this.data.changeNum;
        }
		this.logText.text = this.data.content;
		this.logTime.text = this.data.datetime;
    }

}