class MinerRule extends eui.ItemRenderer{
	private static shared:MinerRule;
	public static Shared() {
		if(this.shared == null){
			this.shared = new MinerRule();
		}
		return this.shared;
	}
	private rule_content:eui.Group;
	private btn_know:eui.Group;

	public constructor() {
		super();
		this.skinName = "resource/garden_skin/miner/MinerRule.exml";
		this.data = Main.Shared().lang_config;
		this.cacheAsBitmap = true;
		this.right = 0;
		this.left = 0;
		this.top = 0;
		this.bottom = 0;
		if(Main.Shared().lang == "en") {
			var rule_text = '<font color="#3C2405" size="30px" face="PingFang SC" >'+
						'1、The higher the physical strength of the miner, the higher the efficiency, the higher the income; the food and the phoenix egg can increase the physical strength of the miner; the smaller the phoenix egg algebra, the higher the physical strength.\n'+
						'</font><font color="#3C2405" size="30px" face="PingFang SC" >'+
						'2、Mining revenue is paid at each hour.\n'+
						'</font><font color="#3C2405" size="30px" face="PingFang SC" >'+
						'3、Physical exertion: The miners will continue to consume physical strength during work, so be sure to pay attention to the remaining amount of physical strength.\n'+
						'</font><font color="#3C2405" size="30px" face="PingFang SC" >'+
						'4、Equipment and tools are durable and consume a little bit per minute.\n'+
						'</font><font color="#3C2405" size="30px" face="PingFang SC" >'+
						'5、Rewarding instructions: Users can receive the proceeds at each hour. If they are not received within 24 hours, they will be lost according to the hour.\n</font>'+
						'</font><font color="#3C2405" size="30px" face="PingFang SC" >'+
						'6、Miners have a small probability of being injured in working conditions, increased physical exertion and reduced returns when injured</font>';
		}else if(Main.Shared().lang == "cn"){
			var rule_text = '<font color="#3C2405" size="30px" face="PingFang SC" >'+
						'1、矿工体力值越高效率越高，收益就越高；食物和凤凰蛋都可增加矿工体力；凤凰蛋代数越小提升体力越高。\n'+
						'</font><font color="#3C2405" size="30px" face="PingFang SC" >'+
						'2、挖矿收益在每个整点发放。\n'+
						'</font><font color="#3C2405" size="30px" face="PingFang SC" >'+
						'3、体力消耗：矿工工作中会不断消耗体力，请务必注意体力剩余量。\n'+
						'</font><font color="#3C2405" size="30px" face="PingFang SC" >'+
						'4、装备和工具耐久每分钟消耗一点。\n'+
						'</font><font color="#3C2405" size="30px" face="PingFang SC" >'+
						'5、领取奖励说明：用户可在每个整点领取收益，超过24小时未领取，则按照小时流失。\n</font>'+
						'</font><font color="#3C2405" size="30px" face="PingFang SC" >'+
						'6、矿工有小概率会在工作状态中受伤，受伤时体力消耗增加且收益减少</font>';
		}else if(Main.Shared().lang == "tcn"){
			var rule_text = '<font color="#3C2405" size="30px" face="PingFang SC" >'+
						'1、礦工體力值越高效率越高，收益就越高；食物和鳳凰蛋都可增加礦工體力；鳳凰蛋代數越小提升體力越高。\n'+
						'</font><font color="#3C2405" size="30px" face="PingFang SC" >'+
						'2、挖礦收益在每個整點發放。\n'+
						'</font><font color="#3C2405" size="30px" face="PingFang SC" >'+
						'3、體力消耗：礦工工作中會不斷消耗體力，請務必註意體力剩余量。\n'+
						'</font><font color="#3C2405" size="30px" face="PingFang SC" >'+
						'4、裝備和工具耐久每分鐘消耗壹點。\n'+
						'</font><font color="#3C2405" size="30px" face="PingFang SC" >'+
						'5、領取獎勵說明：用戶可在每個整點領取收益，超過24小時未領取，則按照小時流失。\n</font>'+
						'</font><font color="#3C2405" size="30px" face="PingFang SC" >'+
						'6、礦工有小概率會在工作狀態中受傷，受傷時體力消耗增加且收益減少</font>';
		}
		var a = Common.Shared().getITextElement(rule_text, 438, 460,  24, 0, 0);
		this.rule_content.addChild(a);
		this.btn_know.addEventListener(egret.TouchEvent.TOUCH_TAP,this.hide,this);
	}

	public show() {
		this.visible = true;
	}
	public hide() {
		this.visible = false;
	}
}