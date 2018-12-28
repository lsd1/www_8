class EmailList extends eui.ItemRenderer{
	//邮箱控件
	public group_email_list:eui.Group;
	//邮件图片
	private e_icon:eui.Image;
	//邮件时间
	private e_time:eui.Label;
	// 邮件ID
	public id:number;
	// 邮件内容
	private e_content:eui.Label;
	//邮件标题
	private e_title:eui.Label;
	//消费福利
	private curType:number;
	//是否领取
	private isReceive:number;
	//是否包含道具
	private hasTool:number;
	//tools数据
	private tools:any;

	

	public constructor() {
		super();
		this.top = 0;
		this.right = 0;
		this.left = 0;
		this.bottom = 0;
		this.skinName = "resource/garden_skin/email/EmailList.exml";
		//this.data = Main.Shared().lang_config;
		this.cacheAsBitmap = true;

		this.group_email_list.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onEmailInClick,this);
	}
	private onEmailInClick(e:egret.TouchEvent) {
		Index.Shared().wait.show();
		var httpReq  = new HttpReq();
		var url:string = "v1.1/wutong/email_info";
		httpReq.GET({
			url:url,
			data:{emailId:this.id},
			success:(res) =>{
				var res = JSON.parse(res);
				if(res.code == 0) {
					let emailInfo = res.data.emailInfo;
					EmailInstr.Shared().showEmailInstr(emailInfo);
					EmailInstr.Shared().email_instr.visible = true;
					Index.Shared().full_mask.visible = true;
					//Index.Shared().setChildIndex(Index.Shared().full_mask, -1);
					Index.Shared().addChildAt(EmailInstr.Shared(), -1);
				}else {
					Index.Shared().tips.showTips(res.msg);
				}
					Index.Shared().wait.hide();
			},
			error:(error)=>{
					Index.Shared().wait.hide();
					Index.Shared().tips.showTips('网络错误！请重新尝试！');				
				}
			}, e.currentTarget);
	}
	protected dataChanged():void{
        //数据改变时，会自动调用 dataChanged 这个方法
		this.e_time.text = this.data.datetime.slice(0, 10);
		this.e_content.text = this.data.content;
		this.e_title.text = this.data.title;
		this.isReceive = this.data.isReceive;
		this.e_icon.source = 'auction_json.email_type_' + this.data.curType;	
		this.id = this.data.id;
    }
}

