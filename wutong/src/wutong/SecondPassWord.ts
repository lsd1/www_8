class SecondPassWord extends eui.ItemRenderer {
	private secondPassWord:eui.Group;
	private t_1:eui.TextInput;
	private t_2:eui.TextInput;
	private t_3:eui.TextInput;
	private t_4:eui.TextInput;
	private t_5:eui.TextInput;
	private t_6:eui.TextInput;
	private text_input:eui.EditableText;
	public btn_close:eui.Image;
	public show_input:eui.Group;
	public secPassWord:string;
	public inp:any;
	public afterPwd:any;
	public afterData:any;
	public target:any;
	public constructor(afterPwd:any, afterData?:any) {
		super();
		this.skinName = 'resource/garden_skin/wutong/SecondPassWord.exml';
		this.data = Main.Shared().lang_config;
        this.top = 0;
        this.left = 0;
        this.right = 0;
        this.bottom = 0;
		this.text_input.inputType = egret.TextFieldInputType.TEL;
		this.text_input.displayAsPassword = true;
		this.text_input.maxChars = 6;
		this.afterPwd = afterPwd;
		this.afterData = afterData ? afterData : null;
		this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseSecondWord,this);
		this.text_input.addEventListener(egret.Event.CHANGE,this.onInput,this);
	}
	
	
	//关闭密码框
	public onCloseSecondWord(goBack?:any) {
		goBack = goBack === undefined ? true : false;	
		if(goBack){
			this.target.visible = true;
		}
		var $input:any = this.show_input.$children
		for (var i = 0; i < 6; i++) {
			$input[i].text = ('');
		}
		this.text_input.text = '';
		this.secondPassWord.visible = false;
		Index.Shared().full_mask.visible = false;		
	}
	//开启密码框
	public onShowSecondWord(target:any) {
		this.target = target;	
		this.target.visible = false;				
		this.secondPassWord.visible = true;
	}

	//输入事件
	public onInput() {
		var $input:any = this.show_input.$children
		var pwd = this.text_input.text.trim();
		var len = pwd.length;

		for (var i = 0; i < len; i++) {
			$input[i].text = ('●');
		}

		for (let j = 0; j < $input.length; j++){
			if (j >= len) {
				$input[j].text = '';
			}
		}

		if(len == 6){
			//给文本框注入内容
			this.afterPwd(pwd, this.afterData);
		}
	}
}