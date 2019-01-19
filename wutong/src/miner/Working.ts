class Working extends eui.ItemRenderer {
    private static shared:Working;
	public static Shared() {
		if(this.shared == null){
			this.shared = new Working();
		}
		return this.shared;
	}
    public tips:Tips = new Tips();
    public wait:Wait = new Wait();
    //遮罩
    public full_mask:eui.Rect;
    //返回
    private btn_return:eui.Group;
    //规则
    private rule:eui.Group;
    //血条
    private hp_group:eui.Group;
    private hp_txt:eui.Label;
    //效率值
    private spd_group:eui.Group;
    private spd_txt:eui.Label;
    //增益
    private gain_group:eui.Group;
    private gain_txt:eui.Label;
    //装备
    private equips:eui.Image;
    //工具
    private minerTools:eui.Image;
    //物品
    private theGoods:eui.Image;
    //记录
    private records:eui.Image;
    //人物
    private chara:eui.Image;
    //顶部状态
    private status_tip:eui.Group;
    public status_img:eui.Image; 
    public status_discrip:eui.Label;
    public status_txt:eui.Label;
    //矿工Id
    private minerId:any;
    //ws初始化
    public ws:any;
    //矿工动画
    public group_miner:eui.Group;
    public group_basket:eui.Group;
    //矿栏
    public basket:eui.Image;
    //矿工状态图标
    public miner_status:eui.Image;
    //收益比例
    private earningsRate:number;
    //矿栏动画
    public basketMc:any
    //矿工详情
    public minerInfo:any;

    //领取收益提示
    public group_tips:eui.Group;
    public tips_text:eui.Label;
    public tips_close:eui.Group;
    public isWebgl:boolean;
    //矿工速率储存
    public speed:number;
    //矿工状态
    public minerStatus:number;
    //装备等级
    public toolL:number = 0;
    public suitL:number = 0;

    //旷工肾上腺素
    public adrenalineCountDown:number;

    public group_adren:eui.Group;
    public adren_timer:number;

    //皮肤状态监控 0没皮肤  1男皮肤 2女皮肤
    public skinGender:number;

    //测试
    private n:number = 1;
    private m:number = 1;    
    private ver = 0;
    private hor = 0;



    public constructor() {
		super();
		this.skinName = "resource/garden_skin/miner/Working.exml";
        this.data = this.data = Main.Shared().lang_config;
        this.top = 0;
        this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.addChild(this.tips);
        this.addChild(this.wait);
        var canvas = document.createElement('canvas');
        this.isWebgl = canvas.getContext('webgl') ? true : false;
        this.ws = WsReq.Shared();  
        //返回梧桐树
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP,this.returnIndex,this);
        //查看规则
        this.rule.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showRule,this);
        //测试
        // this.rule.addEventListener(egret.TouchEvent.TOUCH_TAP,this.test,this);
        // this.gain_group.addEventListener(egret.TouchEvent.TOUCH_TAP,this.testHjia,this);
        // this.equips.addEventListener(egret.TouchEvent.TOUCH_TAP,this.testHjian,this);
        // this.minerTools.addEventListener(egret.TouchEvent.TOUCH_TAP,this.testVjia,this);
        // this.records.addEventListener(egret.TouchEvent.TOUCH_TAP,this.testVjian,this);
        //收益查看
        this.gain_group.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showGain,this);
        //装备
        this.equips.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showEquips,this);
        //工具
        this.minerTools.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showTheTools,this);
        //记录
        this.records.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showRecord,this);
        //物品
        this.theGoods.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showTheGoods,this);
        //人物
        this.chara.addEventListener(egret.TouchEvent.TOUCH_TAP,this.showChara,this);
        //矿工状态
        this.miner_status.addEventListener(egret.TouchEvent.TOUCH_TAP,this.dealStatus,this);
        //未到领取时间
        this.basket.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNoEarnings,this);
        //领取收益
        this.group_basket.addEventListener(egret.TouchEvent.TOUCH_TAP,this.receiveEarnings,this);
        //关闭收益提示
        this.tips_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeTips,this);
	}
    
    public closeTips(){
        this.group_tips.visible = false;
        this.full_mask.visible = false;
        this.tips_text.text = '';        
    }

    public showTips(tips:string){
        this.group_tips.visible = true;
        this.full_mask.visible = true;
        this.tips_text.text = tips;
    }
    
    //刷新主界面
    public system(theData) {
        this.minerInfo = theData;
        this.renderMinerInfo(theData);
        this.updateSkin(this.speed, this.minerStatus, this.suitL, this.toolL);
    }

    //返回梧桐树
    private returnIndex() {
        this.parent.addChild(Index.Shared());
        this.parent.removeChild(this);
    }

    //获取宝矿主页面数据
    public getMinerData(){
        this.wait.show();
        var params = new Params('miner/show_main');
		//合并参数
		var paramsData = params.mergeDataByJsonStr({});
		//ws发送信息
        this.ws.sendData({
            data:paramsData,
            receiveCallBack:(res)=>{
                this.wait.hide();
                //矿工主页信息
                if(res.code == 0) {
                    this.minerInfo = res.data.miner;
                    if(this.minerInfo.isNewbie == 1) {
                        //引导
                        this.parent.addChild(Guidance.Shared());
                        this.parent.removeChild(this);
                    } else {
                         //需要购买初始道具
                        if(res.data.hasProp == 0) {
                            if(!Working.Shared().contains(HomeTips.Shared())) {
                                Working.Shared().addChild(HomeTips.Shared());
                            }
                            HomeTips.Shared().payToolInfo();
                            this.full_mask.visible = true;
                        }else{
                            this.renderMinerInfo(res.data.miner);
                            this.updateSkin(this.speed, this.minerStatus, this.suitL, this.toolL);
                        }
                    }
                } else {
                    Working.Shared().tips.showTips(res.msg);
                }
            }
        });
    }

    //渲染矿工界面
    public renderMinerInfo(miner){
        this.skinGender = miner.wearSkin;
        //更新生命值、效率。
        this.hp_txt.text = miner.hp;
        this.spd_txt.text = miner.ev;
        this.gain_txt.text = 'x' + miner.weights.total;
        //更新矿篮数据
        this.updateBasket(miner.earningsRate);
        
        //头顶状态显示
        if(miner.minerStatus > 0){
            this.miner_status.source = 'minerV1_json.status_' + miner.minerStatus;
            this.miner_status.visible = true;     
            this.status_img.source = 'minerV1_json.kgss_2x';
            this.updateHeader();
        }else{
            this.miner_status.visible = false;  
            this.status_img.source = 'minerV1_json.wkts_2x';
        }
        this.speed = miner.speed;
        this.minerStatus = miner.minerStatus;
        if(miner.props) {
            this.toolL = miner.props.tool.level;
            this.suitL = miner.props.suit.level;
        }
    }
   
   //更新头部负面状态位置
   public updateHeader() {
       //更新头部负面状态位置
        var hor = 0;
        var ver = 0;
        switch(this.toolL) {
            case 0:
                hor = 166;
                ver = -138;
                break;
            case 1:
                hor = 166;
                ver = -138;
                break;
            case 2:
                hor = 166;
                ver = -138;
                break;
            case 3:
                hor = 320;
                ver = -200;
                break;
            case 4:
                hor = 320;
                ver = -220;
                break;
            case 5:
                hor = 320;
                ver = -220;
                break;
        }
        this.miner_status.horizontalCenter = hor;
        this.miner_status.verticalCenter = ver;
   }
    //矿工装备和皮肤
    public updateSkin(speed:number, status:number, suitL:number, toolL:number) {
        this.suitL = suitL;
        this.toolL = toolL;
        if(this.skinGender != 0) {
            switch(this.toolL) {
                case 0:
                    this.group_miner.horizontalCenter = 20;
                    // this.group_miner.verticalCenter = -20;
                    this.group_miner.verticalCenter = 0;
                break;
                case 1:
                    this.group_miner.horizontalCenter = 30;
                    this.group_miner.verticalCenter = 0;
                break;
                case 2:
                    this.group_miner.horizontalCenter = 0;
                    this.group_miner.verticalCenter = 100;
                break;
                case 3:
                    this.group_miner.horizontalCenter = 240;
                    this.group_miner.verticalCenter = -20;
                break;
                case 4:
                    this.group_miner.horizontalCenter = 240;
                    this.group_miner.verticalCenter = -20;
                break;
                case 5:
                    this.group_miner.horizontalCenter = 240;
                    this.group_miner.verticalCenter = -20;
                break;
            }
        }else {
             //判断动画偏移位置
            switch(this.toolL) {
                case 0:
                    this.group_miner.horizontalCenter = 20;
                break;
                case 1:
                    this.group_miner.horizontalCenter = 30;
                break;
                case 2:
                    this.group_miner.horizontalCenter = 0;
                break;
                case 3:
                    this.group_miner.horizontalCenter = 60;
                break;
                case 4:
                    this.group_miner.horizontalCenter = -10;
                break;
                case 5:
                    this.group_miner.horizontalCenter = -15;
                break;
            }
        }
        console.log(this.group_miner.horizontalCenter);
        console.log(this.group_miner.verticalCenter);
       
        //动画名称
        var mcName = '';
        //速率
        var timeScale = 0;
        //矿工动画状态
        var no_ca = ['1_1','2_1','3_1','4_1','3_2','4_2'];//兼容不支持Webgl手机
        var suitLevel = (suitL + 1) + '_' + (toolL + 1);
        var workerMc = ''; 
        var resMc = '';
        if(this.skinGender == 0) {
            if(no_ca.indexOf(suitLevel) == -1) {
                workerMc = 'work_';
            }else {
                workerMc = this.isWebgl ? 'work_' : 'ca_work_';
            }
            resMc = this.isWebgl ? 'rest_': 'ca_rest_';//兼容不支持Webgl手机
        }else if(this.skinGender == 1) {
            workerMc = 'man_work_';
            resMc = 'man_rest_';
        }else if(this.skinGender == 2) {
            workerMc = 'wom_work_';   
            resMc = 'wom_rest_';
        }
        resMc += (suitL + 1);
        workerMc += (suitL + 1) + '_' + (toolL + 1);//初始等级为0，故+1；
        console.log(workerMc);
        console.log(resMc);
        switch(status){
            case 0://正常状态
            mcName = workerMc;
            this.status_discrip.text = this.data.workingTs.miner_work;    
            timeScale = speed;
            this.status_txt.text = '';
            break;
            case 1://体力值不足，停止工作
            mcName = resMc;
            this.status_discrip.text = this.data.workingTs.miner_hungry;
            this.status_txt.text = this.data.workingTs.eat_foods;
            this.group_miner.horizontalCenter = 0;
            break;
            case 2://受伤但不停止工作
            mcName = workerMc;
            this.status_discrip.text = this.data.workingTs.miner_injured;   
            this.status_txt.text = this.data.workingTs.miner_inefficient_1;
            timeScale = speed;
            break;
            case 3://道具损坏 ,停止工作
            mcName = resMc;
            this.status_discrip.text = this.data.workingTs.miner_tool_broken;    
            this.status_txt.text = this.data.workingTs.miner_work_stop;
            this.group_miner.horizontalCenter = 0;
            break;
            case 4://装备损坏但不停止工作
            mcName = workerMc;
            this.status_discrip.text = this.data.workingTs.miner_inefficient_2;     
            this.status_txt.text = this.data.workingTs.miner_equipment_broken;      
            timeScale = speed;                                  
            break;
            // case 5://受伤,且停止工作
            // mcName = '';

            // break;
        }
        console.log(mcName);
        //加载动画资源//true为远程加载，false为本地加载
        Common.Shared().dbMc(mcName, true).then((dbmc:any)=>{
            dbmc.animation.play(dbmc.animation.animationNames[0]);
            this.group_miner.removeChildren();
            this.group_miner.addChild(dbmc);
            if(timeScale> 0){
                dbmc.animation.timeScale = timeScale;
            }
        });
        //更新头部负面状态位置
        if(status != 0) {
            this.updateHeader();
        }
    }
    //测试
    private test() {
        //测试
        var mcName = '';
        var timeScale = 1;
        mcName = "wom_work_" + this.m + "_" + this.n;
        console.log(mcName);
        this.n++;
        if(this.n > 6) {
            this.n = 1;
            this.m++;
        }
        Common.Shared().dbMc(mcName, true).then((dbmc:any)=>{
            dbmc.animation.play(dbmc.animation.animationNames[0]);
            this.group_miner.removeChildren();
            this.group_miner.addChild(dbmc);
            if(timeScale> 0){
                dbmc.animation.timeScale = timeScale;
            }
        });
    }
    private testHjia() {
        this.group_miner.horizontalCenter = this.group_miner.horizontalCenter + 10;
        console.log(this.group_miner.horizontalCenter);
    }
    private testHjian() {
        this.group_miner.horizontalCenter = this.group_miner.horizontalCenter - 10;
        console.log(this.group_miner.horizontalCenter);
        
    }
    private testVjia() {
        this.group_miner.verticalCenter = this.group_miner.verticalCenter + 10;
        console.log(this.group_miner.verticalCenter);
        
    }
    private testVjian() {
        console.log(this.group_miner.verticalCenter);
        this.group_miner.verticalCenter = this.group_miner.verticalCenter - 10;
    }

    //更新矿栏
    public updateBasket(earningsRate:number){
        if(earningsRate<=0){
            this.group_basket.removeChildren();            
            this.basket.visible = true;
            this.basketMc = null;
        }else{
            this.basket.visible = false;            
            if(!this.basketMc){
                Common.Shared().dbMc('minerBasket', true).then((dbmc:any)=>{
                    this.basketMc = dbmc;
                    dbmc.animation.play("move");	
                    this.group_basket.addChild(dbmc);
                    this.editBasket(earningsRate);
                });
            }else{
                this.editBasket(earningsRate);
            }
        }
    }

    //修改矿篮显示
    public editBasket(earningsRate){
        var rate = earningsRate.toString();
        switch(rate.length){
            case 1:
            rate = '**' + rate;
            break;
            case 2:
            rate = '*' + rate;
            break;
            default:
            break;
        }
        var rateArr = rate.split('');
        var slotArr = [];
        slotArr.push(this.basketMc.armature.getSlot("num_1"));//找到包含要换装的图片的插槽
        slotArr.push(this.basketMc.armature.getSlot("num_2"));//找到包含要换装的图片的插槽
        slotArr.push(this.basketMc.armature.getSlot("num_3"));//找到包含要换装的图片的插槽
        slotArr.push(this.basketMc.armature.getSlot("底"));//找到包含要换装的图片的插槽
        for (var a = 0; a < 4; a++){
            if(a == 3){
                var c:egret.Bitmap = new egret.Bitmap();
                c.texture = RES.getRes( 'minerV1_json.b2' );
                c.scaleX = 2;
                c.scaleY = 2;
                c.x = slotArr[a].display.x;
                c.y = slotArr[a].display.y;
                c.width = c.width/2 * (1-earningsRate/100);
                c.height = c.height/2;
                c.anchorOffsetX = c.width/2-(earningsRate/100*90);
                c.anchorOffsetY = c.height/2;
                slotArr[a].setDisplay( c );
            }else{
                var b:egret.Bitmap = new egret.Bitmap();
                b.texture = RES.getRes('minerV1_json.' + rateArr[a]);
                b.scaleX = 2;
                b.scaleY = 2;
                b.x = slotArr[a].display.x;
                b.y = slotArr[a].display.y;
                b.width = b.width/2;
                b.height = b.height/2;
                b.anchorOffsetX = b.width/2;
                b.anchorOffsetY = b.height/2;
                slotArr[a].setDisplay( b );
            }
        }
    }
    //领取时间未到
    public onNoEarnings() {
        this.tips.showTips(this.data.workingTs.not_arrived)
    }
    //领取收益
    public receiveEarnings(){
        this.wait.show();
        var params = new Params('miner/receive_earnings');
		//合并参数
		var paramsData = params.mergeDataByJsonStr({});
		//ws发送信息
        this.ws.sendData({
            data:paramsData,
            receiveCallBack:(res)=>{
                this.wait.hide();
                //矿工主页信息
                if(res.code == 0) {
                    this.showTips(res.data.receiveEarnings + this.data.workingTs.earning_tips);
                    this.updateBasket(0);
                }else{
                    Working.Shared().tips.showTips(res.msg);
                }
            }
        });
    }

    //处理矿工状态
    public dealStatus(e:egret.Event){
        switch(this.minerInfo.minerStatus){
            case 3:
            this.showTheTools();
            break;
            case 4:
            this.showEquips();
            break;
            default:
            this.showTheGoods();
            break;
        }
    }

    //查看规则
    private showRule() {
        if(!this.contains(MinerRule.Shared())) {
            this.addChild(MinerRule.Shared());
        }
        MinerRule.Shared().show();
    }
    //查看矿工增益
    private showGain() {
        this.wait.show();
        //实例化一个参数对象。
		var params = new Params('miner/show_main');
		//合并参数
		var paramsData = params.mergeDataByJsonStr({propType:2});
		// //ws发送信息
        this.ws.sendData({
            data:paramsData,
            receiveCallBack:(res)=>{
                this.wait.hide();
                //请求道具或者工具信息
                if(res.code == 0) {
                    if(!this.contains(GainContent.Shared())) {
                        this.addChild(GainContent.Shared());
                    }
                    var gainContent = res.data.miner.weights;
                    GainContent.Shared().showGainContent(gainContent);
                }else {
                    Working.Shared().tips.showTips(res.msg);
                }
            }
        });
    }

    //装备
    private showEquips() {
        if(!this.contains(MinerTools.Shared())) {
            this.addChild(MinerTools.Shared());
        }
        MinerTools.Shared().onShowTheTool(2);
    }

    //工具
    private showTheTools() {
        if(!this.contains(MinerTools.Shared())) {
            this.addChild(MinerTools.Shared());
        }
        MinerTools.Shared().onShowTheTool(1);
    }

    //记录
    private showRecord() {
        this.parent.addChild(Records.Shared());
        this.parent.removeChild(this);
        Records.Shared().onShowRecord();
    }
    //人物
    private showChara() {
        if(!this.contains(Character.Shared())) {
            this.addChild(Character.Shared());
        }
        Character.Shared().showCharacter();
    }

    //物品
    public showTheGoods() {
        this.wait.show();
        //实例化一个参数对象。
		var params = new Params('miner/tool/tool_list');
		//合并参数
		var paramsData = params.mergeDataByJsonStr({});
		// //ws发送信息
        this.ws.sendData({
            data:paramsData,
            receiveCallBack:(res)=>{
                this.wait.hide();
                //请求道具或者工具信息
                if(res.code == 0) {
                    var theData = res.data;
                    //返回工具信息
                    if(!Working.Shared().contains(MinerGoods.Shared())) {
                        Working.Shared().addChild(MinerGoods.Shared());
                    }
                    Working.Shared().full_mask.visible = true;
                    MinerGoods.Shared().onShowMinerGood(theData);
                    MinerGoods.Shared().minerGoods.visible = true;
                }else {
                    Working.Shared().tips.showTips(res.msg);
                }
            }
        });
    }
}