class Common {
	private static share:Common = null;
	public static Shared(){
		if(this.share == null){
			this.share = new Common();
		}
		return this.share;
	}
	public lang_config =  Main.Shared().lang_config;

	public egretFactory: dragonBones.EgretFactory;
	/**
	 * 秒数转化为倒计时
	 */
	public secondToTime(second:number,type?:number){
		if(!type) type = 3;
		var t:string = '';
		if(second > -1){
			var hour:any = Math.floor(second / 3600);
			var min:any = Math.floor(second / 60) % 60;
			var sec:any = second % 60;
			
			if(hour < 10 ){hour = '0'+ hour.toString();}
			if(min < 10){min = "0" + min.toString();}
			if(sec < 10){sec = "0" + sec.toFixed(0).toString();}
			var timeArr = [hour,min,sec];
			for(var i = 0; i < type; i++){
				t += t == '' ?  timeArr[i] : ':' + timeArr[i];
			}	
		}
		return t;
	}

	/**
	 * 创建圆形遮罩图片
	 */
	public async createCircleMask(width:number, height:number, image:any, x?:number, y?:number, isurl?:boolean):Promise<any>{
		var group:eui.Group = new eui.Group();
		x =  x > 0 ? x : 0;
		y =  y > 0 ? y : 0;

		var img:any = await this.createImage(width, height, image, x, y, isurl);
		var circle:egret.Shape = new egret.Shape();
		circle.graphics.beginFill(0x000000, 1);		
		circle.graphics.drawCircle(width / 2 + x, width / 2 + y, width / 2);
		img.mask = circle;
		group.addChild(circle);
		group.addChild(img);
		return group;
	}

	/**
	 * 创建一张图片
	 */
	public async createImage(width:number, height:number, image:any, x?:number, y?:number, isurl?:boolean):Promise<any>{
		if(typeof(image) == 'string'){
			var img = new eui.Image();
			img.cacheAsBitmap = true;
			if(isurl){
				img.source = await Common.Shared().loadImg(image);
			}else{
				img.source = image;
			}
		}else{
			img = image;
		}
		img.width = width;
		img.height = height;
		img.x = x > 0 ? x : 0;
		img.y = y > 0 ? y : 0;
		return img;
	}

	/**
	 * 设置cookie
	 */
	public setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toUTCString();
		document.cookie = cname + "=" + encodeURI(cvalue) + "; " + expires;
	}

	/**
	 * 读取cookie
	 */
	public getCookie(name) {
		var arr,reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		if(arr=document.cookie.match(reg))
			return decodeURI(arr[2]);
		else
			return null;
	}

	/**
	 * 清空cookie
	 */
	public delCookie(name) {
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var val = this.getCookie(name);
		if(val != null ) {
			document.cookie = name + "="+ val + ";expires=" + exp.toISOString();
		}
	}

	/**
	 * 获取N位随机数
	 */
	public getRndNum(n?:number){
		let rnd = "";
		n = n ? n : 1;
		for(let i = 0; i < n; i++ ){
			rnd += Math.floor(Math.random() * 10);
		}
		return rnd;
	}

	/**
	 * 把objB对象属性合并到objA，相同属性以objB为准。
	 */
	public mergeObj(objA:{},objB:{}){
		for(var key in objB){
			objA[key] = objB[key];
		}
		return objA;
	}

	/**
	 * 加载动画资源
	 */
	public async mc(mv_name:string, x, y, main?:any,isUrl?:boolean){
		if(isUrl){
			var texture = await this.loadImg(localStorage.getItem('imgUrl') + 'mc/' + mv_name + "_tex.png");
			//将加载完的资源进行显示
			var data:any = await this.loadText(localStorage.getItem('imgUrl') + 'mc/' + mv_name + "_mc.json", RES.ResourceItem.TYPE_JSON);
			var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, texture );
			var mc = new egret.MovieClip( mcFactory.generateMovieClipData( mv_name + "_mc_1" ) );
			mc.x = x; mc.y = y;
			if(main){
				mc.addEventListener(egret.Event.COMPLETE, (e:egret.Event)=>{
					main.removeChild( mc );
				}, main);
			}

			return mc;
			
		}else{
			var texture:any = RES.getRes(mv_name + "_tex_png");
			var data:any = RES.getRes(mv_name + "_mc_json");
			var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, texture);
			var mc = new egret.MovieClip( mcFactory.generateMovieClipData( mv_name + "_mc_1" ) );
			mc.x = x; mc.y = y;
			if(main){
				mc.addEventListener(egret.Event.COMPLETE, (e:egret.Event)=>{
					main.removeChild( mc );
				}, main);
			}
			return mc;
		}
	}

	/**
	 * 加载龙骨动画
	 */
	public async dbMc(mv_name, isurl?:boolean){
		if(isurl){
			var texture = await this.loadImg(localStorage.getItem('imgUrl') + 'mc/' + mv_name + "_tex.png");
			var dragonbonesData:any = await this.loadText(localStorage.getItem('imgUrl') + 'mc/' + mv_name + "_ske.dbbin", RES.ResourceItem.TYPE_BIN);
			var textureData:any = await this.loadText(localStorage.getItem('imgUrl') + 'mc/' + mv_name + "_tex.json", RES.ResourceItem.TYPE_JSON);
			if(!this.egretFactory) this.egretFactory =  dragonBones.EgretFactory.factory;
			this.egretFactory.parseDragonBonesData(dragonbonesData);  
			this.egretFactory.parseTextureAtlasData(textureData, texture);
			var dbMc = this.egretFactory.buildArmatureDisplay(mv_name);
			dbMc.armature.cacheFrameRate = 20;
			return dbMc;
		}else{
			var texture = RES.getRes(mv_name + "_tex_png");
			var dragonbonesData:any = RES.getRes(mv_name + "_ske_dbbin");
			var textureData:any = RES.getRes(mv_name + "_tex_json");
			if(!this.egretFactory) this.egretFactory =  dragonBones.EgretFactory.factory;
			this.egretFactory.parseDragonBonesData(dragonbonesData);
			this.egretFactory.parseTextureAtlasData(textureData, texture);
			var dbMc = this.egretFactory.buildArmatureDisplay(mv_name);
			dbMc.armature.cacheFrameRate = 20;
			return dbMc;
		}
	}

	/***
	 *加载远程图片 
	 */ 
	public async loadImg(url:string):Promise<any>{
		egret.ImageLoader.crossOrigin = 'anonymous';
		return new Promise((resolve, reject)=>{
			RES.getResByUrl(url, (data:any)=>{
				resolve(data);
			}, this, RES.ResourceItem.TYPE_IMAGE);
		});	
	}

	/***
	 *加载远程文件
	 */ 
	public async loadText(url:string, type:any):Promise<any>{
		return new Promise((resolve, reject)=>{
			RES.getResByUrl(url, (data:any)=>{
				resolve(data);
			}, this, type);
		});	
	}

	/**
	 * 根据当前时间返回对应时间状态
	 */
	public getTimeStatus():string {
		let dateTime = new Date();
		let yy = dateTime.getFullYear();
		let mm = dateTime.getMonth() + 1 < 10 ? '0'+(dateTime.getMonth() + 1) : dateTime.getMonth() + 1;
		let dd = dateTime.getDate() < 10 ? '0'+ dateTime.getDate() : dateTime.getDate();
		//当天凌晨时间戳
		let newTime:any = new Date(yy + '-' + mm + '-' + dd + ' 00:00:00').getTime(); 
		if(!newTime){
			newTime = new Date(yy + '/' + mm + '/' + dd + ' 00:00:00').getTime(); 
		}
		let a = newTime + (6 * 3600 * 1000);
		let b = newTime + (7 * 3600 * 1000);
		let c = newTime + (18 * 3600 * 1000);
		let d = newTime + (20 * 3600 * 1000);
		//当前时间戳
		let nowTime = new Date().getTime();

		if(nowTime > b && nowTime < c){
			return "d";
		}else if(nowTime > d || nowTime < a)  {
			return "n";
		}else {
			return "e";
		}

	}


	/**
	 * 根据不同时间、状态返回对应的图片
	 * @params type : number 1:背景图片,2:果树图片,3:果实图片
	 * @params lv : number 等级
	 * @params state : string 果实状态
	 * @return string
	 */
	public getImgByStatus(type:number, lv?:number, state?:string,):string {
		if(lv){
			if(lv == 10){
				lv = 10;
			}else if(lv > 6 && lv < 10){
				lv = 7;
			}else if(lv > 3 && lv < 7){
				lv = 4
			}else{
				lv = 1;
			}
		}
		var timeStatus = this.getTimeStatus();
		if(type == 3) {
			return "fruit_" + state + "_" + lv + "_" + timeStatus + ".png";
		}else if(type == 2){
			return "tree_" + lv + "_" + timeStatus + ".png";
		}else if(type == 1) {
			return "bg_" + timeStatus + "_png";
		}
		
	}

	/**
	 * 凤凰头像框判断
	 */
	public getPh(level:number, gender?:number, type?:number) {
		if(level != 0 && type == 1) {
			return 'auction_json.auc_n_u';
		}
		let dengji = '';
		if(level == 0) {
			dengji = 'z';
		}else {
			dengji = 'n';
		}
		let xingbie = '';
		if(gender == 0) {
			xingbie = 'u';
			return 'auction_json.auc_' + dengji + '_' + xingbie;
		}else if(gender == 1) {
			xingbie = 'm';
			return 'auction_json.auc_' + dengji + '_' + xingbie;
		}else if(gender == 2) {
			xingbie = 'w';
			return 'auction_json.auc_' + dengji + '_' + xingbie;
		}
	}

	/**
	 * 是鸟还是蛋
	 */
	public getPhImg(type:number, gender:number) {
		let theType = '';
		let theGender = '';
		if(type == 1) {
			theType = 'e';
			theGender = 'u';
		}else {
			if(gender == 1){ 
				theType = 'f';
				theGender = 'm';
			}else if(gender == 2) {
				theType = 'f';
				theGender = 'w';
			}else {
				theType = 'e';
				theGender = 'u';
			}
		}
		return 'auction_json.ph_' + theType + '_' + theGender;
	 }
	 /**
	 * 头像框文字显示
	 */
	public getPhText(type:number, level:number) {
		let hor = 0;
		if(type == 1 ) {
			hor = 0;
		}else {
			if(level == 0 ) {
				hor = 0;
			}else {
				hor = 26;
			}
		}
		
		return hor;
	 }
	
	/**
	 * 截取N位字符，其余用‘...’代替
	 */
	public getChar(_str: string,_len: number): string {
			return _str.substring(0, _len+1);
	}
	/**
	 * 混合文本的显示制作
	 */
	public getITextElement(html:string, w:number, h:number, s:number, x?:number, y?:number, b?:number) {
		var tx:egret.TextField = new egret.TextField;
		tx.width = w;
		tx.x = x;
		tx.y = y;
		tx.size = s;
		tx.lineSpacing = 20;
		if(b == 1) {
			tx.bold = true;
		}
		tx.textColor = 0x3C2405;
		tx.fontFamily = "PingFang-SC-Medium";
		tx.textAlign = egret.HorizontalAlign.LEFT;
		tx.textFlow = (new egret.HtmlTextParser).parser(html);
		return tx;
	}
	/**
	 * 邮件倒数天数
	 */
	public getCountDays(time:string) {
		let newTimer = new Date().getTime(); //现在时间戳
		let timer = new Date(time).getTime(); //发布邮件时间戳
		let removeTimer = timer + 15 * 24 * 3600 * 1000; //清除邮件时间戳
		let lastDay = Math.ceil((removeTimer - newTimer) / (24 * 3600 * 1000));
		var Day = "剩余"+lastDay+"天";
		return Day;
	}


	//虚拟键盘
	public keyboard:any;
	//虚拟键盘密码框
    public pwdArr:any;
    //虚拟键盘输入框
	public inputStr = '';
	//密码输完回调
	public afterSecondPwd:any;
	//回调附加参数
	public afterData:any;
	//上一步显示对象
	public preTarget:any;
	//是否返回上一步
	public goBack:boolean;

	public full_mask:any;

	//虚拟键盘按键监听
    public onInput(e){
        if(e.target.className == 'cell'){               
            Common.Shared().keyboard.classList.add("disabled");
            e.target.classList.add('cell_hover');
            setTimeout(()=>{
                Common.Shared().keyboard.classList.remove("disabled");
            }, 90);
            setTimeout(()=>{
                e.target.classList.remove('cell_hover');
            }, 100);
            switch(e.target.innerHTML){
                case '删除':
                    Common.Shared().inputStr = Common.Shared().inputStr.substr(0, Common.Shared().inputStr.length - 1);
                    Common.Shared().addNum ();
                    break;
                case '清空':
                    Common.Shared().inputStr = '';
                    Common.Shared().addNum ();
                    break;
                default:
                    if(Common.Shared().inputStr.length > 6) return false; 
                    Common.Shared().inputStr += e.target.innerHTML;
                    Common.Shared().addNum ();
                    if(Common.Shared().inputStr.length == 6){
						if(Common.Shared().goBack){
							Common.Shared().preTarget.visible = true;
						}
						if(Common.Shared().afterSecondPwd){
							Common.Shared().afterSecondPwd(Common.Shared().inputStr, Common.Shared().afterData);
						}                    
                        setTimeout(()=>{
							Common.Shared().onHidePwd();
                            Common.Shared().keyboard.removeEventListener('touchstart', Common.Shared().onInput);
							Common.Shared().afterSecondPwd = null;
                        }, 100);
						Common.Shared().inputStr = '';
                    	Common.Shared().addNum ();
                    }
					
                    break;    
            }  
        }
    }

	//关闭虚拟键盘
	public onHidePwd() {
		this.full_mask.style.display = "none";
		this.keyboard.style.display = "none";
	}

    //虚拟键盘初始化    
    public secondPwd(afterSecondPwd:any, preTarget?:any, goBack?:boolean, afterData?:any) {
		if(!this.keyboard){
			var keyBoardNode = document.createElement('div');
			keyBoardNode.id = "keyboard";
			keyBoardNode.classList.add("keyboard");
			var keyBoardContentHtml = 
				'<div class="secondPwd">'+
					'<div id="close" class="close">X</div>'+                   
					'<div class="title">'+ this.lang_config.common.keyboard_title +'</div>'+
					'<div class="tips">'+ this.lang_config.common.keyboard_tips +'</div>'+
					'<div class="pwd_content">'+
						'<div class="pwd"></div>'+
						'<div class="pwd"></div>'+
						'<div class="pwd"></div>'+
						'<div class="pwd"></div>'+
						'<div class="pwd"></div>'+
						'<div class="pwd"></div>'+
					'</div>'+
				'</div>'+
				'<div class="keyboard_bg">'+
					'<div class="keyboard_content">'+
						'<div class="number"><div class="cell">1</div></div>'+
						'<div class="number"><div class="cell">2</div></div>'+
						'<div class="number"><div class="cell">3</div></div>'+
						'<div class="number"><div class="cell">4</div></div>'+
						'<div class="number"><div class="cell">5</div></div>'+
						'<div class="number"><div class="cell">6</div></div>'+
						'<div class="number"><div class="cell">7</div></div>'+
						'<div class="number"><div class="cell">8</div></div>'+
						'<div class="number"><div class="cell">9</div></div>'+
						'<div class="number"><div class="cell">'+ this.lang_config.common.keyboard_empty +'</div></div>'+
						'<div class="number"><div class="cell">0</div></div>'+
						'<div class="number"><div class="cell">'+ this.lang_config.common.keyboard_del +'</div></div>'+
					'</div>'+
				'</div>';
			keyBoardNode.innerHTML = keyBoardContentHtml;		
			document.getElementsByTagName('body')[0].appendChild(keyBoardNode);	
			this.keyboard = document.getElementById('keyboard');
			this.pwdArr = document.getElementsByClassName('pwd');

			var full_mask = document.createElement('div');
			full_mask.id = "theFullMask";
			full_mask.classList.add("theFullMask");
			full_mask.innerHTML = '<div></div>';
			document.getElementsByTagName('body')[0].appendChild(full_mask);
			this.full_mask = document.getElementById('theFullMask');
		}
		this.preTarget = preTarget;
		this.goBack = goBack;
		if(this.preTarget){
			this.preTarget.visible = false;	
		}
		this.afterSecondPwd = afterSecondPwd;
		this.afterData = afterData;
        this.keyboard.style.display = "block";
		this.full_mask.style.display = "block";
        this.keyboard.addEventListener('touchstart', this.onInput);
		document.getElementById('close').addEventListener('click', ()=>{
			if(this.goBack){
				if(this.preTarget){
					this.preTarget.visible = true;					
				}
			}
			this.inputStr = '';
			this.addNum ();
			Common.Shared().onHidePwd();
			this.keyboard.removeEventListener('touchstart', this.onInput);
			this.afterSecondPwd = null;
    	});
    }

	// 虚拟键盘输入●
    public addNum (){
        for(let k = 0; k < this.pwdArr.length; k++){
            if(this.inputStr[k]){
                this.pwdArr[k].innerHTML = '●';                    
            }else{
                this.pwdArr[k].innerHTML = '';                                    
            }
        }
    }

	private year:any;
	private month:any;
	private day:any;
	private hour:any;
	private minute:any;
	private selectedIndex:any; /* 默认选中的时间 */
	private checked:any; /* 已选选项 */
	private picker:any;
	//选择后回调
	public callBack:any;

	//日期选择器
	public createPick(callBack){
		if(this.picker){
			this.picker.show();
			return false;
		}
		this.callBack = callBack;
		this.year = [];
		this.month = [];
		this.day = [];
		this.hour = [];
		this.minute = [];
		this.selectedIndex = [0, 0, 0, 0, 0];
		this.checked = [0, 0, 0, 0, 0];
		this.creatYear();
		this.creatMonth();
		this.creatDay();
		this.creatHour();
		this.creatMinute();
			
		this.picker = picker({
			data: [this.year, this.month, this.day, this.hour, this.minute],
			selectedIndex: this.selectedIndex,
			title: '　'
		});

		var pickerChoose = document.getElementsByClassName("picker-choose")[0];

		var dateTitle = document.createElement("div");
		dateTitle.classList.add("date_title");

		var yearTitle = document.createElement("div");
		var monthTitle = document.createElement("div");
		var dayTitle = document.createElement("div");
		var hourTitle = document.createElement("div");
		var minuteTitle = document.createElement("div");

		yearTitle.innerText = '年';
		monthTitle.innerText = '月';
		dayTitle.innerText = '日';
		hourTitle.innerText = '时';
		minuteTitle.innerText = '分';

		yearTitle.classList.add("cell_title");
		monthTitle.classList.add("cell_title");
		dayTitle.classList.add("cell_title");
		hourTitle.classList.add("cell_title");
		minuteTitle.classList.add("cell_title");

		dateTitle.appendChild(yearTitle);
		dateTitle.appendChild(monthTitle);
		dateTitle.appendChild(dayTitle);
		dateTitle.appendChild(hourTitle);
		dateTitle.appendChild(minuteTitle);
		pickerChoose.appendChild(dateTitle);
		var selected = document.createElement("div");
		selected.classList.add("selected");
		pickerChoose.appendChild(selected);
		pickerChoose.appendChild(dateTitle);

		this.picker.on('picker.select', (selectedVal, selectedIndex) => {
			var text1 = this.year[this.selectedIndex[0]].text;
			var text2 = this.month[this.selectedIndex[1]].text;
			var text3 = this.day[this.selectedIndex[2]].text ? this.day[this.selectedIndex[2]].text : '';
			var text4 = this.hour[this.selectedIndex[3]].text;
			var text5 = this.minute[this.selectedIndex[4]].text;
			var time:any = text1 + '-' + text2 + '-' + text3 + ' ' + text4 + ':'+ text5 + ':00'; 
			if(!time){
				time = text1 + '/' + text2 + '/' + text3 + ' ' + text4 + ':'+ text5 + ':00';
			}
			this.callBack(time);
		});

		this.picker.on('picker.change', (index, selectedIndex) => {
			if (index === 1) {
				this.secondChange();
			}
		});

		this.picker.show();		
	}

private creatYear() {
	var nowDate = new Date();
	var nowYear = nowDate.getFullYear();
	var j = 0;
	for(let i = 0; i < 2; i++){
		var temp:any = new Object();
		temp.text = nowYear + i;
		temp.value = nowYear + i;
		this.year.push(temp);
		if(i == 0){
			this.selectedIndex[0] = j;
		}
		j++;
	}
}

private creatMonth() {
	var nowDate = new Date();
	var nowMonth = nowDate.getMonth() + 1;
	for(let i = 1; i < 13; i++){
		let temp:any = new Object();
		temp.text = i < 10 ? '0' + i : i;
		temp.value = i;
		this.month.push(temp);
		if(nowMonth == i){
			this.selectedIndex[1] = i - 1;
		}
	}
}

private creatDay() {
	var nowDate = new Date();
	var nowDay = nowDate.getDate();
	var maxDay = this.mGetDate(this.checked[0], this.month[this.selectedIndex[1]].value);
	this.day = [];
	for(let i = 1 ; i <= maxDay; i++){
		let temp:any = new Object();
		temp.text = i < 10 ? '0' + i : i;
		temp.value = i;
		this.day.push(temp);
		if(nowDay == i){
			this.selectedIndex[2] = i - 1;
		}
	}

}

private creatHour() {
	var nowDate = new Date();
	var nowHour = nowDate.getHours();
	for(let i = 1; i < 25; i++){
		let temp:any = new Object();
		temp.text = i < 10 ? '0' + i : i;
		temp.value = i;
		this.hour.push(temp);
		if(nowHour == i){
			this.selectedIndex[3] = i-1;
		}
	}
}

private creatMinute() {
	var nowDate = new Date();
	var nowMinute = nowDate.getMinutes();
	for(let i = 0; i < 60; i++){
		let temp:any = new Object();
		temp.text = i < 10 ? '0' + i : i;
		temp.value = i;
		this.minute.push(temp);
		if(nowMinute == i){
			this.selectedIndex[4] = i;
		}
	}
}

private mGetDate(year, month){
	var d = new Date(year, month, 0);
	return d.getDate();
}

private secondChange() {
	this.creatDay();
	this.checked[1] = this.selectedIndex;
	this.picker.refillColumn(2, this.day);
	this.picker.scrollColumn(2, 0)
}

//格式化数字
public formatNum(num:number){
	var numText:string = '';
	if(num > 100000000){
		numText = '9999'+ '万+';
	}else if(num >= 10000){
		(num / 10000).toFixed(2).toString() + '万';
	}else{
		numText = num.toString();
	}
	return numText;
}
//保留幾位小數
public toFix(number, len){
    if(len === undefined){
        len = 2;
    }

    if (number == 0) {
        return parseFloat(number).toFixed(len);
    }

    var a = 4.9 / Math.pow(10,len+1);
    return (number - a).toFixed(len);

}

}