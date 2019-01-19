class Exchange extends eui.ItemRenderer {
    private static share:Exchange;

    public static Shared() {
        if(this.share == null){
            this.share = new Exchange();
        }
        return this.share;
    }

    private goBack:eui.Image;
    private confirm:eui.Group;
    private svc_inp:eui.Label;
    private svc_val:number = 0;
    private gold_inp:eui.Label;
    private gold_val:number = 0;
    private change_ratio:eui.Label;
    private change_ratio_val:number;
    private add:eui.Button;
    private del:eui.Button;
    public tips:Tips = new Tips();
	public wait:Wait = new Wait();
    private timeCount:any = false;
    private svc:number;

    public constructor () {
        super();
        this.top = 0;
        this.left = 0;
        this.right = 0;
        this.bottom = 0;
        this.skinName = "resource/garden_skin/goldCoin/Exchange.exml";
        this.data = Main.Shared().lang_config;
        this.addChild(this.tips);
		this.addChild(this.wait);
        this.confirm.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onConfirmExchange, this);
        this.goBack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGoBack, this);

        this.add.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onAddBegin,this);
        this.add.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this);
        this.add.addEventListener(egret.TouchEvent.TOUCH_CANCEL,this.onTouchEnd,this);

        this.del.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onDelBegin,this);
        this.del.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouchEnd,this);
        this.del.addEventListener(egret.TouchEvent.TOUCH_CANCEL,this.onTouchEnd,this);
    }

    public onShowExchange(){
        this.wait.show();
        var httpReq = new HttpReq();
		var url = 'v1.1/coin/get_exchange_ratio';
		return httpReq.GET({
			url:url,
			data:{'lastId':0},
			success:(res:any)=>{
				var res = JSON.parse(res);
				if(res.code == 0){	
					this.change_ratio.text = res.data.svcExchangeRatio;
					this.change_ratio_val = res.data.svcExchangeRatio;
					this.svc = res.data.svcAmount > 0 ? res.data.svcAmount : 0;
				}else{
					this.tips.showTips(res.msg);
				}	
				this.wait.hide();
			},
			error:()=>{
				this.wait.hide();
				this.tips.showTips(this.data.scrollerEmailTs.network_error);
			}
		});     
    }

    //增加数量
    private onSvcAdd(e:egret.Event){
        if((this.svc_val + 100) > this.svc){
            this.tips.showTips(this.data.goldCoin.not_enough_svc);
            this.onTouchEnd(e);
            return false;
        } 
        this.svc_val += 100;
        this.gold_val = this.svc_val * this.change_ratio_val;
        this.svc_inp.text =  this.svc_val + '';
        this.gold_inp.text = this.gold_val + '';
    }

    //减少数量
    private onSvcDel(e:egret.Event){
        if(this.svc_val == 0){
            this.onTouchEnd(e);
            return false;
        } 
        this.svc_val -= 100;
        this.gold_val = this.svc_val * this.change_ratio_val;
        this.svc_inp.text =  this.svc_val + '';
        this.gold_inp.text = this.gold_val + '';
    }

    //长按+开始
    private onAddBegin(e:egret.Event){
        if(this.timeCount) return false;
        this.onSvcAdd(e);
        this.timeCount = egret.setInterval(this.onSvcAdd, this, 100);
    }

    //长按-开始
    private onDelBegin(e:egret.Event){
        if(this.timeCount) return false;
        this.onSvcDel(e);
        this.timeCount = egret.setInterval(this.onSvcDel, this, 100);
    }

    //长按结束
    private onTouchEnd(e:egret.Event){
        if(!this.timeCount) return false;
        egret.clearInterval(this.timeCount);
        this.timeCount = false;
    }

    public onConfirmExchange(e:egret.TouchEvent){
        if(this.svc_val == 0){
            this.tips.showTips(this.data.goldCoin.svc_empyt);
            return false;
        } 
        this.wait.show();
        var httpReq = new HttpReq();
		var url = 'v1.1/coin/put_order';
		return httpReq.POST({
			url:url,
			data:{'exchangeNum':this.svc_val},
			success:(res:any)=>{
				var res = JSON.parse(res);
				if(res.code == 0){
                    let payInfo = res.data;
                    Common.Shared().setCookie('app_method', '{"type":"svcPay","orderId":"'+ payInfo.orderId +'","payOrder":"'+ payInfo.payOrder +'"}', 30);
                    setTimeout(()=>{
                        this.svc_val = 0;
                        this.gold_val = 0;
                        this.svc_inp.text =  this.svc_val + '';
                        this.gold_inp.text = this.gold_val + '';
                    }, 2000);
                    
				}else{
					this.tips.showTips(res.msg);
				}	
				this.wait.hide();
			},
			error:()=>{
				this.wait.hide();
				this.tips.showTips(this.data.scrollerEmailTs.network_error);
			}
		});     
    }

     // 关闭按钮
	private onGoBack() {
        this.parent.addChild(Gold.Shared());
		this.parent.removeChild(this);
        Gold.Shared().onShowGold();
	}

}