class Notices extends eui.ItemRenderer{
	//全剧这遮罩
	private full_mask:eui.Rect;
	//Notices面板组
	private group_notices:eui.Group;
	//提示内容
	private notices_text:eui.Label;
	//关闭按钮
	private notices_close:eui.Group;

	
	//mc组件group
	private group_mc:eui.Group;
	private the_group:eui.Group;
	private notices_confrim:eui.Group;
	private the_mc:any;

	//消息id
	private id:number;

	public constructor() {
		super();
		this.skinName = "resource/garden_skin/wutong/Notices.exml";
		this.data = Main.Shared().lang_config;
		this.right = 0;
		this.left = 0;
		this.top = 0;
		this.bottom = 0;
		this.notices_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNoticesCloseTap, this);
		this.notices_confrim.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeEggStatus, this);
	}

	//点击确定关闭提示框
	private onNoticesCloseTap(e:egret.TouchEvent){
		this.closeNotices();
	}

	//打开提示文字
	public showNotices(Notices:any, lang?:string, gender?:string, isDie?:number){
		if(Notices.curType == 0 || Notices.curType == 4 || Notices.curType == 5){
			//提示文字弹框
			this.parent.setChildIndex(this, -1);		
			this.full_mask.visible = true;
			this.notices_text.text = Notices.content;
			this.group_notices.visible = true;
			this.id = Notices.id;
		}else{
			this.group_mc.visible = true;
			this.full_mask.visible = true;
			this.parent.setChildIndex(this, -1);	
			this.id = Notices.id;
			let mcName:string = '';
			switch (Notices.curType) {
				case 1 : //孵化失败
					mcName = 'birth_fall';
					break;
				case 2 : //孵化成功
					mcName = gender + '_hatch_' + lang;
					break;
				case 3 : //重生成功
					mcName = gender + '_rebirth_' + lang;
			}
			Common.Shared().dbMc(mcName, true).then((dbMc:any)=>{
				this.the_mc = dbMc;
				this.the_mc.animation.play(this.the_mc.animation.animationNames[0], 1);		
				this.the_group.addChild(this.the_mc);
			});
		}
	}

	//关闭提示框
	public closeNotices(){
		this.full_mask.visible = false;
		this.notices_text.text = '';
		this.group_notices.visible = false;
		var httpReq  = new HttpReq();
		var url:string = "v1.1/notice/put_read";
		httpReq.POST({
			url:url,
			data:{noticeId:this.id},
			success:(res) =>{
				var res = JSON.parse(res);
				if(res.code == 0) {
					Index.Shared().renderNotice();
				}else {
					Index.Shared().tips.showTips(res.msg);
				}
				Index.Shared().wait.hide();
			},
			error:(error)=>{
				Index.Shared().wait.hide();
				Index.Shared().tips.showTips('网络错误！请重新尝试！');				
			}
		});
	}

	//关闭孵化框
	private closeEggStatus(e:egret.Event) {
		this.group_mc.visible = false;
		this.full_mask.visible = false;
		if(this.the_group.contains(this.the_mc)) {
			this.the_group.removeChild(this.the_mc);
		}
		var httpReq  = new HttpReq();
		var url:string = "v1.1/notice/put_read";
		httpReq.POST({
			url:url,
			data:{noticeId:this.id},
			success:(res) =>{
				var res = JSON.parse(res);
				if(res.code == 0) {
					Index.Shared().renderNotice();
				}else {
					Index.Shared().tips.showTips(res.msg);
				}
				Index.Shared().wait.hide();
			},
			error:(error)=>{
				Index.Shared().wait.hide();
				Index.Shared().tips.showTips('网络错误！请重新尝试！');				
			}
		});
	}
}