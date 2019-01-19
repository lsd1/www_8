class Index extends eui.ItemRenderer{
	private static shared:Index;
	public static Shared() {
		if(this.shared == null){
			this.shared = new Index();
		}
		return this.shared;
	}
	//凤凰蛋信息
	public auctionInfo:any
	public common:Common = Common.Shared();
	public fruitUrl = localStorage.getItem('imgUrl') + 'fruit/';
	//物品信息弹框
	public propsIntro:PropsIntro; 
	//使用物品
	public propsStatus:PropsStatus;
	//购买物品
	public usePay:UsePay;

	//提示弹框
	public tips:Tips = new Tips();
	//通知弹框
	public notices:Notices = new Notices();
	//通知内容
	public noticeData:any;
	//等待界面
	public wait:Wait = new Wait();
	//果园背景
	private bg:eui.Image;

	//保护罩倒计时
	public group_protect:eui.Group;
	public protect_count:eui.Label;

	//group_tree果树控件
	public group_tree:eui.Group;
	private tree:eui.Image;
	public fruit:eui.Image;

	//open_hint 开通页面
	private open_hint:eui.Group;
	private btn_up_open_hint:eui.Group;
	private btn_later_open_hint:eui.Group;
	private btn_close_open_hint:eui.Button;
	private activateTip:eui.Group;

	//confirm_open确认开通页面
	private confirm_open:eui.Group;
	private btn_close_open:eui.Button;
	private btn_gb_confirm_open:eui.Group;
	private btn_shared_confirm_open:eui.Group;
	private confirmTips:eui.Group;

	//购买成功与否
	public fail:eui.Group;
	private fail_img:eui.Image;
	private fail_txt:eui.Label;
	private btn_close_fail:eui.Group;
	public mgCoin:eui.Group;
	private btn_conf_fail:eui.Group;
	
	//success欢迎页面
	private success:eui.Group;
	private conf_txt:eui.Label;
	private btn_dete_success:eui.Button;
	private btn_close_success:eui.Group;
	//判断支付类型
	private hasFruit:string;
	private hasMGB:string;

	//full_mask全屏遮罩
	public full_mask = FullMask.Shared();

	//tree_lists梧桐果列表
	private pack_up:eui.Group;
	private btn_close_tree_lists:eui.Button;
	private list_mature:eui.Group;
	private wutong_dynamic:eui.Group;

	//group_news好友动态
	private group_news:eui.Group;
	private friends_news:eui.Group;

	//好友动态控件
	private friendNew:any;
	//暂无动态样式
	public empty:Empty = new Empty();
	
	//nav导航栏
	private nav:eui.Group;
	private interact:eui.Image;
	public goods:eui.Image;
	private email:eui.Image;
	private tran:eui.Image;
	private auction:eui.Image;
	//宝矿入口
	public miner:eui.Image;
	//head_img_info头像资料
	private head_img_info:eui.Group;
	private group_avatar:eui.Group;
	private nickname:eui.Label;
	private user_head_img:any;
	private user_lv:eui.Image;
	//果树生命值条
	public xp_bar:eui.Rect;
	//果树生命值百分比
	public xp_text:eui.Label;
	public ord_leave_xp:number;
	public xp_now:number;
	//成熟倒计时
	private mature_count:eui.Label;
	public matureTime:number;
	//成熟倒计时图标
	private mature_img:eui.Image;

	//保护罩倒计时
	private antiTheftTime:number;
	//生命值控件
	public icon_tip:eui.Group;
	//生命值显示
	public icon_tip_text:eui.Label;

	//go_back返回按钮
	private go_back:eui.Group;

	//果树状态页面
	public sta_and_dyn:StaAndDyn;
	//物品栏页面
	public tools:Tools;
	//互动页面
	public interactive:Interactive;
	//邮箱页面
	public emailSkin:Email;
	//宝矿预约信息
	public binding:Binding;

	//果子熟了画
	private guozishule_mc_1:any;
	//干枯动画
	private ganku_mc_1:any;
	//防偷动画
	private fangtou_mc_1:any;
	//长虫动画
	public worm_mc_1:any;
	//浇水
	private watering_mc_1:any;
	//激活果园
	private panel_active_garden:eui.Group;
	//果园激活码
	private activate_no:eui.EditableText;
	//提交激活码
	private commit_active_garden:eui.Group;

	//干旱状态
	private isDry:number;
	//可浇水状态
	private isWater:number;
	//成熟状态
	private isMature:number;
	//虫害状态
	private isWormy:number;
	//背景图
	private bg_img:eui.Image;
	//用户头像
	private avatar = new eui.Image();
	//时间数组
	public DynamicDateArr = [];
	//果树信息
	public treeInfo:any;
	//凤凰详情。
	public ph_detail:any;
	//领取物品
	private getAuctionItem:any;
	//动画触摸开始时间
	private touchTime:number;
	//凤凰自言自语聊天框
	public group_tips:eui.Group;
	//自言自语内容
	public chart_content:eui.Label;
	//凤凰动画组
	public group_mc:eui.Group;
	//凤凰动画主体
	public ph_mc:any;
	//凤凰阴影
	private ph_shadow:eui.Image;
	//凤凰单击打事件
	public ph_tap:any;
	//单击事件
	public ph_t:any;
	//卖萌自言自语语言包
	public cute:any;
	//梦话自言自语语言包
	public dream:any;
	//自言自语倒计时
	private sayTime:number = 0;
	//自言自语 计时器
	private sayT:any;
	//commonT1，动画定时器。
	public commonT1;
	//commonT2,动画定时器。
	public commonT2;
	//语言包
	public lang:any;
	//是否开启拜访
	public isVisit:number = 1;

	public constructor() {
		super();
		this.skinName = "resource/garden_skin/wutong/Index.exml";
		//语言包判断
		this.lang = Main.Shared().lang;
		this.data = Main.Shared().lang_config;
		this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.addChild(this.tips);
		this.addChild(this.notices);
		this.addChild(this.wait);
		this.addChild(this.full_mask);
		//梧桐树个人主页
		var httpReq = new HttpReq();
		var url:string = 'v1.1/wutong/show_main';
		httpReq.GET({
			url:url,
			data:{},
			success:(res)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					this.IndexInit(res);
				}else if(res.code == 411){
						//请求开通
						// Index.Shared().wait.show(); 
						var httpReq = new HttpReq();
						var url:string = 'v1.1/wutong/message/activate_tip';
						httpReq.GET({
							url:url,
							data:{},
							success:(res) =>{
								var res = JSON.parse(res);
								if(res.code == 0) {
									let activate:any = res.data.activateTip;
									let html = Common.Shared().getITextElement(activate, 480, 240, 30, 0 ,0);
									if(res.lang == 1) {
										this.open_hint.height = 680;
									}else{
										this.open_hint.height = 510;
									}
									this.hasFruit = res.data.rebatePrice;
									this.activateTip.addChild(html);
									this.open_hint.visible = true;
								}else{
									Index.Shared().tips.showTips(res.msg);
								}
								Index.Shared().wait.hide();  
							},
							error:(error) =>{
								Index.Shared().wait.hide();                   
								Index.Shared().tips.showTips(this.data.indexTs.network_error);
							}
						});
				}else{
					this.tips.showTips(res.msg);					
				}
			},
			error:(error)=>{
				this.tips.showTips(this.data.indexTs.network_error);				
			}
		});
	
		//返回APP
		this.go_back.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			Common.Shared().setCookie('app_method', '{"type":"goApp"}', 30);
		},this);


		//开通页面
		// this.btn_up_open_hint.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnBtnUpClick,this);
		this.btn_up_open_hint.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnBtnUpConfirmClick,this);
		//关闭开通页面
		//this.btn_later_open_hint.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnBtnCloseClick,this);
		this.btn_later_open_hint.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			Common.Shared().setCookie('app_method', '{"type":"goApp"}', 30);
		},this);
		this.btn_close_open_hint.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			Common.Shared().setCookie('app_method', '{"type":"goApp"}', 30);
		},this);
		// //果币开通页面
		// this.btn_gb_confirm_open.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnBtnSharedClick,this);
		//储值开通页面
		this.btn_shared_confirm_open.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnBtnUpConfirmClick,this);
		//支付关闭
		this.btn_close_open.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnBtnCloseConfirmClick,this);
		//成功开通关闭
		this.btn_dete_success.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnBtnCloseSuccess,this);
		this.btn_close_success.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnBtnCloseSuccess,this);
		//购买页面关闭
		this.btn_close_fail.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGoPayCloseClick,this);
		this.btn_conf_fail.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onGoPayCloseClick,this);
		//果树状态页面
		this.head_img_info.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStaAndDynClick,this);
		//凤凰详情
		this.group_mc.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnGroupPhClick,this);
	}

	//开通页面
	private OnBtnUpClick() {
        Index.Shared().wait.show();
		var httpReq = new HttpReq();
		var url:string = 'v1.1/wutong/message/activate_tip';
		httpReq.GET({
			url:url,
			data:{},
			success:(res) =>{
				var res = JSON.parse(res);
				if(res.code == 0) {
					let activate = res.data;
					//判断支付类型
					Index.Shared().hasFruit = activate.mgCoinPrice;
					Index.Shared().hasMGB = activate.rebatePrice;
					this.confirm_open.visible = true;
				}else{
					Index.Shared().tips.showTips(res.msg);
				}
				Index.Shared().wait.hide();  
			},
			error:(error) =>{
				Index.Shared().wait.hide();                   
				Index.Shared().tips.showTips(this.data.indexTs.network_error);
			}
		});
		
		this.open_hint.visible = false;
	}

	//关闭开通页面
	private OnBtnCloseClick() {
		this.full_mask.visible = false;
		this.open_hint.visible = false;
	}

	//储值开通页面
	private OnBtnUpConfirmClick() {
		Common.Shared().secondPwd(this.afterPwd, Index.Shared().open_hint, true);
	}

	public afterPwd(pwd:string, afterData?:any){
		var pinCode = hex_md5(pwd);
		//确认开通请求
		Index.Shared().wait.show();
		var httpReq = new HttpReq();
		var url:string = 'v1.1/pay/confirm_pay';
		httpReq.POST({
			url:url,
			data:{orderId:"", payType:"1", payOrder:"wtActTree", pinCode:pinCode},
			success:(res) =>{
				var res = JSON.parse(res);
				if(res.code == 0) {
					//弹出支付成功提示。
					Index.Shared().OnBtnCloseClick();
					Index.Shared().onGoPaySucClick("1");
					Index.Shared().IndexInit();
				}else {
					Index.Shared().tips.showTips(res.msg);
				}
				Index.Shared().wait.hide();  
			},
			error:(error) =>{
				Index.Shared().wait.hide();                   
				Index.Shared().tips.showTips(Index.Shared().data.indexTs.network_error);
			}
		});	
	}

	//关闭开通页面
	private OnBtnCloseConfirmClick() {
		this.confirm_open.visible = false;
		this.full_mask.visible = false;
	}

	//关闭页面
	private OnBtnCloseSuccess() {
		this.success.visible = false;
		this.full_mask.visible = false;
	}

	//付款成功页面
	private onGoPaySucClick(type:string) {
		this.success.visible = true;
		this.conf_txt.text = '支付成功！消费'+ this.hasFruit +'金币。';
		// if(type == "4"){
		// 	this.conf_txt.text = '支付成功！消费'+ this.hasMGB +'金币。';
		// }else if(type == "3") {
		// 	this.conf_txt.text = '支付成功！消费'+ this.hasFruit +'金币。';
		// }
	}

	//付款失败页面关闭
	private onGoPayCloseClick() {
		this.fail.visible = false;
		this.full_mask.visible = false;
	}

	//果树状态页面
	private onStaAndDynClick() {
		if(!this.sta_and_dyn){
			this.sta_and_dyn = StaAndDyn.Shared();
			Index.Shared().full_mask.visible = true;
			this.addChildAt(this.sta_and_dyn, -1);	
		}
		Index.Shared().full_mask.visible = true;
		this.sta_and_dyn.onShowStaAndDyn();
		this.sta_and_dyn.onFruitList();				
	}

	//物品栏页面
	private OnToolsClick() {
		if(!this.tools){
			this.tools = Tools.Shared();
			this.addChildAt(this.tools, -1);	
		}
		this.full_mask.visible = true;
		this.tools.showTools();		
	}

	//互动页面
	private OnInteractiveClick() {
		if(!this.interactive){
			this.full_mask.visible = true;
			this.interactive = Interactive.Shared();
			this.addChildAt(this.interactive, -1);
		}
		this.full_mask.visible = true;
		this.interactive.ShowInteractive();				
	}
	//邮箱页面
	private OnEmailClick() {
		if(!this.emailSkin){
			this.emailSkin = Email.Shared();
			this.full_mask.visible = true;
			this.addChildAt(this.emailSkin, -1);
		}
		this.full_mask.visible = true;
		this.emailSkin.showEmail();	
	}

	//金币页面
	private OnGoldClick() {
		this.parent.addChild(Gold.Shared());
		this.parent.removeChild(this);
        Gold.Shared().onShowGold();
	}
	//拍卖界面
	private onAuctionInTo() {
		this.parent.addChild(Creation.Shared());
		this.parent.removeChild(this);
		Creation.Shared().onShowCreation();
	}
	//凤凰页面
	private OnGroupPhClick() {
		if(this.touchTime > 0){
			this.touchTime = null;
			egret.clearTimeout(this.ph_t);
			this.parent.addChild(Detail.Shared());
			Detail.Shared().init();
			this.parent.removeChild(this);
			return false;
		}

		var touchTime = new Date().getTime();		
		this.ph_t = egret.setTimeout(()=>{
			if(this.ph_tap){
				this.ph_tap();
			}
			this.touchTime = 0;
			egret.clearTimeout(this.ph_t);
		}, this, 300);
		
		this.touchTime = touchTime;
	}
	
	//玩家交易
	private showTransaction() {
		this.parent.addChild(Transaction.Shared());
		this.parent.removeChild(this);
		Transaction.Shared().onTransactionLists({}, 1);
		// if(!this.contains(Rename.Shared())) {
		// 	this.addChild(Rename.Shared());
		// }
		// Rename.Shared().onShowRename();
	}

	//宝矿入口
	private onMinerClick() {
		//是否预约宝矿
		var httpReq = new HttpReq();
		this.wait.show();
		var url:string = 'v1.1/wutong/show_main';
		httpReq.GET({
			url:url,
			data:{},
			success:(res)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					let isMinerOpen = res.data.isMinerOpen;
					let minerStatus = res.data.minerStatus;
					if(isMinerOpen == 0) {
						//暂不对外开放
						Index.Shared().tips.showTips("你已成功预约宝矿，宝藏正快马加鞭的向您赶来，请耐心等待！");
					}else {
						//对外开放
						if(minerStatus == -1) {
							//未预约
							Binding.Shared().onNextTime();
							this.full_mask.visible = true;
							this.binding = Binding.Shared();
							this.addChildAt(this.binding, -1);
						}else {
							//正常
							this.parent.addChild(Working.Shared());
							Working.Shared().getMinerData();
							this.parent.removeChild(this);
						}
					}
					// else if(minerStatus == 0) {
					// 	//去绑定
					// 	Binding.Shared().onHasBinding();
					// 	this.full_mask.visible = true;
					// 	this.addChildAt(this.binding, -1);
					// }
				}else{
					this.tips.showTips(res.msg);					
				}
				this.wait.hide();
			},
			error:(error)=>{
				this.wait.hide();
				this.tips.showTips(this.data.indexTs.network_error);				
			}
		});
		//请求下一个成熟倒计时
		// this.wait.show();
		// var httpReq = new HttpReq();
		// var url = 'v1.1/wutong/show_main';
		// httpReq.GET({
		// 	url:url,
		// 	data:{},
		// 	success:(res:any)=>{
		// 		var res = JSON.parse(res);
		// 		if(res.code == 0){
		// 			if(res.data.hasBookMiner == 1) {
		// 				Index.Shared().tips.showTips("你已成功预约宝矿，宝藏正快马加鞭的向您赶来，请耐心等待！");
		// 			}else {
		// 				Index.Shared().parent.addChild(MinerAppo.Shared());
		// 				Index.Shared().parent.removeChild(this);
		// 			}
		// 		}else{
        //             this.tips.showTips(res.msg);
		// 		}
		// 		this.wait.hide();
		// 	},
		// 	error:(error)=>{
		// 		this.wait.hide();
		// 		this.tips.showTips(this.data.indexTs.network_error);
		// 	}
		// });
	}

	//收获果子
	private onReward(e:egret.TouchEvent){
		this.wait.show();
		var url = 'v1.0/wutong/put_pick';
        var httpReq = new HttpReq();
		httpReq.POST({
			url:url,
			data:{},
			success:(res)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					this.guozishule_mc_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onReward, this);
					this.group_tree.removeChild(this.guozishule_mc_1);
					this.tips.showTips(this.data.indexTs.harvest + res.data.pickFruit + this.data.indexTs.wutong);

					//请求下一个成熟倒计时
					var httpReq = new HttpReq();
					var url = 'v1.0/wutong/list_fruit';
					httpReq.GET({
						url:url,
						data:{},
						success: (res:any)=>{
							var res = JSON.parse(res);
							if(res.code == 0){
								if(res.data.fruitList.length > 0){
									for(let i = 0; i < res.data.fruitList.length; i++){
										if(res.data.fruitList[i].count_down > 0){
											var status;
											if(res.data.fruitList[i].count_down > 28800){
												status = 'f';
											}else{
												status = 'g';	
											}
											Common.Shared().loadImg(this.fruitUrl + Common.Shared().getImgByStatus(3,this.treeInfo.level, status)).then((texture:any)=>{
												this.fruit.source = texture;
											});
											// RES.getResByUrl(this.fruitUrl + Common.Shared().getImgByStatus(3,this.treeInfo.level, status), (texture:egret.Texture) => {
											// 	this.fruit.source = texture;
											// }, this, RES.ResourceItem.TYPE_IMAGE);
											break;
										}
									}
								}else{
									this.fruit.source = null;
								}
							}
						}
					});

				}else{
                    this.tips.showTips(res.msg);
				}
				this.wait.hide();
			},
			error:(error)=>{
				this.wait.hide();
				this.tips.showTips(this.data.indexTs.network_error);				
			}
		}, e.currentTarget);
	}

	//浇水
	private onWater(e:egret.TouchEvent){
		this.wait.show();
		var url = 'v1.0/wutong/put_water';
        var httpReq = new HttpReq();
		httpReq.POST({
			url:url,
			data:{},
			success:(res)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					let new_xp = res.data.xp;		
					//播放浇水动画
					Common.Shared().mc('watering', 420 , 590, this.group_tree, true).then((mc)=>{
						this.watering_mc_1 = mc;
						this.watering_mc_1.scaleX = 1.5;   
						this.watering_mc_1.scaleY = 1.5;   
						this.group_tree.addChild(this.watering_mc_1);
						this.watering_mc_1.gotoAndPlay(0, 1);
						this.watering_mc_1.addEventListener(egret.Event.COMPLETE, (e:egret.Event)=>{
							//去除干旱动画
							this.ganku_mc_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onWater, this);
							this.group_tree.removeChild(this.ganku_mc_1);
							//提示增加生命值
							this.icon_tip.visible = true;
							this.icon_tip_text.text = '+' + res.data.xp + this.data.indexTs.life_val;
							//隐藏提示
							setTimeout(()=>{
								this.icon_tip.visible = false;
								this.icon_tip_text.text = '';
							}, 3000);
							//判断升级
							this.wutongGrow(new_xp);
						}, this.watering_mc_1);
					}); 
				}else{
                    this.tips.showTips(res.msg);
				}
				this.wait.hide();
			},
			error:(error)=>{
				this.wait.hide();
				this.tips.showTips(this.data.indexTs.network_error);				
			}
		}, e.currentTarget);
	}

	//显示成熟倒计时
	public showRewardCount(time?:number){
		if(this.matureTime > 0){
			return false;
		}
		//显示倒计时
		if(time){
			this.matureTime = time;
		}
		this.mature_count.visible = true;
		this.mature_img.visible = true;
		let t = setInterval(async() => {
			if(this.matureTime > 0){
				this.mature_count.text = Common.Shared().secondToTime(this.matureTime);
				this.matureTime--;	
			}else{
				clearInterval(t)//清除定时器	
				//隐藏倒计时	
				this.mature_count.visible = false;
				this.mature_img.visible = false;
				this.fruit.source = await Common.Shared().loadImg(this.fruitUrl + Common.Shared().getImgByStatus(3, Index.Shared().treeInfo.level, 'm'));
				// RES.getResByUrl(this.fruitUrl + Common.Shared().getImgByStatus(3, Index.Shared().treeInfo.level, 'm'), (texture:egret.Texture) => {
				// 	this.fruit.source = texture;
				// }, this, RES.ResourceItem.TYPE_IMAGE);
			
				//TODO 播放成熟动画
				if(!this.group_tree.contains(this.guozishule_mc_1)){
					let mcX,mcY,mcSX,mcSY;
					if(this.treeInfo.level < 4){
						mcX = 400;
						mcY = 450;
						mcSX = mcSY = 1.1;
					}else if(this.treeInfo.level > 3  && this.treeInfo.level < 7){
						mcX = 400;
						mcY = 430;
						mcSX = mcSY = 1.25;
					}else if(this.treeInfo.level > 6 && this.treeInfo.level < 10){
						mcX = 400;
						mcY = 410;
						mcSX = mcSY = 1.38;
					}else{
						mcX = 375;
						mcY = 380;
						mcSX = mcSY = 1.5;
					}
					Common.Shared().mc('guozishule', mcX , mcY, null, true).then((mc)=>{
						this.guozishule_mc_1 = mc;
						this.guozishule_mc_1.scaleX = mcSX;   
						this.guozishule_mc_1.scaleY = mcSY;
						this.group_tree.addChild(this.guozishule_mc_1);
						this.guozishule_mc_1.gotoAndPlay(0, -1);	
						this.guozishule_mc_1.touchEnabled = true;											
						this.guozishule_mc_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onReward, this);
					});
				}
				//请求下一个成熟倒计时
				var httpReq = new HttpReq();
				var url = 'v1.0/wutong/list_fruit';
				httpReq.GET({
					url:url,
					data:{},
					success:(res:any)=>{
						var res = JSON.parse(res);
						if(res.code == 0){
							for(let i = 0; i < res.data.fruitList.length; i++){
								if(res.data.fruitList[i].count_down > 0){
									Index.Shared().showRewardCount(res.data.fruitList[i].count_down);
									break;
								}	
							}
						}
					}
				});
			}
		},999);
	}

	//显示保护罩
	public showAntiThef(time?:number){
		//显示倒计时
		if(time){
			Index.Shared().antiTheftTime = time;
		}
		//显示倒计时
		this.group_protect.visible = true;
		//播放动画
		let mcX,mcY,mcSX,mcSY;
		if(this.treeInfo.level < 4){
			mcX = 375;
			mcY = 300;
			mcSX = mcSY = 0.7;
		}else if(this.treeInfo.level > 3  && this.treeInfo.level < 7){
			mcX = 375;
			mcY = 290;
			mcSX = mcSY = 0.8;
		}else if(this.treeInfo.level > 6 && this.treeInfo.level < 10){
			mcX = 375;
			mcY = 270;
			mcSX = mcSY = 0.9;
		}else{
			mcX = 375;
			mcY = 260;
			mcSX = mcSY = 1;
		}

		Common.Shared().dbMc('protection', true).then((dbmc:any)=>{
			this.group_tree.addChild(dbmc);
			dbmc.x = mcX;
			dbmc.y = mcY;
			dbmc.scaleX = mcSX;
			dbmc.scaleY = mcSY;
			dbmc.animation.play('protection');
			let t = setInterval(() => {
				if(Index.Shared().antiTheftTime > 0){
					this.protect_count.text = Common.Shared().secondToTime(Index.Shared().antiTheftTime);
					Index.Shared().antiTheftTime--;	
				}else{
					clearInterval(t)//清除定时器	
					this.group_tree.removeChild(dbmc);
					//隐藏倒计时	
					this.group_protect.visible = false;
				}
			},999);
		});
		
	}

	//初始化果园主页数据
	public IndexInit(res?:any){
		//获取自言自语文件
		if(!this.cute){
			var httpReq = new HttpReq();
			var url = 'v1.1/bird/show_say';
			httpReq.GET({
				url:url,
				data:{},
				success:(res)=>{
					var res = JSON.parse(res);			
					if(res.code == 0){
						this.cute = res.data.cute;
						this.dream = res.data.dream;
					}else{
						this.tips.showTips(res.msg);
					}
				},
				error:(error)=>{
					this.tips.showTips(this.data.indexTs.network_error);
				}
			});
		}


		//判断是否有暂无动态样式
		if(this.friends_news.contains(this.empty)) {
			this.friends_news.removeChild(this.empty);
		}
		//加载果园动态
		var httpReq = new HttpReq();
		var url:string = 'v1.0/wutong/be_message';
		httpReq.GET({
			url:url,
			data:{},
			success: (res)=>{
				var res = JSON.parse(res);			
				if(res.code == 0){
					this.renderNews(res);
				}else{
					this.tips.showTips(res.msg);
				}
			},
			error:(error)=>{
				this.tips.showTips(this.data.indexTs.network_error);				
			}
		});


		if(res){
			this.renderData(res);
			return false;
		}
		var httpReq = new HttpReq();
		var url:string = 'v1.1/wutong/show_main';
		httpReq.GET({
			url:url,
			data:{},
			success:(res) =>{
				var res = JSON.parse(res);
				if(res.code == 0) {
					this.renderData(res);
				}
			},
			error:()=>{
				this.tips.showTips(this.data.indexTs.network_error);
			}
		});
		

	}

	public async renderNews(res){
		var treeLog = res.data.treeLog;
		let maxLength = treeLog.length;
		let length = 0;
		if(maxLength > 6) {
			length = 6;
		}else if(maxLength > 0) {
			length = maxLength;
		}else {
			//暂无动态样式
			this.empty.onShowEmpty();
			this.empty.empty_text.textColor = 0x242424;
			this.empty.empty.horizontalCenter = -270;
			this.friends_news.addChild(this.empty);
		}

		for(var i = 0; i < length; i++){
			var x = 40 + i * 120;
			var y = 30;
			if(i == 5){
				treeLog[i].curType = 4;
			}
			var friendNew = new FriendNew(treeLog[i], x, y);
			await friendNew.addGroup();
			this.friends_news.addChild(friendNew);
		}
	}

	public async renderData(res){
		//菜单栏控制
		this.navControl(res.data.menu);
		//判断拜访是否开启
		this.isVisit = res.data.isVisit;
		// this.auction.visible = res.data.auctionSwitch > 0 ? true : false;
		// this.tran.visible = res.data.marketSwitch > 0 ? true : false;
		this.auctionInfo = res.data.auctionInfo;
		if(this.auctionInfo.auctionId > 0){
			if(this.contains(this.getAuctionItem)){
				this.removeChild(this.getAuctionItem);
			}
			this.getAuctionItem = new GetAutionItem();
			this.addChild(this.getAuctionItem);
		}

		if(res.data.bird.id > 0){
			this.ph_detail = res.data.bird;
			this.ph_detail.type = 2;
		}else if(res.data.egg.id > 0){
			this.ph_detail = res.data.egg;
			this.ph_detail.type = 1;
		}

		if(this.ph_detail){
			switch(this.ph_detail.gender){
				case 1:
				this.ph_detail.genderText = 'm';
				break;
				case 2:
				this.ph_detail.genderText = 'w';
				break;
			}
			this.phMc(this.ph_detail.statusId);			
		}
				
		this.head_img_info.visible = true;
		this.treeInfo = res.data.treeInfo;
		let treeInfo = res.data.treeInfo;
		let memberInfo = res.data.memberInfo;
		//背景图片、果树
		this.tree.touchEnabled = false;
		this.nickname.touchEnabled = false;
		this.bg.source =  Common.Shared().getImgByStatus(1);
		this.tree.source = await Common.Shared().loadImg(this.fruitUrl + Common.Shared().getImgByStatus(2, treeInfo.level));
		// RES.getResByUrl(this.fruitUrl + Common.Shared().getImgByStatus(2, treeInfo.level), (texture:egret.Texture) => {
		// 	this.tree.source = texture;
		// }, this, RES.ResourceItem.TYPE_IMAGE);
		var status;						
		if(treeInfo.matureFruit > 0){
			status = 'm';
			this.fruit.source = await Common.Shared().loadImg(this.fruitUrl + Common.Shared().getImgByStatus(3, treeInfo.level, status));
			// RES.getResByUrl(this.fruitUrl + Common.Shared().getImgByStatus(3, treeInfo.level, status), (texture:egret.Texture) => {
			// 	this.fruit.source = texture;
			// }, this, RES.ResourceItem.TYPE_IMAGE);
		}else{
			if(treeInfo.matureTime > 0){
				if(treeInfo.matureTime > 28800){
					status = 'f';
				}else{
					status = 'g';	
				}
				this.fruit.source = await Common.Shared().loadImg(this.fruitUrl + Common.Shared().getImgByStatus(3, treeInfo.level, status));
				// RES.getResByUrl(this.fruitUrl + Common.Shared().getImgByStatus(3, treeInfo.level, status), (texture:egret.Texture) => {
				// 	this.fruit.source = texture;
				// }, this, RES.ResourceItem.TYPE_IMAGE);
			}else if(treeInfo.matureTime == 0){
				status = 'm';
				this.fruit.source = await Common.Shared().loadImg(this.fruitUrl + Common.Shared().getImgByStatus(3, treeInfo.level, status));
				// RES.getResByUrl(this.fruitUrl + Common.Shared().getImgByStatus(3, treeInfo.level, status), (texture:egret.Texture) => {
				// 	this.fruit.source = texture;
				// }, this, RES.ResourceItem.TYPE_IMAGE);
			}else{
				this.fruit.source = '';		
			}
		}
		this.bg.cacheAsBitmap = true;
		this.nickname.cacheAsBitmap = true;
		//用户昵称、头像
		this.nickname.text = memberInfo.username;
		let myavatar:any = await Common.Shared().createCircleMask(58, 58, memberInfo.avatar, 5, 5, true);
		this.group_avatar.addChild(myavatar); 
		//果树等级
		this.user_lv.source = 'wutong_json.LV' + treeInfo.level;
		//果树生命值条
		this.ord_leave_xp = treeInfo.nextLevelXP;
		this.xp_bar.width = treeInfo.xp / this.ord_leave_xp * 124;
		this.xp_text.text = treeInfo.xp + '/' + this.ord_leave_xp;
		this.xp_now = treeInfo.xp;
	
		//是否显示成熟倒计时
		if(treeInfo.matureTime > 0){
			this.showRewardCount(treeInfo.matureTime);
		}

		//是否显示保护罩
		if(treeInfo.antiTheftTime > 0){
			this.showAntiThef(treeInfo.antiTheftTime);
		}
		//是否显示成熟果子
		if(treeInfo.matureFruit > 0){
			//TODO 播放成熟动画  
			let mcX,mcY,mcSX,mcSY;
			if(this.treeInfo.level < 4){
				mcX = 400;
				mcY = 450;
				mcSX = mcSY = 1.1;
			}else if(this.treeInfo.level > 3  && this.treeInfo.level < 7){
				mcX = 400;
				mcY = 430;
				mcSX = mcSY = 1.25;
			}else if(this.treeInfo.level > 6 && this.treeInfo.level < 10){
				mcX = 400;
				mcY = 410;
				mcSX = mcSY = 1.38;
			}else{
				mcX = 375;
				mcY = 380;
				mcSX = mcSY = 1.5;
			}
			Common.Shared().mc('guozishule', mcX , mcY, null, true).then((mc)=>{
				this.guozishule_mc_1 = mc;   
				this.guozishule_mc_1.scaleX = mcSX;   
				this.guozishule_mc_1.scaleY = mcSY;   
				this.group_tree.addChild(this.guozishule_mc_1);
				this.guozishule_mc_1.gotoAndPlay(0, -1);
				this.guozishule_mc_1.touchEnabled = true;	
				this.guozishule_mc_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onReward, this);
			});
		}
		
		//是否显示干旱
		if(treeInfo.nextWaterTime < 0){
			//TODO 播放干旱动画
			let mcX,mcY,mcSX,mcSY;
			if(this.treeInfo.level < 4){
				mcX = 530;
				mcY = 270;
				mcSX = mcSY = 0.5;
			}else if(this.treeInfo.level > 3  && this.treeInfo.level < 7){
				mcX = 520;
				mcY = 220;
				mcSX = mcSY = 0.57;
			}else if(this.treeInfo.level > 6 && this.treeInfo.level < 10){
				mcX = 530;
				mcY = 160;
				mcSX = mcSY = 0.65;
			}else{
				mcX = 500;
				mcY = 80;
				mcSX = mcSY = 0.7;
			}

			Common.Shared().mc('ganku', mcX , mcY, null, true).then((mc)=>{
				this.ganku_mc_1 = mc;   
				this.ganku_mc_1.scaleX = mcSX;   
				this.ganku_mc_1.scaleY = mcSY;   
				this.group_tree.addChild(this.ganku_mc_1);
				this.ganku_mc_1.gotoAndPlay(0, -1);
				this.ganku_mc_1.touchEnabled = true;	
				this.ganku_mc_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onWater, this);
			}); 
			
		}else{
			let nextWaterTime = treeInfo.nextWaterTime;
			let t = setInterval(() => {
				if(nextWaterTime > 0){
					nextWaterTime--;	
				}else{
					clearInterval(t)//清除定时器	
					let mcX,mcY,mcSX,mcSY;
					if(this.treeInfo.level < 4){
						mcX = 530;
						mcY = 270;
						mcSX = mcSY = 0.5;
					}else if(this.treeInfo.level > 3  && this.treeInfo.level < 7){
						mcX = 520;
						mcY = 220;
						mcSX = mcSY = 0.57;
					}else if(this.treeInfo.level > 6 && this.treeInfo.level < 10){
						mcX = 510;
						mcY = 170;
						mcSX = mcSY = 0.65;
					}else{
						mcX = 500;
						mcY = 80;
						mcSX = mcSY = 0.7;
					}

					Common.Shared().mc('ganku', mcX , mcY, null, true).then((mc)=>{
						this.ganku_mc_1 = mc;
						this.ganku_mc_1.scaleX = mcSX;   
						this.ganku_mc_1.scaleY = mcSY;   
						this.group_tree.addChild(this.ganku_mc_1);
						this.ganku_mc_1.gotoAndPlay(0, -1);
						this.ganku_mc_1.touchEnabled = true;	
						this.ganku_mc_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onWater, this);
					}); 
					
				}
			},999);
		}

		//是否显示虫害
		if(treeInfo.hasWormy > 0){
			//TODO 播放长虫动画
			let mcX,mcY,mcSX,mcSY;
			if(this.treeInfo.level < 4){
				mcX = 250;
				mcY = 280;
				mcSX = mcSY = 0.8;
			}else if(this.treeInfo.level > 3  && this.treeInfo.level < 7){
				mcX = 250;
				mcY = 220;
				mcSX = mcSY = 0.87;
			}else if(this.treeInfo.level > 6 && this.treeInfo.level < 10){
				mcX = 250;
				mcY = 160;
				mcSX = mcSY = 0.94;
			}else{
				mcX = 250;
				mcY = 80;
				mcSX = mcSY = 1;
			}
			Common.Shared().mc('worm', mcX , mcY, null, true).then((mc)=>{
				this.worm_mc_1 = mc;
				this.worm_mc_1.scaleX = mcSX;
				this.worm_mc_1.scaleY = mcSY;
				this.group_tree.addChild(this.worm_mc_1);
				this.worm_mc_1.gotoAndPlay(0, -1);
				this.worm_mc_1.touchEnabled = true;
				this.worm_mc_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnToolsClick, this);
			});
			
		}

		//弹出消息提示
		if(res.data.notice.length > 0){
			this.noticeData = res.data.notice;
			this.renderNotice();
		}
	}


	//加载提示内容
	public renderNotice(){
		if(Index.Shared().noticeData.length < 1) return false;
		Index.Shared().notices.showNotices(Index.Shared().noticeData.shift(), this.lang,  this.ph_detail ? this.ph_detail.genderText : 'w');
	}
	
	// 凤凰正常状态动画
	public commonMc(star?:string){
		Common.Shared().dbMc(this.ph_detail.genderText + "_main", true).then((dbMc:any)=>{
			this.group_mc.removeChildren();
			var ph_mc = dbMc;
			this.group_mc.addChild(ph_mc);
			ph_mc.y = -140;
			ph_mc.x = 0;
			if(star){
				ph_mc.animation.play(star, 1);
				ph_mc.once(egret.Event.COMPLETE, ()=>{
					ph_mc.animation.play("abc");	
				}, this);
			}else{
				ph_mc.animation.play("abc");		
			}
			this.commonT1 = egret.setInterval(()=>{
				ph_mc.animation.fadeIn("blink", 0.3, 2, 0, "normalGroup");
			},this,5000);
			this.commonT2 = egret.setInterval(()=>{
				this.changeSay(ph_mc);			
			},this,15000);
			ph_mc.touchEnabled = true;
			//点击切换自言自语。
			this.ph_tap = ()=>{
				this.changeSay(ph_mc);
			}
		});
		
	}

	public stopCommonMc(){
		egret.clearInterval(this.commonT1);
		egret.clearInterval(this.commonT2);
	}

	/**
	 * 喂食动画
	 */
	public eatMc(type:number,statusId:number,isError?:number){
		var gener = this.ph_detail.genderText;
		var mc_name = gener + '_eat';
		if(!isError) isError = 0;
		this.stopCommonMc();
		Common.Shared().dbMc(mc_name, true).then((dbMc:any)=>{
			this.group_mc.removeChildren();
			var ph_mc = dbMc;
			this.group_mc.addChild(ph_mc);		
			var action = '';
			switch(type){
				case 5:
					var action = 'eat_fruit';
				break;
				case 7:
					var action = 'eat_medicine';								
				break;
				case 8:
					var action = 'eat_spring';								
				break;
			}
			ph_mc.y = -140;
			ph_mc.x = 15;						
			ph_mc.animation.fadeIn(action, 0.3, 1, 0, "normalGroup");
			var aftertEat = ()=>{
				if(isError > 0){//吃错药了
					Common.Shared().dbMc(gener + '_eat_error', true).then((dbMc:any)=>{
						this.group_mc.removeChildren();
						var ph_mc = dbMc;
						this.group_mc.addChild(ph_mc);	
						ph_mc.y = -142;
						ph_mc.x = 15;											
						ph_mc.animation.fadeIn(ph_mc.animation.animationNames[0], 0.3, 1, 0, "normalGroup");
						var afterError = ()=>{
							this.phMc(statusId);
						}
						ph_mc.once(egret.Event.COMPLETE, afterError, this);
					});
				}else{
					this.phMc(statusId, "wave");
				}
			}
			ph_mc.once(egret.Event.COMPLETE, aftertEat, this);
		});			
	}

	
	/**
	 * 切换自言自语
	 * 
	 */
	 public changeSay(ph_mc?:any, sayText?:string){
		var say:any;
		var timeStatus = Common.Shared().getTimeStatus();
		if(timeStatus == 'n'){
			//说梦话
			say = this.dream;
		}else{
			//卖萌
			say = this.cute;
			if(ph_mc){
				ph_mc.animation.fadeIn("wave", 0.3, 1, 0, "normalGroup");	
			}
		}
		var content:string;
		if(sayText){
			content = sayText;
		}else{
			content = say[Math.floor(Math.random() * say.length)];
		}
		this.chart_content.text = content;
		this.group_tips.height = 93 + this.chart_content.textHeight;
		this.group_tips.y = - (360 + this.chart_content.textHeight);
		this.group_tips.visible = true;	
		if(this.sayTime == 0){
			this.sayTime = 5;
			this.sayT = egret.setInterval(()=>{
				if(this.sayTime > 0){
					this.sayTime --;
				}else{
					this.group_tips.visible = false;
					egret.clearInterval(this.sayT);
				}
			},this,1000);
		}else{
			this.sayTime = 5;					
		}
	 } 
	 

	/**
	 * 凤凰其他状态动画
	 */
	 public phMc(statusId:number, action?:string){
		var gender:string = this.ph_detail.genderText;
		var mc_name:string = '';
		var is_mc = true;
		var time = 0;
		this.ph_shadow.visible = true;
		//如果是晚上，并且凤凰无负面状态，凤凰就去睡觉了。
		if(statusId == 0 && Common.Shared().getTimeStatus() == 'n'){
			statusId = 6;
		}
		switch(statusId){
			case 0:
			if(!action) {
				 action = null;
			}
			Index.Shared().commonMc(action);
			break;
			case 3:
			mc_name = 'on_hatch';
			this.ph_shadow.visible = false;
			break;
			case 4:
			mc_name = 'on_rebirth';
			this.ph_shadow.visible = false;
			break;
			case 5:
			mc_name = gender + '_ill';
			time = 8000;						
			//点击弹出吃药请求。
			this.ph_tap = ()=>{
				Index.Shared().OnToolsClick();
			}
			break;
			case 6:
			mc_name = gender + '_sleep';
			egret.setInterval(()=>{
				this.changeSay();
			},this,15000);
			break;
			case 7:
			mc_name = gender + '_hungry';
			this.ph_shadow.visible = false;
			time = 8000;			
			//点击弹出喂食请求。
			this.ph_tap = ()=>{
				Index.Shared().OnToolsClick();
			}
			break;
			case 15:
			mc_name = gender + '_baozhedan';
			time = 8000;			
			break;
			case 14:
			is_mc = false;
			break;
			case 16:
			mc_name = gender + '_rebirth_' + this.lang;
			time = 8000;
			break;
			default:
			break;
		}
		if(is_mc &&  mc_name !== ''){
			this.group_mc.removeChildren();	
			Common.Shared().dbMc(mc_name, true).then((ph_mc:any)=>{	
				switch(statusId){
					case 5:
						ph_mc.y = -140;
						ph_mc.x = 12;	
					break;
					case 6:
						ph_mc.y = -140;
						ph_mc.x = 12;	
					break;
					case 7:
						ph_mc.y = -140;
						ph_mc.x = -1;	
					break;
					case 3:
						ph_mc.y = -140;
						ph_mc.x = -1;	
					break;
					case 4:
						ph_mc.y = -140;
						ph_mc.x = -1;	
					break;
				}	
				this.group_mc.addChild(ph_mc);
				if(time > 0){
					ph_mc.animation.fadeIn(ph_mc.animation.animationNames[0], 0.3, 1, 0, "normalGroup");
					setInterval(()=>{
						ph_mc.animation.fadeIn(ph_mc.animation.animationNames[0], 0.3, 1, 0, "normalGroup");			
					}, time);
				}else{
					ph_mc.animation.fadeIn(ph_mc.animation.animationNames[0], 0.3, 0, 0, "normalGroup");						
				}
			});
		}else{
			if(statusId == 14){
				this.group_mc.addChild(new eui.Image('auction_json.lyz_yw_'+ this.lang));
				this.group_mc.y = -100;		
			}
		}
	}

	/**
	 * 升级更新梧桐树数据
	 */
	public updateData(){
		var httpReq = new HttpReq();
		var url:string = 'v1.1/wutong/show_main';
		httpReq.GET({
			url:url,
			data:{},
			success: (res) =>{
				var res = JSON.parse(res);
				if(res.code == 0) {
					if(res.data.bird){
						this.ph_detail = res.data.bird;
						this.ph_detail.type = 2;
					}else{
						this.ph_detail = res.data.egg;
						this.ph_detail.type = 1;
					}
					let treeInfo = res.data.treeInfo;
					//更新果树、果子
					Common.Shared().loadImg(this.fruitUrl + Common.Shared().getImgByStatus(2, treeInfo.level)).then((texture:any)=>{
						this.tree.source = texture;						
					});
					// RES.getResByUrl(this.fruitUrl + Common.Shared().getImgByStatus(2, treeInfo.level), (texture:egret.Texture) => {
					// 	this.tree.source = texture;
					// }, this, RES.ResourceItem.TYPE_IMAGE);
					if(treeInfo.matureTime > 0){
						var status;
						if(treeInfo.matureTime < 14400){
							status = 'm';
						}else if(treeInfo.matureTime > 28800){
							status = 'f';
						}else{
							status = 'g';	
						}
						Common.Shared().loadImg(this.fruitUrl + Common.Shared().getImgByStatus(3, treeInfo.level, status)).then((texture:any)=>{
							this.fruit.source = texture;
						});
						// RES.getResByUrl(this.fruitUrl + Common.Shared().getImgByStatus(3, treeInfo.level, status), (texture:egret.Texture) => {
						// 	this.fruit.source = texture;
						// }, this, RES.ResourceItem.TYPE_IMAGE);
					}	
					//更新果树等级图标
					this.user_lv.source = 'wutong_json.LV' + treeInfo.level;
					//当前等级、下一等级，果树生命值条。
					this.xp_now = treeInfo.xp;						
					this.ord_leave_xp = treeInfo.nextLevelXP;
					this.xp_bar.width = treeInfo.xp / this.ord_leave_xp * 124;
					this.xp_text.text = treeInfo.xp + '/' + this.ord_leave_xp;
				}
			},
			error:(error)=>{
				this.tips.showTips(this.data.indexTs.network_error);				
			}
		});		
	}

	/**
	 * 梧桐树成长
	 */
	public wutongGrow(new_xp:number){
		//判断升级
		if(new_xp > 0){
			//当前现在生命值达到升级，并且当前等级未满级，可以升级
			if(Index.Shared().ord_leave_xp < 1000 && (Number(Index.Shared().xp_now) + Number(new_xp) > Index.Shared().ord_leave_xp)){
				Index.Shared().updateData();
				Common.Shared().dbMc('upgrade_'+ this.lang, true).then((dbmc:any)=>{
					dbmc.x = 400;
					dbmc.y = 50;
					dbmc.once(egret.Event.COMPLETE, ()=>{
						Index.Shared().group_tree.removeChild(dbmc);
					}, this);
					Index.Shared().group_tree.addChild(dbmc);
					dbmc.animation.play(dbmc.animation.animationNames[0], 1);											
				});
			}else{
				//不升级，只加生命值
				Index.Shared().xp_now += Number(new_xp);
				Index.Shared().xp_bar.width = ((Index.Shared().xp_now / Index.Shared().ord_leave_xp) * 124);	
				Index.Shared().xp_text.text = Index.Shared().xp_now + '/' + Index.Shared().ord_leave_xp;
			}
		}
	}

	/**
	 * 小提示
	 */
	public littleTips(tips:any){
        this.icon_tip.visible = true;
        this.icon_tip_text.text = tips;
        //隐藏提示
        setTimeout(()=>{
            this.icon_tip.visible = false;
            this.icon_tip_text.text = '';
        }, 3000);
    }

	/**
	 * 控制菜单显示
	 */
	private async navControl(menu){
		let navArr = {
			'interact':'OnInteractiveClick',//物品栏页面
			'goods':'OnToolsClick',//互动页面
			'email':'OnEmailClick',//邮箱页面
			'miner':'onMinerClick',//拍卖界面
			'tran':'showTransaction',//宝矿入口
			'auction':'onAuctionInTo',//玩家交易
			'gold':'OnGoldClick'//金币页面
		};
		let originLeftWidth = 45;//初始左边距
		let stepWidth = 100;//递增步长
		for(let i = 0; i < menu.length; i++){
			let navItem = new eui.Image();
			navItem.cacheAsBitmap = true;
			navItem.source = eval('this.data.index.' + menu[i]);
			navItem.x = originLeftWidth + i * stepWidth;
			navItem.y = 0;
			navItem.addEventListener(egret.TouchEvent.TOUCH_TAP,eval('this.' + navArr[menu[i]]),this);
			this.nav.addChild(navItem);
		}
	}
}