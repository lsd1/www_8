class OtherGarden extends eui.ItemRenderer {
	public common:Common = Common.Shared();
	public fruitUrl = localStorage.getItem('imgUrl') + 'fruit/';
	//提示弹框
	public tips:Tips = new Tips();
	//等待界面
	public wait:Wait = new Wait();
	//背景
	private bg:eui.Image;
	//上部控件
	private group_top:eui.Group;
	//使用提示
	private dynamicIcon:eui.Group;
	//果树控件
	private group_tree:eui.Group;
	//果树
	private tree:eui.Image;
	//果子
	private fruit:eui.Image;
	//返回按钮
	private go_back:eui.Group;
	//好友信息控件
	private head_img_info:eui.Group;
	private user_lv:eui.Image;
	//等级框
	private group_avatar:eui.Group;
	//ID
	private nickname:eui.Label;
	//果树生命值条
	private xp_bar:eui.Rect;
	//果树经验百分比
	private xp_text:eui.Label;
	//成熟倒计时
	private mature_count:eui.Label;
	public matureTime:number;
	//成熟倒计时图标
	private mature_img:eui.Image;
	//最新动态控件
	private group_news:eui.Group;
	//好友动态
	private friends_news:eui.Group;

	//保护罩倒计时
	public group_protect:eui.Group;
	public protect_count:eui.Label;

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

	//targetUid
	private targetUid:number;
	//果树信息
	public treeInfo:any;

	//凤凰详情。
	public ph_detail:any;
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

	public constructor(targetUid?:number) {
		super();
		this.skinName = "resource/garden_skin/wutong/OtherGarden.exml";
		this.data = Main.Shared().lang_config;
		//语言包判断
		this.lang = Main.Shared().lang;
		this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.addChild(this.tips);
		this.addChild(this.wait);
		this.targetUid = targetUid;
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
		var httpReq = new HttpReq();
		var url:string = 'v1.1/wutong/show_main';
		httpReq.GET({
			url:url,
			data:{targetUid:targetUid},
			success: (res)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					this.treeInfo = res.data.treeInfo;
					let treeInfo = res.data.treeInfo;						
					let memberInfo = res.data.memberInfo;
					//背景图片、果树
					this.bg.source = Common.Shared().getImgByStatus(1);
					Common.Shared().loadImg(this.fruitUrl + Common.Shared().getImgByStatus(2, treeInfo.level)).then((texture)=>{
						this.tree.source = texture;
					});
					// RES.getResByUrl(this.fruitUrl + Common.Shared().getImgByStatus(2, treeInfo.level), (texture:egret.Texture) => {
					// 		this.tree.source = texture;
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

					//用户昵称、头像
					this.nickname.text = memberInfo.username;
					Common.Shared().createCircleMask(58, 58, memberInfo.avatar, 5, 5, true).then((group_avatar:any)=>{
						this.group_avatar.addChild(group_avatar); 						
					});
					//果树等级
					this.user_lv.source = 'wutong_json.LV' + treeInfo.level;
					//果树经验条
					this.xp_bar.width = treeInfo.xp / treeInfo.nextLevelXP * 180;
					this.xp_text.text = treeInfo.xp + '/' + treeInfo.nextLevelXP;
					
					//是否显示成熟倒计时
					if(treeInfo.matureTime > 0){
						this.matureTime =treeInfo.matureTime;
						this.showRewardCount(treeInfo.matureTime);
					}

					//是否显示保护罩
					if(treeInfo.antiTheftTime > 0){
						var antiTheftTime = treeInfo.antiTheftTime;							
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
								if(antiTheftTime > 0){
									this.protect_count.text = Common.Shared().secondToTime(antiTheftTime);
									antiTheftTime--;	
								}else{
									clearInterval(t)//清除定时器	
									this.group_tree.removeChild(dbmc);
									//隐藏倒计时	
									this.group_protect.visible = false;
								}
							},999);
						});    
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
						Common.Shared().mc('guozishule', mcX , mcY, null, true).then((mc:any)=>{
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
					if(treeInfo.nextWaterTime <= 0){
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
						Common.Shared().mc('ganku', mcX, mcY, null, true).then((mc:any)=>{
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
									mcX = 530;
									mcY = 160;
									mcSX = mcSY = 0.65;
								}else{
									mcX = 500;
									mcY = 80;
									mcSX = mcSY = 0.7;
								}
								Common.Shared().mc('ganku', mcX , mcY, null, true).then((mc:any)=>{
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
						//TODO 播放成熟动画
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
						Common.Shared().mc('worm', mcX, mcY, null, true).then((mc:any)=>{
							this.worm_mc_1 = mc;
							this.worm_mc_1.scaleX = mcSX;
							this.worm_mc_1.scaleY = mcSY;   
							this.group_tree.addChild(this.worm_mc_1);
							this.worm_mc_1.gotoAndPlay(0, -1);
							this.worm_mc_1.touchEnabled = true;	
							this.worm_mc_1.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
								this.tips.showTips(this.data.otherGardenTs.only_master);
							}, this);
						}); 
						
					}
				}else{
					this.tips.showTips(res.msg);
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
			},
			error:(error)=>{
				this.tips.showTips(this.data.otherGardenTs.network_error);				
			}
		});

		var httpReq = new HttpReq();
		var url:string = 'v1.0/wutong/be_message';
		httpReq.GET({
			url:url,
			data:{targetUid:this.targetUid},
			success:(res)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					let treeLog = res.data.treeLog
					let maxLength = treeLog.length;
					let length = maxLength > 6 ? 6 : maxLength;
					for(var i = 0; i < length; i++){
						var x = 50 + i * 106;
						var y = 30;
						this.friends_news.addChild(new FriendNew(treeLog[i], x, y));
					}
				}else{
					this.tips.showTips(res.msg);
				}
			},
			error:(error)=>{
				this.tips.showTips(this.data.otherGardenTs.network_error);				
			}
		});


		this.go_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGoBackTap, this);
	}


	//返回我的果园。
	private onGoBackTap(){
		this.parent.addChild(Index.Shared());
		this.parent.removeChild(this);
	}
	
	//显示成熟倒计时
	public showRewardCount(time?:number){					
		//显示倒计时
		if(time){
			this.matureTime = time;
		}
		this.mature_count.visible = true;
		this.mature_img.visible = true;
		let t = setInterval(() => {
			if(this.matureTime > 0){
				this.mature_count.text = Common.Shared().secondToTime(this.matureTime);
				this.matureTime--;	
			}else{
				clearInterval(t)//清除定时器	
				//隐藏倒计时	
				this.mature_count.visible = false;
				this.mature_img.visible = false;					
				//TODO 播放成熟动画
				if(!this.guozishule_mc_1){
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
					Common.Shared().mc('guozishule', mcX , mcY, null, true).then((mc:any)=>{
						this.guozishule_mc_1 = mc;
						this.guozishule_mc_1.scaleX = mcSX;   
						this.guozishule_mc_1.scaleY = mcSY;  
						this.group_tree.addChild(this.guozishule_mc_1);
						this.guozishule_mc_1.gotoAndPlay(0, -1);	
						this.guozishule_mc_1.touchEnabled = true;											
						this.guozishule_mc_1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onReward, this);
					});
				}
			}
		},999);
	}

	//收获果子
	private onReward(e:egret.TouchEvent){
		this.wait.show();
		var url = 'v1.0/wutong/put_steal';
        var httpReq = new HttpReq();
		httpReq.POST({
			url:url,
			data:{targetUid:this.targetUid},
			success:(res)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					this.guozishule_mc_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onReward, this);
					this.group_tree.removeChild(this.guozishule_mc_1);
					this.tips.showTips(this.data.otherGardenTs.snatch + res.data.stealFruit + this.data.otherGardenTs.wutong);
				}else{
                    this.tips.showTips(res.msg);
				}
				this.wait.hide();
			},
			error:(error)=>{
				this.wait.hide();
				this.tips.showTips(this.data.otherGardenTs.network_error);				
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
			data:{targetUid:this.targetUid},
			success:(res)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					//播放浇水动画
					Common.Shared().mc('watering', 420, 590, this.group_tree, true).then((mc)=>{
						this.watering_mc_1 = mc;
						this.watering_mc_1.scaleX = 1.5;   
						this.watering_mc_1.scaleY = 1.5;   
						this.group_tree.addChild(this.watering_mc_1);
						this.watering_mc_1.gotoAndPlay(0, 1);

						//去除干旱动画
						this.ganku_mc_1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onWater, this);
						this.group_tree.removeChild(this.ganku_mc_1);
					}); 					
				}else{
                    this.tips.showTips(res.msg);
				}
				this.wait.hide();
			},
			error:(error)=>{
				this.wait.hide();
				this.tips.showTips(this.data.otherGardenTs.network_error);				
			}
		}, e.currentTarget);
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
				this.changeSay();			
				ph_mc.animation.fadeIn("wave", 0.3, 1, 0, "normalGroup");
			},this,15000);
			ph_mc.touchEnabled = true;
			//点击切换自言自语。
			this.ph_tap = ()=>{
				this.changeSay();
			}
		});
		
	}

	public stopCommonMc(){
		egret.clearInterval(this.commonT1);
		egret.clearInterval(this.commonT2);
	}
	
	/**
	 * 切换自言自语
	 * 
	 */
	 public changeSay(ph_mc?:any){
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
		this.chart_content.text = say[Math.floor(Math.random() * say.length)];
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
			this.commonMc(action);
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
			break;
			case 6:
			mc_name = gender + '_sleep';
			egret.setInterval(()=>{
				this.changeSay();
			},this,15000);
			break;
			case 7:
			mc_name = gender + '_hungry';
			time = 8000;			
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
					case 3:
						ph_mc.y = -140;
						ph_mc.x = -1;	
					break;
					case 4:
						ph_mc.y = -140;
						ph_mc.x = -1;	
					break;
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

}