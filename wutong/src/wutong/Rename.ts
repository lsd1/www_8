class Rename extends eui.ItemRenderer{
	//单例
	private static shared:Rename;
	public static Shared() {
		if(this.shared == null) {
			this.shared = new Rename();
		}
		return this.shared;
	}
	//显示页面
	private rename_group:eui.Group;
	private btn_rename:eui.Group;
	private btn_close_rename:eui.Image;
	private ph_num:eui.Label;
	private ph_name:eui.Label;
	private descrip_txt:eui.Label;
	//几代凤凰头部显示
	private gender_group:eui.Group;
	//字体显示
	private g_text:eui.Label;
	//性别显示
	private g_gender:eui.Image;
	//小鸟图片
	private ph_img:eui.Image;


	//输入文字页面
	private enter_group:eui.Group;
	private btn_enter_confim:eui.Group;
	private btn_close_enter:eui.Image;
	private name_txt:eui.EditableText;
	private status_txt:eui.Label;

	//弹框页面
	private tip_group:eui.Group;
	private btn_close_tip:eui.Image;
	private theText:string;
	private btn_tip_later:eui.Group;
	private btn_tip_success:eui.Group;

	public constructor() {
		super();
		this.top = 0;
		this.left = 0;
		this.right = 0;
		this.bottom = 0;
		this.skinName = 'resource/garden_skin/wutong/Rename.exml';
		this.data = Main.Shared().lang_config;
		//改名
		this.btn_rename.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onRenameBtn,this);
		//关闭窗口
		this.btn_close_rename.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseShowRename,this);
		this.btn_close_enter.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseRename,this);
		this.btn_close_tip.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseTip,this);
		//显示改名提示
		this.name_txt.addEventListener(egret.Event.CHANGE,this.onShownegaTip,this);
		//显示改名确认界面
		this.btn_enter_confim.addEventListener(egret.TouchEvent.TOUCH_TAP,this.btnEnterConfim,this);
		//发送请求
		this.btn_tip_success.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onSendRequest,this);
		//稍后修改
		this.btn_tip_later.addEventListener(egret.TouchEvent.TOUCH_TAP,this.seeULater,this);
	}
	//显示界面
	public onShowRename() {
		
		var httpReq = new HttpReq();
		Index.Shared().wait.show();
		var url:string = 'v1.1/bird/name/bird_info';
		httpReq.GET({
			url:url,
			data:{},
			success:(res)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					Index.Shared().full_mask.visible = true;
					this.rename_group.visible = true;
					var birdInfo = res.data.birdInfo;
					this.ph_num.text = birdInfo.NO;
					this.ph_name.text = birdInfo.name;
					//头像框判断
					this.g_gender.source = Common.Shared().getPh(birdInfo.level, birdInfo.gender);
					//文字显示
					this.g_text.text = birdInfo.title;
					//是鸟还是蛋
					this.ph_img.source = Common.Shared().getPhImg(2, birdInfo.gender);
					this.descrip_txt.text = '*' + res.data.description;
				}else{
					Index.Shared().tips.showTips(res.msg);					
				}
				Index.Shared().wait.hide();
			},
			error:(error)=>{
				Index.Shared().wait.hide();
				Index.Shared().tips.showTips(this.data.indexTs.network_error);				
			}
		});
	}
	//开始改名
	private onRenameBtn() {
		this.rename_group.visible = false;
		this.enter_group.visible =  true;
	}
	//确定使用
	private onUseProps() {
		this.enter_group.visible = false
		this.tip_group.visible = true;
	}
	//改名不正确提示
	private onShownegaTip() {
		var theText = this.name_txt.text;
		var theLength = this.subString(theText);
		if(theLength >12) {
			this.status_txt.text = this.data.rename.num_out;
			this.btn_enter_confim.touchEnabled = false;
			this.btn_enter_confim.touchChildren = false;
		}else {
			var spstr = this.validateSpecial(theText);
			if(!spstr) {
				this.status_txt.text = this.data.rename.special;
				this.btn_enter_confim.touchEnabled = false;
				this.btn_enter_confim.touchChildren = false;
			}else {
				this.status_txt.text = '';
				this.btn_enter_confim.touchEnabled = true;
				this.btn_enter_confim.touchChildren = true;
			}
		}
		
	}
	private	validateSpecial(obj){
		var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]") ;
		if(!pattern.exec(obj)){
			//不包含
			return true;
		}else{
			return false;
		}
	}
	private subString(str) {
		if (str == null) return 0;
		if (typeof str != "string"){
			str += "";
			}
		return str.replace(/[^\x00-\xff]/g,"01").length;
	}
	//确认改名页面
	private btnEnterConfim() {
		this.enter_group.visible = false;
		this.tip_group.visible = true;
	}
	//发送改名申请
	private onSendRequest() {
		var httpReq = new HttpReq();
		Index.Shared().wait.show();
		var url:string = 'v1.1/bird/name/bird_rename';
		httpReq.POST({
			url:url,
			data:{name:Rename.Shared().name_txt.text},
			success:(res)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
					Index.Shared().tips.showTips(this.data.rename.renamed);
					Rename.Shared().name_txt.text = '';
					Rename.Shared().onCloseShowRename();	
				}else{
					Index.Shared().tips.showTips(res.msg);					
				}
				Index.Shared().wait.hide();
			},
			error:(error)=>{
				Index.Shared().wait.hide();
				Index.Shared().tips.showTips(this.data.indexTs.network_error);				
			}
		});
	}
	private seeULater() {
		this.onCloseShowRename();
		this.name_txt.text = '';
	}
	//关闭显示界面
	private onCloseShowRename() {
		Index.Shared().full_mask.visible = false;
		this.rename_group.visible = false;
		this.enter_group.visible = false;
		this.tip_group.visible = false;
	}
	//关闭改名界面
	private onCloseRename() {
		this.name_txt.text = '';
		this.enter_group.visible = false;
		this.rename_group.visible = true;
	}
	//关闭弹框
	private onCloseTip() {
		this.tip_group.visible = false;
		this.enter_group.visible = true;
	}
}