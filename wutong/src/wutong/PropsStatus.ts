class PropsStatus extends eui.ItemRenderer{
    private static shared:PropsStatus;
	public static Shared() {
		if(this.shared == null) {
			this.shared = new PropsStatus();
		}
		return this.shared;
	}
    //动画
    private use_mc:any;

    //遮罩
    // public full_mask:eui.Rect;
    //关闭按钮
    private use_close:eui.Image;
    //使用道具控件
    public use_prop:eui.Group;
    //道具图片
    private use_prop_img:eui.Image;
    //道具说明
    public use_prop_intro:eui.Group;
    public use_prop_bg:eui.Image;
    public use_prop_number:eui.Label;

    //叠加使用控件
    private use_pay:eui.Group;
    //购买数量
	private use_pay_num:eui.Group;
	//增加按钮
	private use_pay_add:eui.Button;
	//减少按钮
	private use_pay_dec:eui.Button;
    //输入框
	public usePayinput:any;
    public use_num:number;

    //确定按钮
    private use_prop_dete:eui.Group;
    //道具Id
    public toolId:number;
    //道具数量
    public num:number;
    //num_text
    public num_text:eui.Label;
    //使用按钮
    private use_btn:eui.Group;
    //common
    private commom = Common.Shared();
    //toolInfo
    private toolInfo:any;
    //key,该道具在toollist里面的对应key.
	public key:any;
       
    public constructor() {
        super();
        this.skinName = "resource/garden_skin/wutong/PropsStatus.exml";
		this.data = Main.Shared().lang_config;
        this.top = 0;
        this.left = 0;
        this.right = 0;
        this.bottom = 0;
        this.use_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClosePropsClick,this);
        this.use_btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onUseBtnClick,this);
        // 增加数量
		this.use_pay_add.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onPayAddClick,this);
		//减少数量
		this.use_pay_dec.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onPayDecClick,this);

    }

    private onClosePropsClick() {
        this.closeProps();
        Index.Shared().full_mask.visible = true;
        Index.Shared().addChildAt(PropsIntro.Shared(), -1);
    }

    public async showProps(toolInfo:any, key:any) {
        this.key = key;
        this.toolInfo = toolInfo;
        this.toolId = toolInfo.id;
        this.num = toolInfo.num;
        if(UsePay.Shared().theNum) {
            this.num = UsePay.Shared().theNum;
        }else {
            this.num = toolInfo.num;
        }
        // 可批量使用
        if(toolInfo.isBatch == 1) {
            this.use_pay.visible = true;
            if(this.use_pay_num.contains(this.usePayinput)){
                this.use_pay_num.removeChild(this.usePayinput);
		    }
            this.usePayinput = new UsePayInput(this.num);
            this.use_num = parseInt(this.usePayinput.text_type.text);
            this.use_pay_num.addChild(this.usePayinput);
            this.use_prop.height = 570;
        }else{
            this.use_pay.visible = false;
            this.use_prop.height = 520;
        }
        this.num_text.text = Tools.Shared().toolList[this.key].num;

        this.use_prop_img.source = await Common.Shared().loadImg(toolInfo.icon);
        // RES.getResByUrl(toolInfo.icon, (texture:egret.Texture) => {
        //     this.use_prop_img.source = texture;
        // }, this, RES.ResourceItem.TYPE_IMAGE);
        this.use_prop.visible = true;
    }

    public closeProps() {
        this.use_prop.visible = false;
        PropsIntro.Shared().onShowProps();
        if(this.use_pay_num.contains(this.usePayinput)) {
            this.use_pay_num.removeChild(this.usePayinput);
        }
    }


    //增加按钮
	private onPayAddClick() {
		this.usePayinput.addClick();
	}
    
    //减少按钮
	private onPayDecClick() {
		this.usePayinput.decClick();
	}

    private onUseBtnClick(e:egret.TouchEvent){
        if(this.num == 0){
            Index.Shared().tips.showTips(this.data.propsStatusTs.not_enough);
            return false;
        }
		var url:string = '';
        if(this.toolId == 19) {
            Index.Shared().removeChild(PropsStatus.Shared());
            if(!Index.Shared().contains(Rename.Shared())) {
                Index.Shared().addChild(Rename.Shared());
            }
            Index.Shared().full_mask.visible = false;
            Rename.Shared().onShowRename();
        }else {
            switch(this.toolId){
                case 1:
                    url = 'v1.0/wutong/use_fert';
                break;
                case 2:
                    url = 'v1.0/wutong/zap_worm';
                break;
                case 3:
                    url = 'v1.0/wutong/use_ripener';
                break;
                case 4:
                    url = 'v1.0/wutong/use_boot_cap';
                break;
                case 5:
                    url = 'v1.1/bird/tool_use_fruit';
                break;
                case 6:
                    url = 'v1.1/bird/tool_use_toy';
                break;
                case 7:
                    url = 'v1.1/bird/tool_use_cold';
                break;
                case 8:
                    url = 'v1.1/bird/tool_use_water';
                break;
                default:
                return false;
            }
            Index.Shared().wait.show();
            var httpReq = new HttpReq();
            var useNum:number = 1;
            if(this.toolInfo.isBatch == 1){
                useNum = Number(this.usePayinput.text_type.text);
            }
            httpReq.POST({
                url:url,
                data:{num:useNum,toolId:PropsStatus.Shared().toolId},
                success: (res)=>{
                    var res = JSON.parse(res);
                    if(res.code == 0){
                        this.closeProps();
                        PropsIntro.Shared().onBuyCloseClick();
                        //更新武平栏道具数量。
                        Tools.Shared().closeTools();
                        let num:number = Tools.Shared().toolList[this.key].num;
                        Tools.Shared().toolList[this.key].num = num - useNum;
                        Tools.Shared().toolArr[this.key].list_num.text = 'X' + (num - useNum);
                        switch(this.toolId){
                            case 1:
                                //播放施用肥料动画
                                    this.commom.mc('fertilizer', 440, 600, Index.Shared().group_tree, true).then((img:any)=>{
                                        this.use_mc =  img;
                                        this.use_mc.scaleX = 1.5;
                                        this.use_mc.scaleY = 1.5;
                                        Index.Shared().group_tree.addChild(this.use_mc);
                                        this.use_mc.gotoAndPlay(0, 1);
                                        if(Index.Shared().matureTime <= 0){
                                            Common.Shared().loadImg(Index.Shared().fruitUrl + Common.Shared().getImgByStatus(3, Index.Shared().treeInfo.level, 'f')).then((texture:any)=>{
                                                Index.Shared().fruit.source = texture; 
                                            });
                                            // RES.getResByUrl(Index.Shared().fruitUrl + Common.Shared().getImgByStatus(3, Index.Shared().treeInfo.level, 'f'), (texture:egret.Texture) => {
                                            //     Index.Shared().fruit.source = texture;
                                            // }, this, RES.ResourceItem.TYPE_IMAGE);
                                        }
                                        this.use_mc.addEventListener(egret.Event.COMPLETE, (e:egret.Event)=>{
                                            //TODO显示成熟倒计时
                                            Index.Shared().showRewardCount( res.data.matureTime );
                                            //提示增加生命值
                                            let new_xp = res.data.xp;
                                            Index.Shared().littleTips('+' + res.data.xp + this.data.propsStatusTs.life_val);
                                            //梧桐树添加生命值
                                            Index.Shared().wutongGrow(new_xp);
                                        }, this.use_mc);
                                    });
                                break;
                            case 2:
                                //TODO去掉虫害动画
                                let mcX,mcY,mcSX,mcSY;
                                if(Index.Shared().treeInfo.level < 4){
                                    mcX = 285;
                                    mcY = 250;
                                    mcSX = mcSY = 1.5;
                                }else if(Index.Shared().treeInfo.level > 3  && Index.Shared().treeInfo.level < 7){
                                    mcX = 285;
                                    mcY = 190;
                                    mcSX = mcSY = 1.75;
                                }else if(Index.Shared().treeInfo.level > 6 && Index.Shared().treeInfo.level < 10){
                                    mcX = 295;
                                    mcY = 135;
                                    mcSX = mcSY = 1.85;
                                }else{
                                    mcX = 310;
                                    mcY = 12;
                                    mcSX = mcSY = 2;
                                }
                                this.commom.mc('pesticides', mcX, mcY, Index.Shared().group_tree, true).then((mc:any)=>{
                                    this.use_mc = mc;
                                    this.use_mc.scaleX = mcSX;
                                    this.use_mc.scaleY = mcSY;
                                    Index.Shared().group_tree.removeChild(Index.Shared().worm_mc_1);
                                    Index.Shared().group_tree.addChild(this.use_mc);
                                    this.use_mc.gotoAndPlay(0, 1);   
                                });
                            break;
                            case 3:
                                //TODO把成熟时间减半
                                this.commom.mc('potion', 375 , 600, Index.Shared().group_tree, true).then((mc:any)=>{
                                    this.use_mc = mc;
                                    this.use_mc.scaleX = 1.5;
                                    this.use_mc.scaleY = 1.5;
                                    Index.Shared().matureTime = res.data.matureTime;
                                    Index.Shared().group_tree.addChild(this.use_mc);
                                    this.use_mc.gotoAndPlay(0, 1); 
                                }); 
                            break;
                            case 4:
                                //显示保护罩倒计时
                                Index.Shared().showAntiThef( 24*3600 );
                            break;
                            case 5:
                                if(Index.Shared().ph_detail){}
                                //弹出小提示，加减生命值
                                Index.Shared().littleTips('+' + res.data.lifeValue + this.data.propsStatusTs.life_val);
                                //吃果子动画
                                Index.Shared().eatMc(5, res.data.statusId);
                            break;
                            case 7:
                                //弹出小提示，加减生命值
                                if(res.data.lifeValue > 0){
                                    Index.Shared().littleTips('-' + res.data.lifeValue + this.data.propsStatusTs.life_val);      
                                }
                            
                                Index.Shared().eatMc(7, res.data.statusId, res.data.lifeValue);                            
                            break;
                            case 8:
                                //弹出小提示，加减生命值
                                Index.Shared().littleTips('+' + res.data.lifeValue + this.data.propsStatusTs.life_val);
                                Index.Shared().eatMc(8, res.data.statusId);                            
                            break;
                            default:
                            break;
                        }
                    }else if(res.code == 666){
                        this.closeProps();
                        PropsIntro.Shared().onBuyCloseClick();
                        Tools.Shared().closeTools();                    
                        Index.Shared().changeSay(null, this.data.propsStatusTs.full);
                    }else{
                        this.closeProps();
                        PropsIntro.Shared().onBuyCloseClick();
                        Tools.Shared().closeTools();
                        Index.Shared().tips.showTips(res.msg);
                    }
                    Index.Shared().wait.hide();
                },
                error:(error)=>{
                    Index.Shared().wait.hide();
                    Index.Shared().tips.showTips(this.data.propsStatusTs.network_error);				
                }
            }, e.currentTarget);
        }
    }

    
}