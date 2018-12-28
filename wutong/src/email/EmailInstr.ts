class EmailInstr extends eui.ItemRenderer{
	private static share:EmailInstr;
	public static Shared() {
		if(this.share == null) {
			this.share = new EmailInstr();
		}
		return this.share;
	}
	//邮箱控件
	public email_instr:eui.Group;
	//返回邮箱列表
	private btn_close_instr:eui.Image;
	//邮箱标题
	private title:eui.Label;
	//邮箱时间
	private datatime:eui.Label;
	private datatime_1:eui.Label;
	//邮箱内容
	private content:eui.Group;
	//是否领取
	private isReceive:number;
	private email_img:eui.Image = new eui.Image;
	//
	private contentText:any;

	public x:number;
	private id:number;
	public listId:number;
	//照片
	private group_img:eui.Group;

	public constructor() {
		super();
		this.skinName = "resource/garden_skin/email/EmailInstr.exml";
		this.data = Main.Shared().lang_config;
		this.top = 0;
        this.left = 0;
        this.right = 0;
        this.bottom = 0;	
		this.cacheAsBitmap = true;
		this.btn_close_instr.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtn_close_instr,this);
	}
	// 关闭按钮
	private onBtn_close_instr() {
		this.email_instr.visible = false;
		this.title.text = '';
		this.datatime.text = '';
		this.content.removeChild(this.contentText);
		Index.Shared().full_mask.visible = true;
		Index.Shared().addChildAt(Email.Shared(), -1);

	}
	
	public async showEmailInstr(obj:any) {
		this.title.text = obj.title;
		let dayTime =  obj.datetime.slice(0, 10);
		this.datatime.text = dayTime;
		this.datatime_1.text = obj.datetime.slice(10);
		//文本混合
		this.contentText =  Common.Shared().getITextElement(obj.content, 480, 358, 24, 0 ,0);
		this.content.addChild(this.contentText);
		this.id = obj.id;
		if(obj.attach.length > 0){
			this.group_img.removeChildren();
			for(let i = 0; i < obj.attach.length; i++) {
				this.email_img.source =  await Common.Shared().loadImg(obj.attach[i]);
				this.email_img.height = 270;
				this.email_img.width = 480;
				this.email_img.y = (i + 1) * 280;
				this.group_img.addChild(this.email_img);	
			}
			this.group_img.y = this.contentText.height + 10;
			this.group_img.visible = true;	
		}else {
			this.group_img.visible = false;
		}
		this.isReceive = obj.isReceive;
	}
	
}