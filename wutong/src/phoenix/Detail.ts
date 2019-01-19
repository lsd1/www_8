class Detail extends eui.ItemRenderer {
	public static shared:Detail;
    public static Shared(){
        if(!this.shared){
            this.shared = new Detail(Index.Shared().ph_detail);
        }
        return this.shared;
    }
	//提示框
	private tips:Tips = new Tips();
	//加载动画
	private wait:Wait = new Wait();

	private back:eui.Group;
	private group_top:eui.Group;
	//凤凰属性：经验条、心情...
	private ph_img:eui.Image;
	private ph_name_1:eui.Label;
	private ph_xp_now:eui.Image;
	private ph_xp_next:eui.Image;
	private ph_xp_desc:eui.Label;
	private ph_mood_now:eui.Image;
	private ph_mood_next:eui.Image;
	private ph_mood_desc:eui.Label;	

	//凤凰来源
	private group_from:eui.Group;
	private ph_m:eui.Label;
	private ph_w:eui.Label;

	//凤凰代数、性别
	private gender_group:eui.Group;
	private gender:eui.Image;
	private g_text:eui.Label;

	//凤凰资料
	private ph_from:eui.Label;
	private ph_num:eui.Label;
	private ph_name_2:eui.Label;
	private group_mood:eui.Group;
	private ph_mood:eui.Label;

	//修改昵称、查看心情详情
	private change_name:eui.Image;	
	//凤凰动态记录
	public group_log:eui.Group;
	//凤凰信息
	public ph_detail:any;
	//生命、经验条
	private group_xp:eui.Group;
	//状态倒计时
	private status_count:eui.Label;
	//凤凰蛋图片
	private egg_img:eui.Image;
	//凤凰蛋状态
	private egg_status:eui.Label;
	//日志高度
	public log_height:number = 0;

	public constructor(ph_detail:any) {
		super();
		this.skinName = "resource/garden_skin/phoenix/Detail.exml";
		this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.data = Main.Shared().lang_config;
		this.ph_detail = ph_detail;
		this.addChild(this.tips);
		this.addChild(this.wait);
		//事件：修改昵称
		this.change_name.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangeNameTap, this);
		//返回
		this.back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackTap, this);
	}

	public init(){
		this.log_height = 100;		
		var httpReq = new HttpReq();
		if(this.ph_detail.type == 2){
			var url:string = 'v1.1/bird/show';
		}else{
			var url:string = 'v1.1/bird/show_egg';
		}
		var id = this.ph_detail.id;
		httpReq.GET({
			url:url,
			data:{id:id},
			success:(res)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					if(this.ph_detail.type == 2){
						this.renderPh(res.data.bird);	
					}else{
						this.renderEgg(res.data);
					}
				}else{       
					this.tips.showTips(Index.Shared().data.indexTs.network_error);				
				}
			},
			error:(error)=>{
				this.tips.showTips(Index.Shared().data.indexTs.network_error);	
			}
		});
		//获取日志
		var httpReq = new HttpReq();
		var url:string = 'v1.1/bird/show_log';
		var id = this.ph_detail.id;
		httpReq.GET({
			url:url,
			data:{birdId:id},
			success:(res)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					this.renderPhLog(res.data.birdLog);	
				}
			},
			error:(error)=>{
				this.tips.showTips(Index.Shared().data.indexTs.network_error);				
			}
		});
	}

	//渲染蛋详情
	private renderEgg(data){
		this.ph_name_1.text = data.NO;
		this.ph_name_2.text = data.NO;
		this.ph_num.text = data.NO;
		if(data.level == 0){
			this.ph_from.visible = true;
			this.group_from.visible = true;
		}
		this.gender.source = Common.Shared().getPh(data.level, data.gender);
		this.g_text.text = data.title;

		this.egg_img.visible = true;
		var egg_status = '';
		switch(data.statusId){
			case 3:
			egg_status = '(孵化中)';
			this.egg_img.source = 'auction_json.csd_2x';
			break;
			case 4:
			egg_status = '(重生中)';
			this.egg_img.source = 'auction_json.csd_l_2x';			
			break;
		}
		this.egg_status.text = egg_status;
		this.egg_status.x = (this.stage.stageWidth / 2 + this.ph_name_1.width / 2) - 30;
		this.egg_status.visible = true;
		//倒计时
		if(data.countdown > 0){
			var Timer = data.countdown;
			let t = setInterval(()=>{
				if(Timer > 0) {
					this.status_count.text = Common.Shared().secondToTime(Timer);
					Timer--;
				}else{
					clearTimeout(t);
					this.status_count.text = "00:00:00";
				}
			}, 1000);
			this.status_count.visible = true;			
		}
	}

	public renderPhLog(data){
		this.group_log.removeChildren();
		var list = new eui.List();
		list.itemRenderer = LogList;
		list.dataProvider = new eui.ArrayCollection(data);
		this.group_log.height = this.log_height;
		list.y = 130;
		list.cacheAsBitmap = true;
		this.group_log.addChild(list);
	}

	//渲染凤凰详情
	private renderPh(data){
		this.ph_name_1.text = data.name;
		this.ph_name_2.text = data.name;
		this.ph_num.text = data.NO;
		this.ph_img.source = Common.Shared().getPhImg(2, data.gender);
		
		this.ph_img.visible = true;
		data.lifeValue = data.lifeValue > data.maxLifeValue ? data.maxLifeValue :data.lifeValue;
		this.ph_xp_now.width = 252 * (data.lifeValue / data.maxLifeValue);
		this.ph_xp_desc.text = data.lifeValue + '/' + data.maxLifeValue;
		this.group_xp.visible = true;
		if(data.level == 0){
			this.ph_from.visible = true;
			this.group_from.visible = true;
		}
		this.gender.source = Common.Shared().getPh(data.level, data.gender);
		this.g_text.text = data.title;
	}

	private onChangeNameTap(e:egret.TouchEvent){
		if(!this.contains(ChangeNameConfirm.Shared())){
			this.addChild(ChangeNameConfirm.Shared());
			ChangeNameConfirm.Shared().verticalCenter = 0;
			ChangeNameConfirm.Shared().horizontalCenter = 0;
		}
		ChangeNameConfirm.Shared().show();
		FullMask.Shared().visible = true
	}

	private onMoodTipsTap(e:egret.TouchEvent){
		if(!this.contains( MoodTips.Shared())){
			this.addChild(MoodTips.Shared());
			MoodTips.Shared().verticalCenter = 0;
			MoodTips.Shared().horizontalCenter = 0;
		}
		FullMask.Shared().visible = true		
		MoodTips.Shared().open(e);
	}

	private onBackTap(e:egret.TouchEvent){
		this.parent.addChild(Index.Shared());
		this.parent.removeChild(this);
	}
}