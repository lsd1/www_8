class AuctionRule extends eui.ItemRenderer {
	private static shared:AuctionRule;
	private group_rule:eui.Group;
	public static Shared() {
		if(this.shared == null){
			this.shared = new AuctionRule();
		}
		return this.shared;
	}
	private rule_content:eui.Group;
	private btn_know:eui.Group;

	private langData:any;
	public constructor() {
		super();
		this.skinName = "resource/garden_skin/wutong/AuctionRule.exml";
		this.langData = Main.Shared().lang_config;
		this.cacheAsBitmap = true;
		this.right = 0;
		this.left = 0;
		this.top = 0;
		this.bottom = 0;
		
		var rule_text = '<font color="#3C2405" size="27px" face="PingFang SC" >'+
						'1、创世凤凰\n有且只有100只，编号唯一，不仅是尊贵的象征，而且 拥有最高的生命上限和拥有者的矿工挖矿效率永久加成\n'+
						'</font><font color="#3C2405" size="27px" face="PingFang SC" >'+
						'2、拍卖时间\n拍卖时间为当日10:30到22:30\n'+
						'</font><font color="#3C2405" size="27px" face="PingFang SC" >'+
						'3、金币冻结和取回\n参与拍卖后，参与拍卖的金币将冻结。玩家可主动 在其后轮次的出价期间取回，取回位置在出价记录中。\n'+
						'</font><font color="#3C2405" size="27px" face="PingFang SC" >'+
						'4、出价\n起拍价为5W金币，每次加价5%，加价的金币 不可大于当前所拥有金币。每次进入出价界面都要 输入PIN码进\n'+
						'</font><font color="#3C2405" size="27px" face="PingFang SC" >'+
						'5、数量\n每日只拍卖4只创世凤凰蛋</font>';
		var a = Common.Shared().getITextElement(rule_text, 474, 460,  24, 0, 0);
		this.rule_content.addChild(a);
		this.btn_know.addEventListener(egret.TouchEvent.TOUCH_TAP, this.hideRule, this);
	}
	public showRule(){
		this.visible = true;
	}
	public hideRule(){
		this.visible = false;
	}
}