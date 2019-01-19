//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {

    private static shared:Main;
	public static Shared() {
		if(this.shared == null){
			this.shared = new Main();
		}
		return this.shared;
    }

    public lang_config:any;

    public lang:any;

    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
    }

    private async loadResource() {
        try {
            await RES.loadConfig("resource/default.res.json","resource/");
            await RES.loadGroup("loading");
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            loadingView.createView();
            await this.loadTheme();
            await RES.loadGroup("wutong", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    private textfield: egret.TextField;
    public OtherGarden:OtherGarden;    
    /**
     * 创建场景界面
     * Create scene interface
     */
    protected async createGameScene() {
        //引入样式
		var link = document.createElement("link");
		link.rel = "stylesheet";
		link.type = "text/css";
		link.href = "resource/assets/style.css";
		document.getElementsByTagName("head")[0].appendChild(link);
        this.getConfig();
        await this.getMemberInfo();
        var lang_num = localStorage.getItem('lang');
        Main.Shared().lang = lang_num == "0" ? "cn" : lang_num == "2" ? "tcn" : "en";
        Main.Shared().lang_config = RES.getRes('lang_'+ Main.Shared().lang +'_json');
        this.addChild(Index.Shared()); 
    }

    protected async getConfig(){
        //获取配置项目
        var config = RES.getRes('config_json');
        for(let key in config){
            localStorage.setItem(key ,config[key]);
        }
    }

    protected async getMemberInfo():Promise<any>{
        return new Promise((resolve, reject)=>{
            try{
                var request = new egret.HttpRequest();
                request.withCredentials = true;
                request.responseType = egret.HttpResponseType.TEXT;
                request.open('/index.php', egret.HttpMethod.POST);
                //设置响应头
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                //发送参数
                request.send();
                request.addEventListener(egret.Event.COMPLETE, (event:egret.Event)=>{
                    var request = <egret.HttpRequest>event.currentTarget;
                    if(request.response){
                        var res = JSON.parse(request.response);
                        for(let key in res){
                            localStorage.setItem(key ,res[key]);
                        }
                        resolve();
                    }else{
                        reject();
                    }
                },this);
            }catch(e){
                    reject();
            }
        });
    }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}
