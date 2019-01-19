class UsePayInput extends eui.ItemRenderer{
    //文本框
    public text_type:eui.EditableText;
    private maxNum:number;
    private isSetMax:boolean;

    public constructor(maxNum?:number) {
        super();
        this.skinName = "resource/garden_skin/wutong/UsePayInput.exml";
        this.data = Main.Shared().lang_config;
        this.text_type.maxChars = 3;
        this.text_type.text = '1';
        this.text_type.inputType = egret.TextFieldInputType.TEL;
        // this.text_type.prompt = '0';
        this.text_type.restrict = "0-9";
        this.text_type.textColor = 0x3c2405;
        // this.text_type.touchEnabled = false;
        // this.text_type.addEventListener(egret.TouchEvent.CHANGE,this.ChangeTheNum,this);
        this.text_type.addEventListener(egret.Event.FOCUS_OUT,this.LeaceFocus,this);
        this.maxNum = maxNum ? maxNum : 999;
        this.isSetMax = maxNum ? true : false;
    }
    // 
    // private ChangeTheNum() {
    //     alert(this.text_type.text);
    // }
    //增加
    public addClick() {
        let buyNum = parseInt(this.text_type.text);
        buyNum < this.maxNum ? buyNum++ : buyNum = this.maxNum;
        this.text_type.text = String(buyNum);
    }
    //减少
    public decClick() {
        let buyNum =  parseInt(this.text_type.text);
        buyNum <= 1 ? buyNum = 1 : buyNum--;
        this.text_type.text = String(buyNum);
    }
    //鼠标离开焦点
    public LeaceFocus() {
        this.text_type.text = this.text_type.text == '' ? '1' : this.text_type.text;
        this.text_type.text = Number(this.text_type.text) < 1 ? '1' : this.text_type.text;
        let buyNum = parseInt(this.text_type.text);
        buyNum = buyNum < this.maxNum ? buyNum : this.maxNum;
        this.text_type.text = String(buyNum);
        // if(this.isSetMax){
        //     UsePay.Shared().reCount();
        // }else{

        // }
    }
}