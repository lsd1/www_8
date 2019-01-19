class PropsIntro extends eui.ItemRenderer{
	private static shared:PropsIntro;
	public static Shared() {
		if(this.shared == null){
			this.shared = new PropsIntro();
		}
		return this.shared;
	}

	//介绍内容控件
	public props:eui.Group;
	//控件背景图片
	private intro_bg:eui.Image;
	//道具图片组
	private group_tool_img:eui.Group;
	//道具图片
	private use_prop_img:eui.Image;
	//关闭按钮
	private btn_close:eui.Image;
	//道具说明
	private intro_text:eui.Group;
	//道具价格
	// private intro_price:eui.Label;
	//道具数量
	public num:number;
	//使用按钮
	private btn_use:eui.Group;
	private btn_use_1:eui.Group;
	private btn_use_text:eui.Label;
	//购买按钮
	private btn_buy:eui.Group;
	// 确认按钮
	private btn_con:eui.Group;

	//道具Id
	private toolId:number;
	//道具名称
	private toolName:string;
	//icon
	private toolInfo:any;
	public common:Common = Common.Shared();
	
	private introHtml:any;
	//提示弹框
	public tips:Tips = new Tips();
	//等待界面
	public wait:Wait = new Wait();
	//key,该道具在toollist里面的对应key.
	public key:any;
	//普通道具
	private intro_tool:eui.Group;
	//凤凰蛋
	private intro_egg:eui.Group;
	//凤凰蛋描述
	private egg_group_intro:eui.Group;
	private eggIntroHtml:any;
	//凤凰蛋名称
	private egg_name:eui.Label;
	//凤凰蛋编号
	private egg_num:eui.Label;
	//凤凰蛋父
	private egg_f:eui.Label;
	//凤凰蛋母
	private egg_m:eui.Label;
	//凤凰蛋状态
	private egg_status:eui.Label;
	//凤凰蛋持有者
	private egg_holder:eui.Label;
	//凤凰蛋性别
	private egg_sex:eui.Label;
	//孵化按钮
	private btn_hatch:eui.Group;
	//价格显示
	private group_price:eui.Group;
	//价格
	private priceHtml:any;

	//购买成功提示
	public buySuccess:any;

	//孵化按钮2
	public btn_hatch_2:eui.Group;
	//孵化按钮文字
	private hatch_content:eui.Label;
	private hatch_content_2:eui.Label;

	public constructor() {
		super();
		this.skinName = "resource/garden_skin/wutong/PropsIntro.exml";
		this.data = Main.Shared().lang_config;
		this.top = 0;
        this.left = 0;
        this.right = 0;
        this.bottom = 0;
		this.btn_use.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnUseClick,this);
		this.btn_use_1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnUseClick,this);
		this.btn_buy.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnBuyClick,this);
		this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBuyCloseClick,this);
		this.btn_con.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onUseConfrimClick,this);
		this.btn_hatch.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnHatchTap,this);
		
	}

	//关闭按钮
	public onBuyCloseClick() {
		this.toolName = '';
		if(this.intro_text.contains(this.introHtml)){
			this.intro_text.removeChild(this.introHtml);
		}
		// this.intro_price.text = '';
		this.num = 0;
		this.toolId = 0;
		this.btn_buy.visible = false;
		this.btn_use.visible = false;
		// this.full_mask.visible = false;
		this.props.visible = false;
		Tools.Shared().onShowGoods();
		// Index.Shared().removeChild(PropsStatus.Shared());
	}

	//打开按钮
	public showPropsClick(key:any, target?:any) {
		Index.Shared().full_mask.visible = true;
		this.key = key;
		this.toolName = '';
		if(this.intro_text.contains(this.introHtml)){
			this.intro_text.removeChild(this.introHtml);
		}

		this.num = 0;
		this.toolId = 0;
		var toolId = Tools.Shared().toolList[key].id;
		Index.Shared().wait.show();
		var httpReq = new HttpReq();
		if(key.indexOf('eggs') == -1){
			var url:string = 'v1.1/wutong/tool/tool_info';
			var data:any = {toolId:toolId};
		}else{
			var url:string = 'v1.1/wutong/tool/egg_info';
			var data:any = {eggId:toolId};
		}
		httpReq.GET({
			url:url,
			data:data,
			success: (res)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					Tools.Shared().toolList[this.key] = res.data.toolInfo;
					this.toolInfo = Tools.Shared().toolList[this.key];
					Common.Shared().loadImg(res.data.toolInfo.icon).then((texture:any)=>{
						this.use_prop_img.source = texture;
					});
					// RES.getResByUrl(res.data.toolInfo.icon, (texture:egret.Texture) => {
					// 	this.use_prop_img.source = texture;
					// }, this, RES.ResourceItem.TYPE_IMAGE);
					this.toolName = Tools.Shared().toolList[this.key].toolName;
					var extra =  Tools.Shared().toolList[this.key].extra;
					this.num = Tools.Shared().toolList[this.key].num;
					this.toolId = this.toolInfo.id;
					if(extra.length == 0){
						this.introHtml = Common.Shared().getITextElement(Tools.Shared().toolList[this.key].tips, 427, this.intro_text.height, 24, 0, 0);
						if(this.group_price.contains(this.priceHtml)){
							this.group_price.removeChild(this.priceHtml);						
						}
						this.priceHtml = Common.Shared().getITextElement('<font size="30px" color="#3c2405" face="PingFang SC">'+ parseInt(this.toolInfo.price) +'  </font><font size="24px" color="#3c2405" face="PingFang SC">'+ this.data.propsIntro.price_units +'</font>', 220, 30, 24, 0, 0);
						this.group_price.addChild(this.priceHtml);
						if(Tools.Shared().toolList[this.key].id == 5 || Tools.Shared().toolList[this.key].id == 8){
							this.group_price.visible = false;
						}else{
							this.group_price.visible = true;
						}
						this.intro_text.addChild(this.introHtml);
						var baseHeight:any = this.introHtml.height - 133;
						this.intro_text.height = 133 + baseHeight;
						this.props.height = 680 + baseHeight;
						this.intro_tool.height = 300 + baseHeight;

						//判断按钮显示。
						this.intro_tool.visible = true;
						this.intro_egg.visible = false;					
						if(this.toolInfo.isBuy > 0) {
							this.btn_buy.visible = true;
							this.btn_use.visible = true;
							this.btn_hatch_2.visible = false;
							this.btn_con.visible = false;
							this.btn_use_1.visible = false;
						} else {
							if(this.toolInfo.isUse > 0){
								this.btn_buy.visible = false;
								this.btn_use.visible = false;
								this.btn_con.visible = false;
								this.btn_hatch_2.visible = false;
								this.btn_use_1.visible = true;
							}else{
								this.btn_buy.visible = false;
								this.btn_use.visible = false;
								this.btn_use_1.visible = false;
								this.btn_hatch_2.visible = false;
								this.btn_con.visible = true;
							}
						}

					}else{
						if(this.toolInfo.extra.type == 2){
							this.hatch_content.text = this.data.propsIntroTs.hatch_2;
							this.hatch_content_2.text = this.data.propsIntroTs.hatch_2;							
						}else{
							this.hatch_content.text = this.data.propsIntroTs.hatch_1;
							this.hatch_content_2.text = this.data.propsIntroTs.hatch_1;							
						}
						if(this.egg_group_intro.contains(this.eggIntroHtml)){
							this.egg_group_intro.removeChild(this.eggIntroHtml);						
						}
						this.group_price.visible = false;
						//凤凰蛋描述
						this.eggIntroHtml = Common.Shared().getITextElement(Tools.Shared().toolList[this.key].tips, 430, 89, 24, 0, 0);
						this.egg_group_intro.addChild(this.eggIntroHtml);
						//凤凰蛋名称
						this.egg_name.text = extra.fullName;
						//凤凰蛋编号
						this.egg_num.text = extra.NO;

						var baseHeight:any = this.eggIntroHtml.height;
						this.props.height = 680;
						this.intro_egg.height = 314;
						this.intro_egg.visible = true;
						this.intro_tool.visible = false;
					}
					this.props.visible = true;	
				}else{
					Index.Shared().tips.showTips(res.msg);
				}
				Index.Shared().wait.hide();
				// Index.Shared().full_mask.visible = false;
			},
			error:(error)=>{
				Index.Shared().wait.hide();
				Index.Shared().tips.showTips(this.data.propsIntroTs.network_error);	
				// Index.Shared().full_mask.visible = false;
			}
		}, target);
	}
	
	//使用按钮点击
	public onBtnUseClick() {
		if(this.toolInfo.num == 0){
			Index.Shared().tips.showTips(this.data.propsIntroTs.not_enough);
			return false;
		}
		this.props.visible = false;
		var propsStatus = PropsStatus.Shared();
		propsStatus.showProps(this.toolInfo, this.key);
		Index.Shared().propsStatus = propsStatus;
		Index.Shared().full_mask.visible = true;
		Index.Shared().addChildAt(propsStatus, -1);
		Index.Shared().setChildIndex(propsStatus, -1);
	}

	//购买按钮点击
	public onBtnBuyClick() {
		this.props.visible = false;
		var usePay = UsePay.Shared();
		Index.Shared().usePay = usePay;
		Index.Shared().full_mask.visible = true;
		Index.Shared().addChildAt(usePay, -1);
		Index.Shared().setChildIndex(usePay, -1);
		usePay.showPayclick(this.toolInfo, this.key);		
	}
	//跳转显示
	public onShowProps() {
		this.props.visible = true;
		GoPay.Shared().onCloseAgain();
	}
	//确认按钮
	public onUseConfrimClick() {
		this.toolName = '';
		if(this.intro_text.contains(this.introHtml)){
			this.intro_text.removeChild(this.introHtml);
		}
		this.num = 0;
		this.toolId = 0;
		this.btn_buy.visible = false;
		this.btn_use.visible = false;
		this.btn_use_1.visible = false;
		this.props.visible = false;
		Tools.Shared().onShowGoods();
	}

	//孵化-获取孵化道具信息按钮
	private onBtnHatchTap(e:egret.TouchEvent){
		var httpReq = new HttpReq();
		var url:string = 'v1.1/wutong/tool/tool_info';	
		var data:any = {toolId:this.toolInfo.extra.relyToolId};
		httpReq.GET({
			url:url,
			data:data,
			success: (res)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					Common.Shared().loadImg(res.data.toolInfo.icon).then((texture:any)=>{
						this.use_prop_img.source = texture;
					});
					// RES.getResByUrl(res.data.toolInfo.icon, (texture:egret.Texture) => {
					// 	this.use_prop_img.source = texture;
					// }, this, RES.ResourceItem.TYPE_IMAGE);
					this.introHtml = Common.Shared().getITextElement(res.data.toolInfo.tips, 380, this.intro_text.height, 24, 0, 0);
					if(this.group_price.contains(this.priceHtml)){
						this.group_price.removeChild(this.priceHtml);						
					}
					this.priceHtml = Common.Shared().getITextElement('<font size="30px" color="#3c2405" face="PingFang SC">'+ parseInt(res.data.toolInfo.price) +'  </font><font size="24px" color="#3c2405" face="PingFang SC">'+ this.data.propsIntro.price_units +'</font>', 220, 30, 24, 0, 0);
					this.group_price.addChild(this.priceHtml);
					if(Tools.Shared().toolList[this.key].id != 5){
						this.group_price.visible = true;
					}else{
						this.group_price.visible = false;
					}
					
					this.intro_text.addChild(this.introHtml);
					var baseHeight:any = this.introHtml.height - 133;
					this.intro_text.height = 133 + baseHeight;
					this.props.height = 680 + baseHeight;
					this.intro_tool.height = 300 + baseHeight;
					this.btn_buy.visible = false;
					this.btn_con.visible = false;
					this.btn_use.visible = false;
					this.btn_use_1.visible = false;
					this.btn_hatch_2.visible = true;
					this.intro_egg.visible = false;			
					this.intro_tool.visible = true;
					this.props.visible = true;	
					this.btn_hatch_2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.useHatchTool, this);
				}else{
					Index.Shared().tips.showTips(res.msg);
				}
				Index.Shared().wait.hide();
			},
			error:(error)=>{
				Index.Shared().wait.hide();
				Index.Shared().tips.showTips(this.data.propsIntroTs.network_error);				
			}
		}, e.currentTarget);
	}

	//孵化-使用孵化道具
	public useHatchTool(e:egret.TouchEvent){
		var httpReq = new HttpReq();
		var url:string = 'v1.1/bird/put_hatch_tool_order';	
		var data:any = {toolId:this.toolInfo.extra.relyToolId,eggId:this.toolInfo.id};
		httpReq.POST({
			url:url,
			data:data,
			success:(res)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					var afterData = {orderId:res.data.orderId, payOrder:res.data.payOrder, payType:res.data.payType,pinCode:''};
					Common.Shared().secondPwd(this.afterHatchPay, null, false, afterData);
				}else{
					Index.Shared().tips.showTips(res.msg);
				}
				Index.Shared().wait.hide();
			},
			error:(error)=>{
				Index.Shared().wait.hide();
				Index.Shared().tips.showTips(this.data.propsIntroTs.network_error);				
			}
		}, e.currentTarget);
	}

	//孵化-确认孵化之后支付
	public afterHatchPay(pwd, afterData){
		Index.Shared().wait.show();
		var httpReq = new HttpReq();
		var url:string = 'v1.1/pay/confirm_pay';		
		afterData.pinCode = hex_md5(pwd);
		httpReq.POST({
			url:url,
			data:afterData,
			success:(res)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					Index.Shared().wait.hide();	
					PropsIntro.Shared().onBuyCloseClick();
					Tools.Shared().onCloseTools();
					//播放孵化动画
					//ph_detail里的type是指是鸟还是蛋,这里肯定是蛋,所以是1.
					Index.Shared().ph_detail = {"id":PropsIntro.Shared().toolInfo.id,"type":1};
					//PropsIntro.Shared().toolInfo.extra.type,type这里是指蛋是涅槃蛋还是普通蛋.					
					var mc = PropsIntro.Shared().toolInfo.extra.type == 1 ? 'on_hatch' : 'on_rebirth' ;
					Common.Shared().dbMc(mc, true).then((mc:any)=>{
						var ph_mc = mc;
						ph_mc.y = -140;
						ph_mc.x = -1;					
						Index.Shared().group_mc.addChild(ph_mc);
						ph_mc.animation.fadeIn(ph_mc.animation.animationNames[0], 0.3, 0, 0, "normalGroup");
					});
				}else{
					Index.Shared().tips.showTips(res.msg);
				}
				Index.Shared().wait.hide();
			},
			error:(error)=>{
				Index.Shared().wait.hide();
				Index.Shared().tips.showTips(this.data.propsIntroTs.network_error);				
			}
		});
	}

}