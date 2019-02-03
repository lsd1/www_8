
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/garden_skin/deal/MyBuyHistoryList.exml'] = window.myBidHistoryList = (function (_super) {
	__extends(myBidHistoryList, _super);
	function myBidHistoryList() {
		_super.call(this);
		this.skinParts = ["gender","g_text","gender_group","ph_img","life_txt","ph_num","ph_xp","ph_host","status_img","status_text","status_group","shelf_time","myBidMoneyList","wt_name","wt_num","wt_price","wt_shelf_time","wt_group"];
		
		this.height = 460;
		this.width = 680;
		this.elementsContent = [this.myBidMoneyList_i(),this.wt_group_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.langData.myShelfHistoryList.num"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.myBuyHistoryList.price"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.myBuyHistoryList.successful"],[0],this.status_text,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.transactionList.price"],[0],this._Label6,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.myBuyHistoryList.successful"],[0],this._Label7,"text");
	}
	var _proto = myBidHistoryList.prototype;

	_proto.myBidMoneyList_i = function () {
		var t = new eui.Group();
		this.myBidMoneyList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this.gender_group_i(),this.ph_img_i(),this._Label1_i(),this.life_txt_i(),this._Label2_i(),this.ph_num_i(),this.ph_xp_i(),this.ph_host_i(),this.status_group_i(),this._Rect1_i(),this._Group1_i()];
		return t;
	};
	_proto.gender_group_i = function () {
		var t = new eui.Group();
		this.gender_group = t;
		t.height = 50;
		t.width = 200;
		t.x = 53;
		t.y = 32;
		t.elementsContent = [this.gender_i(),this.g_text_i()];
		return t;
	};
	_proto.gender_i = function () {
		var t = new eui.Image();
		this.gender = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.g_text_i = function () {
		var t = new eui.Label();
		this.g_text = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 1;
		t.size = 26;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ph_img_i = function () {
		var t = new eui.Image();
		this.ph_img = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "";
		t.top = 130;
		t.x = 61;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang SC";
		t.left = 327;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 33;
		return t;
	};
	_proto.life_txt_i = function () {
		var t = new eui.Label();
		this.life_txt = t;
		t.fontFamily = "PingFang SC";
		t.left = 329;
		t.size = 24;
		t.text = "";
		t.textColor = 0xA07B49;
		t.y = 113;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "PingFang SC";
		t.left = 330;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 190;
		return t;
	};
	_proto.ph_num_i = function () {
		var t = new eui.Label();
		this.ph_num = t;
		t.fontFamily = "PingFang SC";
		t.left = 426;
		t.size = 24;
		t.text = "xxxxx";
		t.textColor = 0x3C2405;
		t.y = 31;
		return t;
	};
	_proto.ph_xp_i = function () {
		var t = new eui.Label();
		this.ph_xp = t;
		t.fontFamily = "PingFang SC";
		t.left = 468;
		t.size = 24;
		t.text = "555";
		t.textColor = 0x3C2405;
		t.y = 112;
		return t;
	};
	_proto.ph_host_i = function () {
		var t = new eui.Label();
		this.ph_host = t;
		t.fontFamily = "PingFang SC";
		t.left = 421;
		t.size = 34;
		t.text = "";
		t.textColor = 0xf76005;
		t.y = 185;
		return t;
	};
	_proto.status_group_i = function () {
		var t = new eui.Group();
		this.status_group = t;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.width = 140;
		t.x = 329;
		t.y = 282;
		t.elementsContent = [this.status_img_i(),this.status_text_i()];
		return t;
	};
	_proto.status_img_i = function () {
		var t = new eui.Image();
		this.status_img = t;
		t.source = "auction_json.auc_success";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.status_text_i = function () {
		var t = new eui.Label();
		this.status_text = t;
		t.fontFamily = "PingFang-SC-Bold";
		t.horizontalCenter = 0.5;
		t.size = 18;
		t.textColor = 0xF76005;
		t.y = 3;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD9B078;
		t.height = 1;
		t.horizontalCenter = 0;
		t.strokeColor = 0xD9B078;
		t.verticalCenter = 218;
		t.width = 600;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.width = 281;
		t.x = 329;
		t.y = 379;
		t.elementsContent = [this.shelf_time_i()];
		return t;
	};
	_proto.shelf_time_i = function () {
		var t = new eui.Label();
		this.shelf_time = t;
		t.fontFamily = "PingFang-SC-Bold";
		t.size = 18;
		t.text = "05.25 14:25";
		t.textColor = 0xA07B49;
		t.x = 15;
		t.y = 10;
		return t;
	};
	_proto.wt_group_i = function () {
		var t = new eui.Group();
		this.wt_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Group2_i(),this._Image2_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this.wt_name_i(),this.wt_num_i(),this.wt_price_i(),this._Group3_i(),this._Rect2_i(),this._Group4_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 200;
		t.x = 55;
		t.y = 32;
		t.elementsContent = [this._Image1_i(),this._Label3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_n_u";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "梧桐果";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "wtg_smart_png";
		t.top = 136;
		t.x = 80.8;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.left = 312;
		t.size = 24;
		t.text = "名称";
		t.textColor = 0xA07B49;
		t.y = 33;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.left = 312;
		t.size = 24;
		t.text = "数量";
		t.textColor = 0xA07B49;
		t.y = 113;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		this._Label6 = t;
		t.fontFamily = "PingFang SC";
		t.left = 312;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 193;
		return t;
	};
	_proto.wt_name_i = function () {
		var t = new eui.Label();
		this.wt_name = t;
		t.fontFamily = "PingFang SC";
		t.left = 400;
		t.size = 24;
		t.text = "梧桐果";
		t.textColor = 0x3C2405;
		t.y = 31;
		return t;
	};
	_proto.wt_num_i = function () {
		var t = new eui.Label();
		this.wt_num = t;
		t.fontFamily = "PingFang SC";
		t.left = 400;
		t.size = 24;
		t.text = "1000";
		t.textColor = 0x3C2405;
		t.y = 112;
		return t;
	};
	_proto.wt_price_i = function () {
		var t = new eui.Label();
		this.wt_price = t;
		t.fontFamily = "PingFang SC";
		t.left = 400;
		t.size = 34;
		t.text = "";
		t.textColor = 0xF76005;
		t.y = 188;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 55;
		t.width = 140;
		t.x = 329;
		t.y = 282;
		t.elementsContent = [this._Image3_i(),this._Label7_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "auction_json.auc_success";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		this._Label7 = t;
		t.fontFamily = "PingFang-SC-Bold";
		t.horizontalCenter = 0.5;
		t.size = 18;
		t.textColor = 0xF76005;
		t.y = 3;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD9B078;
		t.height = 1;
		t.horizontalCenter = 0;
		t.strokeColor = 0xD9B078;
		t.verticalCenter = 218;
		t.width = 600;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.width = 281;
		t.x = 329;
		t.y = 379;
		t.elementsContent = [this.wt_shelf_time_i()];
		return t;
	};
	_proto.wt_shelf_time_i = function () {
		var t = new eui.Label();
		this.wt_shelf_time = t;
		t.fontFamily = "PingFang-SC-Bold";
		t.size = 18;
		t.text = "05.25 14:25";
		t.textColor = 0xA07B49;
		t.x = 15;
		t.y = 10;
		return t;
	};
	return myBidHistoryList;
})(eui.Skin);generateEUI.paths['resource/garden_skin/deal/MyShelfHistoryList.exml'] = window.myShelfHistoryList = (function (_super) {
	__extends(myShelfHistoryList, _super);
	function myShelfHistoryList() {
		_super.call(this);
		this.skinParts = ["gender","g_text","gender_group","ph_img","life_txt","ph_num","ph_xp","high_price","status_img","status_text","status_group","btn_off","shelf_time","myShelfHistoryList","wt_name","wt_num","wt_price","wt_status_img","wt_status_text","wt_status_group","btn_off_wt","wt_shelf_time","wt_group"];
		
		this.height = 490;
		this.width = 680;
		this.elementsContent = [this.myShelfHistoryList_i(),this.wt_group_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.langData.myShelfHistoryList.num"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.myShelfHistoryList.price"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.myShelfHistoryList.drop_off"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.transactionList.price"],[0],this._Label7,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.myShelfHistoryList.drop_off"],[0],this._Label8,"text");
	}
	var _proto = myShelfHistoryList.prototype;

	_proto.myShelfHistoryList_i = function () {
		var t = new eui.Group();
		this.myShelfHistoryList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this.gender_group_i(),this.ph_img_i(),this._Label1_i(),this.life_txt_i(),this._Label2_i(),this.ph_num_i(),this.ph_xp_i(),this.high_price_i(),this.status_group_i(),this.btn_off_i(),this._Rect1_i(),this._Group1_i()];
		return t;
	};
	_proto.gender_group_i = function () {
		var t = new eui.Group();
		this.gender_group = t;
		t.height = 50;
		t.width = 200;
		t.x = 52;
		t.y = 32;
		t.elementsContent = [this.gender_i(),this.g_text_i()];
		return t;
	};
	_proto.gender_i = function () {
		var t = new eui.Image();
		this.gender = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.g_text_i = function () {
		var t = new eui.Label();
		this.g_text = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ph_img_i = function () {
		var t = new eui.Image();
		this.ph_img = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "";
		t.top = 130;
		t.x = 61;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang SC";
		t.left = 323;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 33;
		return t;
	};
	_proto.life_txt_i = function () {
		var t = new eui.Label();
		this.life_txt = t;
		t.fontFamily = "PingFang SC";
		t.left = 325;
		t.size = 24;
		t.text = "";
		t.textColor = 0xA07B49;
		t.y = 113;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "PingFang SC";
		t.left = 323;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 192;
		return t;
	};
	_proto.ph_num_i = function () {
		var t = new eui.Label();
		this.ph_num = t;
		t.fontFamily = "PingFang SC";
		t.left = 425;
		t.size = 24;
		t.text = "MGE016498545";
		t.textColor = 0x3C2405;
		t.y = 32;
		return t;
	};
	_proto.ph_xp_i = function () {
		var t = new eui.Label();
		this.ph_xp = t;
		t.fontFamily = "PingFang SC";
		t.left = 458;
		t.size = 24;
		t.text = "1000";
		t.textColor = 0x3C2405;
		t.y = 112;
		return t;
	};
	_proto.high_price_i = function () {
		var t = new eui.Label();
		this.high_price = t;
		t.fontFamily = "PingFang SC";
		t.left = 414;
		t.size = 34;
		t.text = "";
		t.textColor = 0xF76005;
		t.y = 187;
		return t;
	};
	_proto.status_group_i = function () {
		var t = new eui.Group();
		this.status_group = t;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.visible = false;
		t.width = 140;
		t.x = 340;
		t.y = 278;
		t.elementsContent = [this.status_img_i(),this.status_text_i()];
		return t;
	};
	_proto.status_img_i = function () {
		var t = new eui.Image();
		this.status_img = t;
		t.source = "auction_json.auc_lose";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.status_text_i = function () {
		var t = new eui.Label();
		this.status_text = t;
		t.fontFamily = "PingFang-SC-Bold";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "";
		t.textColor = 0xa07b49;
		t.y = 3;
		return t;
	};
	_proto.btn_off_i = function () {
		var t = new eui.Group();
		this.btn_off = t;
		t.height = 65;
		t.width = 170;
		t.x = 327;
		t.y = 273;
		t.elementsContent = [this._Image1_i(),this._Label3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "wutong_json.btn_green";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = -2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.y = 13;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD9B078;
		t.height = 1;
		t.horizontalCenter = 0;
		t.strokeColor = 0xD9B078;
		t.verticalCenter = 217;
		t.width = 600;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.width = 281;
		t.x = 325;
		t.y = 380;
		t.elementsContent = [this.shelf_time_i()];
		return t;
	};
	_proto.shelf_time_i = function () {
		var t = new eui.Label();
		this.shelf_time = t;
		t.fontFamily = "PingFang-SC-Bold";
		t.size = 18;
		t.text = "05.25 14:25";
		t.textColor = 0xa07b49;
		t.x = 15;
		t.y = 10;
		return t;
	};
	_proto.wt_group_i = function () {
		var t = new eui.Group();
		this.wt_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Group2_i(),this._Image3_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this.wt_name_i(),this.wt_num_i(),this.wt_price_i(),this.wt_status_group_i(),this.btn_off_wt_i(),this._Rect2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 200;
		t.x = 55;
		t.y = 32;
		t.elementsContent = [this._Image2_i(),this._Label4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_n_u";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "梧桐果";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "wtg_smart_png";
		t.top = 136;
		t.x = 80.8;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.left = 312;
		t.size = 24;
		t.text = "名称";
		t.textColor = 0xA07B49;
		t.y = 33;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.left = 312;
		t.size = 24;
		t.text = "数量";
		t.textColor = 0xA07B49;
		t.y = 113;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		this._Label7 = t;
		t.fontFamily = "PingFang SC";
		t.left = 312;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 193;
		return t;
	};
	_proto.wt_name_i = function () {
		var t = new eui.Label();
		this.wt_name = t;
		t.fontFamily = "PingFang SC";
		t.left = 401;
		t.size = 24;
		t.text = "梧桐果";
		t.textColor = 0x3C2405;
		t.y = 31;
		return t;
	};
	_proto.wt_num_i = function () {
		var t = new eui.Label();
		this.wt_num = t;
		t.fontFamily = "PingFang SC";
		t.left = 425;
		t.size = 24;
		t.text = "1000";
		t.textColor = 0x3C2405;
		t.y = 112;
		return t;
	};
	_proto.wt_price_i = function () {
		var t = new eui.Label();
		this.wt_price = t;
		t.fontFamily = "PingFang SC";
		t.left = 401;
		t.size = 34;
		t.text = "";
		t.textColor = 0xF76005;
		t.y = 188;
		return t;
	};
	_proto.wt_status_group_i = function () {
		var t = new eui.Group();
		this.wt_status_group = t;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.visible = false;
		t.width = 140;
		t.x = 340;
		t.y = 278;
		t.elementsContent = [this.wt_status_img_i(),this.wt_status_text_i()];
		return t;
	};
	_proto.wt_status_img_i = function () {
		var t = new eui.Image();
		this.wt_status_img = t;
		t.source = "auction_json.auc_lose";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.wt_status_text_i = function () {
		var t = new eui.Label();
		this.wt_status_text = t;
		t.fontFamily = "PingFang-SC-Bold";
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "";
		t.textColor = 0xA07B49;
		t.y = 3;
		return t;
	};
	_proto.btn_off_wt_i = function () {
		var t = new eui.Group();
		this.btn_off_wt = t;
		t.height = 65;
		t.width = 170;
		t.x = 327;
		t.y = 273;
		t.elementsContent = [this._Image4_i(),this._Label8_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "wutong_json.btn_green";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		this._Label8 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = -2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.y = 13;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD9B078;
		t.height = 1;
		t.horizontalCenter = 0;
		t.strokeColor = 0xD9B078;
		t.verticalCenter = 217;
		t.width = 600;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.width = 281;
		t.x = 325;
		t.y = 380;
		t.elementsContent = [this.wt_shelf_time_i()];
		return t;
	};
	_proto.wt_shelf_time_i = function () {
		var t = new eui.Label();
		this.wt_shelf_time = t;
		t.fontFamily = "PingFang-SC-Bold";
		t.size = 18;
		t.text = "05.25 14:25";
		t.textColor = 0xA07B49;
		t.x = 15;
		t.y = 10;
		return t;
	};
	return myShelfHistoryList;
})(eui.Skin);generateEUI.paths['resource/garden_skin/deal/MyTransaction.exml'] = window.myTransaction = (function (_super) {
	__extends(myTransaction, _super);
	function myTransaction() {
		_super.call(this);
		this.skinParts = ["bid_one","bid_money","shelf_one","shelf_money","auc_nav","list_group","btn_go_back","shelf_detail","auc_top","cre_text","cre_img","swap","frame","auc_img","auc_text","auc","auc_bottom","myTransaction","btn_cancel","btn_dete","point"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.myTransaction_i(),this.point_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.myTransaction.buy_history"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.myTransaction.shelf_record"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.myTransaction.img_head"],[0],this._Image4,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.myTransaction.shelf"],[0],this.shelf_detail,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.myTransaction.exchange"],[0],this.cre_text,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.myTransaction.my_transaction"],[0],this.auc_text,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.myTransaction.remove_props"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.myTransaction.cancel"],[0],this._Label4,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.myTransaction.dete"],[0],this._Label5,"text");
	}
	var _proto = myTransaction.prototype;

	_proto.myTransaction_i = function () {
		var t = new eui.Group();
		this.myTransaction = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.auc_nav_i(),this.list_group_i(),this.auc_top_i(),this.auc_bottom_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(45,18,659,555);
		t.source = "auction_json.auc_bj";
		t.top = 0;
		return t;
	};
	_proto.auc_nav_i = function () {
		var t = new eui.Group();
		this.auc_nav = t;
		t.height = 72;
		t.horizontalCenter = 0;
		t.top = 110;
		t.width = 662;
		t.elementsContent = [this._Image2_i(),this.bid_money_i(),this.shelf_money_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "auction_json.auc_nav_tow";
		t.top = 0;
		return t;
	};
	_proto.bid_money_i = function () {
		var t = new eui.Group();
		this.bid_money = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.left = 0;
		t.right = 330;
		t.verticalCenter = 0;
		t.elementsContent = [this._Label1_i(),this.bid_one_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 24;
		t.textColor = 0x3c2405;
		t.verticalCenter = 0;
		return t;
	};
	_proto.bid_one_i = function () {
		var t = new eui.Image();
		this.bid_one = t;
		t.left = 0;
		t.right = 0;
		t.source = "auction_json.auc_curr_col";
		t.verticalCenter = 0;
		return t;
	};
	_proto.shelf_money_i = function () {
		var t = new eui.Group();
		this.shelf_money = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.horizontalCenter = 166;
		t.verticalCenter = 0;
		t.width = 330;
		t.elementsContent = [this._Label2_i(),this.shelf_one_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.textColor = 0x3C2405;
		t.verticalCenter = 0;
		return t;
	};
	_proto.shelf_one_i = function () {
		var t = new eui.Image();
		this.shelf_one = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_curr_col";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = -166;
		t.y = 1;
		return t;
	};
	_proto.list_group_i = function () {
		var t = new eui.Group();
		this.list_group = t;
		t.anchorOffsetY = 0;
		t.bottom = 90;
		t.horizontalCenter = 0;
		t.top = 196;
		t.width = 680;
		return t;
	};
	_proto.auc_top_i = function () {
		var t = new eui.Group();
		this.auc_top = t;
		t.anchorOffsetY = 0;
		t.height = 82;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this.btn_go_back_i(),this.shelf_detail_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = -3;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(178,11,479,68);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_top";
		t.top = -5;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.left = 199;
		t.y = 23;
		return t;
	};
	_proto.btn_go_back_i = function () {
		var t = new eui.Group();
		this.btn_go_back = t;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.left = 0;
		t.top = 0;
		t.width = 150;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_return";
		t.verticalCenter = -2;
		return t;
	};
	_proto.shelf_detail_i = function () {
		var t = new eui.Label();
		this.shelf_detail = t;
		t.bold = true;
		t.fontFamily = "PingFang-SC-Medium";
		t.right = 44;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.textColor = 0x3c2405;
		t.x = 644;
		t.y = 26;
		return t;
	};
	_proto.auc_bottom_i = function () {
		var t = new eui.Group();
		this.auc_bottom = t;
		t.bottom = 0;
		t.height = 131;
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this._Image6_i(),this.swap_i(),this.auc_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 131;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_bottom";
		return t;
	};
	_proto.swap_i = function () {
		var t = new eui.Group();
		this.swap = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 130;
		t.left = 133;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 150;
		t.elementsContent = [this.cre_text_i(),this.cre_img_i()];
		return t;
	};
	_proto.cre_text_i = function () {
		var t = new eui.Label();
		this.cre_text = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = -2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.textColor = 0xa07b49;
		t.verticalCenter = 34;
		return t;
	};
	_proto.cre_img_i = function () {
		var t = new eui.Image();
		this.cre_img = t;
		t.horizontalCenter = -2;
		t.source = "transaction_json.tran_goly";
		t.verticalCenter = -21;
		return t;
	};
	_proto.auc_i = function () {
		var t = new eui.Group();
		this.auc = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 131;
		t.right = 163;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 150;
		t.elementsContent = [this.frame_i(),this.auc_img_i(),this.auc_text_i()];
		return t;
	};
	_proto.frame_i = function () {
		var t = new eui.Image();
		this.frame = t;
		t.horizontalCenter = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_bottom_icon";
		t.verticalCenter = -38;
		t.x = 5;
		t.y = -46;
		return t;
	};
	_proto.auc_img_i = function () {
		var t = new eui.Image();
		this.auc_img = t;
		t.horizontalCenter = 2;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "transaction_json.tran_play";
		t.verticalCenter = -38;
		return t;
	};
	_proto.auc_text_i = function () {
		var t = new eui.Label();
		this.auc_text = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.textColor = 0x3c2405;
		t.verticalCenter = 33;
		return t;
	};
	_proto.point_i = function () {
		var t = new eui.Group();
		this.point = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Rect1_i(),this._Group1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 360;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 590;
		t.elementsContent = [this._Image7_i(),this._Label3_i(),this.btn_cancel_i(),this.btn_dete_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(141,94,297,84);
		t.source = "wutong_json.frame_green_1";
		t.top = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 71;
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.top = 60;
		t.width = 358;
		return t;
	};
	_proto.btn_cancel_i = function () {
		var t = new eui.Group();
		this.btn_cancel = t;
		t.height = 65;
		t.width = 170;
		t.x = 83;
		t.y = 242;
		t.elementsContent = [this._Image8_i(),this._Label4_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.textColor = 0xFFE5B8;
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn_dete_i = function () {
		var t = new eui.Group();
		this.btn_dete = t;
		t.bottom = 54;
		t.height = 65;
		t.horizontalCenter = 110;
		t.width = 170;
		t.elementsContent = [this._Image9_i(),this._Label5_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		this._Label5 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.textColor = 0xFFE5B8;
		t.verticalCenter = 0;
		return t;
	};
	return myTransaction;
})(eui.Skin);generateEUI.paths['resource/garden_skin/deal/ScrollerMyBuyHistory.exml'] = window.scrollerMyBuyHistory = (function (_super) {
	__extends(scrollerMyBuyHistory, _super);
	function scrollerMyBuyHistory() {
		_super.call(this);
		this.skinParts = ["scroller_group"];
		
		this.height = 1048;
		this.width = 680;
		this.elementsContent = [this.scroller_group_i()];
	}
	var _proto = scrollerMyBuyHistory.prototype;

	_proto.scroller_group_i = function () {
		var t = new eui.Scroller();
		this.scroller_group = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	return scrollerMyBuyHistory;
})(eui.Skin);generateEUI.paths['resource/garden_skin/deal/ScrollerMyShelfHistory.exml'] = window.scrollerShelfMoney = (function (_super) {
	__extends(scrollerShelfMoney, _super);
	function scrollerShelfMoney() {
		_super.call(this);
		this.skinParts = ["scroller_group"];
		
		this.height = 1048;
		this.width = 680;
		this.elementsContent = [this.scroller_group_i()];
	}
	var _proto = scrollerShelfMoney.prototype;

	_proto.scroller_group_i = function () {
		var t = new eui.Scroller();
		this.scroller_group = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	return scrollerShelfMoney;
})(eui.Skin);generateEUI.paths['resource/garden_skin/deal/ScrollerShelfDetail.exml'] = window.scrollerAuctionDeta = (function (_super) {
	__extends(scrollerAuctionDeta, _super);
	function scrollerAuctionDeta() {
		_super.call(this);
		this.skinParts = ["scroller_auctionDeta"];
		
		this.height = 1250;
		this.width = 680;
		this.elementsContent = [this.scroller_auctionDeta_i()];
	}
	var _proto = scrollerAuctionDeta.prototype;

	_proto.scroller_auctionDeta_i = function () {
		var t = new eui.Scroller();
		this.scroller_auctionDeta = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	return scrollerAuctionDeta;
})(eui.Skin);generateEUI.paths['resource/garden_skin/deal/ScrollerTransaction.exml'] = window.scrollerTransaction = (function (_super) {
	__extends(scrollerTransaction, _super);
	function scrollerTransaction() {
		_super.call(this);
		this.skinParts = ["scroller_transaction"];
		
		this.height = 1055;
		this.width = 660;
		this.elementsContent = [this.scroller_transaction_i()];
	}
	var _proto = scrollerTransaction.prototype;

	_proto.scroller_transaction_i = function () {
		var t = new eui.Scroller();
		this.scroller_transaction = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	return scrollerTransaction;
})(eui.Skin);generateEUI.paths['resource/garden_skin/deal/ShelfDetail.exml'] = window.shelfDetail = (function (_super) {
	__extends(shelfDetail, _super);
	function shelfDetail() {
		_super.call(this);
		this.skinParts = ["the_group","img_head","btn_go_back","auc_top","auctionDeta","btn_close","tip_txt","btn_dete","auc_info_tips","full_mask"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.auctionDeta_i(),this.full_mask_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.shelfDetail.img_head"],[0],this.img_head,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.shelfDetailInfo.confirm"],[0],this._Label1,"text");
	}
	var _proto = shelfDetail.prototype;

	_proto.auctionDeta_i = function () {
		var t = new eui.Group();
		this.auctionDeta = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.the_group_i(),this.auc_top_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(45,18,659,555);
		t.source = "auction_json.auc_bj";
		t.top = 0;
		return t;
	};
	_proto.the_group_i = function () {
		var t = new eui.Group();
		this.the_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.horizontalCenter = 1;
		t.top = 81;
		t.width = 680;
		return t;
	};
	_proto.auc_top_i = function () {
		var t = new eui.Group();
		this.auc_top = t;
		t.anchorOffsetY = 0;
		t.height = 79;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.img_head_i(),this.btn_go_back_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = -4;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(192,5,465,80);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_top";
		t.top = -4;
		return t;
	};
	_proto.img_head_i = function () {
		var t = new eui.Image();
		this.img_head = t;
		t.left = 203;
		t.verticalCenter = 2;
		return t;
	};
	_proto.btn_go_back_i = function () {
		var t = new eui.Group();
		this.btn_go_back = t;
		t.height = 78;
		t.left = 0;
		t.verticalCenter = -0.5;
		t.width = 150;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_return";
		t.x = 36;
		t.y = 19;
		return t;
	};
	_proto.full_mask_i = function () {
		var t = new eui.Group();
		this.full_mask = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Rect1_i(),this.auc_info_tips_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.auc_info_tips_i = function () {
		var t = new eui.Group();
		this.auc_info_tips = t;
		t.height = 360;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 590;
		t.x = -660;
		t.y = 313;
		t.elementsContent = [this._Image4_i(),this.btn_close_i(),this.tip_txt_i(),this.btn_dete_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 360;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(196,83,260,65);
		t.source = "wutong_json.frame_green_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Image();
		this.btn_close = t;
		t.horizontalCenter = 265;
		t.source = "wutong_json.delete";
		t.verticalCenter = -167;
		return t;
	};
	_proto.tip_txt_i = function () {
		var t = new eui.Label();
		this.tip_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 71;
		t.horizontalCenter = 2;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.top = 60;
		t.width = 358;
		return t;
	};
	_proto.btn_dete_i = function () {
		var t = new eui.Group();
		this.btn_dete = t;
		t.bottom = 55;
		t.height = 65;
		t.horizontalCenter = -2;
		t.width = 170;
		t.elementsContent = [this._Image5_i(),this._Label1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.textColor = 0xFFE5B8;
		t.verticalCenter = 0;
		return t;
	};
	return shelfDetail;
})(eui.Skin);generateEUI.paths['resource/garden_skin/deal/ShelfDetailInfo.exml'] = window.shelfDetailInfo = (function (_super) {
	__extends(shelfDetailInfo, _super);
	function shelfDetailInfo() {
		_super.call(this);
		this.skinParts = ["btn_go_back","img_head","auc_top","detail","gender","g_text","gender_group","ph_img","life_txt","ph_num","ph_xp","start_price","prompt_text","auction_fee","shouxufei","btn_pay_fee","auction","btn_wt_go_back","wt_top","wt_title","wt_tips","start_num","now_num","unit_price","total_price","wt_status","prompt_text0","fee_status","wt_fee","btn_pay_wt","wutong_group","full_mask","btn_close","tip_txt","btn_dete","auc_info_tips"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.auction_i(),this.wutong_group_i(),this.full_mask_i(),this.auc_info_tips_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.shelfDetailInfo.img_head"],[0],this.img_head,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.shelfDetailInfo.detail"],[0],this.detail,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.shelfDetailInfo.num"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.shelfDetailInfo.price"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.shelfDetailInfo.shared_value"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.shelfDetailInfo.price_description"],[0],this._Label4,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.shelfDetailInfo.now_shelves"],[0],this._Label5,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.shelfDetailInfo.img_head"],[0],this._Image8,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.shelfDetailInfo.detail"],[0],this._Image9,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.shelfDetailInfo.wt_friut"],[0],this._Label6,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.shelfDetailInfo.name"],[0],this._Label7,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.shelfDetailInfo.effect"],[0],this._Label8,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.shelfDetailInfo.shelves_num"],[0],this._Label9,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.shelfDetailInfo.current_price"],[0],this._Label10,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.shelfDetailInfo.unit_price"],[0],this._Label11,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.shelfDetailInfo.shelf_num"],[0],this._Label12,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.shelfDetailInfo.goods_price"],[0],this._Label13,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.shelfDetailInfo.shared_value"],[0],this._Label14,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.shelfDetailInfo.than_zero"],[0],this.wt_status,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.shelfDetailInfo.head_fee"],[0],this.fee_status,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.shelfDetailInfo.now_shelves"],[0],this._Label15,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.shelfDetailInfo.confirm"],[0],this._Label16,"text");
	}
	var _proto = shelfDetailInfo.prototype;

	_proto.auction_i = function () {
		var t = new eui.Group();
		this.auction = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image1_i(),this.auc_top_i(),this._Group1_i(),this._Group4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(45,18,659,555);
		t.source = "auction_json.auc_bj";
		t.top = 0;
		return t;
	};
	_proto.auc_top_i = function () {
		var t = new eui.Group();
		this.auc_top = t;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.btn_go_back_i(),this.img_head_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 4;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(187,11,470,68);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_top";
		t.top = -4;
		return t;
	};
	_proto.btn_go_back_i = function () {
		var t = new eui.Group();
		this.btn_go_back = t;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.left = 0;
		t.verticalCenter = -6;
		t.width = 150;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -7;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_return";
		t.verticalCenter = -2;
		return t;
	};
	_proto.img_head_i = function () {
		var t = new eui.Image();
		this.img_head = t;
		t.left = 201;
		t.verticalCenter = -3.5;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 537;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 90;
		t.width = 654;
		t.elementsContent = [this.detail_i(),this.gender_group_i(),this.ph_img_i(),this._Label1_i(),this.life_txt_i(),this.ph_num_i(),this.ph_xp_i(),this._Rect1_i()];
		return t;
	};
	_proto.detail_i = function () {
		var t = new eui.Image();
		this.detail = t;
		t.left = 44;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 34;
		return t;
	};
	_proto.gender_group_i = function () {
		var t = new eui.Group();
		this.gender_group = t;
		t.height = 50;
		t.horizontalCenter = 126;
		t.width = 200;
		t.y = 40;
		t.elementsContent = [this.gender_i(),this.g_text_i()];
		return t;
	};
	_proto.gender_i = function () {
		var t = new eui.Image();
		this.gender = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.g_text_i = function () {
		var t = new eui.Label();
		this.g_text = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 22;
		t.size = 26;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ph_img_i = function () {
		var t = new eui.Image();
		this.ph_img = t;
		t.left = 343;
		t.source = "";
		t.y = 145;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang SC";
		t.left = 44;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 150;
		return t;
	};
	_proto.life_txt_i = function () {
		var t = new eui.Label();
		this.life_txt = t;
		t.fontFamily = "PingFang SC";
		t.left = 44;
		t.size = 24;
		t.text = "";
		t.textColor = 0xA07B49;
		t.y = 227;
		return t;
	};
	_proto.ph_num_i = function () {
		var t = new eui.Label();
		this.ph_num = t;
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "";
		t.textColor = 0x3C2405;
		t.x = 122;
		t.y = 150;
		return t;
	};
	_proto.ph_xp_i = function () {
		var t = new eui.Label();
		this.ph_xp = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "";
		t.textColor = 0x3C2405;
		t.x = 153;
		t.y = 227;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD9B078;
		t.height = 2;
		t.strokeColor = 0xD9B078;
		t.width = 532;
		t.x = 60;
		t.y = 524;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.top = 654;
		t.width = 654;
		t.elementsContent = [this._Group2_i(),this.prompt_text_i(),this._Group3_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.width = 572;
		t.x = 34;
		t.y = 24;
		t.elementsContent = [this._Label2_i(),this._Label3_i(),this._Rect2_i(),this.start_price_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "PingFang SC";
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.textColor = 0xa07b49;
		t.y = 1;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.fontFamily = "PingFang SC";
		t.right = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.width = 96;
		t.y = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.fillColor = 0xa07b49;
		t.height = 2;
		t.strokeColor = 0xa07b49;
		t.width = 450;
		t.x = 106;
		t.y = 33;
		return t;
	};
	_proto.start_price_i = function () {
		var t = new eui.EditableText();
		this.start_price = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Bold";
		t.height = 36;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.text = "";
		t.textColor = 0xf76005;
		t.width = 345;
		t.x = 113;
		t.y = -10;
		return t;
	};
	_proto.prompt_text_i = function () {
		var t = new eui.Group();
		this.prompt_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.width = 572;
		t.x = 34;
		t.y = 69;
		t.elementsContent = [this._Label4_i()];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.fontFamily = "PingFang-SC-Bold";
		t.left = 106;
		t.size = 24;
		t.textColor = 0xF76005;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 565;
		t.width = 572;
		t.x = 34;
		t.y = 111;
		t.elementsContent = [this.auction_fee_i(),this.shouxufei_i(),this.btn_pay_fee_i()];
		return t;
	};
	_proto.auction_fee_i = function () {
		var t = new eui.Label();
		this.auction_fee = t;
		t.fontFamily = "PingFang SC";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "";
		t.textColor = 0x3C2405;
		t.x = 140;
		t.y = 18;
		return t;
	};
	_proto.shouxufei_i = function () {
		var t = new eui.Label();
		this.shouxufei = t;
		t.fontFamily = "PingFang SC";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "";
		t.textColor = 0xA07B49;
		t.x = 3;
		t.y = 18;
		return t;
	};
	_proto.btn_pay_fee_i = function () {
		var t = new eui.Group();
		this.btn_pay_fee = t;
		t.height = 65;
		t.width = 170;
		t.x = 208;
		t.y = 334;
		t.elementsContent = [this._Image4_i(),this._Label5_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "auction_json.auc_btn";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		this._Label5 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 30;
		t.textColor = 0xffe5b8;
		t.y = 17;
		return t;
	};
	_proto.wutong_group_i = function () {
		var t = new eui.Group();
		this.wutong_group = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image5_i(),this.wt_top_i(),this._Group6_i(),this._Group13_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(45,18,659,555);
		t.source = "auction_json.auc_bj";
		t.top = 0;
		return t;
	};
	_proto.wt_top_i = function () {
		var t = new eui.Group();
		this.wt_top = t;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.elementsContent = [this._Image6_i(),this.btn_wt_go_back_i(),this._Image8_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 4;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(187,11,470,68);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_top";
		t.top = -4;
		return t;
	};
	_proto.btn_wt_go_back_i = function () {
		var t = new eui.Group();
		this.btn_wt_go_back = t;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.left = 0;
		t.verticalCenter = -6;
		t.width = 150;
		t.elementsContent = [this._Image7_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -7;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_return";
		t.verticalCenter = -2;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		this._Image8 = t;
		t.left = 201;
		t.verticalCenter = -3.5;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 537;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 90;
		t.width = 654;
		t.elementsContent = [this._Image9_i(),this._Group5_i(),this._Image11_i(),this._Label7_i(),this._Label8_i(),this.wt_title_i(),this.wt_tips_i(),this._Rect3_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		this._Image9 = t;
		t.left = 44;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 34;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.horizontalCenter = 126;
		t.width = 200;
		t.y = 40;
		t.elementsContent = [this._Image10_i(),this._Label6_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_n_u";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		this._Label6 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 26;
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.left = 379;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "wtg_bag_png";
		t.y = 146;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		this._Label7 = t;
		t.fontFamily = "PingFang SC";
		t.left = 44;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 150;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		this._Label8 = t;
		t.fontFamily = "PingFang SC";
		t.left = 44;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 227;
		return t;
	};
	_proto.wt_title_i = function () {
		var t = new eui.Label();
		this.wt_title = t;
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "";
		t.textColor = 0x3C2405;
		t.x = 122;
		t.y = 150;
		return t;
	};
	_proto.wt_tips_i = function () {
		var t = new eui.Group();
		this.wt_tips = t;
		t.anchorOffsetX = 0;
		t.height = 200;
		t.width = 204.55;
		t.x = 113;
		t.y = 221;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD9B078;
		t.height = 2;
		t.strokeColor = 0xD9B078;
		t.width = 532;
		t.x = 60;
		t.y = 524;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.top = 654;
		t.width = 654;
		t.elementsContent = [this._Group12_i()];
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 294;
		t.width = 572;
		t.x = 34;
		t.y = 24;
		t.elementsContent = [this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i(),this.prompt_text0_i(),this._Group11_i(),this.btn_pay_wt_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.y = 0;
		t.elementsContent = [this._Label9_i(),this._Rect4_i(),this.start_num_i()];
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		this._Label9 = t;
		t.fontFamily = "PingFang SC";
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.fillColor = 0xA07B49;
		t.height = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xA07B49;
		t.width = 450;
		t.x = 106;
		t.y = 45;
		return t;
	};
	_proto.start_num_i = function () {
		var t = new eui.EditableText();
		this.start_num = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Bold";
		t.height = 36;
		t.prompt = "0";
		t.promptColor = 0xf76005;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.text = "";
		t.textColor = 0xf76005;
		t.verticalCenter = "0";
		t.width = 345;
		t.x = 116.5;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 45;
		t.elementsContent = [this._Label10_i(),this.now_num_i()];
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		this._Label10 = t;
		t.fontFamily = "PingFang SC";
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.x = 0;
		t.y = 10.5;
		return t;
	};
	_proto.now_num_i = function () {
		var t = new eui.Label();
		this.now_num = t;
		t.fontFamily = "PingFang SC";
		t.left = 122;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "";
		t.textColor = 0x3c2405;
		t.verticalCenter = 0;
		t.x = 122;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.y = 90;
		t.elementsContent = [this._Label11_i(),this._Label12_i(),this._Rect5_i(),this.unit_price_i()];
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		this._Label11 = t;
		t.fontFamily = "PingFang SC";
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		this._Label12 = t;
		t.fontFamily = "PingFang SC";
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.textColor = 0xA07B49;
		t.verticalCenter = 0;
		t.x = 462;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.fillColor = 0xA07B49;
		t.height = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xA07B49;
		t.width = 450;
		t.x = 106;
		return t;
	};
	_proto.unit_price_i = function () {
		var t = new eui.EditableText();
		this.unit_price = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Bold";
		t.height = 36;
		t.prompt = "0";
		t.promptColor = 0xf76005;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.text = "";
		t.textColor = 0xF76005;
		t.verticalCenter = "0";
		t.width = 345;
		t.x = 116.5;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 135;
		t.elementsContent = [this._Label13_i(),this.total_price_i(),this._Label14_i()];
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		this._Label13 = t;
		t.fontFamily = "PingFang SC";
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.total_price_i = function () {
		var t = new eui.Label();
		this.total_price = t;
		t.fontFamily = "PingFang SC";
		t.left = 122;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "0";
		t.textColor = 0x3C2405;
		t.verticalCenter = 0;
		t.x = 122;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		this._Label14 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang SC";
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.textColor = 0xA07B49;
		t.verticalCenter = 0;
		t.x = 462;
		return t;
	};
	_proto.prompt_text0_i = function () {
		var t = new eui.Group();
		this.prompt_text0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 225;
		t.elementsContent = [this.wt_status_i()];
		return t;
	};
	_proto.wt_status_i = function () {
		var t = new eui.Label();
		this.wt_status = t;
		t.fontFamily = "PingFang-SC-Bold";
		t.left = 106;
		t.size = 24;
		t.textColor = 0xF76005;
		t.y = 0;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -34;
		t.y = 180;
		t.elementsContent = [this.fee_status_i(),this.wt_fee_i()];
		return t;
	};
	_proto.fee_status_i = function () {
		var t = new eui.Label();
		this.fee_status = t;
		t.fontFamily = "PingFang SC";
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.wt_fee_i = function () {
		var t = new eui.Label();
		this.wt_fee = t;
		t.fontFamily = "PingFang SC";
		t.left = 122;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "";
		t.textColor = 0x3C2405;
		t.verticalCenter = 0;
		t.x = 122;
		return t;
	};
	_proto.btn_pay_wt_i = function () {
		var t = new eui.Group();
		this.btn_pay_wt = t;
		t.bottom = -298;
		t.height = 65;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 170;
		t.elementsContent = [this._Image12_i(),this._Label15_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "auction_json.auc_btn";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		this._Label15 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 30;
		t.textColor = 0xFFE5B8;
		t.y = 17;
		return t;
	};
	_proto.full_mask_i = function () {
		var t = new eui.Rect();
		this.full_mask = t;
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.auc_info_tips_i = function () {
		var t = new eui.Group();
		this.auc_info_tips = t;
		t.height = 360;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 590;
		t.elementsContent = [this._Image13_i(),this.btn_close_i(),this.tip_txt_i(),this.btn_dete_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 360;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(196,83,260,65);
		t.source = "wutong_json.frame_green_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Image();
		this.btn_close = t;
		t.horizontalCenter = 265;
		t.source = "wutong_json.delete";
		t.verticalCenter = -167;
		return t;
	};
	_proto.tip_txt_i = function () {
		var t = new eui.Label();
		this.tip_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 71;
		t.horizontalCenter = 2;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x3c2405;
		t.top = 60;
		t.width = 358;
		return t;
	};
	_proto.btn_dete_i = function () {
		var t = new eui.Group();
		this.btn_dete = t;
		t.bottom = 55;
		t.height = 65;
		t.horizontalCenter = -2;
		t.width = 170;
		t.elementsContent = [this._Image14_i(),this._Label16_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		this._Label16 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.textColor = 0xffe5b8;
		t.verticalCenter = 0;
		return t;
	};
	return shelfDetailInfo;
})(eui.Skin);generateEUI.paths['resource/garden_skin/deal/ShelfDetailList.exml'] = window.auctionDetaList = (function (_super) {
	__extends(auctionDetaList, _super);
	function auctionDetaList() {
		_super.call(this);
		this.skinParts = ["gender","g_text","gender_group","ph_img","life_txt","ph_num","ph_xp","status_text","btn_pay","auctionDetaList","wt_name","wt_num","status_text0","btn_pay_wt","wutongguoList"];
		
		this.height = 430;
		this.width = 680;
		this.elementsContent = [this.auctionDetaList_i(),this.wutongguoList_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.langData.shelfDetailList.num"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.shelfDetailList.sell"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.shelfDetailList.sell"],[0],this._Label6,"text");
	}
	var _proto = auctionDetaList.prototype;

	_proto.auctionDetaList_i = function () {
		var t = new eui.Group();
		this.auctionDetaList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this.gender_group_i(),this.ph_img_i(),this._Label1_i(),this.life_txt_i(),this.ph_num_i(),this.ph_xp_i(),this.status_text_i(),this._Rect1_i(),this.btn_pay_i()];
		return t;
	};
	_proto.gender_group_i = function () {
		var t = new eui.Group();
		this.gender_group = t;
		t.height = 50;
		t.width = 200;
		t.x = 52;
		t.y = 32;
		t.elementsContent = [this.gender_i(),this.g_text_i()];
		return t;
	};
	_proto.gender_i = function () {
		var t = new eui.Image();
		this.gender = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.g_text_i = function () {
		var t = new eui.Label();
		this.g_text = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 10;
		t.size = 26;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ph_img_i = function () {
		var t = new eui.Image();
		this.ph_img = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "";
		t.top = 130;
		t.x = 70;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang SC";
		t.left = 336;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 56;
		return t;
	};
	_proto.life_txt_i = function () {
		var t = new eui.Label();
		this.life_txt = t;
		t.fontFamily = "PingFang SC";
		t.left = 336;
		t.size = 24;
		t.text = "";
		t.textColor = 0xA07B49;
		t.y = 124;
		return t;
	};
	_proto.ph_num_i = function () {
		var t = new eui.Label();
		this.ph_num = t;
		t.fontFamily = "PingFang SC";
		t.left = 427;
		t.size = 24;
		t.text = "";
		t.textColor = 0x3C2405;
		t.y = 56;
		return t;
	};
	_proto.ph_xp_i = function () {
		var t = new eui.Label();
		this.ph_xp = t;
		t.fontFamily = "PingFang SC";
		t.left = 462;
		t.size = 24;
		t.text = "";
		t.textColor = 0x3C2405;
		t.y = 124;
		return t;
	};
	_proto.status_text_i = function () {
		var t = new eui.Label();
		this.status_text = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 340;
		t.size = 24;
		t.text = "";
		t.textColor = 0xf76005;
		t.y = 206;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD9B078;
		t.height = 1;
		t.horizontalCenter = 0;
		t.strokeColor = 0xD9B078;
		t.verticalCenter = 210;
		t.width = 600;
		return t;
	};
	_proto.btn_pay_i = function () {
		var t = new eui.Group();
		this.btn_pay = t;
		t.height = 65;
		t.width = 170;
		t.x = 340;
		t.y = 200;
		t.elementsContent = [this._Image1_i(),this._Label2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "auction_json.auc_btn";
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0.5;
		t.size = 30;
		t.textColor = 0xFFE5B8;
		t.y = 13.5;
		return t;
	};
	_proto.wutongguoList_i = function () {
		var t = new eui.Group();
		this.wutongguoList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Group1_i(),this._Image3_i(),this._Label4_i(),this._Label5_i(),this.wt_name_i(),this.wt_num_i(),this.status_text0_i(),this._Rect2_i(),this.btn_pay_wt_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 200;
		t.x = 55;
		t.y = 32;
		t.elementsContent = [this._Image2_i(),this._Label3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_n_u";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "梧桐果";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "wtg_smart_png";
		t.top = 136;
		t.x = 80.8;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.right = 296;
		t.size = 24;
		t.text = "名称：";
		t.textColor = 0xA07B49;
		t.width = 72;
		t.y = 33;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.right = 296;
		t.size = 24;
		t.text = "数量：";
		t.textColor = 0xA07B49;
		t.y = 112;
		return t;
	};
	_proto.wt_name_i = function () {
		var t = new eui.Label();
		this.wt_name = t;
		t.fontFamily = "PingFang SC";
		t.left = 401;
		t.size = 24;
		t.text = "梧桐果";
		t.textColor = 0x3C2405;
		t.y = 31;
		return t;
	};
	_proto.wt_num_i = function () {
		var t = new eui.Label();
		this.wt_num = t;
		t.fontFamily = "PingFang SC";
		t.left = 402;
		t.size = 24;
		t.text = "1000";
		t.textColor = 0x3C2405;
		t.y = 112;
		return t;
	};
	_proto.status_text0_i = function () {
		var t = new eui.Label();
		this.status_text0 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 340;
		t.size = 24;
		t.text = "";
		t.textColor = 0xF76005;
		t.visible = false;
		t.y = 206;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD9B078;
		t.height = 1;
		t.horizontalCenter = 0;
		t.strokeColor = 0xD9B078;
		t.verticalCenter = 210;
		t.width = 600;
		return t;
	};
	_proto.btn_pay_wt_i = function () {
		var t = new eui.Group();
		this.btn_pay_wt = t;
		t.height = 65;
		t.width = 170;
		t.x = 340;
		t.y = 200;
		t.elementsContent = [this._Image4_i(),this._Label6_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "auction_json.auc_btn";
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		this._Label6 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0.5;
		t.size = 30;
		t.textColor = 0xFFE5B8;
		t.y = 13.5;
		return t;
	};
	return auctionDetaList;
})(eui.Skin);generateEUI.paths['resource/garden_skin/deal/Transaction.exml'] = window.transaction = (function (_super) {
	__extends(transaction, _super);
	function transaction() {
		_super.call(this);
		this.skinParts = ["btn_go_back","auc_top","list_group","frame","trans","my_auc","auc_bottom","no_1","type_v","type_c","type","no_2","algebra_v","algebra_c","algebra","no_3","sorting_v","sorting_c","sorting","transaction_nav","diff_group","transaction"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.transaction_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.transaction.img_head"],[0],this._Image3,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.transaction.exchange"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.transaction.my_transaction"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.transaction.type"],[0],this.no_1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.transaction.algebra"],[0],this.no_2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.transaction.sorting"],[0],this.no_3,"text");
	}
	var _proto = transaction.prototype;

	_proto.transaction_i = function () {
		var t = new eui.Group();
		this.transaction = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.auc_top_i(),this.list_group_i(),this.auc_bottom_i(),this.transaction_nav_i(),this.diff_group_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(45,18,659,555);
		t.source = "auction_json.auc_bj";
		t.top = 0;
		return t;
	};
	_proto.auc_top_i = function () {
		var t = new eui.Group();
		this.auc_top = t;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.btn_go_back_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 90;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(187,11,470,68);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_top";
		t.top = -6;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.left = 199;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 1;
		return t;
	};
	_proto.btn_go_back_i = function () {
		var t = new eui.Group();
		this.btn_go_back = t;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.left = 0;
		t.verticalCenter = -6;
		t.width = 150;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -7;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_return";
		t.verticalCenter = -2;
		return t;
	};
	_proto.list_group_i = function () {
		var t = new eui.Group();
		this.list_group = t;
		t.anchorOffsetY = 0;
		t.bottom = 78;
		t.horizontalCenter = 0;
		t.top = 201;
		t.width = 660;
		return t;
	};
	_proto.auc_bottom_i = function () {
		var t = new eui.Group();
		this.auc_bottom = t;
		t.bottom = 0;
		t.height = 131;
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this._Image5_i(),this.trans_i(),this.my_auc_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_bottom";
		t.top = 0;
		return t;
	};
	_proto.trans_i = function () {
		var t = new eui.Group();
		this.trans = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 132;
		t.left = 133;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 150;
		t.elementsContent = [this.frame_i(),this._Label1_i(),this._Image6_i()];
		return t;
	};
	_proto.frame_i = function () {
		var t = new eui.Image();
		this.frame = t;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_bottom_icon";
		t.verticalCenter = -41;
		t.x = 11;
		t.y = -46;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 8;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.textColor = 0x3C2405;
		t.verticalCenter = 35;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "transaction_json.tran_goly";
		t.verticalCenter = -41;
		return t;
	};
	_proto.my_auc_i = function () {
		var t = new eui.Group();
		this.my_auc = t;
		t.anchorOffsetY = 0;
		t.bottom = 1;
		t.height = 130;
		t.right = 163;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 150;
		t.elementsContent = [this._Image7_i(),this._Label2_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "transaction_json.tran_play";
		t.verticalCenter = -16;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.textColor = 0xA07B49;
		t.verticalCenter = 33;
		return t;
	};
	_proto.transaction_nav_i = function () {
		var t = new eui.Group();
		this.transaction_nav = t;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 110;
		t.width = 662;
		t.elementsContent = [this._Image8_i(),this.type_i(),this.algebra_i(),this.sorting_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(35,9,593,54);
		t.source = "auction_json.auc_nav_four";
		t.top = 0;
		return t;
	};
	_proto.type_i = function () {
		var t = new eui.Group();
		this.type = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68;
		t.left = 0;
		t.right = 442;
		t.verticalCenter = -1;
		t.elementsContent = [this.no_1_i(),this.type_v_i(),this.type_c_i()];
		return t;
	};
	_proto.no_1_i = function () {
		var t = new eui.Label();
		this.no_1 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.right = 78;
		t.size = 24;
		t.textColor = 0x3c2405;
		t.top = 24;
		return t;
	};
	_proto.type_v_i = function () {
		var t = new eui.Image();
		this.type_v = t;
		t.left = 144;
		t.source = "auction_json.auc_down";
		t.top = 30;
		return t;
	};
	_proto.type_c_i = function () {
		var t = new eui.Image();
		this.type_c = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_curr_pag";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.algebra_i = function () {
		var t = new eui.Group();
		this.algebra = t;
		t.height = 68;
		t.verticalCenter = -1;
		t.width = 220;
		t.x = 220;
		t.elementsContent = [this.no_2_i(),this.algebra_v_i(),this.algebra_c_i()];
		return t;
	};
	_proto.no_2_i = function () {
		var t = new eui.Label();
		this.no_2 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.right = 74;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.textColor = 0x3C2405;
		t.top = 24;
		return t;
	};
	_proto.algebra_v_i = function () {
		var t = new eui.Image();
		this.algebra_v = t;
		t.left = 148;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_down";
		t.top = 30;
		return t;
	};
	_proto.algebra_c_i = function () {
		var t = new eui.Image();
		this.algebra_c = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_curr_pag";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.sorting_i = function () {
		var t = new eui.Group();
		this.sorting = t;
		t.height = 68;
		t.verticalCenter = -2;
		t.width = 220;
		t.x = 440;
		t.elementsContent = [this.no_3_i(),this.sorting_v_i(),this.sorting_c_i()];
		return t;
	};
	_proto.no_3_i = function () {
		var t = new eui.Label();
		this.no_3 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.right = 81;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.textColor = 0x3C2405;
		t.top = 23;
		return t;
	};
	_proto.sorting_v_i = function () {
		var t = new eui.Image();
		this.sorting_v = t;
		t.left = 139;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_down";
		t.top = 31;
		return t;
	};
	_proto.sorting_c_i = function () {
		var t = new eui.Image();
		this.sorting_c = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_curr_pag";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.diff_group_i = function () {
		var t = new eui.Group();
		this.diff_group = t;
		t.height = 210;
		t.horizontalCenter = 0;
		t.top = 182;
		t.visible = false;
		t.width = 660;
		t.elementsContent = [this._Image9_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.nav_bj";
		t.top = 0;
		return t;
	};
	return transaction;
})(eui.Skin);generateEUI.paths['resource/garden_skin/deal/TransactionList.exml'] = window.transactionList = (function (_super) {
	__extends(transactionList, _super);
	function transactionList() {
		_super.call(this);
		this.skinParts = ["gender","g_text","gender_group","ph_img","life_txt","ph_num","ph_xp","high_price","btn_go_pay","shelf_time","ph_group","wt_name","wt_num","wt_price","btn_go_pay_wt","wt_shelf_time","wt_group"];
		
		this.height = 485;
		this.width = 660;
		this.elementsContent = [this.ph_group_i(),this.wt_group_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.langData.transactionList.num"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.transactionList.price"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.transactionList.buy"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.transactionList.price"],[0],this._Label7,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.transactionList.buy"],[0],this._Label8,"text");
	}
	var _proto = transactionList.prototype;

	_proto.ph_group_i = function () {
		var t = new eui.Group();
		this.ph_group = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this.gender_group_i(),this.ph_img_i(),this._Label1_i(),this.life_txt_i(),this._Label2_i(),this.ph_num_i(),this.ph_xp_i(),this.high_price_i(),this.btn_go_pay_i(),this._Group1_i(),this._Rect1_i()];
		return t;
	};
	_proto.gender_group_i = function () {
		var t = new eui.Group();
		this.gender_group = t;
		t.height = 50;
		t.width = 200;
		t.x = 55;
		t.y = 32;
		t.elementsContent = [this.gender_i(),this.g_text_i()];
		return t;
	};
	_proto.gender_i = function () {
		var t = new eui.Image();
		this.gender = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.g_text_i = function () {
		var t = new eui.Label();
		this.g_text = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 10;
		t.size = 26;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ph_img_i = function () {
		var t = new eui.Image();
		this.ph_img = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "";
		t.top = 130;
		t.x = 61;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang SC";
		t.left = 312;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 33;
		return t;
	};
	_proto.life_txt_i = function () {
		var t = new eui.Label();
		this.life_txt = t;
		t.fontFamily = "PingFang SC";
		t.left = 312;
		t.size = 24;
		t.text = "";
		t.textColor = 0xA07B49;
		t.y = 113;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "PingFang SC";
		t.left = 312;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 193;
		return t;
	};
	_proto.ph_num_i = function () {
		var t = new eui.Label();
		this.ph_num = t;
		t.fontFamily = "PingFang SC";
		t.left = 401;
		t.size = 24;
		t.text = "MGE016498545";
		t.textColor = 0x3C2405;
		t.y = 31;
		return t;
	};
	_proto.ph_xp_i = function () {
		var t = new eui.Label();
		this.ph_xp = t;
		t.fontFamily = "PingFang SC";
		t.left = 425;
		t.size = 24;
		t.text = "1000";
		t.textColor = 0x3C2405;
		t.y = 112;
		return t;
	};
	_proto.high_price_i = function () {
		var t = new eui.Label();
		this.high_price = t;
		t.fontFamily = "PingFang SC";
		t.left = 401;
		t.size = 34;
		t.text = "";
		t.textColor = 0xF76005;
		t.y = 188;
		return t;
	};
	_proto.btn_go_pay_i = function () {
		var t = new eui.Group();
		this.btn_go_pay = t;
		t.height = 65;
		t.width = 170;
		t.x = 329;
		t.y = 274;
		t.elementsContent = [this._Image1_i(),this._Label3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.textColor = 0xFFE5B8;
		t.y = 13;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.width = 281;
		t.x = 325;
		t.y = 389;
		t.elementsContent = [this.shelf_time_i()];
		return t;
	};
	_proto.shelf_time_i = function () {
		var t = new eui.Label();
		this.shelf_time = t;
		t.fontFamily = "PingFang-SC-Bold";
		t.size = 18;
		t.text = "05.25 14:25";
		t.textColor = 0xA07B49;
		t.x = 15;
		t.y = 10;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD9B078;
		t.height = 1;
		t.horizontalCenter = 0;
		t.strokeColor = 0xD9B078;
		t.verticalCenter = 224;
		t.width = 600;
		return t;
	};
	_proto.wt_group_i = function () {
		var t = new eui.Group();
		this.wt_group = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Group2_i(),this._Image3_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this.wt_name_i(),this.wt_num_i(),this.wt_price_i(),this.btn_go_pay_wt_i(),this._Group3_i(),this._Rect2_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 200;
		t.x = 55;
		t.y = 32;
		t.elementsContent = [this._Image2_i(),this._Label4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_n_u";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "梧桐果";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "wtg_smart_png";
		t.top = 136;
		t.x = 80.8;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.left = 312;
		t.size = 24;
		t.text = "名称：";
		t.textColor = 0xA07B49;
		t.y = 33;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.left = 312;
		t.size = 24;
		t.text = "数量：";
		t.textColor = 0xA07B49;
		t.y = 113;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		this._Label7 = t;
		t.fontFamily = "PingFang SC";
		t.left = 312;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 193;
		return t;
	};
	_proto.wt_name_i = function () {
		var t = new eui.Label();
		this.wt_name = t;
		t.fontFamily = "PingFang SC";
		t.left = 400;
		t.size = 24;
		t.text = "asdf";
		t.textColor = 0x3C2405;
		t.y = 31;
		return t;
	};
	_proto.wt_num_i = function () {
		var t = new eui.Label();
		this.wt_num = t;
		t.fontFamily = "PingFang SC";
		t.left = 400;
		t.size = 24;
		t.text = "asd";
		t.textColor = 0x3C2405;
		t.y = 112;
		return t;
	};
	_proto.wt_price_i = function () {
		var t = new eui.Label();
		this.wt_price = t;
		t.fontFamily = "PingFang SC";
		t.left = 400;
		t.size = 34;
		t.text = "";
		t.textColor = 0xF76005;
		t.y = 188;
		return t;
	};
	_proto.btn_go_pay_wt_i = function () {
		var t = new eui.Group();
		this.btn_go_pay_wt = t;
		t.height = 65;
		t.width = 170;
		t.x = 329;
		t.y = 274;
		t.elementsContent = [this._Image4_i(),this._Label8_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		this._Label8 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.textColor = 0xFFE5B8;
		t.y = 13;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.width = 281;
		t.x = 325;
		t.y = 389;
		t.elementsContent = [this.wt_shelf_time_i()];
		return t;
	};
	_proto.wt_shelf_time_i = function () {
		var t = new eui.Label();
		this.wt_shelf_time = t;
		t.fontFamily = "PingFang-SC-Bold";
		t.size = 18;
		t.text = "05.25 14:25";
		t.textColor = 0xA07B49;
		t.x = 15;
		t.y = 10;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD9B078;
		t.height = 1;
		t.horizontalCenter = 0;
		t.strokeColor = 0xD9B078;
		t.verticalCenter = 224;
		t.width = 600;
		return t;
	};
	return transactionList;
})(eui.Skin);generateEUI.paths['resource/garden_skin/auction/AuctionBanner.exml'] = window.auctionBanner = (function (_super) {
	__extends(auctionBanner, _super);
	function auctionBanner() {
		_super.call(this);
		this.skinParts = ["img_banner","auction_content"];
		
		this.height = 340;
		this.width = 680;
		this.elementsContent = [this.img_banner_i(),this._Label1_i(),this.auction_content_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.auctionBanner.auc_time"],[0],this._Label1,"text");
	}
	var _proto = auctionBanner.prototype;

	_proto.img_banner_i = function () {
		var t = new eui.Image();
		this.img_banner = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang-SC-Regular";
		t.size = 24;
		t.textColor = 0x54350d;
		t.x = 35;
		t.y = 258;
		return t;
	};
	_proto.auction_content_i = function () {
		var t = new eui.Label();
		this.auction_content = t;
		t.fontFamily = "PingFang-SC-Regular";
		t.size = 24;
		t.text = "";
		t.textColor = 0x54350D;
		t.x = 35;
		t.y = 302;
		return t;
	};
	return auctionBanner;
})(eui.Skin);generateEUI.paths['resource/garden_skin/auction/AuctionResultCount.exml'] = window.auctionResultCount = (function (_super) {
	__extends(auctionResultCount, _super);
	function auctionResultCount() {
		_super.call(this);
		this.skinParts = ["count","resultDate","group_result"];
		
		this.height = 300;
		this.width = 680;
		this.elementsContent = [this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.auctionResultCount.the_next_time"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.auctionResultCount.Auc_results"],[0],this._Label10,"text");
	}
	var _proto = auctionResultCount.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Label1_i(),this.count_i(),this.group_result_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang-SC-Heavy";
		t.horizontalCenter = 0;
		t.size = 23;
		t.textColor = 0x54350d;
		t.y = 58;
		return t;
	};
	_proto.count_i = function () {
		var t = new eui.Group();
		this.count = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 109;
		t.horizontalCenter = 0;
		t.width = 506;
		t.y = 92;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Label9_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 47;
		t.source = "auction_json.time_down_list";
		t.width = 47;
		t.x = 91;
		t.y = 32;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 47;
		t.source = "auction_json.time_down_list";
		t.width = 47;
		t.x = 140;
		t.y = 32;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 47;
		t.source = "auction_json.time_down_list";
		t.width = 47;
		t.x = 206;
		t.y = 32;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 47;
		t.source = "auction_json.time_down_list";
		t.width = 47;
		t.x = 256;
		t.y = 32;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 47;
		t.source = "auction_json.time_down_list";
		t.width = 47;
		t.x = 321;
		t.y = 32;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 47;
		t.source = "auction_json.time_down_list";
		t.width = 47;
		t.x = 367;
		t.y = 32;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.height = 47;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 47;
		t.x = 91;
		t.y = 31;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.height = 47;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 47;
		t.x = 141;
		t.y = 31;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.height = 47;
		t.text = ":";
		t.textAlign = "center";
		t.textColor = 0x3c2405;
		t.verticalAlign = "middle";
		t.width = 47;
		t.x = 172;
		t.y = 28;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.height = 47;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 47;
		t.x = 206;
		t.y = 31;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.height = 47;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 47;
		t.x = 257;
		t.y = 31;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.height = 47;
		t.text = ":";
		t.textAlign = "center";
		t.textColor = 0x3c2405;
		t.verticalAlign = "middle";
		t.width = 47;
		t.x = 288;
		t.y = 29;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.height = 47;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 47;
		t.x = 321;
		t.y = 31;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.height = 47;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 47;
		t.x = 368;
		t.y = 31;
		return t;
	};
	_proto.group_result_i = function () {
		var t = new eui.Group();
		this.group_result = t;
		t.anchorOffsetY = 0;
		t.height = 33;
		t.horizontalCenter = 0;
		t.y = 227;
		t.elementsContent = [this._Label10_i(),this.resultDate_i()];
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		this._Label10 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Regular";
		t.right = -10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 29;
		t.textColor = 0xb1834e;
		t.verticalCenter = 0.030000000000001137;
		t.width = 131;
		return t;
	};
	_proto.resultDate_i = function () {
		var t = new eui.Label();
		this.resultDate = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Regular";
		t.horizontalCenter = -69;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 29;
		t.text = "";
		t.textColor = 0xB1834E;
		t.verticalCenter = 0.030000000000001137;
		t.width = 141;
		t.x = 161;
		return t;
	};
	return auctionResultCount;
})(eui.Skin);generateEUI.paths['resource/garden_skin/auction/AuctionResultList.exml'] = window.auctionResultList = (function (_super) {
	__extends(auctionResultList, _super);
	function auctionResultList() {
		_super.call(this);
		this.skinParts = ["gender","g_text","gender_group","ph_img","ph_num","ph_xp","high_price","auctionResultList"];
		
		this.height = 460;
		this.width = 680;
		this.elementsContent = [this.auctionResultList_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.langData.shelfDetailList.num"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.shelfDetailList.life_limit"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.creationList.high_bid"],[0],this._Label3,"text");
	}
	var _proto = auctionResultList.prototype;

	_proto.auctionResultList_i = function () {
		var t = new eui.Group();
		this.auctionResultList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.gender_group_i(),this.ph_img_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.ph_num_i(),this.ph_xp_i(),this.high_price_i(),this._Rect1_i()];
		return t;
	};
	_proto.gender_group_i = function () {
		var t = new eui.Group();
		this.gender_group = t;
		t.height = 50;
		t.width = 200;
		t.x = 52;
		t.y = 32;
		t.elementsContent = [this.gender_i(),this.g_text_i()];
		return t;
	};
	_proto.gender_i = function () {
		var t = new eui.Image();
		this.gender = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		return t;
	};
	_proto.g_text_i = function () {
		var t = new eui.Label();
		this.g_text = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.y = 12;
		return t;
	};
	_proto.ph_img_i = function () {
		var t = new eui.Image();
		this.ph_img = t;
		t.bottom = 108;
		t.horizontalCenter = -189;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang SC";
		t.left = 337;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 96;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "PingFang SC";
		t.left = 337;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 165;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.fontFamily = "PingFang SC";
		t.left = 340;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 235;
		return t;
	};
	_proto.ph_num_i = function () {
		var t = new eui.Label();
		this.ph_num = t;
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "";
		t.textColor = 0x3C2405;
		t.x = 424;
		t.y = 96;
		return t;
	};
	_proto.ph_xp_i = function () {
		var t = new eui.Label();
		this.ph_xp = t;
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "";
		t.textColor = 0x3C2405;
		t.x = 457;
		t.y = 165;
		return t;
	};
	_proto.high_price_i = function () {
		var t = new eui.Label();
		this.high_price = t;
		t.fontFamily = "PingFang SC";
		t.left = 437;
		t.size = 34;
		t.text = "";
		t.textColor = 0xF76005;
		t.y = 230;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD9B078;
		t.height = 1;
		t.horizontalCenter = 0;
		t.strokeColor = 0xD9B078;
		t.verticalCenter = 195;
		t.width = 600;
		return t;
	};
	return auctionResultList;
})(eui.Skin);generateEUI.paths['resource/garden_skin/auction/Bid.exml'] = window.bid = (function (_super) {
	__extends(bid, _super);
	function bid() {
		_super.call(this);
		this.skinParts = ["btn_go_back","auc_top","gender","g_text","gender_group","ph_img","ph_num","high_price","high_price_name","has_mgb","count_down","bid_text","percentage","btn_add","btn_go_pay","incre_pri","status_img","status_text","status_group","bid_list","bid","btn_close","tip"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.bid_i(),this.tip_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.bid.head_img"],[0],this._Image3,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.bid.detail"],[0],this._Image4,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.bid.num"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.bid.have"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.bid.down"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.bid.high_bid"],[0],this._Label4,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.bid.high_bidder"],[0],this._Label5,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.bid.bidding"],[0],this._Label6,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.bid.auction_price"],[0],this._Label7,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.bid.bidders"],[0],this._Label8,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.bid.auction_time"],[0],this._Label9,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.bid.network_error"],[0],this._Label10,"text");
	}
	var _proto = bid.prototype;

	_proto.bid_i = function () {
		var t = new eui.Group();
		this.bid = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.auc_top_i(),this._Group1_i(),this._Group3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(45,18,659,555);
		t.source = "auction_json.auc_bj";
		t.top = 0;
		return t;
	};
	_proto.auc_top_i = function () {
		var t = new eui.Group();
		this.auc_top = t;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.btn_go_back_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(185,11,497,68);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_top";
		t.top = -4;
		return t;
	};
	_proto.btn_go_back_i = function () {
		var t = new eui.Image();
		this.btn_go_back = t;
		t.left = 33;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_return";
		t.verticalCenter = -7;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.left = 202;
		t.verticalCenter = -5;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 717;
		t.horizontalCenter = 0;
		t.top = 90;
		t.width = 654;
		t.elementsContent = [this._Image4_i(),this.gender_group_i(),this.ph_img_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this.ph_num_i(),this.high_price_i(),this.high_price_name_i(),this.has_mgb_i(),this.count_down_i(),this.incre_pri_i(),this.status_group_i(),this._Rect1_i(),this._Image8_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 44;
		t.y = 34;
		return t;
	};
	_proto.gender_group_i = function () {
		var t = new eui.Group();
		this.gender_group = t;
		t.height = 50;
		t.width = 200;
		t.x = 353;
		t.y = 55;
		t.elementsContent = [this.gender_i(),this.g_text_i()];
		return t;
	};
	_proto.gender_i = function () {
		var t = new eui.Image();
		this.gender = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.g_text_i = function () {
		var t = new eui.Label();
		this.g_text = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 25;
		t.size = 26;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ph_img_i = function () {
		var t = new eui.Image();
		this.ph_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 185;
		t.source = "";
		t.width = 136;
		t.x = 385;
		t.y = 156;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.textColor = 0xa07b49;
		t.x = 44;
		t.y = 174;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.textColor = 0xA07B49;
		t.x = 48;
		t.y = 592;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.fontFamily = "PingFang SC";
		t.left = 44;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 644;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.textColor = 0xA07B49;
		t.x = 43;
		t.y = 263;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		this._Label5 = t;
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.textColor = 0xA07B49;
		t.x = 44;
		t.y = 346;
		return t;
	};
	_proto.ph_num_i = function () {
		var t = new eui.Label();
		this.ph_num = t;
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "";
		t.textColor = 0x3c2405;
		t.x = 130;
		t.y = 174;
		return t;
	};
	_proto.high_price_i = function () {
		var t = new eui.Label();
		this.high_price = t;
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "";
		t.textColor = 0x3C2405;
		t.x = 186;
		t.y = 263;
		return t;
	};
	_proto.high_price_name_i = function () {
		var t = new eui.Label();
		this.high_price_name = t;
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "";
		t.textColor = 0x3C2405;
		t.x = 158;
		t.y = 346;
		return t;
	};
	_proto.has_mgb_i = function () {
		var t = new eui.Label();
		this.has_mgb = t;
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "";
		t.textColor = 0xf95403;
		t.x = 142;
		t.y = 592;
		return t;
	};
	_proto.count_down_i = function () {
		var t = new eui.Label();
		this.count_down = t;
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "00:00:00";
		t.textColor = 0x3C2405;
		t.x = 161;
		t.y = 644;
		return t;
	};
	_proto.incre_pri_i = function () {
		var t = new eui.Group();
		this.incre_pri = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.width = 513;
		t.x = 48;
		t.y = 504;
		t.elementsContent = [this._Image5_i(),this.bid_text_i(),this.btn_add_i(),this.btn_go_pay_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "auction_json.auc_fra";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bid_text_i = function () {
		var t = new eui.Label();
		this.bid_text = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang SC";
		t.height = 56;
		t.size = 32;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xf95403;
		t.verticalAlign = "middle";
		t.width = 193;
		t.x = 17;
		t.y = 0;
		return t;
	};
	_proto.btn_add_i = function () {
		var t = new eui.Group();
		this.btn_add = t;
		t.height = 56;
		t.width = 130;
		t.x = 216;
		t.y = -2;
		t.elementsContent = [this._Image6_i(),this.percentage_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_btn1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.percentage_i = function () {
		var t = new eui.Label();
		this.percentage = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.size = 24;
		t.text = "";
		t.textColor = 0xffe5b8;
		t.x = 18;
		t.y = 18;
		return t;
	};
	_proto.btn_go_pay_i = function () {
		var t = new eui.Group();
		this.btn_go_pay = t;
		t.height = 65;
		t.width = 170;
		t.x = 354;
		t.y = -2;
		t.elementsContent = [this._Image7_i(),this._Label6_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_btn";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		this._Label6 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.textColor = 0xFFE5B8;
		t.verticalCenter = -3;
		return t;
	};
	_proto.status_group_i = function () {
		var t = new eui.Group();
		this.status_group = t;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.visible = false;
		t.width = 140;
		t.x = 417;
		t.y = 601;
		t.elementsContent = [this.status_img_i(),this.status_text_i()];
		return t;
	};
	_proto.status_img_i = function () {
		var t = new eui.Image();
		this.status_img = t;
		t.source = "auction_json.auc_success";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.status_text_i = function () {
		var t = new eui.Label();
		this.status_text = t;
		t.fontFamily = "PingFang-SC-Bold";
		t.size = 20;
		t.text = "出价成功";
		t.textColor = 0xF76005;
		t.x = 30;
		t.y = 3;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9b078;
		t.height = 2;
		t.strokeColor = 0xd9b078;
		t.width = 532;
		t.x = 59;
		t.y = 695;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "auction_json.ty";
		t.x = 389;
		t.y = 360;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 469;
		t.horizontalCenter = 5;
		t.top = 828;
		t.width = 654;
		t.elementsContent = [this._Image9_i(),this._Group2_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "";
		t.x = 0;
		t.y = 24;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.horizontalCenter = 0;
		t.width = 654;
		t.y = 119;
		t.elementsContent = [this._Label7_i(),this._Label8_i(),this._Label9_i(),this.bid_list_i()];
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		this._Label7 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 0;
		t.size = 24;
		t.textColor = 0xa07b49;
		t.y = 0;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		this._Label8 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 0;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		this._Label9 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.right = 0;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 0;
		return t;
	};
	_proto.bid_list_i = function () {
		var t = new eui.Group();
		this.bid_list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 252;
		t.horizontalCenter = 0;
		t.width = 654;
		t.y = 42;
		return t;
	};
	_proto.tip_i = function () {
		var t = new eui.Group();
		this.tip = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Rect2_i(),this._Group4_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 388;
		t.horizontalCenter = 5;
		t.verticalCenter = 0;
		t.width = 592;
		t.elementsContent = [this._Image10_i(),this.btn_close_i(),this._Label10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(112,80,329,77);
		t.source = "wutong_json.frame_green_1";
		t.top = 0;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Image();
		this.btn_close = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.delete";
		t.x = 535;
		t.y = -13;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		this._Label10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 113;
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0x3c2405;
		t.width = 211;
		t.y = 100;
		return t;
	};
	return bid;
})(eui.Skin);generateEUI.paths['resource/garden_skin/auction/BidList.exml'] = window.bidList = (function (_super) {
	__extends(bidList, _super);
	function bidList() {
		_super.call(this);
		this.skinParts = ["price_text","bidder_text","auc_time"];
		
		this.height = 50;
		this.width = 654;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = bidList.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 654;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.price_text_i(),this.bidder_text_i(),this.auc_time_i()];
		return t;
	};
	_proto.price_text_i = function () {
		var t = new eui.Label();
		this.price_text = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 0;
		t.size = 24;
		t.text = "500000";
		t.textColor = 0x3c2405;
		t.verticalCenter = 0;
		return t;
	};
	_proto.bidder_text_i = function () {
		var t = new eui.Label();
		this.bidder_text = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "";
		t.textColor = 0x3C2405;
		t.y = 13;
		return t;
	};
	_proto.auc_time_i = function () {
		var t = new eui.Label();
		this.auc_time = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.right = 0;
		t.size = 24;
		t.text = "04-08 08:20";
		t.textColor = 0x3C2405;
		t.y = 13;
		return t;
	};
	return bidList;
})(eui.Skin);generateEUI.paths['resource/garden_skin/auction/BirthTip.exml'] = window.birthTip = (function (_super) {
	__extends(birthTip, _super);
	function birthTip() {
		_super.call(this);
		this.skinParts = ["full_mask","ph_img"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.full_mask_i(),this._Group2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.birthTip.confirm"],[0],this._Label1,"text");
	}
	var _proto = birthTip.prototype;

	_proto.full_mask_i = function () {
		var t = new eui.Rect();
		this.full_mask = t;
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.height = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.width = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 592;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 592;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.ph_img_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(197,116,153,23);
		t.source = "wutong_json.frame_green_1";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "wutong_json.delete";
		t.x = 536;
		t.y = -15;
		return t;
	};
	_proto.ph_img_i = function () {
		var t = new eui.Image();
		this.ph_img = t;
		t.source = "";
		t.x = 181;
		t.y = 70;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 65;
		t.width = 170;
		t.x = 211;
		t.y = 446;
		t.elementsContent = [this._Image3_i(),this._Label1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_btn";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.textColor = 0xffe5b8;
		t.y = 17;
		return t;
	};
	return birthTip;
})(eui.Skin);generateEUI.paths['resource/garden_skin/auction/countDown.exml'] = window.$exmlClass1 = (function (_super) {
	__extends($exmlClass1, _super);
	function $exmlClass1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = $exmlClass1.prototype;

	return $exmlClass1;
})(eui.Skin);generateEUI.paths['resource/garden_skin/auction/Creation.exml'] = window.creation = (function (_super) {
	__extends(creation, _super);
	function creation() {
		_super.call(this);
		this.skinParts = ["no_auction","the_group","img_head","btn_go_back","btn_rule","auc_top","cre_text","frame","cre_img","cre","my_auc","auc_bottom","creation","full_mask","btn_close_tip","tip_txt","btn_go_pay","tip","tip_groups"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.creation_i(),this.tip_groups_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.creation.img_head"],[0],this.img_head,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.creation.rule"],[0],this.btn_rule,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.creation.crea_time"],[0],this.cre_text,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.creation.my_auc"],[0],this._Label1,"text");
	}
	var _proto = creation.prototype;

	_proto.creation_i = function () {
		var t = new eui.Group();
		this.creation = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.the_group_i(),this.auc_top_i(),this.auc_bottom_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(45,18,659,555);
		t.source = "auction_json.auc_bj";
		t.top = 0;
		return t;
	};
	_proto.the_group_i = function () {
		var t = new eui.Group();
		this.the_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.top = 80;
		t.width = 680;
		t.elementsContent = [this.no_auction_i()];
		return t;
	};
	_proto.no_auction_i = function () {
		var t = new eui.Label();
		this.no_auction = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "暂无拍卖安排~";
		t.textColor = 0x3c2405;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.auc_top_i = function () {
		var t = new eui.Group();
		this.auc_top = t;
		t.anchorOffsetY = 0;
		t.height = 79;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.img_head_i(),this.btn_go_back_i(),this.btn_rule_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = -6;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(192,11,440,68);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_top";
		t.top = -5;
		return t;
	};
	_proto.img_head_i = function () {
		var t = new eui.Image();
		this.img_head = t;
		t.left = 190;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 3;
		t.width = 140;
		return t;
	};
	_proto.btn_go_back_i = function () {
		var t = new eui.Group();
		this.btn_go_back = t;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.left = 2;
		t.top = 3;
		t.width = 150;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_return";
		t.verticalCenter = -4;
		t.x = 38;
		return t;
	};
	_proto.btn_rule_i = function () {
		var t = new eui.Label();
		this.btn_rule = t;
		t.bold = true;
		t.fontFamily = "PingFang-SC-Medium";
		t.right = 25;
		t.size = 30;
		t.textColor = 0x3c2405;
		t.y = 23;
		return t;
	};
	_proto.auc_bottom_i = function () {
		var t = new eui.Group();
		this.auc_bottom = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 129;
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this._Image4_i(),this.cre_i(),this.my_auc_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_bottom";
		t.top = 0;
		return t;
	};
	_proto.cre_i = function () {
		var t = new eui.Group();
		this.cre = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 130;
		t.left = 133;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 150;
		t.elementsContent = [this.cre_text_i(),this.frame_i(),this.cre_img_i()];
		return t;
	};
	_proto.cre_text_i = function () {
		var t = new eui.Label();
		this.cre_text = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = -2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.textColor = 0x3c2405;
		t.verticalCenter = 34;
		return t;
	};
	_proto.frame_i = function () {
		var t = new eui.Image();
		this.frame = t;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_bottom_icon";
		t.verticalCenter = -46;
		t.x = 4;
		t.y = -57;
		return t;
	};
	_proto.cre_img_i = function () {
		var t = new eui.Image();
		this.cre_img = t;
		t.horizontalCenter = 0.5;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "auction_json.auc_sz";
		t.verticalCenter = -50;
		return t;
	};
	_proto.my_auc_i = function () {
		var t = new eui.Group();
		this.my_auc = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 131;
		t.right = 163;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 150;
		t.elementsContent = [this._Image5_i(),this._Label1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_cz";
		t.verticalCenter = -16;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.textColor = 0xa07b49;
		t.verticalCenter = 33;
		return t;
	};
	_proto.tip_groups_i = function () {
		var t = new eui.Group();
		this.tip_groups = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this.full_mask_i(),this.tip_i()];
		return t;
	};
	_proto.full_mask_i = function () {
		var t = new eui.Rect();
		this.full_mask = t;
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.tip_i = function () {
		var t = new eui.Group();
		this.tip = t;
		t.anchorOffsetY = 0;
		t.height = 350;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 592;
		t.elementsContent = [this._Image6_i(),this.btn_close_tip_i(),this.tip_txt_i(),this.btn_go_pay_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(115,109,324,44);
		t.source = "wutong_json.frame_green_1";
		t.top = 0;
		return t;
	};
	_proto.btn_close_tip_i = function () {
		var t = new eui.Image();
		this.btn_close_tip = t;
		t.source = "wutong_json.delete";
		t.x = 538;
		t.y = -9;
		return t;
	};
	_proto.tip_txt_i = function () {
		var t = new eui.Label();
		this.tip_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 135;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "请预先缴纳保证金xxxx金币，保证金将在拍卖结束后退还。";
		t.textColor = 0x3c2405;
		t.verticalCenter = -51;
		t.width = 444;
		return t;
	};
	_proto.btn_go_pay_i = function () {
		var t = new eui.Group();
		this.btn_go_pay = t;
		t.bottom = 54;
		t.height = 65;
		t.horizontalCenter = 0;
		t.width = 170;
		t.elementsContent = [this._Image7_i(),this._Label2_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "wutong_json.btn_green";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "缴纳";
		t.textColor = 0xffe5b8;
		t.y = 16;
		return t;
	};
	return creation;
})(eui.Skin);generateEUI.paths['resource/garden_skin/auction/CreationList.exml'] = window.creationList = (function (_super) {
	__extends(creationList, _super);
	function creationList() {
		_super.call(this);
		this.skinParts = ["gender","g_text","gender_group","ph_img","ph_num","ph_xp","start_price","high_price","time_down","btn_go_pay_again","btn_go_pay","the_first","creationList"];
		
		this.height = 500;
		this.width = 680;
		this.elementsContent = [this.creationList_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.langData.creationList.num"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.creationList.life_limit"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.creationList.starting_price"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.creationList.high_bid"],[0],this._Label4,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.creationList.bid_again"],[0],this._Label6,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.creationList.bid"],[0],this._Label7,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.creationList.leading"],[0],this._Label8,"text");
	}
	var _proto = creationList.prototype;

	_proto.creationList_i = function () {
		var t = new eui.Group();
		this.creationList = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.gender_group_i(),this.ph_img_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this.ph_num_i(),this.ph_xp_i(),this.start_price_i(),this.high_price_i(),this.time_down_i(),this._Label5_i(),this.btn_go_pay_again_i(),this.btn_go_pay_i(),this.the_first_i(),this._Rect1_i(),this._Image4_i()];
		return t;
	};
	_proto.gender_group_i = function () {
		var t = new eui.Group();
		this.gender_group = t;
		t.height = 50;
		t.width = 200;
		t.x = 52;
		t.y = 32;
		t.elementsContent = [this.gender_i(),this.g_text_i()];
		return t;
	};
	_proto.gender_i = function () {
		var t = new eui.Image();
		this.gender = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.g_text_i = function () {
		var t = new eui.Label();
		this.g_text = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 3;
		t.size = 26;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ph_img_i = function () {
		var t = new eui.Image();
		this.ph_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 242;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "";
		t.width = 182;
		t.x = 82;
		t.y = 126;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang SC";
		t.left = 314;
		t.size = 24;
		t.textColor = 0xa07b49;
		t.y = 30;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "PingFang SC";
		t.left = 314;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 102;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.fontFamily = "PingFang SC";
		t.left = 315;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 168;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.fontFamily = "PingFang SC";
		t.left = 316;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 238;
		return t;
	};
	_proto.ph_num_i = function () {
		var t = new eui.Label();
		this.ph_num = t;
		t.fontFamily = "PingFang SC";
		t.left = 401;
		t.size = 24;
		t.text = "";
		t.textColor = 0x3c2405;
		t.y = 31;
		return t;
	};
	_proto.ph_xp_i = function () {
		var t = new eui.Label();
		this.ph_xp = t;
		t.fontFamily = "PingFang SC";
		t.left = 436;
		t.size = 24;
		t.text = "";
		t.textColor = 0x3C2405;
		t.y = 102;
		return t;
	};
	_proto.start_price_i = function () {
		var t = new eui.Label();
		this.start_price = t;
		t.fontFamily = "PingFang SC";
		t.left = 432;
		t.size = 24;
		t.text = "";
		t.textColor = 0x3C2405;
		t.y = 168;
		return t;
	};
	_proto.high_price_i = function () {
		var t = new eui.Label();
		this.high_price = t;
		t.fontFamily = "PingFang SC";
		t.left = 434;
		t.size = 34;
		t.text = "";
		t.textColor = 0xf76005;
		t.y = 231;
		return t;
	};
	_proto.time_down_i = function () {
		var t = new eui.Label();
		this.time_down = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = -185;
		t.size = 18;
		t.text = "";
		t.textColor = 0xa07b49;
		t.y = 409;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = -188;
		t.size = 18;
		t.text = "";
		t.textColor = 0xA07B49;
		t.y = 410;
		return t;
	};
	_proto.btn_go_pay_again_i = function () {
		var t = new eui.Group();
		this.btn_go_pay_again = t;
		t.height = 65;
		t.visible = false;
		t.width = 170;
		t.x = 319;
		t.y = 305;
		t.elementsContent = [this._Image1_i(),this._Label6_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		this._Label6 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.textColor = 0xFFE5B8;
		t.y = 14;
		return t;
	};
	_proto.btn_go_pay_i = function () {
		var t = new eui.Group();
		this.btn_go_pay = t;
		t.height = 65;
		t.width = 170;
		t.x = 319;
		t.y = 305;
		t.elementsContent = [this._Image2_i(),this._Label7_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		this._Label7 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.textAlign = "center";
		t.textColor = 0xffe5b8;
		t.verticalCenter = -3.5;
		return t;
	};
	_proto.the_first_i = function () {
		var t = new eui.Group();
		this.the_first = t;
		t.height = 55;
		t.width = 140;
		t.x = 334;
		t.y = 400;
		t.elementsContent = [this._Image3_i(),this._Label8_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "auction_json.auc_success";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		this._Label8 = t;
		t.fontFamily = "PingFang-SC-Bold";
		t.horizontalCenter = 0;
		t.size = 20;
		t.textColor = 0xf76005;
		t.y = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9b078;
		t.height = 1;
		t.horizontalCenter = 0;
		t.strokeColor = 0xd9b078;
		t.verticalCenter = 227;
		t.width = 600;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "auction_json.ty";
		t.x = 89;
		t.y = 349;
		return t;
	};
	return creationList;
})(eui.Skin);generateEUI.paths['resource/garden_skin/auction/DifferentClooseScroller.exml'] = window.differentClooseScroller = (function (_super) {
	__extends(differentClooseScroller, _super);
	function differentClooseScroller() {
		_super.call(this);
		this.skinParts = ["differentClooseScroller"];
		
		this.height = 210;
		this.width = 660;
		this.elementsContent = [this.differentClooseScroller_i()];
	}
	var _proto = differentClooseScroller.prototype;

	_proto.differentClooseScroller_i = function () {
		var t = new eui.Scroller();
		this.differentClooseScroller = t;
		t.height = 210;
		t.width = 660;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return differentClooseScroller;
})(eui.Skin);generateEUI.paths['resource/garden_skin/auction/DifferentList.exml'] = window.differentList = (function (_super) {
	__extends(differentList, _super);
	function differentList() {
		_super.call(this);
		this.skinParts = ["diff_txt","diff_cur","diffList"];
		
		this.height = 74;
		this.width = 660;
		this.elementsContent = [this.diffList_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.diff_txt,"text");
	}
	var _proto = differentList.prototype;

	_proto.diffList_i = function () {
		var t = new eui.Group();
		this.diffList = t;
		t.anchorOffsetY = 0;
		t.height = 74;
		t.width = 660;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.diff_txt_i(),this.diff_cur_i()];
		return t;
	};
	_proto.diff_txt_i = function () {
		var t = new eui.Label();
		this.diff_txt = t;
		t.bold = false;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = -1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.textColor = 0x3C2405;
		t.verticalCenter = 0;
		t.x = 306;
		return t;
	};
	_proto.diff_cur_i = function () {
		var t = new eui.Image();
		this.diff_cur = t;
		t.bottom = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.nav_icon";
		t.top = 0;
		t.visible = false;
		t.x = 8;
		return t;
	};
	return differentList;
})(eui.Skin);generateEUI.paths['resource/garden_skin/auction/GetAutionItem.exml'] = window.getAutionItem = (function (_super) {
	__extends(getAutionItem, _super);
	function getAutionItem() {
		_super.call(this);
		this.skinParts = ["btn_get","getEgg","group_get_item"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.group_get_item_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.getAutionItem.receive"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.getAutionItem.getEgg"],[0],this.getEgg,"source");
	}
	var _proto = getAutionItem.prototype;

	_proto.group_get_item_i = function () {
		var t = new eui.Group();
		this.group_get_item = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this._Group1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.3;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 590;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 560;
		t.x = -273;
		t.y = 166;
		t.elementsContent = [this._Image1_i(),this.btn_get_i(),this._Image3_i(),this.getEgg_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(74,32,444,192);
		t.source = "wutong_json.frame_green_1";
		t.top = 0;
		return t;
	};
	_proto.btn_get_i = function () {
		var t = new eui.Group();
		this.btn_get = t;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.horizontalCenter = 0;
		t.width = 160;
		t.y = 449;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = -6;
		t.left = 0;
		t.right = 0;
		t.source = "wutong_json.btn_green_1";
		t.top = 6;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang-SC";
		t.horizontalCenter = 0;
		t.textColor = 0xffe5b8;
		t.verticalCenter = 2;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 125;
		return t;
	};
	_proto.getEgg_i = function () {
		var t = new eui.Image();
		this.getEgg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 253;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 446;
		t.x = 57;
		t.y = -162;
		return t;
	};
	return getAutionItem;
})(eui.Skin);generateEUI.paths['resource/garden_skin/auction/MyAuction.exml'] = window.myAuction = (function (_super) {
	__extends(myAuction, _super);
	function myAuction() {
		_super.call(this);
		this.skinParts = ["bid_one","bid_money","shelf_one","shelf_money","auc_nav","list_group","head_img","btn_go_back","auc_top","cre_text","cre_img","cre","frame","auc_img","auc_text","auc","auc_bottom","myAuction"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.myAuction_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.myAuction.bid_record"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.myAuction.head_img"],[0],this.head_img,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.myAuction.crea_time"],[0],this.cre_text,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.myAuction.my_auc"],[0],this.auc_text,"text");
	}
	var _proto = myAuction.prototype;

	_proto.myAuction_i = function () {
		var t = new eui.Group();
		this.myAuction = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.auc_nav_i(),this.list_group_i(),this.auc_top_i(),this.auc_bottom_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(45,18,659,555);
		t.source = "auction_json.auc_bj";
		t.top = 0;
		return t;
	};
	_proto.auc_nav_i = function () {
		var t = new eui.Group();
		this.auc_nav = t;
		t.height = 72;
		t.horizontalCenter = 0;
		t.top = 100;
		t.width = 662;
		t.elementsContent = [this._Image2_i(),this.bid_money_i(),this.shelf_money_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "auction_json.auc_nav_tow";
		t.top = 0;
		return t;
	};
	_proto.bid_money_i = function () {
		var t = new eui.Group();
		this.bid_money = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.left = 0;
		t.right = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Label1_i(),this.bid_one_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 24;
		t.textColor = 0x3c2405;
		t.verticalCenter = 0;
		return t;
	};
	_proto.bid_one_i = function () {
		var t = new eui.Image();
		this.bid_one = t;
		t.left = 0;
		t.right = 0;
		t.source = "auction_json.auc_curr_col";
		t.verticalCenter = 0;
		return t;
	};
	_proto.shelf_money_i = function () {
		var t = new eui.Group();
		this.shelf_money = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.horizontalCenter = 166;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 330;
		t.elementsContent = [this._Label2_i(),this.shelf_one_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "上架记录";
		t.textColor = 0x3C2405;
		t.verticalCenter = 0;
		return t;
	};
	_proto.shelf_one_i = function () {
		var t = new eui.Image();
		this.shelf_one = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_curr_col";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = -166;
		t.y = 1;
		return t;
	};
	_proto.list_group_i = function () {
		var t = new eui.Group();
		this.list_group = t;
		t.anchorOffsetY = 0;
		t.bottom = 96;
		t.left = 35;
		t.right = 35;
		t.top = 190;
		return t;
	};
	_proto.auc_top_i = function () {
		var t = new eui.Group();
		this.auc_top = t;
		t.anchorOffsetY = 0;
		t.height = 82;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image3_i(),this.head_img_i(),this.btn_go_back_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = -3;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_top";
		t.top = -5;
		return t;
	};
	_proto.head_img_i = function () {
		var t = new eui.Image();
		this.head_img = t;
		t.horizontalCenter = -106;
		t.y = 23;
		return t;
	};
	_proto.btn_go_back_i = function () {
		var t = new eui.Group();
		this.btn_go_back = t;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.left = 0;
		t.top = 0;
		t.width = 150;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_return";
		t.verticalCenter = -2;
		return t;
	};
	_proto.auc_bottom_i = function () {
		var t = new eui.Group();
		this.auc_bottom = t;
		t.bottom = 0;
		t.height = 131;
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this._Image5_i(),this.cre_i(),this.auc_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 131;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_bottom";
		return t;
	};
	_proto.cre_i = function () {
		var t = new eui.Group();
		this.cre = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 130;
		t.left = 133;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 150;
		t.elementsContent = [this.cre_text_i(),this.cre_img_i()];
		return t;
	};
	_proto.cre_text_i = function () {
		var t = new eui.Label();
		this.cre_text = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = -2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.textColor = 0xa07b49;
		t.verticalCenter = 34;
		return t;
	};
	_proto.cre_img_i = function () {
		var t = new eui.Image();
		this.cre_img = t;
		t.horizontalCenter = -2;
		t.source = "auction_json.auc_sz";
		t.verticalCenter = -21;
		return t;
	};
	_proto.auc_i = function () {
		var t = new eui.Group();
		this.auc = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 131;
		t.right = 163;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 150;
		t.elementsContent = [this.frame_i(),this.auc_img_i(),this.auc_text_i()];
		return t;
	};
	_proto.frame_i = function () {
		var t = new eui.Image();
		this.frame = t;
		t.horizontalCenter = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_bottom_icon";
		t.verticalCenter = -38;
		t.x = 5;
		t.y = -46;
		return t;
	};
	_proto.auc_img_i = function () {
		var t = new eui.Image();
		this.auc_img = t;
		t.horizontalCenter = 2;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "auction_json.auc_cz";
		t.verticalCenter = -38;
		return t;
	};
	_proto.auc_text_i = function () {
		var t = new eui.Label();
		this.auc_text = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.textColor = 0x3c2405;
		t.verticalCenter = 33;
		return t;
	};
	return myAuction;
})(eui.Skin);generateEUI.paths['resource/garden_skin/auction/MyBidMoneyList.exml'] = window.myBidMoneyList = (function (_super) {
	__extends(myBidMoneyList, _super);
	function myBidMoneyList() {
		_super.call(this);
		this.skinParts = ["gender","g_text","gender_group","ph_img","the_text","high_price","the_high_group","ph_num","ph_xp","ph_host","pay_status","status_img","status_text","status_group","btn_go_on","id","btn_get_auction_back","has_get","myBidMoneyList"];
		
		this.height = 435;
		this.width = 680;
		this.elementsContent = [this.myBidMoneyList_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.langData.myBidMoneyList.num"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.myBidMoneyList.life_limit"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.myBidMoneyList.sorce"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.myBidMoneyList.high_bid"],[0],this.the_text,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.myBidMoneyList.no_paid"],[0],this.pay_status,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.myBidMoneyList.continue_bid"],[0],this._Label4,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.myBidMoneyList.tack_back"],[0],this._Label5,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.id"],[0],this.id,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.myBidMoneyList.has_retri"],[0],this.has_get,"text");
	}
	var _proto = myBidMoneyList.prototype;

	_proto.myBidMoneyList_i = function () {
		var t = new eui.Group();
		this.myBidMoneyList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.gender_group_i(),this.ph_img_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.the_high_group_i(),this.ph_num_i(),this.ph_xp_i(),this.ph_host_i(),this.pay_status_i(),this.status_group_i(),this.btn_go_on_i(),this.btn_get_auction_back_i(),this._Rect1_i(),this.has_get_i()];
		return t;
	};
	_proto.gender_group_i = function () {
		var t = new eui.Group();
		this.gender_group = t;
		t.height = 50;
		t.width = 200;
		t.x = 52;
		t.y = 32;
		t.elementsContent = [this.gender_i(),this.g_text_i()];
		return t;
	};
	_proto.gender_i = function () {
		var t = new eui.Image();
		this.gender = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.g_text_i = function () {
		var t = new eui.Label();
		this.g_text = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ph_img_i = function () {
		var t = new eui.Image();
		this.ph_img = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "";
		t.x = 61;
		t.y = 112;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang SC";
		t.left = 305;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 33;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "PingFang SC";
		t.left = 305;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 100;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.fontFamily = "PingFang SC";
		t.left = 305;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 167;
		return t;
	};
	_proto.the_high_group_i = function () {
		var t = new eui.Group();
		this.the_high_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.width = 264;
		t.x = 329;
		t.y = 219;
		t.elementsContent = [this.the_text_i(),this.high_price_i()];
		return t;
	};
	_proto.the_text_i = function () {
		var t = new eui.Label();
		this.the_text = t;
		t.fontFamily = "PingFang SC";
		t.left = -23;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.y = 14;
		return t;
	};
	_proto.high_price_i = function () {
		var t = new eui.Label();
		this.high_price = t;
		t.fontFamily = "PingFang SC";
		t.left = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.text = "";
		t.textColor = 0xf76005;
		t.y = 10;
		return t;
	};
	_proto.ph_num_i = function () {
		var t = new eui.Label();
		this.ph_num = t;
		t.fontFamily = "PingFang SC";
		t.left = 401;
		t.size = 24;
		t.text = "";
		t.textColor = 0x3C2405;
		t.y = 31;
		return t;
	};
	_proto.ph_xp_i = function () {
		var t = new eui.Label();
		this.ph_xp = t;
		t.fontFamily = "PingFang SC";
		t.left = 440;
		t.size = 24;
		t.text = "";
		t.textColor = 0x3C2405;
		t.y = 100;
		return t;
	};
	_proto.ph_host_i = function () {
		var t = new eui.Label();
		this.ph_host = t;
		t.fontFamily = "PingFang SC";
		t.left = 401;
		t.size = 24;
		t.text = "";
		t.textColor = 0x3C2405;
		t.y = 167;
		return t;
	};
	_proto.pay_status_i = function () {
		var t = new eui.Label();
		this.pay_status = t;
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.textColor = 0xa07b49;
		t.visible = false;
		t.x = 306;
		t.y = 278;
		return t;
	};
	_proto.status_group_i = function () {
		var t = new eui.Group();
		this.status_group = t;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.visible = false;
		t.width = 140;
		t.x = 330;
		t.y = 356;
		t.elementsContent = [this.status_img_i(),this.status_text_i()];
		return t;
	};
	_proto.status_img_i = function () {
		var t = new eui.Image();
		this.status_img = t;
		t.source = "auction_json.auc_success";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.status_text_i = function () {
		var t = new eui.Label();
		this.status_text = t;
		t.fontFamily = "PingFang-SC-Bold";
		t.size = 20;
		t.text = "";
		t.textColor = 0xF76005;
		t.x = 30;
		t.y = 3;
		return t;
	};
	_proto.btn_go_on_i = function () {
		var t = new eui.Group();
		this.btn_go_on = t;
		t.height = 65;
		t.visible = false;
		t.width = 170;
		t.x = 327;
		t.y = 320;
		t.elementsContent = [this._Image1_i(),this._Label4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "wutong_json.btn_green";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.textColor = 0xFFE5B8;
		t.y = 14;
		return t;
	};
	_proto.btn_get_auction_back_i = function () {
		var t = new eui.Group();
		this.btn_get_auction_back = t;
		t.height = 65;
		t.width = 170;
		t.x = 327;
		t.y = 320;
		t.elementsContent = [this._Image2_i(),this._Label5_i(),this.id_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "wutong_json.btn_green";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		this._Label5 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.y = 14;
		return t;
	};
	_proto.id_i = function () {
		var t = new eui.Label();
		this.id = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.textColor = 0xFFE5B8;
		t.visible = false;
		t.y = 14;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD9B078;
		t.height = 1;
		t.horizontalCenter = 0;
		t.strokeColor = 0xD9B078;
		t.verticalCenter = 205;
		t.width = 600;
		return t;
	};
	_proto.has_get_i = function () {
		var t = new eui.Label();
		this.has_get = t;
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.textColor = 0xf76005;
		t.visible = false;
		t.x = 330;
		t.y = 311;
		return t;
	};
	return myBidMoneyList;
})(eui.Skin);generateEUI.paths['resource/garden_skin/auction/ScrollerBidMoney.exml'] = window.scrollerBidMoney = (function (_super) {
	__extends(scrollerBidMoney, _super);
	function scrollerBidMoney() {
		_super.call(this);
		this.skinParts = ["scroller_group"];
		
		this.height = 1048;
		this.width = 680;
		this.elementsContent = [this.scroller_group_i()];
	}
	var _proto = scrollerBidMoney.prototype;

	_proto.scroller_group_i = function () {
		var t = new eui.Scroller();
		this.scroller_group = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		return t;
	};
	return scrollerBidMoney;
})(eui.Skin);generateEUI.paths['resource/garden_skin/auction/ScrollerCreation.exml'] = window.scrollerCreation = (function (_super) {
	__extends(scrollerCreation, _super);
	function scrollerCreation() {
		_super.call(this);
		this.skinParts = ["scrollerCreation"];
		
		this.height = 1130;
		this.width = 680;
		this.elementsContent = [this.scrollerCreation_i()];
	}
	var _proto = scrollerCreation.prototype;

	_proto.scrollerCreation_i = function () {
		var t = new eui.Scroller();
		this.scrollerCreation = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		return t;
	};
	return scrollerCreation;
})(eui.Skin);generateEUI.paths['resource/garden_skin/email/EmailInstr.exml'] = window.emailInstr = (function (_super) {
	__extends(emailInstr, _super);
	function emailInstr() {
		_super.call(this);
		this.skinParts = ["panel_title","btn_close_instr","title","datatime","datatime_1","email_img","group_img","content","email_instr"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.email_instr_i()];
	}
	var _proto = emailInstr.prototype;

	_proto.email_instr_i = function () {
		var t = new eui.Group();
		this.email_instr = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 956;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 630;
		t.elementsContent = [this._Image1_i(),this.panel_title_i(),this.btn_close_instr_i(),this.title_i(),this.datatime_i(),this.datatime_1_i(),this.content_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(88,127,399,119);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto.panel_title_i = function () {
		var t = new eui.Image();
		this.panel_title = t;
		t.horizontalCenter = 0;
		t.source = "wutong_json.mail_cn";
		t.top = 14;
		return t;
	};
	_proto.btn_close_instr_i = function () {
		var t = new eui.Image();
		this.btn_close_instr = t;
		t.height = 62;
		t.horizontalCenter = 286;
		t.source = "wutong_json.delete";
		t.verticalCenter = -408;
		t.width = 62;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "PingFang-SC-Bold";
		t.horizontalCenter = -102;
		t.size = 30;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x3c2405;
		t.verticalAlign = "middle";
		t.verticalCenter = -330;
		t.width = 271;
		return t;
	};
	_proto.datatime_i = function () {
		var t = new eui.Label();
		this.datatime = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.right = 76;
		t.size = 24;
		t.text = "";
		t.textColor = 0x3c2405;
		t.verticalAlign = "middle";
		t.verticalCenter = -336;
		return t;
	};
	_proto.datatime_1_i = function () {
		var t = new eui.Label();
		this.datatime_1 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.right = 76;
		t.size = 24;
		t.text = "";
		t.textColor = 0x3c2405;
		t.verticalAlign = "middle";
		t.verticalCenter = -309;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Group();
		this.content = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.top = 200;
		t.width = 480;
		t.elementsContent = [this.group_img_i()];
		return t;
	};
	_proto.group_img_i = function () {
		var t = new eui.Group();
		this.group_img = t;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.width = 480;
		t.y = 0;
		t.elementsContent = [this.email_img_i()];
		return t;
	};
	_proto.email_img_i = function () {
		var t = new eui.Image();
		this.email_img = t;
		t.bottom = 0;
		t.height = 270;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 0;
		return t;
	};
	return emailInstr;
})(eui.Skin);generateEUI.paths['resource/garden_skin/email/EmailList.exml'] = window.emailList = (function (_super) {
	__extends(emailList, _super);
	function emailList() {
		_super.call(this);
		this.skinParts = ["e_icon","e_title","e_time","e_content","group_email_list"];
		
		this.height = 180;
		this.width = 530;
		this.elementsContent = [this.group_email_list_i()];
	}
	var _proto = emailList.prototype;

	_proto.group_email_list_i = function () {
		var t = new eui.Group();
		this.group_email_list = t;
		t.anchorOffsetX = 0;
		t.height = 180;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 530;
		t.elementsContent = [this.e_icon_i(),this.e_title_i(),this.e_time_i(),this._Rect1_i(),this.e_content_i()];
		return t;
	};
	_proto.e_icon_i = function () {
		var t = new eui.Image();
		this.e_icon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 33;
		t.height = 70;
		t.left = 24;
		t.source = "";
		t.width = 70;
		return t;
	};
	_proto.e_title_i = function () {
		var t = new eui.Label();
		this.e_title = t;
		t.bold = true;
		t.fontFamily = "PingFang-SC-Bold";
		t.left = 130;
		t.size = 30;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x3C2405;
		t.verticalCenter = -56;
		return t;
	};
	_proto.e_time_i = function () {
		var t = new eui.Label();
		this.e_time = t;
		t.fontFamily = "PingFang-SC-Bold";
		t.right = 9;
		t.size = 24;
		t.text = "";
		t.textColor = 0x3C2405;
		t.top = 19;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xbb9f93;
		t.height = 2;
		t.left = 0;
		t.right = 0;
		t.strokeColor = 0xbb9f93;
		t.verticalCenter = 86;
		return t;
	};
	_proto.e_content_i = function () {
		var t = new eui.Label();
		this.e_content = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 90;
		t.horizontalCenter = 58;
		t.lineSpacing = 26;
		t.size = 24;
		t.text = "";
		t.textColor = 0x3C2405;
		t.verticalAlign = "justify";
		t.verticalCenter = 27;
		t.width = 386;
		return t;
	};
	return emailList;
})(eui.Skin);generateEUI.paths['resource/garden_skin/email/EmailSkin.exml'] = window.emailSkin = (function (_super) {
	__extends(emailSkin, _super);
	function emailSkin() {
		_super.call(this);
		this.skinParts = ["btn_close_email","email_tool","group_email"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.group_email_i()];
	}
	var _proto = emailSkin.prototype;

	_proto.group_email_i = function () {
		var t = new eui.Group();
		this.group_email = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 956;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 630;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.btn_close_email_i(),this.email_tool_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(50,192,491,13);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "wutong_json.mail_cn";
		t.x = 266;
		t.y = 17;
		return t;
	};
	_proto.btn_close_email_i = function () {
		var t = new eui.Image();
		this.btn_close_email = t;
		t.height = 60;
		t.right = 0;
		t.source = "wutong_json.delete";
		t.top = 39;
		t.width = 60;
		return t;
	};
	_proto.email_tool_i = function () {
		var t = new eui.Group();
		this.email_tool = t;
		t.anchorOffsetY = 0;
		t.height = 790;
		t.width = 530;
		t.x = 50;
		t.y = 103;
		return t;
	};
	return emailSkin;
})(eui.Skin);generateEUI.paths['resource/garden_skin/email/ScrollerEmail.exml'] = window.scrollerEmail = (function (_super) {
	__extends(scrollerEmail, _super);
	function scrollerEmail() {
		_super.call(this);
		this.skinParts = ["scroller_email"];
		
		this.height = 790;
		this.width = 530;
		this.elementsContent = [this.scroller_email_i()];
	}
	var _proto = scrollerEmail.prototype;

	_proto.scroller_email_i = function () {
		var t = new eui.Scroller();
		this.scroller_email = t;
		t.anchorOffsetY = 0;
		t.height = 790;
		t.width = 530;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return scrollerEmail;
})(eui.Skin);generateEUI.paths['resource/garden_skin/goldCoin/Exchange.exml'] = window.goldCoin = (function (_super) {
	__extends(goldCoin, _super);
	var goldCoin$Skin2 = 	(function (_super) {
		__extends(goldCoin$Skin2, _super);
		function goldCoin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = goldCoin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wutong_json.btn_add_1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return goldCoin$Skin2;
	})(eui.Skin);

	var goldCoin$Skin3 = 	(function (_super) {
		__extends(goldCoin$Skin3, _super);
		function goldCoin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = goldCoin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wutong_json.btn_sub_1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return goldCoin$Skin3;
	})(eui.Skin);

	function goldCoin() {
		_super.call(this);
		this.skinParts = ["head_img","goBack","exchange_top","gold_inp","confirm","exchange_item_inp","add","del","selecte","select_status","group_selected","group_list","exchange"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.exchange_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.goldCoin.exchange_head"],[0],this.head_img,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.goldCoin.enter_tips"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.goldCoin.input_gold"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.goldCoin.exchange_tips"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.goldCoin.confirm"],[0],this._Label4,"text");
	}
	var _proto = goldCoin.prototype;

	_proto.exchange_i = function () {
		var t = new eui.Group();
		this.exchange = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.exchange_top_i(),this._Label1_i(),this._Label2_i(),this.gold_inp_i(),this._Label3_i(),this._Rect1_i(),this.confirm_i(),this._Group1_i(),this.group_selected_i(),this.group_list_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = -2;
		t.right = 2;
		t.scale9Grid = new egret.Rectangle(45,18,659,555);
		t.source = "auction_json.auc_bj";
		t.top = 0;
		return t;
	};
	_proto.exchange_top_i = function () {
		var t = new eui.Group();
		this.exchange_top = t;
		t.anchorOffsetY = 0;
		t.height = 82;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.head_img_i(),this.goBack_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(185,11,497,68);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_top";
		t.top = -4;
		return t;
	};
	_proto.head_img_i = function () {
		var t = new eui.Image();
		this.head_img = t;
		t.horizontalCenter = -106;
		t.y = 23;
		return t;
	};
	_proto.goBack_i = function () {
		var t = new eui.Group();
		this.goBack = t;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.left = 0;
		t.top = 0;
		t.width = 150;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_return";
		t.verticalCenter = -2;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.textColor = 0x3c2405;
		t.x = 69;
		t.y = 197;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.textColor = 0x3c2405;
		t.x = 67;
		t.y = 433;
		return t;
	};
	_proto.gold_inp_i = function () {
		var t = new eui.Label();
		this.gold_inp = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Bold";
		t.height = 49.67;
		t.restrict = "0-9.";
		t.size = 48;
		t.text = "0";
		t.textColor = 0xf76005;
		t.verticalAlign = "middle";
		t.width = 300;
		t.x = 74;
		t.y = 518;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.textColor = 0xA07B49;
		t.width = 618;
		t.x = 63;
		t.y = 601;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xd9b078;
		t.height = 2;
		t.horizontalCenter = -18;
		t.width = 590;
		t.y = 575.66;
		return t;
	};
	_proto.confirm_i = function () {
		var t = new eui.Group();
		this.confirm = t;
		t.anchorOffsetY = 0;
		t.bottom = 50;
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 600;
		t.elementsContent = [this._Image4_i(),this._Label4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 109;
		t.horizontalCenter = 0;
		t.source = "auction_json.auc_btn";
		t.width = 645;
		t.y = 1;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0xffe5b8;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 98;
		t.width = 304;
		t.x = 58;
		t.y = 284;
		t.elementsContent = [this.exchange_item_inp_i(),this.add_i(),this.del_i()];
		return t;
	};
	_proto.exchange_item_inp_i = function () {
		var t = new eui.Label();
		this.exchange_item_inp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Bold";
		t.height = 57.66;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 48;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xf76005;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 156;
		t.x = 77;
		return t;
	};
	_proto.add_i = function () {
		var t = new eui.Button();
		this.add = t;
		t.height = 50;
		t.label = "";
		t.right = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 50;
		t.skinName = goldCoin$Skin2;
		return t;
	};
	_proto.del_i = function () {
		var t = new eui.Button();
		this.del = t;
		t.height = 50;
		t.label = "";
		t.left = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 50;
		t.skinName = goldCoin$Skin3;
		return t;
	};
	_proto.group_selected_i = function () {
		var t = new eui.Group();
		this.group_selected = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68;
		t.left = 395;
		t.right = 33;
		t.top = 297;
		t.elementsContent = [this.selecte_i(),this.select_status_i(),this._Rect2_i(),this._Image5_i()];
		return t;
	};
	_proto.selecte_i = function () {
		var t = new eui.Label();
		this.selecte = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Bold";
		t.height = 68;
		t.left = 0;
		t.right = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xf76005;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.select_status_i = function () {
		var t = new eui.Label();
		this.select_status = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Bold";
		t.height = 50;
		t.right = -2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = " ▼";
		t.textAlign = "left";
		t.textColor = 0xa67844;
		t.verticalAlign = "middle";
		t.verticalCenter = 3;
		t.width = 32.85;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillColor = 0xd9b078;
		t.height = 2;
		t.left = 10;
		t.right = 10;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(26,8,263,55);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_curr_col";
		t.top = 0;
		return t;
	};
	_proto.group_list_i = function () {
		var t = new eui.Group();
		this.group_list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 265;
		t.visible = false;
		t.width = 322;
		t.x = 395;
		t.y = 364;
		return t;
	};
	return goldCoin;
})(eui.Skin);generateEUI.paths['resource/garden_skin/goldCoin/Gold.exml'] = window.gold = (function (_super) {
	__extends(gold, _super);
	function gold() {
		_super.call(this);
		this.skinParts = ["head_img","goBack","exchange_top","goldAmount","confirmExchange","goldLog","gold_group"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.gold_group_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.goldCoin.gold_head"],[0],this.head_img,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.goldCoin.amount"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.goldCoin.confirm_exchange"],[0],this._Label2,"text");
	}
	var _proto = gold.prototype;

	_proto.gold_group_i = function () {
		var t = new eui.Group();
		this.gold_group = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.exchange_top_i(),this.goldAmount_i(),this._Label1_i(),this.confirmExchange_i(),this.goldLog_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(45,18,659,555);
		t.source = "auction_json.auc_bj";
		t.top = 0;
		return t;
	};
	_proto.exchange_top_i = function () {
		var t = new eui.Group();
		this.exchange_top = t;
		t.anchorOffsetY = 0;
		t.height = 82;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.head_img_i(),this.goBack_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(185,11,497,68);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_top";
		t.top = -4;
		return t;
	};
	_proto.head_img_i = function () {
		var t = new eui.Image();
		this.head_img = t;
		t.horizontalCenter = -106;
		t.y = 23;
		return t;
	};
	_proto.goBack_i = function () {
		var t = new eui.Group();
		this.goBack = t;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.left = 0;
		t.top = 0;
		t.width = 150;
		t.elementsContent = [this._Image3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_return";
		t.verticalCenter = -2;
		return t;
	};
	_proto.goldAmount_i = function () {
		var t = new eui.Label();
		this.goldAmount = t;
		t.fontFamily = "PingFang-SC-Bold";
		t.horizontalCenter = 0;
		t.size = 48;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xf76005;
		t.verticalAlign = "middle";
		t.y = 144;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0x3c2405;
		t.verticalAlign = "middle";
		t.y = 212;
		return t;
	};
	_proto.confirmExchange_i = function () {
		var t = new eui.Group();
		this.confirmExchange = t;
		t.anchorOffsetY = 0;
		t.bottom = 50;
		t.height = 100;
		t.horizontalCenter = 0;
		t.width = 600;
		t.elementsContent = [this._Image4_i(),this._Label2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 109;
		t.horizontalCenter = 0.5;
		t.source = "auction_json.auc_btn";
		t.width = 645;
		t.y = -0.52;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0xffe5b8;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.goldLog_i = function () {
		var t = new eui.Group();
		this.goldLog = t;
		t.height = 850;
		t.horizontalCenter = 0;
		t.verticalCenter = 18;
		t.width = 690;
		return t;
	};
	return gold;
})(eui.Skin);generateEUI.paths['resource/garden_skin/goldCoin/GoldLogList.exml'] = window.goldLogList = (function (_super) {
	__extends(goldLogList, _super);
	function goldLogList() {
		_super.call(this);
		this.skinParts = ["logText","logTime","logChange"];
		
		this.height = 123;
		this.width = 690;
		this.elementsContent = [this.logText_i(),this.logTime_i(),this.logChange_i(),this._Rect1_i()];
	}
	var _proto = goldLogList.prototype;

	_proto.logText_i = function () {
		var t = new eui.Label();
		this.logText = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.text = "兑换金币";
		t.textColor = 0x3c2405;
		t.top = 20;
		t.x = 43;
		return t;
	};
	_proto.logTime_i = function () {
		var t = new eui.Label();
		this.logTime = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.text = "2018-11-12 11:11";
		t.textColor = 0xa07b49;
		t.top = 67;
		t.x = 43;
		return t;
	};
	_proto.logChange_i = function () {
		var t = new eui.Label();
		this.logChange = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.right = 17;
		t.text = "+180";
		t.textColor = 0x3c2405;
		t.y = 20;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 2;
		t.fillColor = 0xd9b078;
		t.height = 1;
		t.left = 0;
		t.right = 0;
		return t;
	};
	return goldLogList;
})(eui.Skin);generateEUI.paths['resource/garden_skin/goldCoin/ScrollerLog.exml'] = window.scrollerLog = (function (_super) {
	__extends(scrollerLog, _super);
	function scrollerLog() {
		_super.call(this);
		this.skinParts = ["scroller_log"];
		
		this.height = 850;
		this.width = 690;
		this.elementsContent = [this.scroller_log_i()];
	}
	var _proto = scrollerLog.prototype;

	_proto.scroller_log_i = function () {
		var t = new eui.Scroller();
		this.scroller_log = t;
		t.anchorOffsetY = 0;
		t.height = 850;
		t.width = 690;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return scrollerLog;
})(eui.Skin);generateEUI.paths['resource/garden_skin/phoenix/ChangeNameCommit.exml'] = window.changeNameCommit = (function (_super) {
	__extends(changeNameCommit, _super);
	function changeNameCommit() {
		_super.call(this);
		this.skinParts = ["commit","new_name"];
		
		this.height = 461;
		this.width = 590;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this._Label2_i(),this.commit_i(),this.new_name_i(),this._Label4_i()];
	}
	var _proto = changeNameCommit.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(100,61,394,127);
		t.source = "wutong_json.frame_green_1";
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0.5;
		t.text = "设置昵称";
		t.textAlign = "center";
		t.textColor = 0x3c2405;
		t.verticalAlign = "middle";
		t.y = 85;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 107;
		t.text = "昵称：";
		t.textAlign = "center";
		t.textColor = 0x3c2405;
		t.verticalAlign = "middle";
		t.y = 190;
		return t;
	};
	_proto.commit_i = function () {
		var t = new eui.Group();
		this.commit = t;
		t.bottom = 88;
		t.height = 60;
		t.horizontalCenter = 0;
		t.width = 166;
		t.elementsContent = [this._Image2_i(),this._Label3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.text = "提交";
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = -3;
		return t;
	};
	_proto.new_name_i = function () {
		var t = new eui.EditableText();
		this.new_name = t;
		t.anchorOffsetX = 0;
		t.border = false;
		t.fontFamily = "PingFang-SC-Medium";
		t.prompt = "请输入新昵称";
		t.text = "";
		t.textColor = 0x3c2405;
		t.width = 305;
		t.x = 189;
		t.y = 191;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang-SC-Medium";
		t.size = 24;
		t.text = "字数超出限制";
		t.textColor = 0xea5300;
		t.visible = false;
		t.x = 173;
		t.y = 230;
		return t;
	};
	return changeNameCommit;
})(eui.Skin);generateEUI.paths['resource/garden_skin/phoenix/ChangeNameConfirm.exml'] = window.changeNameConfirm = (function (_super) {
	__extends(changeNameConfirm, _super);
	function changeNameConfirm() {
		_super.call(this);
		this.skinParts = ["wait","confirm"];
		
		this.height = 341;
		this.width = 590;
		this.elementsContent = [this._Image1_i(),this.wait_i(),this.confirm_i(),this._Label3_i()];
	}
	var _proto = changeNameConfirm.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(92,57,406,125);
		t.source = "wutong_json.frame_green_1";
		t.top = 0;
		return t;
	};
	_proto.wait_i = function () {
		var t = new eui.Group();
		this.wait = t;
		t.height = 60;
		t.width = 166;
		t.x = 99;
		t.y = 221;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.text = "稍后";
		t.textAlign = "center";
		t.textColor = 0xffe5b8;
		t.verticalAlign = "middle";
		t.verticalCenter = -3;
		return t;
	};
	_proto.confirm_i = function () {
		var t = new eui.Group();
		this.confirm = t;
		t.height = 60;
		t.width = 166;
		t.x = 324;
		t.y = 220;
		t.elementsContent = [this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.text = "确认";
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = -3;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 103;
		t.horizontalCenter = 0;
		t.text = "是否花费XX储值修改昵称?";
		t.textAlign = "center";
		t.textColor = 0x3c2405;
		t.verticalAlign = "middle";
		t.width = 448;
		t.y = 61;
		return t;
	};
	return changeNameConfirm;
})(eui.Skin);generateEUI.paths['resource/garden_skin/phoenix/Detail.exml'] = window.detail = (function (_super) {
	__extends(detail, _super);
	function detail() {
		_super.call(this);
		this.skinParts = ["gender","g_text","gender_group","ph_name_1","ph_img","ph_xp_next","ph_xp_now","ph_xp_desc","group_xp","egg_img","egg_status","status_count","ph_name_2","ph_num","change_name","ph_from","ph_from_title","group_from","scroller_group","group_log","back","group_top"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group4_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.detailTs.lifeTitle"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.detailTs.ph_detail"],[0],this._Image3,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.detailTs.nick_name"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.detailTs.ph_num"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.detailTs.ph_from"],[0],this.ph_from,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.detailTs.ph_from_title"],[0],this.ph_from_title,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.detailTs.ph_log"],[0],this._Image4,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.detailTs.page_title"],[0],this._Image7,"source");
	}
	var _proto = detail.prototype;

	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._Scroller1_i(),this.group_top_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(141,0,488,600);
		t.source = "auction_json.auc_bj";
		t.top = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 662;
		t.viewport = this._Group3_i();
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.elementsContent = [this._Group2_i(),this.scroller_group_i(),this.group_log_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 664;
		t.left = 0;
		t.right = 0;
		t.y = 86;
		t.elementsContent = [this.gender_group_i(),this.ph_name_1_i(),this.ph_img_i(),this.group_xp_i(),this.egg_img_i(),this.egg_status_i(),this.status_count_i(),this._Rect1_i()];
		return t;
	};
	_proto.gender_group_i = function () {
		var t = new eui.Group();
		this.gender_group = t;
		t.height = 50;
		t.horizontalCenter = 0;
		t.width = 200;
		t.y = 47;
		t.elementsContent = [this.gender_i(),this.g_text_i()];
		return t;
	};
	_proto.gender_i = function () {
		var t = new eui.Image();
		this.gender = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.g_text_i = function () {
		var t = new eui.Label();
		this.g_text = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 10.5;
		t.size = 26;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ph_name_1_i = function () {
		var t = new eui.Label();
		this.ph_name_1 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x3c2405;
		t.y = 484;
		return t;
	};
	_proto.ph_img_i = function () {
		var t = new eui.Image();
		this.ph_img = t;
		t.horizontalCenter = 46;
		t.source = "";
		t.y = 122;
		return t;
	};
	_proto.group_xp_i = function () {
		var t = new eui.Group();
		this.group_xp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31;
		t.horizontalCenter = 0;
		t.width = 340;
		t.y = 559;
		t.elementsContent = [this._Group1_i(),this._Image2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.right = 0;
		t.top = 0;
		t.width = 252;
		t.elementsContent = [this.ph_xp_next_i(),this.ph_xp_now_i(),this.ph_xp_desc_i()];
		return t;
	};
	_proto.ph_xp_next_i = function () {
		var t = new eui.Image();
		this.ph_xp_next = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.smt_d_2x";
		t.top = 0;
		return t;
	};
	_proto.ph_xp_now_i = function () {
		var t = new eui.Image();
		this.ph_xp_now = t;
		t.left = 4;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.smt_h_2x";
		t.top = 4;
		t.width = 0;
		t.y = -4;
		return t;
	};
	_proto.ph_xp_desc_i = function () {
		var t = new eui.Label();
		this.ph_xp_desc = t;
		t.height = 28;
		t.right = 14;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "0/0";
		t.textAlign = "right";
		t.textColor = 0x301300;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 136;
		t.x = 248;
		t.y = -8;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.left = 0;
		t.top = 4;
		return t;
	};
	_proto.egg_img_i = function () {
		var t = new eui.Image();
		this.egg_img = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "auction_json.csd_2x";
		t.visible = false;
		t.y = 168;
		return t;
	};
	_proto.egg_status_i = function () {
		var t = new eui.Label();
		this.egg_status = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.size = 24;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xa07b49;
		t.visible = false;
		t.y = 489;
		return t;
	};
	_proto.status_count_i = function () {
		var t = new eui.Label();
		this.status_count = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "";
		t.textColor = 0xa07b49;
		t.visible = false;
		t.y = 532;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 44;
		t.fillColor = 0xd9b078;
		t.height = 1;
		t.left = 0;
		t.right = 0;
		return t;
	};
	_proto.scroller_group_i = function () {
		var t = new eui.Group();
		this.scroller_group = t;
		t.anchorOffsetY = 0;
		t.height = 312;
		t.left = 0;
		t.right = 0;
		t.y = 720;
		t.elementsContent = [this._Image3_i(),this._Label1_i(),this.ph_name_2_i(),this._Label2_i(),this.ph_num_i(),this.change_name_i(),this.group_from_i(),this._Rect2_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.left = 10;
		t.top = 20;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.size = 24;
		t.textColor = 0xa07b49;
		t.x = 10;
		t.y = 122;
		return t;
	};
	_proto.ph_name_2_i = function () {
		var t = new eui.Label();
		this.ph_name_2 = t;
		t.bold = true;
		t.size = 24;
		t.text = "";
		t.textColor = 0xA07B49;
		t.x = 100;
		t.y = 122;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.x = 10;
		t.y = 170;
		return t;
	};
	_proto.ph_num_i = function () {
		var t = new eui.Label();
		this.ph_num = t;
		t.size = 24;
		t.text = "";
		t.textColor = 0xA07B49;
		t.x = 100;
		t.y = 170;
		return t;
	};
	_proto.change_name_i = function () {
		var t = new eui.Image();
		this.change_name = t;
		t.source = "auction_json.bj_2x";
		t.visible = false;
		t.x = 280;
		t.y = 122;
		return t;
	};
	_proto.group_from_i = function () {
		var t = new eui.Group();
		this.group_from = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 10;
		t.y = 220;
		t.elementsContent = [this.ph_from_i(),this.ph_from_title_i()];
		return t;
	};
	_proto.ph_from_i = function () {
		var t = new eui.Label();
		this.ph_from = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.x = 91;
		return t;
	};
	_proto.ph_from_title_i = function () {
		var t = new eui.Label();
		this.ph_from_title = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.textColor = 0xA07B49;
		t.x = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 37;
		t.fillColor = 0xD9B078;
		t.height = 1;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.left = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 332;
		t.x = 10;
		t.y = 315;
		return t;
	};
	_proto.group_log_i = function () {
		var t = new eui.Group();
		this.group_log = t;
		t.anchorOffsetY = 0;
		t.height = 287;
		t.left = 0;
		t.right = 0;
		t.y = 1020;
		return t;
	};
	_proto.group_top_i = function () {
		var t = new eui.Group();
		this.group_top = t;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image5_i(),this.back_i(),this._Image7_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(203,11,455,68);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_top";
		t.top = -6;
		return t;
	};
	_proto.back_i = function () {
		var t = new eui.Group();
		this.back = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.left = 12;
		t.verticalCenter = -4;
		t.width = 120;
		t.elementsContent = [this._Image6_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.left = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_return";
		t.verticalCenter = -1.5;
		t.x = 30.5;
		t.y = 17.5;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		this._Image7 = t;
		t.left = 199;
		t.verticalCenter = 0;
		return t;
	};
	return detail;
})(eui.Skin);generateEUI.paths['resource/garden_skin/phoenix/LogList.exml'] = window.logList = (function (_super) {
	__extends(logList, _super);
	function logList() {
		_super.call(this);
		this.skinParts = ["log_content"];
		
		this.height = 62;
		this.width = 662;
		this.elementsContent = [this.log_content_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.datetime"],[0],this._Label1,"text");
	}
	var _proto = logList.prototype;

	_proto.log_content_i = function () {
		var t = new eui.Group();
		this.log_content = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.left = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 25;
		t.textColor = 0xa07b49;
		t.verticalCenter = 0;
		t.width = 147;
		return t;
	};
	return logList;
})(eui.Skin);generateEUI.paths['resource/garden_skin/phoenix/MoodTips.exml'] = window.moodTips = (function (_super) {
	__extends(moodTips, _super);
	function moodTips() {
		_super.call(this);
		this.skinParts = ["mood_tips_close","mood_tips_confirm"];
		
		this.height = 597;
		this.width = 590;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = moodTips.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this.mood_tips_close_i(),this.mood_tips_confirm_i(),this._Group1_i(),this._Label10_i(),this._Label11_i(),this._Label12_i(),this._Label13_i(),this._Label14_i(),this._Label15_i(),this._Label16_i(),this._Label17_i(),this._Label18_i(),this._Label19_i(),this._Label20_i(),this._Label21_i(),this._Label22_i(),this._Label23_i(),this._Label24_i(),this._Label25_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 584;
		t.scale9Grid = new egret.Rectangle(91,63,406,119);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.frame_green_1";
		t.width = 590;
		t.x = 0;
		t.y = 13;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.x = 102;
		t.y = 417;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "绝望";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.x = 210;
		t.y = 417;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "1h";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.x = 340;
		t.y = 417;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "5min";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.x = 448;
		t.y = 417;
		return t;
	};
	_proto.mood_tips_close_i = function () {
		var t = new eui.Image();
		this.mood_tips_close = t;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.delete";
		t.top = 0;
		t.x = 534;
		t.y = 0;
		return t;
	};
	_proto.mood_tips_confirm_i = function () {
		var t = new eui.Group();
		this.mood_tips_confirm = t;
		t.height = 63;
		t.horizontalCenter = 0;
		t.width = 166;
		t.y = 485;
		t.elementsContent = [this._Image2_i(),this._Label5_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "wutong_json.btn_green_1";
		t.top = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "确认";
		t.textAlign = "center";
		t.textColor = 0xffe5b8;
		t.verticalAlign = "middle";
		t.verticalCenter = -3;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.top = 93;
		t.width = 503;
		t.elementsContent = [this._Image3_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Label9_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.tm_k_2x";
		t.top = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "心情指数";
		t.textColor = 0xa07b49;
		t.verticalCenter = 0;
		t.x = 24;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "心情";
		t.textColor = 0xa07b49;
		t.verticalCenter = 0;
		t.x = 164;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang SC";
		t.height = 37;
		t.size = 18;
		t.text = "每消耗1心情值所需时间";
		t.textColor = 0xa07b49;
		t.verticalCenter = 0.5;
		t.width = 101;
		t.x = 257;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang SC";
		t.height = 37;
		t.right = 24;
		t.size = 18;
		t.text = "每消耗1生命值所需时间";
		t.textColor = 0xA07B49;
		t.verticalCenter = 0.5;
		t.width = 101;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "80-100";
		t.textAlign = "center";
		t.textColor = 0x3c2405;
		t.verticalAlign = "middle";
		t.x = 83;
		t.y = 174;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "非常好";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.x = 198;
		t.y = 174;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "6h";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.x = 340;
		t.y = 174;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "30min";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.x = 442;
		t.y = 174;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "60-79";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.x = 87;
		t.y = 236;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "一般";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.x = 209;
		t.y = 236;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "2h";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.x = 340;
		t.y = 236;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "10min";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.x = 442;
		t.y = 236;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "30-59";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.x = 87;
		t.y = 298;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "差";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.x = 222;
		t.y = 300;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "1.5h";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.x = 335;
		t.y = 300;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "8min";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.x = 448;
		t.y = 300;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "1-29";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.x = 93;
		t.y = 362;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "极差";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.x = 209;
		t.y = 362;
		return t;
	};
	_proto._Label24_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "1.2h";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.x = 335;
		t.y = 362;
		return t;
	};
	_proto._Label25_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang SC";
		t.size = 24;
		t.text = "6min";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.x = 448;
		t.y = 363;
		return t;
	};
	return moodTips;
})(eui.Skin);generateEUI.paths['resource/garden_skin/miner/Binding.exml'] = window.binding = (function (_super) {
	__extends(binding, _super);
	function binding() {
		_super.call(this);
		this.skinParts = ["btn_close","head_img","status_txt","btn_success","btn_goBinding","btn_down","binding","btn_close_goto","adderss","btn_binding","goto_group","btn_close_status","directions","btn_goPlay","binding_status","btn_close_down","btn_down_group","down_group"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.binding_i(),this.goto_group_i(),this.binding_status_i(),this.down_group_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.binding.heat_img"],[0],this.head_img,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.binding.status_txt"],[0],this.status_txt,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.binding.confirm"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.binding.goBand"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.binding.downWoller"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.binding.binding_img"],[0],this._Image6,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.binding.theLink"],[0],this._Label4,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.binding.binding"],[0],this._Label5,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.binding.binding_img"],[0],this._Image10,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.binding.bindingSuccess"],[0],this.directions,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.binding.startGame"],[0],this._Label6,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.binding.binding_img"],[0],this._Image13,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.binding.wallet_instruc"],[0],this._Label7,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.binding.po_Mine"],[0],this._Label8,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.binding.regular_digital"],[0],this._Label9,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.binding.iOS_and_Android"],[0],this._Label10,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.binding.go_download"],[0],this._Label11,"text");
	}
	var _proto = binding.prototype;

	_proto.binding_i = function () {
		var t = new eui.Group();
		this.binding = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 527;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 592;
		t.elementsContent = [this._Image1_i(),this.btn_close_i(),this.head_img_i(),this.status_txt_i(),this.btn_success_i(),this.btn_goBinding_i(),this.btn_down_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(132,172,335,61);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Image();
		this.btn_close = t;
		t.source = "wutong_json.delete";
		t.x = 536;
		t.y = 46;
		return t;
	};
	_proto.head_img_i = function () {
		var t = new eui.Image();
		this.head_img = t;
		t.horizontalCenter = 0;
		t.y = 21;
		return t;
	};
	_proto.status_txt_i = function () {
		var t = new eui.Label();
		this.status_txt = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 87;
		t.right = 75;
		t.textColor = 0x3C2405;
		t.y = 170;
		return t;
	};
	_proto.btn_success_i = function () {
		var t = new eui.Group();
		this.btn_success = t;
		t.height = 65;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 170;
		t.y = 366;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_btn";
		t.verticalCenter = 4;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = 1.5;
		return t;
	};
	_proto.btn_goBinding_i = function () {
		var t = new eui.Group();
		this.btn_goBinding = t;
		t.height = 65;
		t.horizontalCenter = -107;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 170;
		t.y = 366;
		t.elementsContent = [this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_btn";
		t.verticalCenter = 4;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = 1.5;
		return t;
	};
	_proto.btn_down_i = function () {
		var t = new eui.Group();
		this.btn_down = t;
		t.height = 65;
		t.horizontalCenter = 113;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 170;
		t.y = 366;
		t.elementsContent = [this._Image4_i(),this._Label3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_btn";
		t.verticalCenter = 4;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = 1.5;
		return t;
	};
	_proto.goto_group_i = function () {
		var t = new eui.Group();
		this.goto_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 527;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 592;
		t.elementsContent = [this._Image5_i(),this.btn_close_goto_i(),this._Image6_i(),this._Label4_i(),this._Group1_i(),this.btn_binding_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(132,172,335,61);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto.btn_close_goto_i = function () {
		var t = new eui.Image();
		this.btn_close_goto = t;
		t.source = "wutong_json.delete";
		t.x = 536;
		t.y = 46;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		this._Image6 = t;
		t.horizontalCenter = 0;
		t.y = 21;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 103;
		t.right = 103;
		t.textColor = 0x3C2405;
		t.y = 160;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.horizontalCenter = 0;
		t.width = 440;
		t.y = 280;
		t.elementsContent = [this._Rect1_i(),this._Image7_i(),this.adderss_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xb1834e;
		t.height = 2;
		t.width = 440;
		t.x = 0;
		t.y = 66;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "minerV1_json.sr_2x";
		t.x = 11;
		t.y = 23;
		return t;
	};
	_proto.adderss_i = function () {
		var t = new eui.EditableText();
		this.adderss = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 66;
		t.left = "56";
		t.right = "13";
		t.size = 24;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xb1834e;
		t.verticalAlign = "middle";
		t.y = 2;
		return t;
	};
	_proto.btn_binding_i = function () {
		var t = new eui.Group();
		this.btn_binding = t;
		t.height = 65;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 170;
		t.y = 366;
		t.elementsContent = [this._Image8_i(),this._Label5_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_btn";
		t.verticalCenter = 4;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		this._Label5 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = 1.5;
		return t;
	};
	_proto.binding_status_i = function () {
		var t = new eui.Group();
		this.binding_status = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 464;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 592;
		t.elementsContent = [this._Image9_i(),this.btn_close_status_i(),this._Image10_i(),this.directions_i(),this.btn_goPlay_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(132,172,335,61);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto.btn_close_status_i = function () {
		var t = new eui.Image();
		this.btn_close_status = t;
		t.source = "wutong_json.delete";
		t.x = 536;
		t.y = 46;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		this._Image10 = t;
		t.horizontalCenter = 0;
		t.y = 21;
		return t;
	};
	_proto.directions_i = function () {
		var t = new eui.Label();
		this.directions = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 87;
		t.right = 75;
		t.textColor = 0x3C2405;
		t.y = 170;
		return t;
	};
	_proto.btn_goPlay_i = function () {
		var t = new eui.Group();
		this.btn_goPlay = t;
		t.height = 65;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 170;
		t.y = 335;
		t.elementsContent = [this._Image11_i(),this._Label6_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_btn";
		t.verticalCenter = 4;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		this._Label6 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = 1.5;
		return t;
	};
	_proto.down_group_i = function () {
		var t = new eui.Group();
		this.down_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 585;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 592;
		t.elementsContent = [this._Image12_i(),this.btn_close_down_i(),this._Image13_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this._Label10_i(),this.btn_down_group_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(132,172,335,61);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto.btn_close_down_i = function () {
		var t = new eui.Image();
		this.btn_close_down = t;
		t.source = "wutong_json.delete";
		t.x = 536;
		t.y = 46;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		this._Image13 = t;
		t.horizontalCenter = 0;
		t.y = 21;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		this._Label7 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 88;
		t.right = 74;
		t.textColor = 0x3C2405;
		t.y = 125;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		this._Label8 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 88;
		t.right = 74;
		t.textColor = 0x3C2405;
		t.top = 172;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		this._Label9 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 91;
		t.right = 71;
		t.textColor = 0x3C2405;
		t.top = 245;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		this._Label10 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 91;
		t.right = 71;
		t.textColor = 0x3C2405;
		t.top = 344;
		return t;
	};
	_proto.btn_down_group_i = function () {
		var t = new eui.Group();
		this.btn_down_group = t;
		t.bottom = 62;
		t.height = 65;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 170;
		t.elementsContent = [this._Image14_i(),this._Label11_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_btn";
		t.verticalCenter = 4;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		this._Label11 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = 1.5;
		return t;
	};
	return binding;
})(eui.Skin);generateEUI.paths['resource/garden_skin/miner/ChangeLink.exml'] = window.changeLink = (function (_super) {
	__extends(changeLink, _super);
	function changeLink() {
		_super.call(this);
		this.skinParts = ["btn_close_code","code_input","btn_get_txt","btn_getCode","btn_push_code","get_code","btn_close_address","address_input","btn_wallet","wallet_address","btn_close_pay","the_dec","btn_confrim","go_pay","btn_close_status","status_txt","btn_status_confrim","pay_status"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.get_code_i(),this.wallet_address_i(),this.go_pay_i(),this.pay_status_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.changeLink.change_img"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.changeLink.address_mobile"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.changeLink.enter_code"],[0],this.code_input,"prompt");
		eui.Binding.$bindProperties(this, ["hostComponent.data.changeLink.get_code"],[0],this.btn_get_txt,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.changeLink.submit"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.changeLink.change_img"],[0],this._Image7,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.changeLink.bind_VSC"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.changeLink.enter_VSC"],[0],this.address_input,"prompt");
		eui.Binding.$bindProperties(this, ["hostComponent.data.changeLink.change"],[0],this._Label4,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.changeLink.change_img"],[0],this._Image11,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.changeLink.change"],[0],this._Label5,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.changeLink.change_img"],[0],this._Image14,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.changeLink.determine"],[0],this._Label6,"text");
	}
	var _proto = changeLink.prototype;

	_proto.get_code_i = function () {
		var t = new eui.Group();
		this.get_code = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 556;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 592;
		t.elementsContent = [this._Image1_i(),this.btn_close_code_i(),this._Image2_i(),this._Label1_i(),this._Group1_i(),this.btn_push_code_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(132,172,335,61);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto.btn_close_code_i = function () {
		var t = new eui.Image();
		this.btn_close_code = t;
		t.source = "wutong_json.delete";
		t.x = 536;
		t.y = 46;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.y = 21;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.textColor = 0x3C2405;
		t.width = 430;
		t.x = 81;
		t.y = 143;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 58;
		t.width = 424;
		t.x = 78;
		t.y = 260;
		t.elementsContent = [this._Image3_i(),this.code_input_i(),this.btn_getCode_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58;
		t.scale9Grid = new egret.Rectangle(8,8,326,40);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_fra";
		t.width = 424;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.code_input_i = function () {
		var t = new eui.EditableText();
		this.code_input = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 58;
		t.promptColor = 0xb1834e;
		t.text = "";
		t.textColor = 0xb1834e;
		t.verticalAlign = "middle";
		t.width = 235;
		t.x = 20;
		t.y = 0;
		return t;
	};
	_proto.btn_getCode_i = function () {
		var t = new eui.Group();
		this.btn_getCode = t;
		t.height = 65;
		t.width = 170;
		t.x = 258;
		t.y = -1;
		t.elementsContent = [this._Image4_i(),this.btn_get_txt_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "wutong_json.btn_green";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_get_txt_i = function () {
		var t = new eui.Label();
		this.btn_get_txt = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0.5;
		t.size = 29;
		t.textColor = 0xffe5b8;
		t.y = 16;
		return t;
	};
	_proto.btn_push_code_i = function () {
		var t = new eui.Group();
		this.btn_push_code = t;
		t.height = 65;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 170;
		t.y = 391;
		t.elementsContent = [this._Image5_i(),this._Label2_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_btn";
		t.verticalCenter = 4;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = 1.5;
		return t;
	};
	_proto.wallet_address_i = function () {
		var t = new eui.Group();
		this.wallet_address = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 556;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 592;
		t.elementsContent = [this._Image6_i(),this.btn_close_address_i(),this._Image7_i(),this._Label3_i(),this._Group2_i(),this.btn_wallet_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(132,172,335,61);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto.btn_close_address_i = function () {
		var t = new eui.Image();
		this.btn_close_address = t;
		t.source = "wutong_json.delete";
		t.x = 536;
		t.y = 46;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		this._Image7 = t;
		t.horizontalCenter = 0;
		t.y = 21;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.textColor = 0x3C2405;
		t.width = 430;
		t.x = 81;
		t.y = 143;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 58;
		t.width = 424;
		t.x = 78;
		t.y = 260;
		t.elementsContent = [this._Image8_i(),this.address_input_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58;
		t.scale9Grid = new egret.Rectangle(8,8,326,40);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_fra";
		t.width = 424;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.address_input_i = function () {
		var t = new eui.EditableText();
		this.address_input = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 58;
		t.promptColor = 0xb1834e;
		t.size = 24;
		t.text = "";
		t.textColor = 0xb1834e;
		t.verticalAlign = "middle";
		t.width = 401;
		t.x = 20;
		t.y = 0;
		return t;
	};
	_proto.btn_wallet_i = function () {
		var t = new eui.Group();
		this.btn_wallet = t;
		t.height = 65;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 170;
		t.y = 391;
		t.elementsContent = [this._Image9_i(),this._Label4_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_btn";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.go_pay_i = function () {
		var t = new eui.Group();
		this.go_pay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 556;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 592;
		t.elementsContent = [this._Image10_i(),this.btn_close_pay_i(),this._Image11_i(),this.the_dec_i(),this.btn_confrim_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(132,172,335,61);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto.btn_close_pay_i = function () {
		var t = new eui.Image();
		this.btn_close_pay = t;
		t.source = "wutong_json.delete";
		t.x = 536;
		t.y = 46;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		this._Image11 = t;
		t.horizontalCenter = 0;
		t.y = 21;
		return t;
	};
	_proto.the_dec_i = function () {
		var t = new eui.Label();
		this.the_dec = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.text = "";
		t.textColor = 0x3C2405;
		t.width = 430;
		t.x = 87;
		t.y = 170;
		return t;
	};
	_proto.btn_confrim_i = function () {
		var t = new eui.Group();
		this.btn_confrim = t;
		t.height = 65;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 170;
		t.y = 391;
		t.elementsContent = [this._Image12_i(),this._Label5_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_btn";
		t.verticalCenter = 4;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		this._Label5 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.pay_status_i = function () {
		var t = new eui.Group();
		this.pay_status = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 556;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 592;
		t.elementsContent = [this._Image13_i(),this.btn_close_status_i(),this._Image14_i(),this.status_txt_i(),this.btn_status_confrim_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(132,172,335,61);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto.btn_close_status_i = function () {
		var t = new eui.Image();
		this.btn_close_status = t;
		t.source = "wutong_json.delete";
		t.x = 536;
		t.y = 46;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		this._Image14 = t;
		t.horizontalCenter = 0;
		t.y = 21;
		return t;
	};
	_proto.status_txt_i = function () {
		var t = new eui.Label();
		this.status_txt = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.text = "";
		t.textColor = 0x3C2405;
		t.width = 430;
		t.x = 87;
		t.y = 170;
		return t;
	};
	_proto.btn_status_confrim_i = function () {
		var t = new eui.Group();
		this.btn_status_confrim = t;
		t.height = 65;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 170;
		t.y = 391;
		t.elementsContent = [this._Image15_i(),this._Label6_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_btn";
		t.verticalCenter = 4;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		this._Label6 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return changeLink;
})(eui.Skin);generateEUI.paths['resource/garden_skin/miner/Character.exml'] = window.character = (function (_super) {
	__extends(character, _super);
	function character() {
		_super.call(this);
		this.skinParts = ["btn_close","head_img","list_box","introduction","character","tips_text","iKnow","tips_close","btn_service","btn_buy","group_tips","btn_close_intro","group_intro"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.character_i(),this.group_tips_i(),this.group_intro_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.minerTools.tool"],[0],this.head_img,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.character.introduction"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.tips.panel_head"],[0],this._Image4,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.character.dete"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.character.buy"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.character.discription"],[0],this._Image9,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.character.tips_1st"],[0],this._Label4,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.character.tips_2nd"],[0],this._Label7,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.character.tips_3rd"],[0],this._Label9,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.character.tips_4th"],[0],this._Label11,"text");
	}
	var _proto = character.prototype;

	_proto.character_i = function () {
		var t = new eui.Group();
		this.character = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 888;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 590;
		t.elementsContent = [this._Image1_i(),this.btn_close_i(),this.head_img_i(),this.list_box_i(),this.introduction_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(183,145,225,86);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Image();
		this.btn_close = t;
		t.source = "wutong_json.delete";
		t.x = 527;
		t.y = 43;
		return t;
	};
	_proto.head_img_i = function () {
		var t = new eui.Image();
		this.head_img = t;
		t.horizontalCenter = 0;
		t.y = 17;
		return t;
	};
	_proto.list_box_i = function () {
		var t = new eui.Group();
		this.list_box = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 678.66;
		t.horizontalCenter = 0.5;
		t.width = 465;
		t.y = 134.99;
		return t;
	};
	_proto.introduction_i = function () {
		var t = new eui.Group();
		this.introduction = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.horizontalCenter = -166;
		t.width = 94;
		t.y = 86;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "wenhao_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang-SC-Heavy";
		t.size = 24;
		t.textColor = 0x3c2405;
		t.verticalCenter = 0;
		t.x = 38;
		return t;
	};
	_proto.group_tips_i = function () {
		var t = new eui.Group();
		this.group_tips = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Rect1_i(),this._Group1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 466;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 607;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this.tips_text_i(),this.tips_close_i(),this.btn_service_i(),this.btn_buy_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(53,94,511,43);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -206;
		return t;
	};
	_proto.tips_text_i = function () {
		var t = new eui.Label();
		this.tips_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 198;
		t.horizontalCenter = 0;
		t.lineSpacing = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.verticalCenter = -10;
		t.width = 336;
		t.x = 30;
		t.y = 157;
		return t;
	};
	_proto.tips_close_i = function () {
		var t = new eui.Group();
		this.tips_close = t;
		t.bottom = 50;
		t.height = 61;
		t.horizontalCenter = -119;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 175;
		t.x = -8;
		t.y = 822;
		t.elementsContent = [this._Image5_i(),this.iKnow_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 69;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green_1";
		t.verticalCenter = 4;
		t.width = 175;
		return t;
	};
	_proto.iKnow_i = function () {
		var t = new eui.Label();
		this.iKnow = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.text = "再想想";
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = -1;
		return t;
	};
	_proto.btn_service_i = function () {
		var t = new eui.Group();
		this.btn_service = t;
		t.bottom = 50;
		t.height = 61;
		t.horizontalCenter = 132;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 175;
		t.x = 243;
		t.y = 822;
		t.elementsContent = [this._Image6_i(),this._Label2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 69;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green_1";
		t.verticalCenter = 4;
		t.width = 175;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = -1;
		return t;
	};
	_proto.btn_buy_i = function () {
		var t = new eui.Group();
		this.btn_buy = t;
		t.bottom = 50;
		t.height = 61;
		t.horizontalCenter = 132;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 175;
		t.x = 243;
		t.y = 822;
		t.elementsContent = [this._Image7_i(),this._Label3_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 69;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green_1";
		t.verticalCenter = 4;
		t.width = 175;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = -1;
		return t;
	};
	_proto.group_intro_i = function () {
		var t = new eui.Group();
		this.group_intro = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Rect2_i(),this._Group3_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 479.73;
		t.horizontalCenter = 0;
		t.verticalCenter = 19;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this.btn_close_intro_i(),this._Group2_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = -121.26999999999998;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(119,150,359,65);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		this._Image9 = t;
		t.horizontalCenter = 0;
		t.top = 20;
		return t;
	};
	_proto.btn_close_intro_i = function () {
		var t = new eui.Image();
		this.btn_close_intro = t;
		t.source = "wutong_json.delete";
		t.x = 528;
		t.y = 45.5;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 381;
		t.horizontalCenter = 13.5;
		t.width = 421;
		t.y = 130;
		t.elementsContent = [this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this._Label10_i(),this._Label11_i()];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.anchorOffsetX = 0;
		t.left = 0;
		t.lineSpacing = 10;
		t.right = 1;
		t.size = 24;
		t.textColor = 0x3c2405;
		t.top = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.horizontalCenter = -228.5;
		t.size = 24;
		t.text = "1.";
		t.textColor = 0x3C2405;
		t.top = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.horizontalCenter = -228;
		t.size = 24;
		t.text = "2.";
		t.textColor = 0x3C2405;
		t.top = 102;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		this._Label7 = t;
		t.anchorOffsetX = 0;
		t.left = 0;
		t.lineSpacing = 10;
		t.right = 0;
		t.size = 24;
		t.textColor = 0x3C2405;
		t.top = 102;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.horizontalCenter = -228;
		t.size = 24;
		t.text = "3.";
		t.textColor = 0x3C2405;
		t.top = 199;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		this._Label9 = t;
		t.anchorOffsetX = 0;
		t.left = 0;
		t.lineSpacing = 10;
		t.right = 0;
		t.size = 24;
		t.textColor = 0x3C2405;
		t.top = 199;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.horizontalCenter = -228;
		t.size = 24;
		t.text = "4.";
		t.textColor = 0x3C2405;
		t.top = 295;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		this._Label11 = t;
		t.anchorOffsetX = 0;
		t.left = 0;
		t.lineSpacing = 10;
		t.right = 0;
		t.size = 24;
		t.textColor = 0x3C2405;
		t.top = 295;
		return t;
	};
	return character;
})(eui.Skin);generateEUI.paths['resource/garden_skin/miner/CharacterList.exml'] = window.characterList = (function (_super) {
	__extends(characterList, _super);
	function characterList() {
		_super.call(this);
		this.skinParts = ["chara_img","chara_using","chara_name","chara_gain","chara_durable","chara_price","chara_service","chara_replace","chara_list"];
		
		this.height = 360;
		this.width = 473;
		this.elementsContent = [this.chara_list_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.list_data.minerTools.using"],[0],this.chara_using,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.list_data.character.chara_gain"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.list_data.character.durability"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.list_data.character.price"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.list_data.character.replace"],[0],this.chara_service,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.list_data.minerTools.service"],[0],this.chara_replace,"source");
	}
	var _proto = characterList.prototype;

	_proto.chara_list_i = function () {
		var t = new eui.Group();
		this.chara_list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.elementsContent = [this._Group1_i(),this._Group5_i(),this._Group6_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 262;
		t.left = 6;
		t.width = 167;
		t.y = 21;
		t.elementsContent = [this._Image1_i(),this.chara_img_i(),this.chara_using_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "minerV1_json.wsy_2x";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chara_img_i = function () {
		var t = new eui.Image();
		this.chara_img = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.chara_using_i = function () {
		var t = new eui.Image();
		this.chara_using = t;
		t.x = -10;
		t.y = -7;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 182;
		t.left = 195;
		t.width = 278;
		t.y = 20;
		t.elementsContent = [this._Image2_i(),this.chara_name_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "minerV1_json.st_2x";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chara_name_i = function () {
		var t = new eui.Label();
		this.chara_name = t;
		t.bold = true;
		t.fontFamily = "DFPHaiBaoW12";
		t.left = 20;
		t.text = "";
		t.textColor = 0x3C2405;
		t.y = -1;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 38;
		t.width = 260;
		t.y = 38;
		t.elementsContent = [this._Image3_i(),this._Label1_i(),this.chara_gain_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "minerV1_json.db_2x";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 24;
		t.size = 22;
		t.textColor = 0x3c2405;
		t.verticalCenter = 0;
		return t;
	};
	_proto.chara_gain_i = function () {
		var t = new eui.Label();
		this.chara_gain = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 134;
		t.size = 22;
		t.text = "";
		t.textColor = 0x3C2405;
		t.y = 8;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 38;
		t.width = 260;
		t.x = 0;
		t.y = 88;
		t.elementsContent = [this._Image4_i(),this.chara_durable_i(),this._Label2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "minerV1_json.db_2x";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.chara_durable_i = function () {
		var t = new eui.Label();
		this.chara_durable = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.size = 22;
		t.text = "100";
		t.textColor = 0x3C2405;
		t.x = 113.5;
		t.y = 8;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 24;
		t.size = 22;
		t.textColor = 0x3C2405;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 38;
		t.width = 260;
		t.x = 0;
		t.y = 138;
		t.elementsContent = [this._Image5_i(),this._Label3_i(),this.chara_price_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "minerV1_json.db_2x";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 24;
		t.size = 22;
		t.textColor = 0x3C2405;
		t.verticalCenter = 0;
		return t;
	};
	_proto.chara_price_i = function () {
		var t = new eui.Label();
		this.chara_price = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 92;
		t.size = 22;
		t.text = "0%";
		t.textColor = 0x3C2405;
		t.y = 8;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.left = 191;
		t.width = 276;
		t.y = 220;
		t.elementsContent = [this.chara_service_i(),this.chara_replace_i()];
		return t;
	};
	_proto.chara_service_i = function () {
		var t = new eui.Image();
		this.chara_service = t;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.chara_replace_i = function () {
		var t = new eui.Image();
		this.chara_replace = t;
		t.x = 141;
		t.y = 0;
		return t;
	};
	return characterList;
})(eui.Skin);generateEUI.paths['resource/garden_skin/miner/Extract.exml'] = window.Ext = (function (_super) {
	__extends(Ext, _super);
	function Ext() {
		_super.call(this);
		this.skinParts = ["btn_go_back","auc_top","num_input","extract","exchange"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.extract_i(),this.exchange_i()];
	}
	var _proto = Ext.prototype;

	_proto.extract_i = function () {
		var t = new eui.Group();
		this.extract = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.auc_top_i(),this._Group5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(45,18,659,555);
		t.source = "auction_json.auc_bj";
		t.top = 0;
		return t;
	};
	_proto.auc_top_i = function () {
		var t = new eui.Group();
		this.auc_top = t;
		t.anchorOffsetY = 0;
		t.height = 82;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.btn_go_back_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = -3;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(178,11,479,68);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_top";
		t.top = -5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.left = 199;
		t.source = "exchangeVSC_cn_png";
		t.y = 23;
		return t;
	};
	_proto.btn_go_back_i = function () {
		var t = new eui.Group();
		this.btn_go_back = t;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.left = 0;
		t.top = 0;
		t.width = 150;
		t.elementsContent = [this._Image4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_return";
		t.verticalCenter = -2;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 434;
		t.width = 651;
		t.x = 44;
		t.y = 111;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 651;
		t.x = 6;
		t.y = 11;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this._Rect1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 20;
		t.text = "VSC总数量";
		t.textColor = 0x3c2405;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 222;
		t.text = "100000";
		t.textColor = 0x3C2405;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.fillColor = 0xd9b078;
		t.height = 2;
		t.left = 0;
		t.right = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 651;
		t.x = 6;
		t.y = 101;
		t.elementsContent = [this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Rect2_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 20;
		t.text = "当前可兑换";
		t.textColor = 0x3C2405;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 222;
		t.text = "100000";
		t.textColor = 0x3C2405;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang-SC-Medium";
		t.right = 0;
		t.text = "总VSC的10%";
		t.textColor = 0xb1834e;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.fillColor = 0xD9B078;
		t.height = 2;
		t.left = 0;
		t.right = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 651;
		t.x = 6;
		t.y = 191;
		t.elementsContent = [this._Label6_i(),this._Rect3_i(),this.num_input_i()];
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 20;
		t.text = "请输入份数";
		t.textColor = 0x3C2405;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.fillColor = 0xD9B078;
		t.height = 2;
		t.left = 0;
		t.right = 0;
		return t;
	};
	_proto.num_input_i = function () {
		var t = new eui.EditableText();
		this.num_input = t;
		t.height = 60;
		t.left = "222";
		t.prompt = "100VSC为1份";
		t.promptColor = 0xb1834e;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textColor = 0x3c2405;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.width = 300;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 134;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 651;
		t.x = 6;
		t.y = 281;
		t.elementsContent = [this._Label7_i(),this._Label8_i(),this._Label9_i(),this._Label10_i(),this._Rect4_i()];
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 20;
		t.text = "文交所账户";
		t.textColor = 0x3C2405;
		t.verticalCenter = -20;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "脉果儿实名";
		t.textColor = 0x3C2405;
		t.verticalCenter = 25;
		t.y = 82;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 222;
		t.text = "6545351";
		t.textColor = 0x3C2405;
		t.verticalCenter = -20;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 222;
		t.text = "特朗普";
		t.textColor = 0x3C2405;
		t.verticalCenter = 25;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.fillColor = 0xD9B078;
		t.height = 2;
		t.left = 0;
		t.right = 0;
		return t;
	};
	_proto.exchange_i = function () {
		var t = new eui.Group();
		this.exchange = t;
		t.bottom = 330;
		t.height = 110;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 610;
		t.x = 35;
		t.elementsContent = [this._Image5_i(),this._Label11_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "minerV1_json.a_n_2x";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.text = "申请";
		t.textColor = 0xFFE5B8;
		t.verticalCenter = -4;
		return t;
	};
	return Ext;
})(eui.Skin);generateEUI.paths['resource/garden_skin/miner/GainContent.exml'] = window.gainContent = (function (_super) {
	__extends(gainContent, _super);
	function gainContent() {
		_super.call(this);
		this.skinParts = ["btn_close","head_img","list_box","btn_success","gain_group"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.gain_group_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.gainContent.gain_png"],[0],this.head_img,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.gainContent.theText"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.winding.confirm"],[0],this._Label2,"text");
	}
	var _proto = gainContent.prototype;

	_proto.gain_group_i = function () {
		var t = new eui.Group();
		this.gain_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 480;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 592;
		t.elementsContent = [this._Image1_i(),this.btn_close_i(),this.head_img_i(),this._Group1_i(),this.btn_success_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(132,172,335,61);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Image();
		this.btn_close = t;
		t.source = "wutong_json.delete";
		t.x = 536;
		t.y = 46;
		return t;
	};
	_proto.head_img_i = function () {
		var t = new eui.Image();
		this.head_img = t;
		t.horizontalCenter = 0;
		t.y = 21;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0.5;
		t.width = 395;
		t.y = 143;
		t.elementsContent = [this._Label1_i(),this.list_box_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 95;
		t.left = 0;
		t.right = 0;
		t.textColor = 0x3c2405;
		t.top = 0;
		return t;
	};
	_proto.list_box_i = function () {
		var t = new eui.Group();
		this.list_box = t;
		t.anchorOffsetX = 0;
		t.height = 220;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 110;
		t.width = 321;
		t.x = 37;
		t.y = 107;
		return t;
	};
	_proto.btn_success_i = function () {
		var t = new eui.Group();
		this.btn_success = t;
		t.bottom = 57;
		t.height = 65;
		t.horizontalCenter = -6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 170;
		t.elementsContent = [this._Image2_i(),this._Label2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_btn";
		t.verticalCenter = 4;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = 1.5;
		return t;
	};
	return gainContent;
})(eui.Skin);generateEUI.paths['resource/garden_skin/miner/GainList.exml'] = window.gainList = (function (_super) {
	__extends(gainList, _super);
	function gainList() {
		_super.call(this);
		this.skinParts = ["the_text"];
		
		this.height = 30;
		this.width = 321;
		this.elementsContent = [this.the_text_i()];
	}
	var _proto = gainList.prototype;

	_proto.the_text_i = function () {
		var t = new eui.Label();
		this.the_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 0;
		t.right = 0;
		t.text = "凤凰拥有者x1";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.top = 0;
		return t;
	};
	return gainList;
})(eui.Skin);generateEUI.paths['resource/garden_skin/miner/GoodsIntro.exml'] = window.goodsIntro = (function (_super) {
	__extends(goodsIntro, _super);
	function goodsIntro() {
		_super.call(this);
		this.skinParts = ["btn_close","use_prop_bg","use_prop_img","group_tool_img","goods_name","goods_intro","egg_num","egg_num_group","intro_group","btn_use_text","btn_use_tool","buy","btn_buy_tool","btn_use_text1","btn_use_tool_1","group_btn","props"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.props_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.goodsIntro.wupin"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.propsIntro.egg_num_title"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.goodsIntro.use"],[0],this.btn_use_text,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.goodsIntro.pay"],[0],this.buy,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.goodsIntro.use"],[0],this.btn_use_text1,"text");
	}
	var _proto = goodsIntro.prototype;

	_proto.props_i = function () {
		var t = new eui.Group();
		this.props = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 601;
		t.horizontalCenter = 0;
		t.verticalCenter = -39.5;
		t.width = 630;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.btn_close_i(),this.group_tool_img_i(),this.goods_name_i(),this.intro_group_i(),this.group_btn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(62,117,499,154);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.y = 18;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Image();
		this.btn_close = t;
		t.height = 62;
		t.horizontalCenter = 284;
		t.source = "wutong_json.delete";
		t.width = 62;
		t.y = 40;
		return t;
	};
	_proto.group_tool_img_i = function () {
		var t = new eui.Group();
		this.group_tool_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 110;
		t.horizontalCenter = -1;
		t.width = 110;
		t.y = 140;
		t.elementsContent = [this.use_prop_bg_i(),this.use_prop_img_i()];
		return t;
	};
	_proto.use_prop_bg_i = function () {
		var t = new eui.Image();
		this.use_prop_bg = t;
		t.height = 110;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.baidikuang";
		t.width = 110;
		return t;
	};
	_proto.use_prop_img_i = function () {
		var t = new eui.Image();
		this.use_prop_img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 22;
		return t;
	};
	_proto.goods_name_i = function () {
		var t = new eui.Label();
		this.goods_name = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "";
		t.textColor = 0xfc3d02;
		t.y = 280;
		return t;
	};
	_proto.intro_group_i = function () {
		var t = new eui.Group();
		this.intro_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 1;
		t.width = 520;
		t.y = 338;
		t.elementsContent = [this.goods_intro_i(),this.egg_num_group_i()];
		return t;
	};
	_proto.goods_intro_i = function () {
		var t = new eui.Group();
		this.goods_intro = t;
		t.horizontalCenter = 0;
		t.width = 427;
		return t;
	};
	_proto.egg_num_group_i = function () {
		var t = new eui.Group();
		this.egg_num_group = t;
		t.bottom = 0;
		t.horizontalCenter = -3;
		t.width = 420;
		t.elementsContent = [this._Label1_i(),this.egg_num_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang SC";
		t.height = 28;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.textColor = 0xa07b49;
		t.width = 73;
		t.x = 12.5;
		t.y = 8;
		return t;
	};
	_proto.egg_num_i = function () {
		var t = new eui.Label();
		this.egg_num = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang SC";
		t.height = 28;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "";
		t.textColor = 0xa07b49;
		t.width = 214;
		t.x = 89;
		t.y = 10;
		return t;
	};
	_proto.group_btn_i = function () {
		var t = new eui.Group();
		this.group_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 80;
		t.height = 61;
		t.horizontalCenter = 0.5;
		t.width = 543;
		t.elementsContent = [this.btn_use_tool_i(),this.btn_buy_tool_i(),this.btn_use_tool_1_i()];
		return t;
	};
	_proto.btn_use_tool_i = function () {
		var t = new eui.Group();
		this.btn_use_tool = t;
		t.anchorOffsetX = 0;
		t.height = 60;
		t.horizontalCenter = -99;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 166;
		t.x = 22;
		t.elementsContent = [this._Image3_i(),this.btn_use_text_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto.btn_use_text_i = function () {
		var t = new eui.Label();
		this.btn_use_text = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = -3;
		return t;
	};
	_proto.btn_buy_tool_i = function () {
		var t = new eui.Group();
		this.btn_buy_tool = t;
		t.anchorOffsetX = 0;
		t.height = 60;
		t.horizontalCenter = 110;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 166;
		t.x = 372;
		t.elementsContent = [this._Image4_i(),this.buy_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto.buy_i = function () {
		var t = new eui.Label();
		this.buy = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = -3;
		return t;
	};
	_proto.btn_use_tool_1_i = function () {
		var t = new eui.Group();
		this.btn_use_tool_1 = t;
		t.anchorOffsetX = 0;
		t.height = 60;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 166;
		t.y = -534;
		t.elementsContent = [this._Image5_i(),this.btn_use_text1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto.btn_use_text1_i = function () {
		var t = new eui.Label();
		this.btn_use_text1 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = -3;
		return t;
	};
	return goodsIntro;
})(eui.Skin);generateEUI.paths['resource/garden_skin/miner/GoodsPay.exml'] = window.goodsPay = (function (_super) {
	__extends(goodsPay, _super);
	var goodsPay$Skin4 = 	(function (_super) {
		__extends(goodsPay$Skin4, _super);
		function goodsPay$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = goodsPay$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wutong_json.btn_add_1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return goodsPay$Skin4;
	})(eui.Skin);

	var goodsPay$Skin5 = 	(function (_super) {
		__extends(goodsPay$Skin5, _super);
		function goodsPay$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = goodsPay$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wutong_json.btn_sub_1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return goodsPay$Skin5;
	})(eui.Skin);

	function goodsPay() {
		_super.call(this);
		this.skinParts = ["use_pay_bg","use_pay_img","btn_close","use_pay_add","use_pay_dec","use_pay_conf","use_pay_num","confirm","use_pay_dete","goodsPay"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.goodsPay_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.propsIntro.intro_name"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.usePay.confirm"],[0],this.confirm,"text");
	}
	var _proto = goodsPay.prototype;

	_proto.goodsPay_i = function () {
		var t = new eui.Group();
		this.goodsPay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 620;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 9;
		t.width = 630;
		t.x = 43;
		t.y = 189;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group1_i(),this.btn_close_i(),this.use_pay_add_i(),this.use_pay_dec_i(),this.use_pay_conf_i(),this.use_pay_num_i(),this.use_pay_dete_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(61,108,531,37);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.y = 19;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 110;
		t.horizontalCenter = 0;
		t.width = 110;
		t.y = 140;
		t.elementsContent = [this.use_pay_bg_i(),this.use_pay_img_i()];
		return t;
	};
	_proto.use_pay_bg_i = function () {
		var t = new eui.Image();
		this.use_pay_bg = t;
		t.height = 110;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.farem_white_1new";
		t.verticalCenter = 0;
		t.width = 110;
		t.x = -1;
		t.y = 0;
		return t;
	};
	_proto.use_pay_img_i = function () {
		var t = new eui.Image();
		this.use_pay_img = t;
		t.horizontalCenter = 2.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = -3.5;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Image();
		this.btn_close = t;
		t.height = 60;
		t.horizontalCenter = 291;
		t.source = "wutong_json.delete";
		t.verticalCenter = -230;
		t.width = 60;
		return t;
	};
	_proto.use_pay_add_i = function () {
		var t = new eui.Button();
		this.use_pay_add = t;
		t.height = 50;
		t.horizontalCenter = 168;
		t.label = "";
		t.verticalCenter = 12;
		t.width = 50;
		t.skinName = goodsPay$Skin4;
		return t;
	};
	_proto.use_pay_dec_i = function () {
		var t = new eui.Button();
		this.use_pay_dec = t;
		t.height = 50;
		t.horizontalCenter = -168;
		t.label = "";
		t.verticalCenter = 12;
		t.width = 50;
		t.skinName = goodsPay$Skin5;
		return t;
	};
	_proto.use_pay_conf_i = function () {
		var t = new eui.Label();
		this.use_pay_conf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 85;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.verticalCenter = 95.5;
		t.width = 490;
		return t;
	};
	_proto.use_pay_num_i = function () {
		var t = new eui.Group();
		this.use_pay_num = t;
		t.height = 50;
		t.horizontalCenter = 0;
		t.verticalCenter = 12;
		t.width = 150;
		return t;
	};
	_proto.use_pay_dete_i = function () {
		var t = new eui.Group();
		this.use_pay_dete = t;
		t.anchorOffsetX = 0;
		t.height = 66;
		t.horizontalCenter = 0;
		t.verticalCenter = 213;
		t.width = 160;
		t.elementsContent = [this._Image3_i(),this.confirm_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto.confirm_i = function () {
		var t = new eui.Label();
		this.confirm = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.textColor = 0xFFE5B8;
		t.verticalCenter = 0;
		return t;
	};
	return goodsPay;
})(eui.Skin);generateEUI.paths['resource/garden_skin/miner/GoodsUse.exml'] = window.goodsUse = (function (_super) {
	__extends(goodsUse, _super);
	var goodsUse$Skin6 = 	(function (_super) {
		__extends(goodsUse$Skin6, _super);
		function goodsUse$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = goodsUse$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wutong_json.btn_add_1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return goodsUse$Skin6;
	})(eui.Skin);

	var goodsUse$Skin7 = 	(function (_super) {
		__extends(goodsUse$Skin7, _super);
		function goodsUse$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = goodsUse$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wutong_json.btn_sub_1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return goodsUse$Skin7;
	})(eui.Skin);

	function goodsUse() {
		_super.call(this);
		this.skinParts = ["use_close","use_prop_bg","use_prop_img","use_pay_add","use_pay_dec","use_pay_num","use_pay","use0","use_btn","nowHas","num_text","use_prop_intro","goodsUse"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.goodsUse_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.propsStatus.use"],[0],this.use0,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.propsStatus.nowHas"],[0],this.nowHas,"text");
	}
	var _proto = goodsUse.prototype;

	_proto.goodsUse_i = function () {
		var t = new eui.Group();
		this.goodsUse = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 600;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 630;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.use_close_i(),this._Group1_i(),this.use_pay_i(),this.use_btn_i(),this.use_prop_intro_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = -10;
		t.left = 1;
		t.right = -1;
		t.scale9Grid = new egret.Rectangle(56,118,537,12);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "wutong_json.wupin_cn";
		t.y = 18;
		return t;
	};
	_proto.use_close_i = function () {
		var t = new eui.Image();
		this.use_close = t;
		t.height = 62;
		t.horizontalCenter = 284;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.delete";
		t.width = 62;
		t.x = 578;
		t.y = 46;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.y = 140;
		t.elementsContent = [this.use_prop_bg_i(),this.use_prop_img_i()];
		return t;
	};
	_proto.use_prop_bg_i = function () {
		var t = new eui.Image();
		this.use_prop_bg = t;
		t.height = 110;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.baidikuang";
		t.width = 110;
		return t;
	};
	_proto.use_prop_img_i = function () {
		var t = new eui.Image();
		this.use_prop_img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.y = 26;
		return t;
	};
	_proto.use_pay_i = function () {
		var t = new eui.Group();
		this.use_pay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.horizontalCenter = 0;
		t.width = 350;
		t.y = 293;
		t.elementsContent = [this.use_pay_add_i(),this.use_pay_dec_i(),this.use_pay_num_i()];
		return t;
	};
	_proto.use_pay_add_i = function () {
		var t = new eui.Button();
		this.use_pay_add = t;
		t.height = 56;
		t.label = "";
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 52;
		t.skinName = goodsUse$Skin6;
		return t;
	};
	_proto.use_pay_dec_i = function () {
		var t = new eui.Button();
		this.use_pay_dec = t;
		t.height = 56;
		t.label = "";
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 52;
		t.skinName = goodsUse$Skin7;
		return t;
	};
	_proto.use_pay_num_i = function () {
		var t = new eui.Group();
		this.use_pay_num = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 150;
		return t;
	};
	_proto.use_btn_i = function () {
		var t = new eui.Group();
		this.use_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 58;
		t.height = 60;
		t.horizontalCenter = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 166;
		t.elementsContent = [this._Image3_i(),this.use0_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto.use0_i = function () {
		var t = new eui.Label();
		this.use0 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = -3;
		return t;
	};
	_proto.use_prop_intro_i = function () {
		var t = new eui.Group();
		this.use_prop_intro = t;
		t.anchorOffsetY = 0;
		t.bottom = 155;
		t.height = 57;
		t.horizontalCenter = 1.5;
		t.elementsContent = [this.nowHas_i(),this.num_text_i(),this._Label1_i()];
		return t;
	};
	_proto.nowHas_i = function () {
		var t = new eui.Label();
		this.nowHas = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.textAlign = "right";
		t.textColor = 0x3C2405;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 198;
		t.x = 0;
		return t;
	};
	_proto.num_text_i = function () {
		var t = new eui.Label();
		this.num_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xFC3D02;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 174;
		t.x = 205;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.right = 14;
		t.text = "个";
		t.textColor = 0x3C2405;
		t.top = 0;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 75;
		return t;
	};
	return goodsUse;
})(eui.Skin);generateEUI.paths['resource/garden_skin/miner/Guidance.exml'] = window.guidance = (function (_super) {
	__extends(guidance, _super);
	function guidance() {
		_super.call(this);
		this.skinParts = ["bg","no1","no2","no3","no4","no5","no6","guidance"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.guidance_i()];
	}
	var _proto = guidance.prototype;

	_proto.guidance_i = function () {
		var t = new eui.Group();
		this.guidance = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.bg_i(),this.no1_i(),this.no2_i(),this.no3_i(),this.no4_i(),this.no5_i(),this.no6_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.no1_i = function () {
		var t = new eui.Image();
		this.no1 = t;
		t.right = 0;
		t.source = "";
		t.top = 130;
		return t;
	};
	_proto.no2_i = function () {
		var t = new eui.Image();
		this.no2 = t;
		t.bottom = 179;
		t.right = 0;
		t.source = "";
		t.visible = false;
		return t;
	};
	_proto.no3_i = function () {
		var t = new eui.Image();
		this.no3 = t;
		t.bottom = 84;
		t.left = 45;
		t.source = "";
		t.visible = false;
		return t;
	};
	_proto.no4_i = function () {
		var t = new eui.Image();
		this.no4 = t;
		t.bottom = 81;
		t.left = 179;
		t.source = "";
		t.visible = false;
		return t;
	};
	_proto.no5_i = function () {
		var t = new eui.Image();
		this.no5 = t;
		t.bottom = 81;
		t.left = 310;
		t.source = "";
		t.visible = false;
		return t;
	};
	_proto.no6_i = function () {
		var t = new eui.Image();
		this.no6 = t;
		t.bottom = 81;
		t.right = 192;
		t.source = "";
		t.visible = false;
		return t;
	};
	return guidance;
})(eui.Skin);generateEUI.paths['resource/garden_skin/miner/HomeTips.exml'] = window.homeTips = (function (_super) {
	__extends(homeTips, _super);
	function homeTips() {
		_super.call(this);
		this.skinParts = ["btn_close_tool","tool_explain","btn_pay_tools","pay_tool","btn_close_goods","btn_pay_goods","pay_goods"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.pay_tool_i(),this.pay_goods_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.homeTips.buyNow"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.homeTips.gain"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.homeTips.goBuy"],[0],this._Label3,"text");
	}
	var _proto = homeTips.prototype;

	_proto.pay_tool_i = function () {
		var t = new eui.Group();
		this.pay_tool = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 556;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 592;
		t.elementsContent = [this._Image1_i(),this.btn_close_tool_i(),this._Image2_i(),this.tool_explain_i(),this.btn_pay_tools_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(132,172,335,61);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto.btn_close_tool_i = function () {
		var t = new eui.Image();
		this.btn_close_tool = t;
		t.source = "wutong_json.delete";
		t.x = 536;
		t.y = 46;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "minerV1_json.prompt_cn";
		t.y = 21;
		return t;
	};
	_proto.tool_explain_i = function () {
		var t = new eui.Label();
		this.tool_explain = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.lineSpacing = 20;
		t.text = "";
		t.textColor = 0x3C2405;
		t.width = 464;
		t.y = 161;
		return t;
	};
	_proto.btn_pay_tools_i = function () {
		var t = new eui.Group();
		this.btn_pay_tools = t;
		t.height = 65;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 170;
		t.y = 391;
		t.elementsContent = [this._Image3_i(),this._Label1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_btn";
		t.verticalCenter = 4;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0xffe5b8;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.pay_goods_i = function () {
		var t = new eui.Group();
		this.pay_goods = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 556;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 592;
		t.elementsContent = [this._Image4_i(),this.btn_close_goods_i(),this._Image5_i(),this._Label2_i(),this.btn_pay_goods_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(132,172,335,61);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto.btn_close_goods_i = function () {
		var t = new eui.Image();
		this.btn_close_goods = t;
		t.source = "wutong_json.delete";
		t.x = 536;
		t.y = 46;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "minerV1_json.prompt_cn";
		t.y = 21;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.lineSpacing = 20;
		t.textColor = 0x3C2405;
		t.width = 464;
		t.y = 161;
		return t;
	};
	_proto.btn_pay_goods_i = function () {
		var t = new eui.Group();
		this.btn_pay_goods = t;
		t.height = 65;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 170;
		t.y = 391;
		t.elementsContent = [this._Image6_i(),this._Label3_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_btn";
		t.verticalCenter = 4;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		return t;
	};
	return homeTips;
})(eui.Skin);generateEUI.paths['resource/garden_skin/miner/MinerAppo.exml'] = window.minerAppo = (function (_super) {
	__extends(minerAppo, _super);
	function minerAppo() {
		_super.call(this);
		this.skinParts = ["btn_go_back","yuyue","auc_top","res_time","miner_img","mc_box","miner_appo","full_mask","btn_close","yuyue_tip","reser_txt","appo_txt","btn_go_appo","btn_success","tip"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.miner_appo_i(),this.full_mask_i(),this.tip_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.langData.minerAppo.yuyue"],[0],this.yuyue,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.minerAppo.appo_time"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.minerAppo.miner_img"],[0],this.miner_img,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.minerAppo.reser_pay"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.minerAppo.confirm"],[0],this._Label3,"text");
	}
	var _proto = minerAppo.prototype;

	_proto.miner_appo_i = function () {
		var t = new eui.Group();
		this.miner_appo = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.auc_top_i(),this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(51,0,658,1203);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "miner_bg_png";
		t.top = 75;
		return t;
	};
	_proto.auc_top_i = function () {
		var t = new eui.Group();
		this.auc_top = t;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this.btn_go_back_i(),this.yuyue_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(185,11,497,68);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_top";
		t.top = -4;
		return t;
	};
	_proto.btn_go_back_i = function () {
		var t = new eui.Image();
		this.btn_go_back = t;
		t.left = 33;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_return";
		t.verticalCenter = -7;
		return t;
	};
	_proto.yuyue_i = function () {
		var t = new eui.Image();
		this.yuyue = t;
		t.left = 202;
		t.verticalCenter = -5;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 232;
		t.height = 90;
		t.horizontalCenter = 78;
		t.width = 456;
		t.elementsContent = [this._Label1_i(),this.res_time_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang SC";
		t.right = 0;
		t.size = 30;
		t.textColor = 0xe6ba81;
		t.top = 0;
		return t;
	};
	_proto.res_time_i = function () {
		var t = new eui.Label();
		this.res_time = t;
		t.fontFamily = "PingFang SC";
		t.right = 0;
		t.size = 30;
		t.text = "";
		t.textColor = 0xe6ba81;
		t.top = 50;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 718;
		t.horizontalCenter = 5;
		t.verticalCenter = -84;
		t.width = 635;
		t.elementsContent = [this.miner_img_i(),this.mc_box_i()];
		return t;
	};
	_proto.miner_img_i = function () {
		var t = new eui.Image();
		this.miner_img = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.mc_box_i = function () {
		var t = new eui.Group();
		this.mc_box = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 348;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 214;
		t.width = 390;
		t.x = 265;
		t.y = 416;
		return t;
	};
	_proto.full_mask_i = function () {
		var t = new eui.Rect();
		this.full_mask = t;
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.tip_i = function () {
		var t = new eui.Group();
		this.tip = t;
		t.anchorOffsetY = 0;
		t.height = 460;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 592;
		t.elementsContent = [this._Image3_i(),this.btn_close_i(),this.yuyue_tip_i(),this._Group3_i(),this.btn_go_appo_i(),this.btn_success_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(136,137,322,84);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Image();
		this.btn_close = t;
		t.source = "wutong_json.delete";
		t.x = 536;
		t.y = 42;
		return t;
	};
	_proto.yuyue_tip_i = function () {
		var t = new eui.Image();
		this.yuyue_tip = t;
		t.horizontalCenter = 0.5;
		t.source = "tip_txt_reser_cn_png";
		t.y = 25;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 186;
		t.width = 450;
		t.x = 70;
		t.y = 103;
		t.elementsContent = [this.reser_txt_i(),this.appo_txt_i()];
		return t;
	};
	_proto.reser_txt_i = function () {
		var t = new eui.Label();
		this.reser_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang SC";
		t.height = 95;
		t.lineSpacing = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "";
		t.textColor = 0x3c2405;
		t.width = 450;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.appo_txt_i = function () {
		var t = new eui.Label();
		this.appo_txt = t;
		t.fontFamily = "PingFang SC";
		t.text = "";
		t.textColor = 0xfc3d02;
		t.x = 0;
		t.y = 97;
		return t;
	};
	_proto.btn_go_appo_i = function () {
		var t = new eui.Group();
		this.btn_go_appo = t;
		t.bottom = 43;
		t.height = 65;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 170;
		t.elementsContent = [this._Image4_i(),this._Label2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "wutong_json.btn_green";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = -1;
		t.textColor = 0xffe5b8;
		t.y = 18;
		return t;
	};
	_proto.btn_success_i = function () {
		var t = new eui.Group();
		this.btn_success = t;
		t.bottom = 43;
		t.height = 65;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 170;
		t.elementsContent = [this._Image5_i(),this._Label3_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "wutong_json.btn_green";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.textColor = 0xFFE5B8;
		t.y = 17;
		return t;
	};
	return minerAppo;
})(eui.Skin);generateEUI.paths['resource/garden_skin/miner/MinerGoodList.exml'] = window.minerGoodList = (function (_super) {
	__extends(minerGoodList, _super);
	function minerGoodList() {
		_super.call(this);
		this.skinParts = ["image_bg","list_image","list_num","list_name","list_btn","toolsList"];
		
		this.height = 180;
		this.width = 110;
		this.elementsContent = [this.toolsList_i()];
	}
	var _proto = minerGoodList.prototype;

	_proto.toolsList_i = function () {
		var t = new eui.Group();
		this.toolsList = t;
		t.anchorOffsetY = 0;
		t.height = 180;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 110;
		t.elementsContent = [this.image_bg_i(),this.list_image_i(),this.list_num_i(),this.list_btn_i()];
		return t;
	};
	_proto.image_bg_i = function () {
		var t = new eui.Image();
		this.image_bg = t;
		t.height = 110;
		t.horizontalCenter = -1;
		t.source = "wutong_json.frame_white_gray";
		t.verticalCenter = -35;
		t.width = 110;
		return t;
	};
	_proto.list_image_i = function () {
		var t = new eui.Image();
		this.list_image = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "";
		t.top = 11;
		return t;
	};
	_proto.list_num_i = function () {
		var t = new eui.Label();
		this.list_num = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = -1;
		t.size = 18;
		t.text = "";
		t.textColor = 0x5E4609;
		t.verticalCenter = 4;
		return t;
	};
	_proto.list_btn_i = function () {
		var t = new eui.Group();
		this.list_btn = t;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.horizontalCenter = 0;
		t.verticalCenter = 66;
		t.width = 125;
		t.elementsContent = [this._Image1_i(),this.list_name_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 54;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(13,6,85,29);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.list_name_i = function () {
		var t = new eui.Label();
		this.list_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = -2;
		return t;
	};
	return minerGoodList;
})(eui.Skin);generateEUI.paths['resource/garden_skin/miner/MinerGoods.exml'] = window.minerGoods = (function (_super) {
	__extends(minerGoods, _super);
	function minerGoods() {
		_super.call(this);
		this.skinParts = ["btn_close","head_img","group_good","group_egg","no_egg","minerGoods"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.minerGoods_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.minerGoods.no_egg"],[0],this.no_egg,"text");
	}
	var _proto = minerGoods.prototype;

	_proto.minerGoods_i = function () {
		var t = new eui.Group();
		this.minerGoods = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1000;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 650;
		t.elementsContent = [this._Image1_i(),this.btn_close_i(),this.head_img_i(),this._Scroller1_i(),this.no_egg_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(96,145,407,89);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Image();
		this.btn_close = t;
		t.height = 62;
		t.right = 0;
		t.source = "wutong_json.delete";
		t.top = 39;
		t.width = 62;
		return t;
	};
	_proto.head_img_i = function () {
		var t = new eui.Image();
		this.head_img = t;
		t.horizontalCenter = 0;
		t.source = "wutong_json.wupin_cn";
		t.y = 19;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 807;
		t.horizontalCenter = 0;
		t.width = 550;
		t.y = 153;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 816;
		t.x = 0;
		t.y = 18;
		t.elementsContent = [this.group_good_i(),this.group_egg_i()];
		return t;
	};
	_proto.group_good_i = function () {
		var t = new eui.Group();
		this.group_good = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 503;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 550;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_egg_i = function () {
		var t = new eui.Group();
		this.group_egg = t;
		t.anchorOffsetY = 0;
		t.height = 221;
		t.left = 0;
		t.right = 0;
		t.y = 586;
		return t;
	};
	_proto.no_egg_i = function () {
		var t = new eui.Label();
		this.no_egg = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.visible = false;
		t.width = 448;
		t.y = 822.5;
		return t;
	};
	return minerGoods;
})(eui.Skin);generateEUI.paths['resource/garden_skin/miner/MinerRule.exml'] = window.minerRule = (function (_super) {
	__extends(minerRule, _super);
	function minerRule() {
		_super.call(this);
		this.skinParts = ["img_head","btn_know","rule_content"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.minerRule.rules"],[0],this.img_head,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.minerRule.determine"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.minerRule.pulse"],[0],this._Label2,"text");
	}
	var _proto = minerRule.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 1147;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 590;
		t.elementsContent = [this._Image1_i(),this.img_head_i(),this.rule_content_i(),this._Label2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = -24;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(65,109,462,164);
		t.source = "wutong_json.tips_panel";
		t.top = -20;
		return t;
	};
	_proto.img_head_i = function () {
		var t = new eui.Image();
		this.img_head = t;
		t.horizontalCenter = 0;
		t.y = 1;
		return t;
	};
	_proto.rule_content_i = function () {
		var t = new eui.Group();
		this.rule_content = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 802;
		t.horizontalCenter = 0;
		t.width = 438;
		t.y = 115;
		t.elementsContent = [this.btn_know_i()];
		return t;
	};
	_proto.btn_know_i = function () {
		var t = new eui.Group();
		this.btn_know = t;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 1;
		t.width = 170;
		t.y = 910;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		t.width = 170;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.horizontalCenter = 0;
		t.textColor = 0xFFE5B8;
		t.verticalCenter = -3;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "PingFang SC";
		t.right = 76;
		t.size = 24;
		t.textColor = 0xa07b49;
		t.y = 963;
		return t;
	};
	return minerRule;
})(eui.Skin);generateEUI.paths['resource/garden_skin/miner/MinerTools.exml'] = window.minerTools = (function (_super) {
	__extends(minerTools, _super);
	function minerTools() {
		_super.call(this);
		this.skinParts = ["btn_close_theTool","head_img","now_img","now_name","now_duration","now_useTime","the_now_type","now_addWeight","service","rise","arrow_img","now_list","next_img","next_name","next_duration","next_useTime","the_next_type","next_addWeight","service1","rise1","next_list","theTools","btn_close_pay","head_pay_img","status_txt","btn_success","btn_pay","pay"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.theTools_i(),this.pay_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.minerTools.tool"],[0],this.head_img,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.minerTools.using"],[0],this._Image3,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.minerTools.durability"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.minerTools.length"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.minerTools.improve"],[0],this.the_now_type,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.minerTools.service"],[0],this.service,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.minerTools.rise"],[0],this.rise,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.minerTools.using"],[0],this._Image9,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.minerTools.durability"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.minerTools.kylength"],[0],this._Label4,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.minerTools.improve"],[0],this.the_next_type,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.minerTools.service"],[0],this.service1,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.minerTools.rise"],[0],this.rise1,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.minerTools.tool"],[0],this.head_pay_img,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.minerTools.determine"],[0],this._Label5,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.minerTools.pay"],[0],this._Label6,"text");
	}
	var _proto = minerTools.prototype;

	_proto.theTools_i = function () {
		var t = new eui.Group();
		this.theTools = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 888;
		t.horizontalCenter = 0;
		t.verticalCenter = -64.5;
		t.width = 590;
		t.elementsContent = [this._Image1_i(),this.btn_close_theTool_i(),this.head_img_i(),this._Group13_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(183,145,225,86);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto.btn_close_theTool_i = function () {
		var t = new eui.Image();
		this.btn_close_theTool = t;
		t.source = "wutong_json.delete";
		t.x = 536;
		t.y = 50.5;
		return t;
	};
	_proto.head_img_i = function () {
		var t = new eui.Image();
		this.head_img = t;
		t.horizontalCenter = 0;
		t.y = 17;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 678.66;
		t.horizontalCenter = 0.5;
		t.width = 465;
		t.y = 134.99;
		t.elementsContent = [this.now_list_i(),this.next_list_i()];
		return t;
	};
	_proto.now_list_i = function () {
		var t = new eui.Group();
		this.now_list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 360;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -159;
		t.width = 465;
		t.elementsContent = [this._Group1_i(),this._Group5_i(),this._Group6_i(),this.arrow_img_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 262;
		t.left = 6;
		t.width = 167;
		t.y = 21;
		t.elementsContent = [this._Image2_i(),this.now_img_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "minerV1_json.wsy_2x";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.now_img_i = function () {
		var t = new eui.Image();
		this.now_img = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.x = -10;
		t.y = -7;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 182;
		t.left = 195;
		t.width = 278;
		t.y = 20;
		t.elementsContent = [this._Image4_i(),this.now_name_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "minerV1_json.st_2x";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.now_name_i = function () {
		var t = new eui.Label();
		this.now_name = t;
		t.bold = true;
		t.fontFamily = "DFPHaiBaoW12";
		t.left = 20;
		t.text = "";
		t.textColor = 0x3C2405;
		t.y = -1;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 38;
		t.width = 260;
		t.y = 38;
		t.elementsContent = [this._Image5_i(),this._Label1_i(),this.now_duration_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "minerV1_json.db_2x";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.right = 141;
		t.size = 22;
		t.textColor = 0x3C2405;
		t.y = 8;
		return t;
	};
	_proto.now_duration_i = function () {
		var t = new eui.Label();
		this.now_duration = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 119;
		t.size = 22;
		t.text = "300";
		t.textColor = 0x3C2405;
		t.y = 8;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 38;
		t.width = 260;
		t.x = 0;
		t.y = 88;
		t.elementsContent = [this._Image6_i(),this.now_useTime_i(),this._Label2_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "minerV1_json.db_2x";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.now_useTime_i = function () {
		var t = new eui.Label();
		this.now_useTime = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.size = 22;
		t.text = "";
		t.textColor = 0x3C2405;
		t.x = 139;
		t.y = 8;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.right = 121;
		t.size = 22;
		t.textColor = 0x3C2405;
		t.y = 8;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 38;
		t.width = 260;
		t.x = 0;
		t.y = 138;
		t.elementsContent = [this._Image7_i(),this.the_now_type_i(),this.now_addWeight_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "minerV1_json.db_2x";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.the_now_type_i = function () {
		var t = new eui.Label();
		this.the_now_type = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.right = 119;
		t.size = 22;
		t.textColor = 0x3C2405;
		t.y = 8;
		return t;
	};
	_proto.now_addWeight_i = function () {
		var t = new eui.Label();
		this.now_addWeight = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 141;
		t.size = 22;
		t.text = "0%";
		t.textColor = 0x3C2405;
		t.y = 8;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.left = 191;
		t.width = 276;
		t.y = 220;
		t.elementsContent = [this.service_i(),this.rise_i()];
		return t;
	};
	_proto.service_i = function () {
		var t = new eui.Image();
		this.service = t;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.rise_i = function () {
		var t = new eui.Image();
		this.rise = t;
		t.x = 141;
		t.y = 0;
		return t;
	};
	_proto.arrow_img_i = function () {
		var t = new eui.Image();
		this.arrow_img = t;
		t.horizontalCenter = 0.5;
		t.source = "jt_2x_png";
		t.y = 307.96;
		return t;
	};
	_proto.next_list_i = function () {
		var t = new eui.Group();
		this.next_list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 302.67;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 173.17000000000002;
		t.width = 465;
		t.x = 0;
		t.y = -36;
		t.elementsContent = [this._Group7_i(),this._Group11_i(),this._Group12_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 262;
		t.left = 6;
		t.width = 167;
		t.y = 21;
		t.elementsContent = [this._Image8_i(),this.next_img_i(),this._Image9_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "minerV1_json.wsy_2x";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.next_img_i = function () {
		var t = new eui.Image();
		this.next_img = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		this._Image9 = t;
		t.visible = false;
		t.x = -10;
		t.y = -7;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 182;
		t.left = 195;
		t.width = 278;
		t.y = 20;
		t.elementsContent = [this._Image10_i(),this.next_name_i(),this._Group8_i(),this._Group9_i(),this._Group10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "minerV1_json.st_2x";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.next_name_i = function () {
		var t = new eui.Label();
		this.next_name = t;
		t.bold = true;
		t.fontFamily = "DFPHaiBaoW12";
		t.left = 20;
		t.text = "";
		t.textColor = 0x3C2405;
		t.y = -1;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 38;
		t.width = 260;
		t.y = 38;
		t.elementsContent = [this._Image11_i(),this._Label3_i(),this.next_duration_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "minerV1_json.db_2x";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.right = 141;
		t.size = 22;
		t.textColor = 0x3C2405;
		t.y = 8;
		return t;
	};
	_proto.next_duration_i = function () {
		var t = new eui.Label();
		this.next_duration = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 119;
		t.size = 22;
		t.text = "300";
		t.textColor = 0x3C2405;
		t.y = 8;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 38;
		t.width = 260;
		t.x = 0;
		t.y = 88;
		t.elementsContent = [this._Image12_i(),this.next_useTime_i(),this._Label4_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "minerV1_json.db_2x";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.next_useTime_i = function () {
		var t = new eui.Label();
		this.next_useTime = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.size = 22;
		t.text = "";
		t.textColor = 0x3C2405;
		t.x = 139;
		t.y = 8;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.right = 141;
		t.size = 22;
		t.textColor = 0x3C2405;
		t.y = 8;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 38;
		t.width = 260;
		t.x = 0;
		t.y = 138;
		t.elementsContent = [this._Image13_i(),this.the_next_type_i(),this.next_addWeight_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "minerV1_json.db_2x";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.the_next_type_i = function () {
		var t = new eui.Label();
		this.the_next_type = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.right = 119;
		t.size = 22;
		t.textColor = 0x3C2405;
		t.y = 8;
		return t;
	};
	_proto.next_addWeight_i = function () {
		var t = new eui.Label();
		this.next_addWeight = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 141;
		t.size = 22;
		t.text = "0%";
		t.textColor = 0x3C2405;
		t.y = 8;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.left = 191;
		t.visible = false;
		t.width = 276;
		t.y = 220;
		t.elementsContent = [this.service1_i(),this.rise1_i()];
		return t;
	};
	_proto.service1_i = function () {
		var t = new eui.Image();
		this.service1 = t;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.rise1_i = function () {
		var t = new eui.Image();
		this.rise1 = t;
		t.x = 141;
		t.y = 0;
		return t;
	};
	_proto.pay_i = function () {
		var t = new eui.Group();
		this.pay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 481;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 592;
		t.elementsContent = [this._Image14_i(),this.btn_close_pay_i(),this.head_pay_img_i(),this.status_txt_i(),this.btn_success_i(),this.btn_pay_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(132,155,335,59);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto.btn_close_pay_i = function () {
		var t = new eui.Image();
		this.btn_close_pay = t;
		t.source = "wutong_json.delete";
		t.x = 536;
		t.y = 46;
		return t;
	};
	_proto.head_pay_img_i = function () {
		var t = new eui.Image();
		this.head_pay_img = t;
		t.horizontalCenter = 0;
		t.y = 21;
		return t;
	};
	_proto.status_txt_i = function () {
		var t = new eui.Label();
		this.status_txt = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 6;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x3c2405;
		t.width = 400;
		t.y = 170;
		return t;
	};
	_proto.btn_success_i = function () {
		var t = new eui.Group();
		this.btn_success = t;
		t.height = 65;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 170;
		t.y = 340;
		t.elementsContent = [this._Image15_i(),this._Label5_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_btn";
		t.verticalCenter = 4;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		this._Label5 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = 1.5;
		return t;
	};
	_proto.btn_pay_i = function () {
		var t = new eui.Group();
		this.btn_pay = t;
		t.height = 65;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 170;
		t.y = 340;
		t.elementsContent = [this._Image16_i(),this._Label6_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_btn";
		t.verticalCenter = 4;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		this._Label6 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = 1.5;
		return t;
	};
	return minerTools;
})(eui.Skin);generateEUI.paths['resource/garden_skin/miner/Records.exml'] = window.records = (function (_super) {
	__extends(records, _super);
	function records() {
		_super.call(this);
		this.skinParts = ["use_one","use_record","income_one","my_income","auc_nav","list_group","btn_go_back","auc_top","records","full_mask"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.records_i(),this.full_mask_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.records.props_use"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.records.my_income"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.records.recording"],[0],this._Image4,"source");
	}
	var _proto = records.prototype;

	_proto.records_i = function () {
		var t = new eui.Group();
		this.records = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.auc_nav_i(),this.list_group_i(),this.auc_top_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(45,18,659,555);
		t.source = "auction_json.auc_bj";
		t.top = 0;
		return t;
	};
	_proto.auc_nav_i = function () {
		var t = new eui.Group();
		this.auc_nav = t;
		t.height = 72;
		t.horizontalCenter = 0;
		t.top = 110;
		t.width = 662;
		t.elementsContent = [this._Image2_i(),this.use_record_i(),this.my_income_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "auction_json.auc_nav_tow";
		t.top = 0;
		return t;
	};
	_proto.use_record_i = function () {
		var t = new eui.Group();
		this.use_record = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.left = 0;
		t.right = 330;
		t.verticalCenter = 0;
		t.elementsContent = [this._Label1_i(),this.use_one_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 24;
		t.textColor = 0x3C2405;
		t.verticalCenter = 0;
		return t;
	};
	_proto.use_one_i = function () {
		var t = new eui.Image();
		this.use_one = t;
		t.left = 0;
		t.right = 0;
		t.source = "auction_json.auc_curr_col";
		t.verticalCenter = 0;
		return t;
	};
	_proto.my_income_i = function () {
		var t = new eui.Group();
		this.my_income = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.horizontalCenter = 166;
		t.verticalCenter = 0;
		t.width = 330;
		t.elementsContent = [this._Label2_i(),this.income_one_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.textColor = 0x3C2405;
		t.verticalCenter = 0;
		return t;
	};
	_proto.income_one_i = function () {
		var t = new eui.Image();
		this.income_one = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_curr_col";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = -166;
		t.y = 1;
		return t;
	};
	_proto.list_group_i = function () {
		var t = new eui.Group();
		this.list_group = t;
		t.anchorOffsetY = 0;
		t.bottom = 2;
		t.horizontalCenter = 0;
		t.top = 196;
		t.width = 680;
		return t;
	};
	_proto.auc_top_i = function () {
		var t = new eui.Group();
		this.auc_top = t;
		t.anchorOffsetY = 0;
		t.height = 82;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this.btn_go_back_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = -3;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(178,11,479,68);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_top";
		t.top = -5;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.left = 199;
		t.y = 23;
		return t;
	};
	_proto.btn_go_back_i = function () {
		var t = new eui.Group();
		this.btn_go_back = t;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.left = 0;
		t.top = 0;
		t.width = 150;
		t.elementsContent = [this._Image5_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -6;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_return";
		t.verticalCenter = -2;
		return t;
	};
	_proto.full_mask_i = function () {
		var t = new eui.Group();
		this.full_mask = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Rect1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	return records;
})(eui.Skin);generateEUI.paths['resource/garden_skin/miner/RecordsIncomeList.exml'] = window.recordsIncomeList = (function (_super) {
	__extends(recordsIncomeList, _super);
	function recordsIncomeList() {
		_super.call(this);
		this.skinParts = ["txt_name","txt_timer","txt_num","the_content"];
		
		this.height = 120;
		this.width = 640;
		this.elementsContent = [this.the_content_i()];
	}
	var _proto = recordsIncomeList.prototype;

	_proto.the_content_i = function () {
		var t = new eui.Group();
		this.the_content = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.txt_name_i(),this.txt_timer_i(),this.txt_num_i()];
		return t;
	};
	_proto.txt_name_i = function () {
		var t = new eui.Label();
		this.txt_name = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 47;
		t.text = "";
		t.textColor = 0x3C2405;
		t.y = 28;
		return t;
	};
	_proto.txt_timer_i = function () {
		var t = new eui.Label();
		this.txt_timer = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 47;
		t.text = "";
		t.textColor = 0xA07B49;
		t.y = 64;
		return t;
	};
	_proto.txt_num_i = function () {
		var t = new eui.Label();
		this.txt_num = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.right = 31;
		t.text = "";
		t.textColor = 0x3C2405;
		t.y = 28;
		return t;
	};
	return recordsIncomeList;
})(eui.Skin);generateEUI.paths['resource/garden_skin/miner/RecordsUseList.exml'] = window.recordsUseList = (function (_super) {
	__extends(recordsUseList, _super);
	function recordsUseList() {
		_super.call(this);
		this.skinParts = ["txt_dayTime","the_timer","txt_name","txt_timer","the_content","recordsUseList"];
		
		this.height = 120;
		this.width = 640;
		this.elementsContent = [this.recordsUseList_i()];
	}
	var _proto = recordsUseList.prototype;

	_proto.recordsUseList_i = function () {
		var t = new eui.Group();
		this.recordsUseList = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.the_timer_i(),this.the_content_i(),this._Rect1_i()];
		return t;
	};
	_proto.the_timer_i = function () {
		var t = new eui.Group();
		this.the_timer = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.txt_dayTime_i()];
		return t;
	};
	_proto.txt_dayTime_i = function () {
		var t = new eui.Label();
		this.txt_dayTime = t;
		t.bold = true;
		t.fontFamily = "PingFang-SC-Bold";
		t.left = 47;
		t.size = 36;
		t.text = "2018-05";
		t.textColor = 0x3c2405;
		t.verticalCenter = 0;
		return t;
	};
	_proto.the_content_i = function () {
		var t = new eui.Group();
		this.the_content = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.txt_name_i(),this.txt_timer_i()];
		return t;
	};
	_proto.txt_name_i = function () {
		var t = new eui.Label();
		this.txt_name = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 47;
		t.text = "";
		t.textColor = 0x3c2405;
		t.y = 28;
		return t;
	};
	_proto.txt_timer_i = function () {
		var t = new eui.Label();
		this.txt_timer = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 47;
		t.text = "";
		t.textColor = 0xa07b49;
		t.y = 64;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xd9b078;
		t.height = 1;
		t.left = 0;
		t.right = 0;
		t.y = 112;
		return t;
	};
	return recordsUseList;
})(eui.Skin);generateEUI.paths['resource/garden_skin/miner/ScrollerProfitLogs.exml'] = window.scrollerProfitLogs = (function (_super) {
	__extends(scrollerProfitLogs, _super);
	function scrollerProfitLogs() {
		_super.call(this);
		this.skinParts = ["scrollerProfitLogs"];
		
		this.height = 965;
		this.width = 680;
		this.elementsContent = [this.scrollerProfitLogs_i()];
	}
	var _proto = scrollerProfitLogs.prototype;

	_proto.scrollerProfitLogs_i = function () {
		var t = new eui.Scroller();
		this.scrollerProfitLogs = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		return t;
	};
	return scrollerProfitLogs;
})(eui.Skin);generateEUI.paths['resource/garden_skin/miner/ScrollerRecordsIncome.exml'] = window.scrollerRecordsIncome = (function (_super) {
	__extends(scrollerRecordsIncome, _super);
	function scrollerRecordsIncome() {
		_super.call(this);
		this.skinParts = ["go_link","exchange","scroller_box","now_income","cumu_income","cumulativeText","scrollerRecordsIncome"];
		
		this.height = 1136;
		this.width = 680;
		this.elementsContent = [this.scrollerRecordsIncome_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.langData.scrollerRecordsIncome.winding"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.scrollerRecordsIncome.exchange_vsc"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.scrollerRecordsIncome.current"],[0],this._Label3,"text");
	}
	var _proto = scrollerRecordsIncome.prototype;

	_proto.scrollerRecordsIncome_i = function () {
		var t = new eui.Group();
		this.scrollerRecordsIncome = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Group1_i(),this.scroller_box_i(),this.cumulativeText_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 170;
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this.go_link_i(),this.exchange_i()];
		return t;
	};
	_proto.go_link_i = function () {
		var t = new eui.Group();
		this.go_link = t;
		t.height = 110;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 610;
		t.y = 14;
		t.elementsContent = [this._Image1_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "minerV1_json.a_n_2x";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.textColor = 0xffe5b8;
		t.verticalCenter = -4;
		return t;
	};
	_proto.exchange_i = function () {
		var t = new eui.Group();
		this.exchange = t;
		t.height = 110;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 610;
		t.x = 35;
		t.elementsContent = [this._Image2_i(),this._Label2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "minerV1_json.a_n_2x";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.textColor = 0xFFE5B8;
		t.verticalCenter = -4;
		return t;
	};
	_proto.scroller_box_i = function () {
		var t = new eui.Group();
		this.scroller_box = t;
		t.anchorOffsetY = 0;
		t.bottom = 173;
		t.left = 0;
		t.right = 0;
		t.top = 247;
		return t;
	};
	_proto.cumulativeText_i = function () {
		var t = new eui.Group();
		this.cumulativeText = t;
		t.anchorOffsetY = 0;
		t.height = 244;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.now_income_i(),this._Label3_i(),this.cumu_income_i(),this._Rect1_i()];
		return t;
	};
	_proto.now_income_i = function () {
		var t = new eui.Label();
		this.now_income = t;
		t.fontFamily = "PingFang-SC-Bold";
		t.horizontalCenter = 0;
		t.size = 48;
		t.text = "";
		t.textColor = 0xF76005;
		t.y = 40;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.textColor = 0x3C2405;
		t.y = 100;
		return t;
	};
	_proto.cumu_income_i = function () {
		var t = new eui.Label();
		this.cumu_income = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.right = 11;
		t.size = 24;
		t.text = "";
		t.textColor = 0x3C2405;
		t.y = 180;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 5;
		t.fillColor = 0xd9b078;
		t.height = 1;
		t.left = 0;
		t.right = 0;
		return t;
	};
	return scrollerRecordsIncome;
})(eui.Skin);generateEUI.paths['resource/garden_skin/miner/ScrollerRecordsUseList.exml'] = window.scrollerRecordsUseList = (function (_super) {
	__extends(scrollerRecordsUseList, _super);
	function scrollerRecordsUseList() {
		_super.call(this);
		this.skinParts = ["scroller_use"];
		
		this.height = 1136;
		this.width = 680;
		this.elementsContent = [this.scroller_use_i()];
	}
	var _proto = scrollerRecordsUseList.prototype;

	_proto.scroller_use_i = function () {
		var t = new eui.Scroller();
		this.scroller_use = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		return t;
	};
	return scrollerRecordsUseList;
})(eui.Skin);generateEUI.paths['resource/garden_skin/miner/Winding.exml'] = window.winding = (function (_super) {
	__extends(winding, _super);
	function winding() {
		_super.call(this);
		this.skinParts = ["wind_close","winding_num","the_1","the_2","iKnow1","btn_push_winding","winding","btn_close_wait","btn_success","wait_wind","btn_close_confirm","the_wallet","btn_confirm","confirm_wind"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.winding_i(),this.wait_wind_i(),this.confirm_wind_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.winding.winding_img"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.winding.enter_the_number"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.winding.winding_instructions"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.winding.submit"],[0],this.iKnow1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.winding.winding_img"],[0],this._Image6,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.winding.about_to_open"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.winding.confirm"],[0],this._Label4,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.winding.winding_img"],[0],this._Image9,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.winding.confirm"],[0],this._Label5,"text");
	}
	var _proto = winding.prototype;

	_proto.winding_i = function () {
		var t = new eui.Group();
		this.winding = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 662;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 592;
		t.elementsContent = [this._Image1_i(),this.wind_close_i(),this._Image2_i(),this._Label1_i(),this._Group1_i(),this._Group2_i(),this.btn_push_winding_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(132,172,335,61);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto.wind_close_i = function () {
		var t = new eui.Image();
		this.wind_close = t;
		t.height = 62;
		t.horizontalCenter = 265;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.delete";
		t.width = 62;
		t.x = 578;
		t.y = 40;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.y = 21;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.textColor = 0x3C2405;
		t.x = 80;
		t.y = 146;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 58;
		t.width = 424;
		t.x = 84;
		t.y = 203;
		t.elementsContent = [this._Image3_i(),this.winding_num_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58;
		t.scale9Grid = new egret.Rectangle(8,8,326,40);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_fra";
		t.width = 424;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.winding_num_i = function () {
		var t = new eui.EditableText();
		this.winding_num = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 58;
		t.text = "";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.width = 401;
		t.x = 20;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 192;
		t.horizontalCenter = -3.5;
		t.width = 421;
		t.y = 284;
		t.elementsContent = [this._Label2_i(),this.the_1_i(),this.the_2_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.textColor = 0x3C2405;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.the_1_i = function () {
		var t = new eui.Label();
		this.the_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 63;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "1、";
		t.textColor = 0x3C2405;
		t.width = 393;
		t.x = 0;
		t.y = 46;
		return t;
	};
	_proto.the_2_i = function () {
		var t = new eui.Label();
		this.the_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 63;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "";
		t.textColor = 0x3C2405;
		t.width = 393;
		t.x = 0;
		t.y = 116;
		return t;
	};
	_proto.btn_push_winding_i = function () {
		var t = new eui.Group();
		this.btn_push_winding = t;
		t.height = 65;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 170;
		t.y = 513;
		t.elementsContent = [this._Image4_i(),this.iKnow1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_btn";
		t.verticalCenter = 4;
		return t;
	};
	_proto.iKnow1_i = function () {
		var t = new eui.Label();
		this.iKnow1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = -1;
		return t;
	};
	_proto.wait_wind_i = function () {
		var t = new eui.Group();
		this.wait_wind = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 522;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 592;
		t.elementsContent = [this._Image5_i(),this.btn_close_wait_i(),this._Image6_i(),this._Label3_i(),this.btn_success_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(132,172,335,61);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto.btn_close_wait_i = function () {
		var t = new eui.Image();
		this.btn_close_wait = t;
		t.height = 62;
		t.horizontalCenter = 265;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.delete";
		t.width = 62;
		t.x = 578;
		t.y = 40;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		this._Image6 = t;
		t.horizontalCenter = 0;
		t.y = 21;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 63;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.width = 461;
		t.y = 218;
		return t;
	};
	_proto.btn_success_i = function () {
		var t = new eui.Group();
		this.btn_success = t;
		t.bottom = 100;
		t.height = 65;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 170;
		t.elementsContent = [this._Image7_i(),this._Label4_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_btn";
		t.verticalCenter = 4;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = -1;
		return t;
	};
	_proto.confirm_wind_i = function () {
		var t = new eui.Group();
		this.confirm_wind = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 522;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 592;
		t.elementsContent = [this._Image8_i(),this.btn_close_confirm_i(),this._Image9_i(),this.the_wallet_i(),this.btn_confirm_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(132,172,335,61);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto.btn_close_confirm_i = function () {
		var t = new eui.Image();
		this.btn_close_confirm = t;
		t.height = 62;
		t.horizontalCenter = 265;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.delete";
		t.width = 62;
		t.x = 578;
		t.y = 40;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		this._Image9 = t;
		t.horizontalCenter = 0;
		t.y = 21;
		return t;
	};
	_proto.the_wallet_i = function () {
		var t = new eui.Label();
		this.the_wallet = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 63;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "";
		t.textColor = 0x3C2405;
		t.width = 402;
		t.y = 212;
		return t;
	};
	_proto.btn_confirm_i = function () {
		var t = new eui.Group();
		this.btn_confirm = t;
		t.bottom = 100;
		t.height = 65;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 170;
		t.elementsContent = [this._Image10_i(),this._Label5_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.auc_btn";
		t.verticalCenter = 4;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		this._Label5 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = -1;
		return t;
	};
	return winding;
})(eui.Skin);generateEUI.paths['resource/garden_skin/miner/Working.exml'] = window.working = (function (_super) {
	__extends(working, _super);
	function working() {
		_super.call(this);
		this.skinParts = ["btn_return","rule","hp_txt","hp_group","spd_txt","spd_group","gain_txt","gain_group","status_img","status_discrip","status_txt","status_tip","equips","minerTools","theGoods","records","chara","nav","full_mask","group_adren","group_miner","group_basket","basket","miner_status","tips_text","ok","tips_close","toWallet","to_wallet","group_tips","group_working"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.group_working_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.working.back"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.working.hp_img"],[0],this._Image5,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.working.spd_img"],[0],this._Image6,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.working.gainbg_img"],[0],this._Image7,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.working.equips_img"],[0],this.equips,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.working.thetools_img"],[0],this.minerTools,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.working.thegoods_img"],[0],this.theGoods,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.working.records_img"],[0],this.records,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.working.chara_img"],[0],this.chara,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.tips.panel_head"],[0],this._Image9,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.workingTs.ok"],[0],this.ok,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.workingTs.toWallet"],[0],this.toWallet,"text");
	}
	var _proto = working.prototype;

	_proto.group_working_i = function () {
		var t = new eui.Group();
		this.group_working = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.btn_return_i(),this.rule_i(),this.hp_group_i(),this.spd_group_i(),this.gain_group_i(),this.status_tip_i(),this.nav_i(),this.full_mask_i(),this.group_adren_i(),this.group_miner_i(),this.group_basket_i(),this.basket_i(),this.miner_status_i(),this.group_tips_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "minerV1_json.minerBG";
		t.top = 0;
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Group();
		this.btn_return = t;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.left = 13;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 180;
		t.y = 50;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "minerV1_json.fh_2x";
		t.x = 12;
		t.y = 9;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang-SC-Bold";
		t.size = 34;
		t.x = 74;
		t.y = 23;
		return t;
	};
	_proto.rule_i = function () {
		var t = new eui.Group();
		this.rule = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 84;
		t.y = 68;
		t.elementsContent = [this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "minerV1_json.-_bj_2x";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "minerV1_json.-_2x";
		t.x = 24;
		t.y = 6;
		return t;
	};
	_proto.hp_group_i = function () {
		var t = new eui.Group();
		this.hp_group = t;
		t.height = 53;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 272;
		t.y = 125;
		t.elementsContent = [this._Image5_i(),this.hp_txt_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		this._Image5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.hp_txt_i = function () {
		var t = new eui.Label();
		this.hp_txt = t;
		t.bold = true;
		t.fontFamily = "PingFang-SC-Heavy";
		t.horizontalCenter = 43;
		t.size = 25;
		t.text = "";
		t.textColor = 0x2F1F10;
		t.verticalCenter = 0;
		return t;
	};
	_proto.spd_group_i = function () {
		var t = new eui.Group();
		this.spd_group = t;
		t.height = 53;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 272;
		t.y = 195;
		t.elementsContent = [this._Image6_i(),this.spd_txt_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		this._Image6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.spd_txt_i = function () {
		var t = new eui.Label();
		this.spd_txt = t;
		t.bold = true;
		t.fontFamily = "PingFang-SC-Heavy";
		t.horizontalCenter = 43;
		t.size = 25;
		t.text = "";
		t.textColor = 0x2F1F10;
		t.verticalCenter = 0;
		return t;
	};
	_proto.gain_group_i = function () {
		var t = new eui.Group();
		this.gain_group = t;
		t.height = 53;
		t.right = -1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 272;
		t.y = 265;
		t.elementsContent = [this._Image7_i(),this.gain_txt_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		this._Image7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gain_txt_i = function () {
		var t = new eui.Label();
		this.gain_txt = t;
		t.bold = true;
		t.fontFamily = "PingFang-SC-Heavy";
		t.horizontalCenter = 43.5;
		t.size = 25;
		t.text = "";
		t.textColor = 0x2F1F10;
		t.verticalCenter = -2;
		return t;
	};
	_proto.status_tip_i = function () {
		var t = new eui.Group();
		this.status_tip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 110;
		t.horizontalCenter = 16.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 397;
		t.y = 318;
		t.elementsContent = [this.status_img_i(),this.status_discrip_i(),this.status_txt_i()];
		return t;
	};
	_proto.status_img_i = function () {
		var t = new eui.Image();
		this.status_img = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.status_discrip_i = function () {
		var t = new eui.Label();
		this.status_discrip = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "";
		t.x = 101;
		t.y = 25;
		return t;
	};
	_proto.status_txt_i = function () {
		var t = new eui.Label();
		this.status_txt = t;
		t.fontFamily = "PingFang SC";
		t.size = 22;
		t.text = "";
		t.textColor = 0x000000;
		t.x = 103;
		t.y = 63;
		return t;
	};
	_proto.nav_i = function () {
		var t = new eui.Group();
		this.nav = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 20;
		t.height = 142;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 700;
		t.elementsContent = [this.equips_i(),this.minerTools_i(),this.theGoods_i(),this.records_i(),this.chara_i()];
		return t;
	};
	_proto.equips_i = function () {
		var t = new eui.Image();
		this.equips = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 19;
		t.y = 14;
		return t;
	};
	_proto.minerTools_i = function () {
		var t = new eui.Image();
		this.minerTools = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 153;
		t.y = 23;
		return t;
	};
	_proto.theGoods_i = function () {
		var t = new eui.Image();
		this.theGoods = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 280.5;
		t.y = 27;
		return t;
	};
	_proto.records_i = function () {
		var t = new eui.Image();
		this.records = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 410;
		t.y = 29;
		return t;
	};
	_proto.chara_i = function () {
		var t = new eui.Image();
		this.chara = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 518;
		t.y = 23;
		return t;
	};
	_proto.full_mask_i = function () {
		var t = new eui.Rect();
		this.full_mask = t;
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.group_adren_i = function () {
		var t = new eui.Group();
		this.group_adren = t;
		t.horizontalCenter = 50;
		t.verticalCenter = 90;
		return t;
	};
	_proto.group_miner_i = function () {
		var t = new eui.Group();
		this.group_miner = t;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 50;
		t.verticalCenter = 90;
		return t;
	};
	_proto.group_basket_i = function () {
		var t = new eui.Group();
		this.group_basket = t;
		t.right = 147;
		t.y = 980;
		return t;
	};
	_proto.basket_i = function () {
		var t = new eui.Image();
		this.basket = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 180;
		t.right = 43;
		t.source = "minerV1_json.kl_2x";
		t.visible = false;
		t.width = 208;
		t.y = 990;
		return t;
	};
	_proto.miner_status_i = function () {
		var t = new eui.Image();
		this.miner_status = t;
		t.horizontalCenter = 166;
		t.source = "minerV1_json.status_1";
		t.verticalCenter = -138;
		t.visible = false;
		return t;
	};
	_proto.group_tips_i = function () {
		var t = new eui.Group();
		this.group_tips = t;
		t.height = 430;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 617;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this.tips_text_i(),this.tips_close_i(),this.to_wallet_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(53,94,511,43);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		this._Image9 = t;
		t.horizontalCenter = 0;
		t.top = 22;
		return t;
	};
	_proto.tips_text_i = function () {
		var t = new eui.Label();
		this.tips_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 198;
		t.horizontalCenter = 0;
		t.lineSpacing = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x3c2405;
		t.verticalAlign = "middle";
		t.verticalCenter = -10;
		t.width = 473;
		t.y = 133;
		return t;
	};
	_proto.tips_close_i = function () {
		var t = new eui.Group();
		this.tips_close = t;
		t.height = 61;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 175;
		t.y = 310;
		t.elementsContent = [this._Image10_i(),this.ok_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 69;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green_1";
		t.verticalCenter = 4;
		t.width = 175;
		return t;
	};
	_proto.ok_i = function () {
		var t = new eui.Label();
		this.ok = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0xffe5b8;
		t.verticalAlign = "middle";
		t.verticalCenter = -1;
		return t;
	};
	_proto.to_wallet_i = function () {
		var t = new eui.Group();
		this.to_wallet = t;
		t.height = 61;
		t.horizontalCenter = 124;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 175;
		t.y = 310;
		t.elementsContent = [this._Image11_i(),this.toWallet_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 69;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green_1";
		t.verticalCenter = 4;
		t.width = 175;
		return t;
	};
	_proto.toWallet_i = function () {
		var t = new eui.Label();
		this.toWallet = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0xffe5b8;
		t.verticalAlign = "middle";
		t.verticalCenter = -1;
		return t;
	};
	return working;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/AuctionRule.exml'] = window.auctionRule = (function (_super) {
	__extends(auctionRule, _super);
	function auctionRule() {
		_super.call(this);
		this.skinParts = ["img_head","btn_know","rule_content"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.langData.auctionRule.img_head"],[0],this.img_head,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.langData.auctionRule.got_it"],[0],this._Label1,"text");
	}
	var _proto = auctionRule.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.3;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 1066;
		t.horizontalCenter = 0;
		t.verticalCenter = -10;
		t.width = 590;
		t.elementsContent = [this._Image1_i(),this.img_head_i(),this.rule_content_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = -24;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(65,109,462,164);
		t.source = "wutong_json.tips_panel";
		t.top = -20;
		return t;
	};
	_proto.img_head_i = function () {
		var t = new eui.Image();
		this.img_head = t;
		t.horizontalCenter = 0;
		t.y = 1;
		return t;
	};
	_proto.rule_content_i = function () {
		var t = new eui.Group();
		this.rule_content = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 771;
		t.horizontalCenter = 0;
		t.width = 474;
		t.y = 115;
		t.elementsContent = [this.btn_know_i()];
		return t;
	};
	_proto.btn_know_i = function () {
		var t = new eui.Group();
		this.btn_know = t;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.width = 170;
		t.y = 829;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		t.width = 170;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.horizontalCenter = 0;
		t.textColor = 0xffe5b8;
		t.verticalCenter = -3;
		return t;
	};
	return auctionRule;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/DynamicList.exml'] = window.dynamicList = (function (_super) {
	__extends(dynamicList, _super);
	function dynamicList() {
		_super.call(this);
		this.skinParts = ["dyn_one_text","dyn_one_time","dyn_one","dyn_day","dyn_list"];
		
		this.height = 90;
		this.width = 505;
		this.elementsContent = [this.dyn_list_i()];
	}
	var _proto = dynamicList.prototype;

	_proto.dyn_list_i = function () {
		var t = new eui.Group();
		this.dyn_list = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.dyn_one_i(),this.dyn_day_i()];
		return t;
	};
	_proto.dyn_one_i = function () {
		var t = new eui.Group();
		this.dyn_one = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 46;
		t.horizontalCenter = 0;
		t.width = 505;
		t.elementsContent = [this.dyn_one_text_i(),this.dyn_one_time_i()];
		return t;
	};
	_proto.dyn_one_text_i = function () {
		var t = new eui.Label();
		this.dyn_one_text = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 23;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x3C2405;
		t.verticalCenter = 0;
		t.width = 361;
		return t;
	};
	_proto.dyn_one_time_i = function () {
		var t = new eui.Label();
		this.dyn_one_time = t;
		t.fontFamily = "PingFang-SC-Bold";
		t.right = 0;
		t.size = 24;
		t.text = "";
		t.textColor = 0x3C2405;
		t.verticalCenter = 0;
		return t;
	};
	_proto.dyn_day_i = function () {
		var t = new eui.Label();
		this.dyn_day = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Heavy";
		t.height = 35;
		t.left = 0;
		t.size = 24;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.top = 0;
		t.verticalAlign = "bottom";
		return t;
	};
	return dynamicList;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/Empty.exml'] = window.empty = (function (_super) {
	__extends(empty, _super);
	function empty() {
		_super.call(this);
		this.skinParts = ["empty_text","empty"];
		
		this.height = 80;
		this.width = 421;
		this.elementsContent = [this.empty_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.empty.empty_text"],[0],this.empty_text,"text");
	}
	var _proto = empty.prototype;

	_proto.empty_i = function () {
		var t = new eui.Group();
		this.empty = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.empty_text_i()];
		return t;
	};
	_proto.empty_text_i = function () {
		var t = new eui.Label();
		this.empty_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 0;
		t.right = 0;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0x8b2b00;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return empty;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/FriendNew.exml'] = window.friendNew = (function (_super) {
	__extends(friendNew, _super);
	function friendNew() {
		_super.call(this);
		this.skinParts = ["status_img","more_text","friend_new"];
		
		this.height = 78;
		this.width = 106;
		this.elementsContent = [this.friend_new_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.friendNew.more_text"],[0],this.more_text,"text");
	}
	var _proto = friendNew.prototype;

	_proto.friend_new_i = function () {
		var t = new eui.Group();
		this.friend_new = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 106;
		t.elementsContent = [this.status_img_i(),this.more_text_i()];
		return t;
	};
	_proto.status_img_i = function () {
		var t = new eui.Image();
		this.status_img = t;
		t.bottom = 0;
		t.height = 40;
		t.right = 0;
		t.source = "";
		t.width = 40;
		return t;
	};
	_proto.more_text_i = function () {
		var t = new eui.Label();
		this.more_text = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -14;
		t.size = 20;
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	return friendNew;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/FruitList.exml'] = window.fruitList = (function (_super) {
	__extends(fruitList, _super);
	function fruitList() {
		_super.call(this);
		this.skinParts = ["fru_icon","fru_number","fru_state","fru_time","fruit_list"];
		
		this.height = 70;
		this.width = 505;
		this.elementsContent = [this.fruit_list_i()];
	}
	var _proto = fruitList.prototype;

	_proto.fruit_list_i = function () {
		var t = new eui.Group();
		this.fruit_list = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 505;
		t.elementsContent = [this.fru_icon_i(),this.fru_number_i(),this.fru_state_i(),this.fru_time_i()];
		return t;
	};
	_proto.fru_icon_i = function () {
		var t = new eui.Image();
		this.fru_icon = t;
		t.anchorOffsetX = 0;
		t.left = 0;
		t.source = "wutong_json.fruit_1";
		t.verticalCenter = 0;
		t.width = 46;
		return t;
	};
	_proto.fru_number_i = function () {
		var t = new eui.Label();
		this.fru_number = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = -158;
		t.size = 24;
		t.text = "";
		t.textColor = 0x3C2405;
		t.verticalCenter = 0;
		return t;
	};
	_proto.fru_state_i = function () {
		var t = new eui.Label();
		this.fru_state = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = -17;
		t.size = 20;
		t.text = "";
		t.textColor = 0x3C2405;
		t.verticalCenter = 0;
		return t;
	};
	_proto.fru_time_i = function () {
		var t = new eui.Label();
		this.fru_time = t;
		t.fontFamily = "PingFang-SC-Bold";
		t.horizontalCenter = 204;
		t.size = 24;
		t.text = "";
		t.textColor = 0xfc3d02;
		t.verticalCenter = 0;
		return t;
	};
	return fruitList;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/FullMask.exml'] = window.fullMask = (function (_super) {
	__extends(fullMask, _super);
	function fullMask() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i()];
	}
	var _proto = fullMask.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	return fullMask;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/GoPayGB.exml'] = window.goPayGB = (function (_super) {
	__extends(goPayGB, _super);
	var goPayGB$Skin8 = 	(function (_super) {
		__extends(goPayGB$Skin8, _super);
		function goPayGB$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = goPayGB$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wutong_json.delete";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return goPayGB$Skin8;
	})(eui.Skin);

	function goPayGB() {
		_super.call(this);
		this.skinParts = ["btn_close_goPay","notEnough","mgCoin","wait","btn_later_goPay","go","btn_up_goPay","goPay"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.goPay_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.goPayGB.notEnough"],[0],this.notEnough,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.goPayGB.wait"],[0],this.wait,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.goPayGB.go"],[0],this.go,"text");
	}
	var _proto = goPayGB.prototype;

	_proto.goPay_i = function () {
		var t = new eui.Group();
		this.goPay = t;
		t.height = 421;
		t.horizontalCenter = 0;
		t.verticalCenter = -31;
		t.width = 630;
		t.elementsContent = [this._Image1_i(),this.btn_close_goPay_i(),this.mgCoin_i(),this.btn_later_goPay_i(),this.btn_up_goPay_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(57,53,29,25);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.frame_green_1";
		t.top = 0;
		return t;
	};
	_proto.btn_close_goPay_i = function () {
		var t = new eui.Button();
		this.btn_close_goPay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.horizontalCenter = 286;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -198;
		t.width = 62;
		t.x = 910;
		t.y = -31;
		t.skinName = goPayGB$Skin8;
		return t;
	};
	_proto.mgCoin_i = function () {
		var t = new eui.Group();
		this.mgCoin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 214;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -50;
		t.width = 493;
		t.elementsContent = [this.notEnough_i()];
		return t;
	};
	_proto.notEnough_i = function () {
		var t = new eui.Label();
		this.notEnough = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 214;
		t.horizontalCenter = 0;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0x8b2b00;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 493;
		return t;
	};
	_proto.btn_later_goPay_i = function () {
		var t = new eui.Group();
		this.btn_later_goPay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 108;
		t.width = 166;
		t.x = 152;
		t.y = 521;
		t.elementsContent = [this._Image2_i(),this.wait_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto.wait_i = function () {
		var t = new eui.Label();
		this.wait = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0xffe5b8;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn_up_goPay_i = function () {
		var t = new eui.Group();
		this.btn_up_goPay = t;
		t.height = 60;
		t.horizontalCenter = 134;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 108;
		t.visible = false;
		t.width = 166;
		t.x = 568;
		t.y = 521;
		t.elementsContent = [this._Image3_i(),this.go_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto.go_i = function () {
		var t = new eui.Label();
		this.go = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 30;
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return goPayGB;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/Index.exml'] = window.index = (function (_super) {
	__extends(index, _super);
	var index$Skin9 = 	(function (_super) {
		__extends(index$Skin9, _super);
		function index$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = index$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wutong_json.delete";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return index$Skin9;
	})(eui.Skin);

	var index$Skin10 = 	(function (_super) {
		__extends(index$Skin10, _super);
		function index$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = index$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wutong_json.delete";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return index$Skin10;
	})(eui.Skin);

	var index$Skin11 = 	(function (_super) {
		__extends(index$Skin11, _super);
		function index$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = index$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wutong_json.delete";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return index$Skin11;
	})(eui.Skin);

	var index$Skin12 = 	(function (_super) {
		__extends(index$Skin12, _super);
		function index$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = index$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wutong_json.delete";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return index$Skin12;
	})(eui.Skin);

	function index() {
		_super.call(this);
		this.skinParts = ["bg","go_back","group_top","ph_shadow","tree","fruit","protect_count","cantSteal","group_protect","icon_tip_text","icon_tip","chart_content","group_tips","group_mc","group_ph","group_tree","nickname","xp_bar","xp_text","mature_count","mature_img","user_lv","group_avatar","head_img_info","friends_news","lastNews","nav","group_news","btn_close_success","conf_txt","confirm","btn_dete_success","success","btn_close_open","confirmTips","justWait","btn_gb_confirm_open","btn_shared_confirm_open","con_open","confirm_open","activateTip","btn_close_open_hint","open_later","btn_later_open_hint","open_now","btn_up_open_hint","open","open_hint","btn_close_fail","fail_img","fail_txt","mgCoin","btn_conf_fail","fail","group_index"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.bg_i(),this.group_index_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.index.cantSteal"],[0],this.cantSteal,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.index.lastNews"],[0],this.lastNews,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.index.confirm"],[0],this.confirm,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.index.mgb"],[0],this.justWait,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.index.shared"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.index.open"],[0],this.con_open,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.index.open_later"],[0],this.open_later,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.index.open_now"],[0],this.open_now,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.index.open"],[0],this.open,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.index.confirm"],[0],this._Label3,"text");
	}
	var _proto = index.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.height = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg_d_png";
		t.top = 0;
		t.width = 0;
		return t;
	};
	_proto.group_index_i = function () {
		var t = new eui.Group();
		this.group_index = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 1;
		t.right = -1;
		t.top = 0;
		t.elementsContent = [this.group_top_i(),this.group_tree_i(),this.head_img_info_i(),this.group_news_i(),this.success_i(),this.confirm_open_i(),this.open_hint_i(),this.fail_i()];
		return t;
	};
	_proto.group_top_i = function () {
		var t = new eui.Group();
		this.group_top = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 966;
		t.left = 0;
		t.top = 0;
		t.width = 750;
		t.elementsContent = [this.go_back_i()];
		return t;
	};
	_proto.go_back_i = function () {
		var t = new eui.Group();
		this.go_back = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.left = 12;
		t.verticalCenter = -377;
		t.width = 78;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "wutong_json.btn_return";
		t.top = 0;
		return t;
	};
	_proto.group_tree_i = function () {
		var t = new eui.Group();
		this.group_tree = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 744;
		t.horizontalCenter = 0;
		t.verticalCenter = -77;
		t.width = 750;
		t.elementsContent = [this.ph_shadow_i(),this._Group1_i(),this.group_ph_i()];
		return t;
	};
	_proto.ph_shadow_i = function () {
		var t = new eui.Image();
		this.ph_shadow = t;
		t.source = "yinying_png";
		t.visible = false;
		t.x = 509;
		t.y = 691;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.elementsContent = [this.tree_i(),this.fruit_i(),this.group_protect_i(),this.icon_tip_i()];
		return t;
	};
	_proto.tree_i = function () {
		var t = new eui.Image();
		this.tree = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 0;
		t.x = 257;
		return t;
	};
	_proto.fruit_i = function () {
		var t = new eui.Image();
		this.fruit = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 0;
		t.x = 257;
		return t;
	};
	_proto.group_protect_i = function () {
		var t = new eui.Group();
		this.group_protect = t;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 200;
		t.y = -150;
		t.elementsContent = [this._Rect1_i(),this.protect_count_i(),this.cantSteal_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 80;
		t.fillAlpha = 0.18;
		t.fillColor = 0xffffff;
		t.height = 40;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 145;
		return t;
	};
	_proto.protect_count_i = function () {
		var t = new eui.Label();
		this.protect_count = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 23;
		t.text = "";
		t.textColor = 0x3c2405;
		t.verticalCenter = 0;
		return t;
	};
	_proto.cantSteal_i = function () {
		var t = new eui.Label();
		this.cantSteal = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.textColor = 0x3c2405;
		t.y = -33;
		return t;
	};
	_proto.icon_tip_i = function () {
		var t = new eui.Group();
		this.icon_tip = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 303;
		t.y = -230;
		t.elementsContent = [this._Image2_i(),this.icon_tip_text_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "wutong_json.icon_gray_2";
		t.verticalCenter = 0;
		return t;
	};
	_proto.icon_tip_text_i = function () {
		var t = new eui.Label();
		this.icon_tip_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 30;
		t.horizontalCenter = 0;
		t.size = 18;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 303;
		return t;
	};
	_proto.group_ph_i = function () {
		var t = new eui.Group();
		this.group_ph = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.right = 65;
		t.elementsContent = [this.group_tips_i(),this.group_mc_i()];
		return t;
	};
	_proto.group_tips_i = function () {
		var t = new eui.Group();
		this.group_tips = t;
		t.height = 93;
		t.visible = false;
		t.width = 269;
		t.x = -135;
		t.y = -360;
		t.elementsContent = [this._Image3_i(),this.chart_content_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(43,31,187,12);
		t.source = "auction_json.chart";
		t.top = 0;
		return t;
	};
	_proto.chart_content_i = function () {
		var t = new eui.Label();
		this.chart_content = t;
		t.anchorOffsetY = 0;
		t.left = 30;
		t.right = 32;
		t.size = 20;
		t.text = "";
		t.textColor = 0x140707;
		t.verticalCenter = -12;
		return t;
	};
	_proto.group_mc_i = function () {
		var t = new eui.Group();
		this.group_mc = t;
		t.alpha = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		return t;
	};
	_proto.head_img_info_i = function () {
		var t = new eui.Group();
		this.head_img_info = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 116;
		t.right = 0;
		t.visible = false;
		t.width = 257;
		t.y = 90;
		t.elementsContent = [this._Image4_i(),this.nickname_i(),this._Rect2_i(),this.xp_bar_i(),this.xp_text_i(),this.mature_count_i(),this.mature_img_i(),this.group_avatar_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "wutong_json.farem_white_head";
		t.top = 0;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.bold = true;
		t.fontFamily = "PingFang-SC-Heavy";
		t.height = 24;
		t.left = 127;
		t.size = 22;
		t.text = "";
		t.textColor = 0x3c2405;
		t.verticalCenter = -31;
		t.width = 150;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 30;
		t.fillColor = 0xc8c2af;
		t.height = 24;
		t.horizontalCenter = 59;
		t.verticalCenter = 0;
		t.width = 124;
		return t;
	};
	_proto.xp_bar_i = function () {
		var t = new eui.Rect();
		this.xp_bar = t;
		t.anchorOffsetX = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 30;
		t.fillColor = 0xf0ba00;
		t.height = 22;
		t.verticalCenter = 0;
		t.width = 0;
		t.x = 126;
		return t;
	};
	_proto.xp_text_i = function () {
		var t = new eui.Label();
		this.xp_text = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 57;
		t.size = 18;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	_proto.mature_count_i = function () {
		var t = new eui.Label();
		this.mature_count = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.size = 18;
		t.text = "";
		t.textColor = 0xf0ba00;
		t.x = 144;
		t.y = 80;
		return t;
	};
	_proto.mature_img_i = function () {
		var t = new eui.Image();
		this.mature_img = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "wutong_json.fruit_min";
		t.verticalCenter = 30;
		t.width = 16;
		return t;
	};
	_proto.group_avatar_i = function () {
		var t = new eui.Group();
		this.group_avatar = t;
		t.height = 92;
		t.width = 68;
		t.x = 39;
		t.y = 12;
		t.elementsContent = [this.user_lv_i()];
		return t;
	};
	_proto.user_lv_i = function () {
		var t = new eui.Image();
		this.user_lv = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.group_news_i = function () {
		var t = new eui.Group();
		this.group_news = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this._Image5_i(),this.friends_news_i(),this.lastNews_i(),this.nav_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.farem_white_2";
		t.top = 0;
		return t;
	};
	_proto.friends_news_i = function () {
		var t = new eui.Group();
		this.friends_news = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 138;
		t.horizontalCenter = 0;
		return t;
	};
	_proto.lastNews_i = function () {
		var t = new eui.Label();
		this.lastNews = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "PingFang-SC-Bold";
		t.height = 61;
		t.left = 45;
		t.size = 34;
		t.textColor = 0x000000;
		t.top = 99;
		t.verticalAlign = "middle";
		t.width = 390;
		return t;
	};
	_proto.nav_i = function () {
		var t = new eui.Group();
		this.nav = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 130;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = -8;
		return t;
	};
	_proto.success_i = function () {
		var t = new eui.Group();
		this.success = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 486;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 630;
		t.elementsContent = [this._Image6_i(),this.btn_close_success_i(),this._Group2_i(),this.btn_dete_success_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(60,49,23,28);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.frame_green_1";
		t.top = 0;
		return t;
	};
	_proto.btn_close_success_i = function () {
		var t = new eui.Button();
		this.btn_close_success = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.horizontalCenter = 283;
		t.label = "";
		t.verticalCenter = -232;
		t.width = 64;
		t.skinName = index$Skin9;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 271;
		t.horizontalCenter = 0;
		t.width = 435;
		t.y = 44;
		t.elementsContent = [this.conf_txt_i(),this._Image7_i()];
		return t;
	};
	_proto.conf_txt_i = function () {
		var t = new eui.Label();
		this.conf_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 1;
		t.lineSpacing = 21;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x8b2b00;
		t.verticalAlign = "middle";
		t.verticalCenter = 61;
		t.x = 217;
		t.y = 187;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "wutong_json.pay_ok";
		t.y = 18;
		return t;
	};
	_proto.btn_dete_success_i = function () {
		var t = new eui.Group();
		this.btn_dete_success = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.horizontalCenter = 0;
		t.verticalCenter = 139;
		t.width = 160;
		t.elementsContent = [this._Image8_i(),this.confirm_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 66;
		t.horizontalCenter = 0;
		t.source = "wutong_json.btn_green";
		t.verticalCenter = 0;
		t.width = 160;
		return t;
	};
	_proto.confirm_i = function () {
		var t = new eui.Label();
		this.confirm = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0xffe5b8;
		t.verticalAlign = "middle";
		t.verticalCenter = -4;
		return t;
	};
	_proto.confirm_open_i = function () {
		var t = new eui.Group();
		this.confirm_open = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 486;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 630;
		t.elementsContent = [this._Image9_i(),this.btn_close_open_i(),this.confirmTips_i(),this.btn_gb_confirm_open_i(),this.btn_shared_confirm_open_i(),this.con_open_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(58,111,498,19);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		t.width = 0;
		return t;
	};
	_proto.btn_close_open_i = function () {
		var t = new eui.Button();
		this.btn_close_open = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68;
		t.horizontalCenter = 280;
		t.label = "";
		t.verticalCenter = -165;
		t.width = 70;
		t.skinName = index$Skin10;
		return t;
	};
	_proto.confirmTips_i = function () {
		var t = new eui.Group();
		this.confirmTips = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 179;
		t.horizontalCenter = 0;
		t.verticalCenter = -35;
		t.width = 480;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.text = "请选择以下方式开通！";
		t.textAlign = "center";
		t.textColor = 0x3c2405;
		t.y = 54;
		return t;
	};
	_proto.btn_gb_confirm_open_i = function () {
		var t = new eui.Group();
		this.btn_gb_confirm_open = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.horizontalCenter = -159;
		t.verticalCenter = 122;
		t.width = 160;
		t.elementsContent = [this._Image10_i(),this.justWait_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto.justWait_i = function () {
		var t = new eui.Label();
		this.justWait = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0xffe5b8;
		t.verticalCenter = -4;
		return t;
	};
	_proto.btn_shared_confirm_open_i = function () {
		var t = new eui.Group();
		this.btn_shared_confirm_open = t;
		t.height = 66;
		t.horizontalCenter = 147;
		t.verticalCenter = 123;
		t.width = 160;
		t.elementsContent = [this._Image11_i(),this._Label2_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0.5;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0xffe5b8;
		t.verticalCenter = -4;
		return t;
	};
	_proto.con_open_i = function () {
		var t = new eui.Image();
		this.con_open = t;
		t.horizontalCenter = -3;
		t.y = 15;
		return t;
	};
	_proto.open_hint_i = function () {
		var t = new eui.Group();
		this.open_hint = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 510;
		t.horizontalCenter = 0;
		t.verticalCenter = 1;
		t.visible = false;
		t.width = 630;
		t.elementsContent = [this._Image12_i(),this.activateTip_i(),this.btn_close_open_hint_i(),this.btn_later_open_hint_i(),this.btn_up_open_hint_i(),this.open_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(48,182,494,42);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		t.width = 0;
		return t;
	};
	_proto.activateTip_i = function () {
		var t = new eui.Group();
		this.activateTip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 160;
		t.height = 240;
		t.horizontalCenter = 0;
		t.top = 141;
		t.width = 480;
		return t;
	};
	_proto.btn_close_open_hint_i = function () {
		var t = new eui.Button();
		this.btn_close_open_hint = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.horizontalCenter = 283;
		t.label = "";
		t.width = 65;
		t.y = 40;
		t.skinName = index$Skin11;
		return t;
	};
	_proto.btn_later_open_hint_i = function () {
		var t = new eui.Group();
		this.btn_later_open_hint = t;
		t.bottom = 72;
		t.height = 66;
		t.left = 82;
		t.width = 160;
		t.elementsContent = [this._Image13_i(),this.open_later_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto.open_later_i = function () {
		var t = new eui.Label();
		this.open_later = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0xffe5b8;
		t.verticalAlign = "middle";
		t.verticalCenter = -4;
		return t;
	};
	_proto.btn_up_open_hint_i = function () {
		var t = new eui.Group();
		this.btn_up_open_hint = t;
		t.bottom = 72;
		t.height = 66;
		t.right = 104;
		t.width = 160;
		t.elementsContent = [this._Image14_i(),this.open_now_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "wutong_json.btn_green_1";
		t.top = 0;
		return t;
	};
	_proto.open_now_i = function () {
		var t = new eui.Label();
		this.open_now = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0xffe5b8;
		t.verticalCenter = -4;
		return t;
	};
	_proto.open_i = function () {
		var t = new eui.Image();
		this.open = t;
		t.horizontalCenter = -3;
		t.y = 15;
		return t;
	};
	_proto.fail_i = function () {
		var t = new eui.Group();
		this.fail = t;
		t.height = 486;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 630;
		t.elementsContent = [this._Image15_i(),this.btn_close_fail_i(),this.mgCoin_i(),this.btn_conf_fail_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(62,53,19,21);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.frame_green_1";
		t.top = 0;
		return t;
	};
	_proto.btn_close_fail_i = function () {
		var t = new eui.Button();
		this.btn_close_fail = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 280;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -229;
		t.width = 70;
		t.x = 910;
		t.y = -31;
		t.skinName = index$Skin12;
		return t;
	};
	_proto.mgCoin_i = function () {
		var t = new eui.Group();
		this.mgCoin = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 240;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = -71;
		t.width = 480;
		t.elementsContent = [this.fail_img_i(),this.fail_txt_i()];
		return t;
	};
	_proto.fail_img_i = function () {
		var t = new eui.Image();
		this.fail_img = t;
		t.horizontalCenter = 0;
		t.source = "wutong_json.pay_low";
		t.y = 10;
		return t;
	};
	_proto.fail_txt_i = function () {
		var t = new eui.Label();
		this.fail_txt = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.text = "支付失败！";
		t.textAlign = "center";
		t.textColor = 0x3c2405;
		t.y = 176;
		return t;
	};
	_proto.btn_conf_fail_i = function () {
		var t = new eui.Group();
		this.btn_conf_fail = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 90;
		t.height = 66;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 160;
		t.elementsContent = [this._Image16_i(),this._Label3_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0xffe5b8;
		t.verticalCenter = -4;
		return t;
	};
	return index;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/InteractiveList.exml'] = window.interactiveList = (function (_super) {
	__extends(interactiveList, _super);
	function interactiveList() {
		_super.call(this);
		this.skinParts = ["username","treeLevel","countdown","top_img","water_img","interactive_list"];
		
		this.height = 128;
		this.width = 570;
		this.elementsContent = [this.interactive_list_i()];
	}
	var _proto = interactiveList.prototype;

	_proto.interactive_list_i = function () {
		var t = new eui.Group();
		this.interactive_list = t;
		t.anchorOffsetX = 0;
		t.height = 128;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 570;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.username_i(),this.treeLevel_i(),this.countdown_i(),this.top_img_i(),this.water_img_i()];
		return t;
	};
	_proto.username_i = function () {
		var t = new eui.Label();
		this.username = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Heavy";
		t.horizontalCenter = -21.5;
		t.size = 30;
		t.text = "";
		t.textColor = 0x3C2405;
		t.verticalCenter = -23.5;
		t.width = 265;
		return t;
	};
	_proto.treeLevel_i = function () {
		var t = new eui.Label();
		this.treeLevel = t;
		t.fontFamily = "Adobe Heiti Std R";
		t.horizontalCenter = -122;
		t.size = 22;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x3C2405;
		t.verticalCenter = 23;
		return t;
	};
	_proto.countdown_i = function () {
		var t = new eui.Label();
		this.countdown = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 38;
		t.right = 79;
		t.size = 18;
		t.text = "";
		t.textAlign = "right";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.verticalCenter = -22;
		t.visible = false;
		t.width = 130;
		return t;
	};
	_proto.top_img_i = function () {
		var t = new eui.Image();
		this.top_img = t;
		t.height = 36;
		t.right = 36;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 24;
		t.visible = false;
		t.width = 36;
		return t;
	};
	_proto.water_img_i = function () {
		var t = new eui.Image();
		this.water_img = t;
		t.height = 36;
		t.right = 36;
		t.source = "wutong_json.water_1";
		t.visible = false;
		t.width = 36;
		t.y = 71;
		return t;
	};
	return interactiveList;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/InteractiveSkin.exml'] = window.interactive = (function (_super) {
	__extends(interactive, _super);
	function interactive() {
		_super.call(this);
		this.skinParts = ["btn_close","head_img","group_list","group_interactive"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.group_interactive_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.interactive.head_img"],[0],this.head_img,"source");
	}
	var _proto = interactive.prototype;

	_proto.group_interactive_i = function () {
		var t = new eui.Group();
		this.group_interactive = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1056;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 656;
		t.elementsContent = [this._Image1_i(),this.btn_close_i(),this.head_img_i(),this.group_list_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(114,140,350,59);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Image();
		this.btn_close = t;
		t.height = 62;
		t.right = 0;
		t.source = "wutong_json.delete";
		t.top = 45;
		t.width = 62;
		return t;
	};
	_proto.head_img_i = function () {
		var t = new eui.Image();
		this.head_img = t;
		t.horizontalCenter = 0;
		t.top = 14;
		return t;
	};
	_proto.group_list_i = function () {
		var t = new eui.Group();
		this.group_list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 89;
		t.height = 860;
		t.horizontalCenter = 0;
		t.width = 570;
		return t;
	};
	return interactive;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/InterList.exml'] = window.toolsList = (function (_super) {
	__extends(toolsList, _super);
	function toolsList() {
		_super.call(this);
		this.skinParts = ["list_image","list_num","list_name","list_btn","toolsList"];
		
		this.height = 263;
		this.width = 161;
		this.elementsContent = [this.toolsList_i()];
	}
	var _proto = toolsList.prototype;

	_proto.toolsList_i = function () {
		var t = new eui.Group();
		this.toolsList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 263;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 161;
		t.elementsContent = [this._Image1_i(),this.list_image_i(),this.list_num_i(),this.list_btn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 112;
		t.horizontalCenter = 0.5;
		t.source = "wutong_json.frame_white_gray";
		t.verticalCenter = -65;
		t.width = 112;
		return t;
	};
	_proto.list_image_i = function () {
		var t = new eui.Image();
		this.list_image = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68;
		t.horizontalCenter = 0;
		t.source = "";
		t.top = 18;
		t.width = 68;
		return t;
	};
	_proto.list_num_i = function () {
		var t = new eui.Label();
		this.list_num = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x5E4609;
		t.verticalAlign = "middle";
		t.verticalCenter = -26;
		return t;
	};
	_proto.list_btn_i = function () {
		var t = new eui.Group();
		this.list_btn = t;
		t.height = 46;
		t.horizontalCenter = 0;
		t.verticalCenter = 42;
		t.width = 112;
		t.elementsContent = [this._Image2_i(),this.list_name_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 46;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green_1";
		t.top = 0;
		return t;
	};
	_proto.list_name_i = function () {
		var t = new eui.Label();
		this.list_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 34;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 34;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 113;
		return t;
	};
	return toolsList;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/Loading.exml'] = window.NewFile = (function (_super) {
	__extends(NewFile, _super);
	function NewFile() {
		_super.call(this);
		this.skinParts = ["prog_bar","percent"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group3_i()];
	}
	var _proto = NewFile.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg_d_png";
		t.top = 0;
		t.width = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = -72;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.tree_10_d";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -16;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.fruit_m_10_d";
		t.verticalCenter = -133;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 147;
		t.left = 0;
		t.right = 0;
		t.top = 996;
		t.elementsContent = [this._Rect1_i(),this._Image4_i(),this._Group2_i(),this._Label1_i(),this.percent_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "wutong_json.undercolor";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 51;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 708;
		t.elementsContent = [this.prog_bar_i()];
		return t;
	};
	_proto.prog_bar_i = function () {
		var t = new eui.Image();
		this.prog_bar = t;
		t.anchorOffsetX = 0;
		t.left = 118;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.load_bar";
		t.verticalCenter = 0;
		t.width = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "HXBNRBJ";
		t.height = 42;
		t.horizontalCenter = -33;
		t.italic = true;
		t.size = 34;
		t.text = "Loading...";
		t.verticalCenter = 0;
		t.width = 162;
		return t;
	};
	_proto.percent_i = function () {
		var t = new eui.Label();
		this.percent = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "HXBNRBJ";
		t.height = 42;
		t.horizontalCenter = 84;
		t.italic = true;
		t.size = 34;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 120;
		return t;
	};
	return NewFile;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/NewDynamic.exml'] = window.newDynamic = (function (_super) {
	__extends(newDynamic, _super);
	function newDynamic() {
		_super.call(this);
		this.skinParts = ["btn_close","head_img","group_new_list","group_news"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.group_news_i()];
	}
	var _proto = newDynamic.prototype;

	_proto.group_news_i = function () {
		var t = new eui.Group();
		this.group_news = t;
		t.height = 967;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 667;
		t.elementsContent = [this._Image1_i(),this.btn_close_i(),this.head_img_i(),this.group_new_list_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(57,123,502,23);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Image();
		this.btn_close = t;
		t.height = 62;
		t.horizontalCenter = 303;
		t.source = "wutong_json.delete";
		t.verticalCenter = -405;
		t.width = 62;
		return t;
	};
	_proto.head_img_i = function () {
		var t = new eui.Image();
		this.head_img = t;
		t.horizontalCenter = -0.5;
		t.source = "wutong_json.zxdt_cn";
		t.top = 27;
		return t;
	};
	_proto.group_new_list_i = function () {
		var t = new eui.Group();
		this.group_new_list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 810;
		t.horizontalCenter = 0;
		t.verticalCenter = 17;
		t.width = 560;
		return t;
	};
	return newDynamic;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/NewsList.exml'] = window.newsList = (function (_super) {
	__extends(newsList, _super);
	function newsList() {
		_super.call(this);
		this.skinParts = ["date","status_img","friend_head","username","treeLevel","content","time","friend_list","dynamic_list"];
		
		this.height = 140;
		this.width = 560;
		this.elementsContent = [this.dynamic_list_i()];
	}
	var _proto = newsList.prototype;

	_proto.dynamic_list_i = function () {
		var t = new eui.Group();
		this.dynamic_list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 140;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 560;
		t.elementsContent = [this.date_i(),this.friend_list_i()];
		return t;
	};
	_proto.date_i = function () {
		var t = new eui.Label();
		this.date = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Heavy";
		t.height = 28;
		t.left = 0;
		t.size = 30;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x8b2b00;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 191;
		return t;
	};
	_proto.friend_list_i = function () {
		var t = new eui.Group();
		this.friend_list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 93;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 560;
		t.elementsContent = [this.friend_head_i(),this.username_i(),this.treeLevel_i(),this.content_i(),this.time_i()];
		return t;
	};
	_proto.friend_head_i = function () {
		var t = new eui.Group();
		this.friend_head = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.left = 0;
		t.verticalCenter = 0;
		t.width = 108;
		t.elementsContent = [this.status_img_i()];
		return t;
	};
	_proto.status_img_i = function () {
		var t = new eui.Image();
		this.status_img = t;
		t.bottom = 0;
		t.height = 36;
		t.right = 0;
		t.source = "";
		t.width = 36;
		return t;
	};
	_proto.username_i = function () {
		var t = new eui.Label();
		this.username = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Heavy";
		t.horizontalCenter = -35;
		t.size = 30;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x8B2B00;
		t.verticalCenter = -23;
		t.width = 199;
		return t;
	};
	_proto.treeLevel_i = function () {
		var t = new eui.Label();
		this.treeLevel = t;
		t.fontFamily = "Adobe Heiti Std R";
		t.horizontalCenter = -108;
		t.size = 24;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x90766A;
		t.verticalCenter = 15;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Label();
		this.content = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 20;
		t.right = 0;
		t.size = 24;
		t.text = "";
		t.textAlign = "right";
		t.textColor = 0x8b2b00;
		t.verticalAlign = "middle";
		t.verticalCenter = -23;
		t.width = 286;
		return t;
	};
	_proto.time_i = function () {
		var t = new eui.Label();
		this.time = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.right = 0;
		t.size = 24;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x90766a;
		t.verticalCenter = 21;
		t.width = 100;
		return t;
	};
	return newsList;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/Notices.exml'] = window.notices = (function (_super) {
	__extends(notices, _super);
	function notices() {
		_super.call(this);
		this.skinParts = ["full_mask","notices_text","iKnow","notices_close","group_notices","the_group","iKnow0","notices_confrim","group_mc"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.full_mask_i(),this.group_notices_i(),this.group_mc_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.tips.panel_head"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.notices.iKnow"],[0],this.iKnow,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.notices.iKnow"],[0],this.iKnow0,"text");
	}
	var _proto = notices.prototype;

	_proto.full_mask_i = function () {
		var t = new eui.Rect();
		this.full_mask = t;
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.group_notices_i = function () {
		var t = new eui.Group();
		this.group_notices = t;
		t.height = 414;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 617;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.notices_text_i(),this.notices_close_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(53,94,511,43);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.top = 22;
		return t;
	};
	_proto.notices_text_i = function () {
		var t = new eui.Label();
		this.notices_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 198;
		t.horizontalCenter = 0;
		t.lineSpacing = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x8b2b00;
		t.verticalAlign = "middle";
		t.verticalCenter = -10;
		t.width = 524;
		t.y = 133;
		return t;
	};
	_proto.notices_close_i = function () {
		var t = new eui.Group();
		this.notices_close = t;
		t.height = 61;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 175;
		t.y = 310;
		t.elementsContent = [this._Image3_i(),this.iKnow_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 69;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green_1";
		t.verticalCenter = 4;
		t.width = 175;
		return t;
	};
	_proto.iKnow_i = function () {
		var t = new eui.Label();
		this.iKnow = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0xffe5b8;
		t.verticalAlign = "middle";
		t.verticalCenter = -1;
		return t;
	};
	_proto.group_mc_i = function () {
		var t = new eui.Group();
		this.group_mc = t;
		t.anchorOffsetY = 0;
		t.height = 481;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 617;
		t.elementsContent = [this._Image4_i(),this.the_group_i(),this.notices_confrim_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(199,82,155,71);
		t.source = "wutong_json.frame_green_1";
		t.top = 0;
		return t;
	};
	_proto.the_group_i = function () {
		var t = new eui.Group();
		this.the_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = -50;
		return t;
	};
	_proto.notices_confrim_i = function () {
		var t = new eui.Group();
		this.notices_confrim = t;
		t.height = 61;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 175;
		t.y = 358;
		t.elementsContent = [this._Image5_i(),this.iKnow0_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 69;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green_1";
		t.verticalCenter = 4;
		t.width = 175;
		return t;
	};
	_proto.iKnow0_i = function () {
		var t = new eui.Label();
		this.iKnow0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0xFFE5B8;
		t.verticalAlign = "middle";
		t.verticalCenter = -1;
		return t;
	};
	return notices;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/OtherGarden.exml'] = window.otherGarden = (function (_super) {
	__extends(otherGarden, _super);
	function otherGarden() {
		_super.call(this);
		this.skinParts = ["bg","go_back","group_top","ph_shadow","tree","fruit","protect_count","cantSteal","group_protect","chart_content","group_tips","group_mc","group_ph","group_tree","nickname","xp_bar","xp_text","mature_count","mature_img","user_lv","group_avatar","head_img_info","friends_news","lastNews","group_news","full_mask","group_index"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.bg_i(),this.group_index_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.index.cantSteal"],[0],this.cantSteal,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.index.lastNews"],[0],this.lastNews,"text");
	}
	var _proto = otherGarden.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg_d_png";
		t.top = 0;
		return t;
	};
	_proto.group_index_i = function () {
		var t = new eui.Group();
		this.group_index = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.group_top_i(),this.group_tree_i(),this.head_img_info_i(),this.group_news_i(),this.full_mask_i()];
		return t;
	};
	_proto.group_top_i = function () {
		var t = new eui.Group();
		this.group_top = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 966;
		t.left = 0;
		t.top = 0;
		t.width = 750;
		t.elementsContent = [this.go_back_i()];
		return t;
	};
	_proto.go_back_i = function () {
		var t = new eui.Group();
		this.go_back = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.left = 12;
		t.verticalCenter = -377;
		t.width = 78;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 78;
		t.left = 0;
		t.right = 0;
		t.source = "wutong_json.btn_return";
		t.top = 0;
		t.width = 78;
		return t;
	};
	_proto.group_tree_i = function () {
		var t = new eui.Group();
		this.group_tree = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 744;
		t.horizontalCenter = 0;
		t.verticalCenter = -77;
		t.width = 750;
		t.elementsContent = [this.ph_shadow_i(),this._Group1_i(),this.group_ph_i()];
		return t;
	};
	_proto.ph_shadow_i = function () {
		var t = new eui.Image();
		this.ph_shadow = t;
		t.source = "yinying_png";
		t.visible = false;
		t.x = 493;
		t.y = 690;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.elementsContent = [this.tree_i(),this.fruit_i(),this.group_protect_i()];
		return t;
	};
	_proto.tree_i = function () {
		var t = new eui.Image();
		this.tree = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 0;
		t.x = 257;
		return t;
	};
	_proto.fruit_i = function () {
		var t = new eui.Image();
		this.fruit = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 0;
		t.x = 257;
		return t;
	};
	_proto.group_protect_i = function () {
		var t = new eui.Group();
		this.group_protect = t;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 200;
		t.y = -150;
		t.elementsContent = [this._Rect1_i(),this.protect_count_i(),this.cantSteal_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseWidth = 80;
		t.fillAlpha = 0.18;
		t.fillColor = 0xffffff;
		t.height = 40;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 145;
		return t;
	};
	_proto.protect_count_i = function () {
		var t = new eui.Label();
		this.protect_count = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 23;
		t.text = "24:00:00";
		t.textColor = 0xa0a0a0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.cantSteal_i = function () {
		var t = new eui.Label();
		this.cantSteal = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.textColor = 0xa0a0a0;
		t.y = -40;
		return t;
	};
	_proto.group_ph_i = function () {
		var t = new eui.Group();
		this.group_ph = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.right = 65;
		t.elementsContent = [this.group_tips_i(),this.group_mc_i()];
		return t;
	};
	_proto.group_tips_i = function () {
		var t = new eui.Group();
		this.group_tips = t;
		t.height = 93;
		t.visible = false;
		t.width = 269;
		t.x = -134.5;
		t.y = -360;
		t.elementsContent = [this._Image2_i(),this.chart_content_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(43,31,187,12);
		t.source = "auction_json.chart";
		t.top = 0;
		return t;
	};
	_proto.chart_content_i = function () {
		var t = new eui.Label();
		this.chart_content = t;
		t.anchorOffsetY = 0;
		t.left = 30;
		t.right = 32;
		t.size = 20;
		t.text = "别吵！我在修仙！";
		t.textColor = 0x140707;
		t.verticalCenter = -12;
		return t;
	};
	_proto.group_mc_i = function () {
		var t = new eui.Group();
		this.group_mc = t;
		t.alpha = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		return t;
	};
	_proto.head_img_info_i = function () {
		var t = new eui.Group();
		this.head_img_info = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 116;
		t.right = 0;
		t.visible = false;
		t.width = 257;
		t.y = 90;
		t.elementsContent = [this._Image3_i(),this.nickname_i(),this._Rect2_i(),this.xp_bar_i(),this.xp_text_i(),this.mature_count_i(),this.mature_img_i(),this.group_avatar_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "wutong_json.farem_white_head";
		t.top = 0;
		return t;
	};
	_proto.nickname_i = function () {
		var t = new eui.Label();
		this.nickname = t;
		t.bold = true;
		t.fontFamily = "PingFang-SC-Heavy";
		t.right = 0;
		t.size = 22;
		t.text = "";
		t.textColor = 0x5e892a;
		t.verticalCenter = -33;
		t.width = 150;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 30;
		t.fillColor = 0xa8a8a7;
		t.height = 24;
		t.horizontalCenter = 49;
		t.verticalCenter = 0;
		t.width = 124;
		return t;
	};
	_proto.xp_bar_i = function () {
		var t = new eui.Rect();
		this.xp_bar = t;
		t.anchorOffsetX = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 30;
		t.fillColor = 0x5e892a;
		t.height = 22;
		t.verticalCenter = 0;
		t.width = 0;
		t.x = 116;
		return t;
	};
	_proto.xp_text_i = function () {
		var t = new eui.Label();
		this.xp_text = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 49;
		t.size = 18;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 110;
		return t;
	};
	_proto.mature_count_i = function () {
		var t = new eui.Label();
		this.mature_count = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.size = 18;
		t.text = "";
		t.textColor = 0x5e892a;
		t.x = 144;
		t.y = 80;
		return t;
	};
	_proto.mature_img_i = function () {
		var t = new eui.Image();
		this.mature_img = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "wutong_json.fruit_min";
		t.verticalCenter = 30;
		t.width = 16;
		return t;
	};
	_proto.group_avatar_i = function () {
		var t = new eui.Group();
		this.group_avatar = t;
		t.height = 92;
		t.width = 68;
		t.x = 39;
		t.y = 12;
		t.elementsContent = [this.user_lv_i()];
		return t;
	};
	_proto.user_lv_i = function () {
		var t = new eui.Image();
		this.user_lv = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.group_news_i = function () {
		var t = new eui.Group();
		this.group_news = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this._Image4_i(),this.friends_news_i(),this.lastNews_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(72,151,643,187);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.farem_white_2";
		t.top = 0;
		return t;
	};
	_proto.friends_news_i = function () {
		var t = new eui.Group();
		this.friends_news = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 138;
		t.left = 0;
		t.right = 0;
		return t;
	};
	_proto.lastNews_i = function () {
		var t = new eui.Label();
		this.lastNews = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "PingFang-SC-Bold";
		t.height = 61;
		t.left = 45;
		t.size = 34;
		t.textColor = 0x000000;
		t.top = 99;
		t.verticalAlign = "middle";
		t.width = 390;
		return t;
	};
	_proto.full_mask_i = function () {
		var t = new eui.Rect();
		this.full_mask = t;
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	return otherGarden;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/PropsIntro.exml'] = window.propsIntro = (function (_super) {
	__extends(propsIntro, _super);
	function propsIntro() {
		_super.call(this);
		this.skinParts = ["intro_bg","btn_close","use_prop_img","group_tool_img","hatch_content","btn_hatch","egg_name","egg_group_intro","egg_num_title","egg_num","intro_egg","intro_text","btn_use_text","btn_use","buy","btn_buy","btn_con_text","btn_con","btn_use_1_text","btn_use_1","hatch_content_2","btn_hatch_2","intro_tool","group_price","props"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.props_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.propsIntro.intro_name"],[0],this._Image1,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.propsIntro.btn_hatch"],[0],this.hatch_content,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.propsIntro.egg_num_title"],[0],this.egg_num_title,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.propsIntro.btn_use_text"],[0],this.btn_use_text,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.propsIntro.buy"],[0],this.buy,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.propsIntro.btn_con_text"],[0],this.btn_con_text,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.propsIntro.btn_use_text"],[0],this.btn_use_1_text,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.propsIntro.btn_hatch"],[0],this.hatch_content_2,"text");
	}
	var _proto = propsIntro.prototype;

	_proto.props_i = function () {
		var t = new eui.Group();
		this.props = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 638;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 630;
		t.elementsContent = [this.intro_bg_i(),this._Image1_i(),this.btn_close_i(),this.group_tool_img_i(),this.intro_egg_i(),this.intro_tool_i(),this.group_price_i()];
		return t;
	};
	_proto.intro_bg_i = function () {
		var t = new eui.Image();
		this.intro_bg = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(62,127,499,15);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.y = 18;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Image();
		this.btn_close = t;
		t.height = 62;
		t.horizontalCenter = 284;
		t.source = "wutong_json.delete";
		t.width = 62;
		t.y = 35.5;
		return t;
	};
	_proto.group_tool_img_i = function () {
		var t = new eui.Group();
		this.group_tool_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 110;
		t.horizontalCenter = 0;
		t.width = 110;
		t.y = 149;
		t.elementsContent = [this._Image2_i(),this.use_prop_img_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 110;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.baidikuang";
		t.width = 110;
		return t;
	};
	_proto.use_prop_img_i = function () {
		var t = new eui.Image();
		this.use_prop_img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 22;
		return t;
	};
	_proto.intro_egg_i = function () {
		var t = new eui.Group();
		this.intro_egg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 314;
		t.horizontalCenter = 0;
		t.width = 519;
		t.y = 299;
		t.elementsContent = [this.btn_hatch_i(),this._Image4_i(),this.egg_name_i(),this.egg_group_intro_i(),this.egg_num_title_i(),this.egg_num_i()];
		return t;
	};
	_proto.btn_hatch_i = function () {
		var t = new eui.Group();
		this.btn_hatch = t;
		t.anchorOffsetX = 0;
		t.bottom = 27;
		t.height = 60;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 166;
		t.elementsContent = [this._Image3_i(),this.hatch_content_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto.hatch_content_i = function () {
		var t = new eui.Label();
		this.hatch_content = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0xffe5b8;
		t.verticalCenter = -3;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "auction_json.shutiao";
		t.x = 60;
		t.y = 19;
		return t;
	};
	_proto.egg_name_i = function () {
		var t = new eui.Label();
		this.egg_name = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.text = "";
		t.textColor = 0x3c2405;
		t.x = 93;
		t.y = 22;
		return t;
	};
	_proto.egg_group_intro_i = function () {
		var t = new eui.Group();
		this.egg_group_intro = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 89;
		t.horizontalCenter = 7;
		t.width = 427;
		t.y = 62;
		return t;
	};
	_proto.egg_num_title_i = function () {
		var t = new eui.Label();
		this.egg_num_title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang SC";
		t.height = 28;
		t.size = 24;
		t.textColor = 0x3C2405;
		t.width = 73;
		t.x = 60;
		t.y = 155;
		return t;
	};
	_proto.egg_num_i = function () {
		var t = new eui.Label();
		this.egg_num = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang SC";
		t.height = 28;
		t.size = 24;
		t.text = "";
		t.textColor = 0x3C2405;
		t.width = 214;
		t.x = 130;
		t.y = 155;
		return t;
	};
	_proto.intro_tool_i = function () {
		var t = new eui.Group();
		this.intro_tool = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 85;
		t.height = 300;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 543;
		t.elementsContent = [this.intro_text_i(),this.btn_use_i(),this.btn_buy_i(),this.btn_con_i(),this.btn_use_1_i(),this.btn_hatch_2_i()];
		return t;
	};
	_proto.intro_text_i = function () {
		var t = new eui.Group();
		this.intro_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 133;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 427;
		t.y = 44;
		return t;
	};
	_proto.btn_use_i = function () {
		var t = new eui.Group();
		this.btn_use = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.height = 60;
		t.horizontalCenter = -99;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 166;
		t.x = 22;
		t.elementsContent = [this._Image5_i(),this.btn_use_text_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto.btn_use_text_i = function () {
		var t = new eui.Label();
		this.btn_use_text = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0xffe5b8;
		t.verticalAlign = "middle";
		t.verticalCenter = -3;
		return t;
	};
	_proto.btn_buy_i = function () {
		var t = new eui.Group();
		this.btn_buy = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.height = 60;
		t.horizontalCenter = 110;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 166;
		t.x = 372;
		t.elementsContent = [this._Image6_i(),this.buy_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto.buy_i = function () {
		var t = new eui.Label();
		this.buy = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0xffe5b8;
		t.verticalAlign = "middle";
		t.verticalCenter = -3;
		return t;
	};
	_proto.btn_con_i = function () {
		var t = new eui.Group();
		this.btn_con = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.height = 60;
		t.horizontalCenter = 3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 166;
		t.x = 196;
		t.elementsContent = [this._Image7_i(),this.btn_con_text_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto.btn_con_text_i = function () {
		var t = new eui.Label();
		this.btn_con_text = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0xffe5b8;
		t.verticalCenter = -3;
		return t;
	};
	_proto.btn_use_1_i = function () {
		var t = new eui.Group();
		this.btn_use_1 = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.height = 60;
		t.horizontalCenter = 3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 166;
		t.x = 196;
		t.elementsContent = [this._Image8_i(),this.btn_use_1_text_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto.btn_use_1_text_i = function () {
		var t = new eui.Label();
		this.btn_use_1_text = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0xffe5b8;
		t.verticalCenter = -3;
		return t;
	};
	_proto.btn_hatch_2_i = function () {
		var t = new eui.Group();
		this.btn_hatch_2 = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.height = 60;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 166;
		t.elementsContent = [this._Image9_i(),this.hatch_content_2_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto.hatch_content_2_i = function () {
		var t = new eui.Label();
		this.hatch_content_2 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0xffe5b8;
		t.verticalCenter = -3;
		return t;
	};
	_proto.group_price_i = function () {
		var t = new eui.Group();
		this.group_price = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = -92;
		t.visible = false;
		t.y = 261;
		return t;
	};
	return propsIntro;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/PropsStatus.exml'] = window.propsStatus = (function (_super) {
	__extends(propsStatus, _super);
	var propsStatus$Skin13 = 	(function (_super) {
		__extends(propsStatus$Skin13, _super);
		function propsStatus$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = propsStatus$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wutong_json.btn_add_1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return propsStatus$Skin13;
	})(eui.Skin);

	var propsStatus$Skin14 = 	(function (_super) {
		__extends(propsStatus$Skin14, _super);
		function propsStatus$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = propsStatus$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wutong_json.btn_sub_1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return propsStatus$Skin14;
	})(eui.Skin);

	function propsStatus() {
		_super.call(this);
		this.skinParts = ["use_close","use_prop_bg","use_prop_img","use_pay_add","use_pay_dec","use_pay_num","use_pay","use","use_btn","nowHas","num_text","use_prop_intro","use_prop"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.use_prop_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.propsIntro.intro_name"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.propsStatus.use"],[0],this.use,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.propsStatus.nowHas"],[0],this.nowHas,"text");
	}
	var _proto = propsStatus.prototype;

	_proto.use_prop_i = function () {
		var t = new eui.Group();
		this.use_prop = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 571;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 630;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.use_close_i(),this._Group1_i(),this.use_pay_i(),this.use_btn_i(),this.use_prop_intro_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 1;
		t.right = -1;
		t.scale9Grid = new egret.Rectangle(56,118,537,12);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.y = 18;
		return t;
	};
	_proto.use_close_i = function () {
		var t = new eui.Image();
		this.use_close = t;
		t.height = 62;
		t.horizontalCenter = 284;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.delete";
		t.width = 62;
		t.x = 578;
		t.y = 46;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.y = 149;
		t.elementsContent = [this.use_prop_bg_i(),this.use_prop_img_i()];
		return t;
	};
	_proto.use_prop_bg_i = function () {
		var t = new eui.Image();
		this.use_prop_bg = t;
		t.height = 110;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.baidikuang";
		t.width = 110;
		return t;
	};
	_proto.use_prop_img_i = function () {
		var t = new eui.Image();
		this.use_prop_img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.y = 26;
		return t;
	};
	_proto.use_pay_i = function () {
		var t = new eui.Group();
		this.use_pay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.horizontalCenter = 0;
		t.width = 350;
		t.y = 285;
		t.elementsContent = [this.use_pay_add_i(),this.use_pay_dec_i(),this.use_pay_num_i()];
		return t;
	};
	_proto.use_pay_add_i = function () {
		var t = new eui.Button();
		this.use_pay_add = t;
		t.height = 56;
		t.label = "";
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 52;
		t.skinName = propsStatus$Skin13;
		return t;
	};
	_proto.use_pay_dec_i = function () {
		var t = new eui.Button();
		this.use_pay_dec = t;
		t.height = 56;
		t.label = "";
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 52;
		t.skinName = propsStatus$Skin14;
		return t;
	};
	_proto.use_pay_num_i = function () {
		var t = new eui.Group();
		this.use_pay_num = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 150;
		return t;
	};
	_proto.use_btn_i = function () {
		var t = new eui.Group();
		this.use_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 71;
		t.height = 60;
		t.horizontalCenter = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 166;
		t.elementsContent = [this._Image3_i(),this.use_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto.use_i = function () {
		var t = new eui.Label();
		this.use = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.textAlign = "center";
		t.textColor = 0xffe5b8;
		t.verticalAlign = "middle";
		t.verticalCenter = -3;
		return t;
	};
	_proto.use_prop_intro_i = function () {
		var t = new eui.Group();
		this.use_prop_intro = t;
		t.anchorOffsetY = 0;
		t.bottom = 159;
		t.height = 57;
		t.horizontalCenter = 1;
		t.elementsContent = [this.nowHas_i(),this.num_text_i(),this._Label1_i()];
		return t;
	};
	_proto.nowHas_i = function () {
		var t = new eui.Label();
		this.nowHas = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.textAlign = "right";
		t.textColor = 0x3c2405;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 198;
		t.x = 0;
		return t;
	};
	_proto.num_text_i = function () {
		var t = new eui.Label();
		this.num_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0xfc3d02;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 174;
		t.x = 205;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.right = 0;
		t.text = "个";
		t.textColor = 0x3c2405;
		t.top = 0;
		t.verticalAlign = "middle";
		t.width = 75;
		return t;
	};
	return propsStatus;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/Rename.exml'] = window.rename = (function (_super) {
	__extends(rename, _super);
	function rename() {
		_super.call(this);
		this.skinParts = ["btn_close_rename","g_gender","g_text","gender_group","ph_img","ph_num","ph_name","descrip_txt","confirm","btn_rename","rename_group","btn_close_enter","btn_enter_confim","status_txt","name_txt","enter_group","btn_close_tip","btn_tip_later","btn_tip_success","tip_group"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.rename_group_i(),this.enter_group_i(),this.tip_group_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.rename.num"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.rename.name"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.rename.startChange"],[0],this.confirm,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.usePay.confirm"],[0],this._Label3,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.rename.changeName"],[0],this._Label4,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.rename.name"],[0],this._Label5,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.rename.nomore"],[0],this.name_txt,"prompt");
		eui.Binding.$bindProperties(this, ["hostComponent.data.rename.doU"],[0],this._Label6,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.rename.later"],[0],this._Label7,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.rename.confrim"],[0],this._Label8,"text");
	}
	var _proto = rename.prototype;

	_proto.rename_group_i = function () {
		var t = new eui.Group();
		this.rename_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 942.57;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 592;
		t.elementsContent = [this._Image1_i(),this.btn_close_rename_i(),this._Image2_i(),this.gender_group_i(),this.ph_img_i(),this._Group1_i(),this.descrip_txt_i(),this.btn_rename_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(139,138,334,100);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto.btn_close_rename_i = function () {
		var t = new eui.Image();
		this.btn_close_rename = t;
		t.height = 60;
		t.horizontalCenter = 266;
		t.source = "wutong_json.delete";
		t.verticalCenter = -401.285;
		t.width = 60;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 1.5;
		t.source = "rename_cn_png";
		t.y = 14.35;
		return t;
	};
	_proto.gender_group_i = function () {
		var t = new eui.Group();
		this.gender_group = t;
		t.height = 50;
		t.horizontalCenter = 0;
		t.width = 200;
		t.y = 129.08;
		t.elementsContent = [this.g_gender_i(),this.g_text_i()];
		return t;
	};
	_proto.g_gender_i = function () {
		var t = new eui.Image();
		this.g_gender = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.g_text_i = function () {
		var t = new eui.Label();
		this.g_text = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 10.5;
		t.size = 26;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x3C2405;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.ph_img_i = function () {
		var t = new eui.Image();
		this.ph_img = t;
		t.horizontalCenter = 47;
		t.source = "";
		t.y = 204.08;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118.97;
		t.horizontalCenter = -31.5;
		t.width = 377.27;
		t.y = 570.14;
		t.elementsContent = [this._Label1_i(),this.ph_num_i(),this._Label2_i(),this.ph_name_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "PingFang SC";
		t.right = 281.27;
		t.textColor = 0xa07b49;
		t.y = 18;
		return t;
	};
	_proto.ph_num_i = function () {
		var t = new eui.Label();
		this.ph_num = t;
		t.fontFamily = "PingFang SC";
		t.left = 92;
		t.text = "";
		t.textColor = 0x3c2405;
		t.y = 18;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "PingFang SC";
		t.right = 285.27;
		t.textColor = 0xA07B49;
		t.y = 73.49;
		return t;
	};
	_proto.ph_name_i = function () {
		var t = new eui.Label();
		this.ph_name = t;
		t.fontFamily = "PingFang SC";
		t.left = 90;
		t.text = "";
		t.textColor = 0x3C2405;
		t.y = 72.35;
		return t;
	};
	_proto.descrip_txt_i = function () {
		var t = new eui.Label();
		this.descrip_txt = t;
		t.horizontalCenter = 0;
		t.lineSpacing = 15;
		t.size = 24;
		t.text = "";
		t.textColor = 0xa07b49;
		t.width = 440;
		t.y = 700.72;
		return t;
	};
	_proto.btn_rename_i = function () {
		var t = new eui.Group();
		this.btn_rename = t;
		t.anchorOffsetX = 0;
		t.bottom = 70;
		t.height = 66;
		t.horizontalCenter = 0;
		t.width = 160;
		t.elementsContent = [this._Image3_i(),this.confirm_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto.confirm_i = function () {
		var t = new eui.Label();
		this.confirm = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.textColor = 0xFFE5B8;
		t.verticalCenter = -2;
		return t;
	};
	_proto.enter_group_i = function () {
		var t = new eui.Group();
		this.enter_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 500;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 630;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this.btn_close_enter_i(),this.btn_enter_confim_i(),this._Label4_i(),this._Group2_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(61,108,531,37);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "rename_cn_png";
		t.y = 16;
		return t;
	};
	_proto.btn_close_enter_i = function () {
		var t = new eui.Image();
		this.btn_close_enter = t;
		t.height = 60;
		t.horizontalCenter = 285;
		t.source = "wutong_json.delete";
		t.verticalCenter = -178;
		t.width = 60;
		return t;
	};
	_proto.btn_enter_confim_i = function () {
		var t = new eui.Group();
		this.btn_enter_confim = t;
		t.anchorOffsetX = 0;
		t.height = 66;
		t.horizontalCenter = 0;
		t.verticalCenter = 156;
		t.width = 160;
		t.elementsContent = [this._Image6_i(),this._Label3_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.textColor = 0xFFE5B8;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.textColor = 0x3c2405;
		t.y = 147;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118;
		t.horizontalCenter = 0;
		t.width = 446;
		t.y = 213;
		t.elementsContent = [this._Label5_i(),this.status_txt_i(),this._Rect1_i(),this.name_txt_i()];
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		this._Label5 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.textColor = 0x3C2405;
		t.y = 7;
		return t;
	};
	_proto.status_txt_i = function () {
		var t = new eui.Label();
		this.status_txt = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "";
		t.textColor = 0xea5300;
		t.x = 10;
		t.y = 59;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x3c2405;
		t.height = 1;
		t.width = 340;
		t.x = 84;
		t.y = 38;
		return t;
	};
	_proto.name_txt_i = function () {
		var t = new eui.EditableText();
		this.name_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 41;
		t.promptColor = 0xa07b49;
		t.size = 30;
		t.text = "";
		t.textColor = 0x3c2405;
		t.verticalAlign = "middle";
		t.width = 354;
		t.x = 85;
		t.y = 0;
		return t;
	};
	_proto.tip_group_i = function () {
		var t = new eui.Group();
		this.tip_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 423;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 630;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Label6_i(),this.btn_close_tip_i(),this.btn_tip_later_i(),this.btn_tip_success_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(61,108,531,37);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "rename_cn_png";
		t.y = 16;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		this._Label6 = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.textColor = 0x3C2405;
		t.y = 172;
		return t;
	};
	_proto.btn_close_tip_i = function () {
		var t = new eui.Image();
		this.btn_close_tip = t;
		t.height = 60;
		t.horizontalCenter = 285;
		t.source = "wutong_json.delete";
		t.verticalCenter = -139.5;
		t.width = 60;
		return t;
	};
	_proto.btn_tip_later_i = function () {
		var t = new eui.Group();
		this.btn_tip_later = t;
		t.anchorOffsetX = 0;
		t.height = 66;
		t.horizontalCenter = -131;
		t.verticalCenter = 108.5;
		t.width = 160;
		t.elementsContent = [this._Image9_i(),this._Label7_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		this._Label7 = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.textColor = 0xFFE5B8;
		t.verticalCenter = -2;
		return t;
	};
	_proto.btn_tip_success_i = function () {
		var t = new eui.Group();
		this.btn_tip_success = t;
		t.anchorOffsetX = 0;
		t.height = 66;
		t.horizontalCenter = 114;
		t.verticalCenter = 108.5;
		t.width = 160;
		t.elementsContent = [this._Image10_i(),this._Label8_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		this._Label8 = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.textColor = 0xFFE5B8;
		t.verticalCenter = -3;
		return t;
	};
	return rename;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/ScrollerDynamic.exml'] = window.scrollerDynamic = (function (_super) {
	__extends(scrollerDynamic, _super);
	function scrollerDynamic() {
		_super.call(this);
		this.skinParts = ["scroller_content"];
		
		this.height = 672;
		this.width = 505;
		this.elementsContent = [this.scroller_content_i()];
	}
	var _proto = scrollerDynamic.prototype;

	_proto.scroller_content_i = function () {
		var t = new eui.Scroller();
		this.scroller_content = t;
		t.height = 672;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 505;
		return t;
	};
	return scrollerDynamic;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/ScrollerFruit.exml'] = window.scrollerFruit = (function (_super) {
	__extends(scrollerFruit, _super);
	function scrollerFruit() {
		_super.call(this);
		this.skinParts = ["scroller_content"];
		
		this.height = 672;
		this.width = 505;
		this.elementsContent = [this.scroller_content_i()];
	}
	var _proto = scrollerFruit.prototype;

	_proto.scroller_content_i = function () {
		var t = new eui.Scroller();
		this.scroller_content = t;
		t.height = 672;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 505;
		return t;
	};
	return scrollerFruit;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/ScrollerInteractive.exml'] = window.scrollerInteractive = (function (_super) {
	__extends(scrollerInteractive, _super);
	function scrollerInteractive() {
		_super.call(this);
		this.skinParts = ["scroller_interactive"];
		
		this.height = 899;
		this.width = 569;
		this.elementsContent = [this.scroller_interactive_i()];
	}
	var _proto = scrollerInteractive.prototype;

	_proto.scroller_interactive_i = function () {
		var t = new eui.Scroller();
		this.scroller_interactive = t;
		t.height = 900;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 570;
		return t;
	};
	return scrollerInteractive;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/ScrollerNews.exml'] = window.scrollerNews = (function (_super) {
	__extends(scrollerNews, _super);
	function scrollerNews() {
		_super.call(this);
		this.skinParts = ["scroller_news"];
		
		this.height = 810;
		this.width = 560;
		this.elementsContent = [this.scroller_news_i()];
	}
	var _proto = scrollerNews.prototype;

	_proto.scroller_news_i = function () {
		var t = new eui.Scroller();
		this.scroller_news = t;
		t.height = 810;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 560;
		return t;
	};
	return scrollerNews;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/SecondPassWord.exml'] = window.secondPassWord = (function (_super) {
	__extends(secondPassWord, _super);
	function secondPassWord() {
		_super.call(this);
		this.skinParts = ["btn_close","panel_title","tips","t_1","t_2","t_3","t_4","t_5","t_6","show_input","text_input","secondPassWord"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.secondPassWord_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.secondPassWord.panel_title"],[0],this.panel_title,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.secondPassWord.tips"],[0],this.tips,"text");
	}
	var _proto = secondPassWord.prototype;

	_proto.secondPassWord_i = function () {
		var t = new eui.Group();
		this.secondPassWord = t;
		t.height = 364;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 580;
		t.elementsContent = [this.btn_close_i(),this._Rect1_i(),this.panel_title_i(),this.tips_i(),this._Rect2_i(),this.show_input_i(),this.text_input_i()];
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Image();
		this.btn_close = t;
		t.source = "wutong_json.btn_close";
		t.x = 569;
		t.y = -24;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xeeeeee;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.panel_title_i = function () {
		var t = new eui.Label();
		this.panel_title = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 1;
		t.size = 36;
		t.textColor = 0x121212;
		t.y = 42;
		return t;
	};
	_proto.tips_i = function () {
		var t = new eui.Label();
		this.tips = t;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.size = 29;
		t.textColor = 0xadacac;
		t.y = 126;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0xffffff;
		t.height = 72;
		t.horizontalCenter = 0;
		t.verticalCenter = 87;
		t.width = 484;
		return t;
	};
	_proto.show_input_i = function () {
		var t = new eui.Group();
		this.show_input = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.width = 484;
		t.x = 48;
		t.y = 231;
		t.elementsContent = [this.t_1_i(),this.t_2_i(),this.t_3_i(),this.t_4_i(),this.t_5_i(),this.t_6_i()];
		return t;
	};
	_proto.t_1_i = function () {
		var t = new eui.EditableText();
		this.t_1 = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.displayAsPassword = false;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 72;
		t.restrict = "0-9";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x121212;
		t.verticalAlign = "middle";
		t.width = 72;
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.t_2_i = function () {
		var t = new eui.EditableText();
		this.t_2 = t;
		t.anchorOffsetX = 0;
		t.displayAsPassword = false;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 72;
		t.restrict = "0-9";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x121212;
		t.verticalAlign = "middle";
		t.width = 72;
		t.x = 84;
		t.y = 2;
		return t;
	};
	_proto.t_3_i = function () {
		var t = new eui.EditableText();
		this.t_3 = t;
		t.anchorOffsetX = 0;
		t.displayAsPassword = false;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 72;
		t.restrict = "0-9";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x121212;
		t.verticalAlign = "middle";
		t.width = 72;
		t.x = 160;
		t.y = 2;
		return t;
	};
	_proto.t_4_i = function () {
		var t = new eui.EditableText();
		this.t_4 = t;
		t.anchorOffsetX = 0;
		t.displayAsPassword = false;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 72;
		t.restrict = "0-9";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x121212;
		t.verticalAlign = "middle";
		t.width = 72;
		t.x = 242;
		t.y = 2;
		return t;
	};
	_proto.t_5_i = function () {
		var t = new eui.EditableText();
		this.t_5 = t;
		t.anchorOffsetX = 0;
		t.displayAsPassword = false;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 72;
		t.restrict = "0-9";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x121212;
		t.verticalAlign = "middle";
		t.width = 72;
		t.x = 323;
		t.y = 2;
		return t;
	};
	_proto.t_6_i = function () {
		var t = new eui.EditableText();
		this.t_6 = t;
		t.anchorOffsetX = 0;
		t.displayAsPassword = false;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 72;
		t.restrict = "0-9";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x121212;
		t.verticalAlign = "middle";
		t.width = 72;
		t.x = 407;
		t.y = 2;
		return t;
	};
	_proto.text_input_i = function () {
		var t = new eui.EditableText();
		this.text_input = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.displayAsPassword = true;
		t.height = 72;
		t.restrict = "0-9";
		t.size = 1;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "bottom";
		t.width = 484;
		t.x = 48;
		t.y = 232;
		return t;
	};
	return secondPassWord;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/StaAndDyn.exml'] = window.staAndDyn = (function (_super) {
	__extends(staAndDyn, _super);
	function staAndDyn() {
		_super.call(this);
		this.skinParts = ["btn_close_tree","sta_text","sta_rect","fruit","dyn_text","dyn_rect","dynamic","content_list","tree"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.tree_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.staAndDyn.panel_title"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.staAndDyn.sta_text"],[0],this.sta_text,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.staAndDyn.dyn_text"],[0],this.dyn_text,"text");
	}
	var _proto = staAndDyn.prototype;

	_proto.tree_i = function () {
		var t = new eui.Group();
		this.tree = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1016;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 630;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.btn_close_tree_i(),this.fruit_i(),this.dynamic_i(),this.content_list_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(58,126,500,12);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.y = 23;
		return t;
	};
	_proto.btn_close_tree_i = function () {
		var t = new eui.Image();
		this.btn_close_tree = t;
		t.height = 62;
		t.source = "wutong_json.delete";
		t.width = 62;
		t.x = 568;
		t.y = 41;
		return t;
	};
	_proto.fruit_i = function () {
		var t = new eui.Group();
		this.fruit = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76;
		t.horizontalCenter = -131;
		t.verticalCenter = -372;
		t.width = 158;
		t.elementsContent = [this.sta_text_i(),this.sta_rect_i()];
		return t;
	};
	_proto.sta_text_i = function () {
		var t = new eui.Label();
		this.sta_text = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "PingFang-SC-Heavy";
		t.horizontalCenter = 0;
		t.size = 30;
		t.textColor = 0x3c2405;
		t.verticalCenter = 0;
		return t;
	};
	_proto.sta_rect_i = function () {
		var t = new eui.Rect();
		this.sta_rect = t;
		t.ellipseWidth = 10;
		t.fillColor = 0x3C2405;
		t.height = 10;
		t.left = 0;
		t.right = 0;
		t.verticalCenter = 33;
		return t;
	};
	_proto.dynamic_i = function () {
		var t = new eui.Group();
		this.dynamic = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 76;
		t.horizontalCenter = 131;
		t.verticalCenter = -372;
		t.width = 158;
		t.elementsContent = [this.dyn_text_i(),this.dyn_rect_i()];
		return t;
	};
	_proto.dyn_text_i = function () {
		var t = new eui.Label();
		this.dyn_text = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "PingFang-SC-Heavy";
		t.horizontalCenter = 0;
		t.size = 30;
		t.textColor = 0x3C2405;
		t.verticalCenter = 0;
		return t;
	};
	_proto.dyn_rect_i = function () {
		var t = new eui.Rect();
		this.dyn_rect = t;
		t.ellipseWidth = 10;
		t.fillColor = 0x3C2405;
		t.height = 10;
		t.left = 0;
		t.right = 0;
		t.verticalCenter = 33;
		t.visible = false;
		return t;
	};
	_proto.content_list_i = function () {
		var t = new eui.Group();
		this.content_list = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 725;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 505;
		t.y = 202;
		return t;
	};
	return staAndDyn;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/Tips.exml'] = window.tips = (function (_super) {
	__extends(tips, _super);
	function tips() {
		_super.call(this);
		this.skinParts = ["full_mask","tips_text","iKnow","tips_close","group_tips"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.full_mask_i(),this.group_tips_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.tips.panel_head"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.tips.iKnow"],[0],this.iKnow,"text");
	}
	var _proto = tips.prototype;

	_proto.full_mask_i = function () {
		var t = new eui.Rect();
		this.full_mask = t;
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.group_tips_i = function () {
		var t = new eui.Group();
		this.group_tips = t;
		t.height = 430;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 617;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.tips_text_i(),this.tips_close_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(53,94,511,43);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.top = 22;
		return t;
	};
	_proto.tips_text_i = function () {
		var t = new eui.Label();
		this.tips_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 198;
		t.horizontalCenter = 0;
		t.lineSpacing = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x3c2405;
		t.verticalAlign = "middle";
		t.verticalCenter = -10;
		t.width = 336;
		t.y = 133;
		return t;
	};
	_proto.tips_close_i = function () {
		var t = new eui.Group();
		this.tips_close = t;
		t.height = 61;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 175;
		t.y = 310;
		t.elementsContent = [this._Image3_i(),this.iKnow_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 69;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green_1";
		t.verticalCenter = 4;
		t.width = 175;
		return t;
	};
	_proto.iKnow_i = function () {
		var t = new eui.Label();
		this.iKnow = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.textAlign = "center";
		t.textColor = 0xffe5b8;
		t.verticalAlign = "middle";
		t.verticalCenter = -1;
		return t;
	};
	return tips;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/ToolsIcon.exml'] = window.toolsIcon = (function (_super) {
	__extends(toolsIcon, _super);
	function toolsIcon() {
		_super.call(this);
		this.skinParts = ["icon_img","icon_num","tools"];
		
		this.height = 150;
		this.width = 112;
		this.elementsContent = [this.tools_i()];
	}
	var _proto = toolsIcon.prototype;

	_proto.tools_i = function () {
		var t = new eui.Group();
		this.tools = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 149;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.icon_img_i(),this.icon_num_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 112;
		t.horizontalCenter = 0;
		t.source = "auction_json.farem_white_1new";
		t.top = 0;
		t.width = 112;
		return t;
	};
	_proto.icon_img_i = function () {
		var t = new eui.Image();
		this.icon_img = t;
		t.height = 71;
		t.horizontalCenter = 0;
		t.source = "wutong_json.fruit_1";
		t.top = 20;
		t.width = 58;
		return t;
	};
	_proto.icon_num_i = function () {
		var t = new eui.Label();
		this.icon_num = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x8B2B00;
		t.width = 110;
		t.x = 23;
		return t;
	};
	return toolsIcon;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/ToolsList.exml'] = window.interlist = (function (_super) {
	__extends(interlist, _super);
	function interlist() {
		_super.call(this);
		this.skinParts = ["list_image","list_num","list_name","list_btn","toolsList"];
		
		this.height = 180;
		this.width = 110;
		this.elementsContent = [this.toolsList_i()];
	}
	var _proto = interlist.prototype;

	_proto.toolsList_i = function () {
		var t = new eui.Group();
		this.toolsList = t;
		t.anchorOffsetY = 0;
		t.height = 180;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 110;
		t.elementsContent = [this._Image1_i(),this.list_image_i(),this.list_num_i(),this.list_btn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 110;
		t.horizontalCenter = -1;
		t.source = "wutong_json.frame_white_gray";
		t.verticalCenter = -35;
		t.width = 110;
		return t;
	};
	_proto.list_image_i = function () {
		var t = new eui.Image();
		this.list_image = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "";
		t.top = 11;
		return t;
	};
	_proto.list_num_i = function () {
		var t = new eui.Label();
		this.list_num = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = -1;
		t.size = 18;
		t.text = "";
		t.textColor = 0x5E4609;
		t.verticalCenter = 4;
		return t;
	};
	_proto.list_btn_i = function () {
		var t = new eui.Group();
		this.list_btn = t;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.horizontalCenter = 0;
		t.verticalCenter = 66;
		t.width = 125;
		t.elementsContent = [this._Image2_i(),this.list_name_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 54;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(13,6,85,29);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green_1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.list_name_i = function () {
		var t = new eui.Label();
		this.list_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xffe5b8;
		t.verticalAlign = "middle";
		t.verticalCenter = -2;
		return t;
	};
	return interlist;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/ToolsSkin.exml'] = window.toolsSkin = (function (_super) {
	__extends(toolsSkin, _super);
	function toolsSkin() {
		_super.call(this);
		this.skinParts = ["btn_close_interaction","head_img","no_egg","group_tool","group_egg","group_inter"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.group_inter_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.propsIntro.intro_name"],[0],this.head_img,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.toolsSkin.no_egg"],[0],this.no_egg,"text");
	}
	var _proto = toolsSkin.prototype;

	_proto.group_inter_i = function () {
		var t = new eui.Group();
		this.group_inter = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1000;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 650;
		t.elementsContent = [this._Image1_i(),this.btn_close_interaction_i(),this.head_img_i(),this.no_egg_i(),this._Scroller1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(96,145,407,89);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto.btn_close_interaction_i = function () {
		var t = new eui.Image();
		this.btn_close_interaction = t;
		t.height = 62;
		t.right = 0;
		t.source = "wutong_json.delete";
		t.top = 39;
		t.width = 62;
		return t;
	};
	_proto.head_img_i = function () {
		var t = new eui.Image();
		this.head_img = t;
		t.horizontalCenter = 0;
		t.y = 19;
		return t;
	};
	_proto.no_egg_i = function () {
		var t = new eui.Label();
		this.no_egg = t;
		t.bold = true;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.textColor = 0x3c2405;
		t.visible = false;
		t.x = 154;
		t.y = 851;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 807;
		t.horizontalCenter = 0;
		t.width = 550;
		t.y = 153;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 816;
		t.x = 0;
		t.y = 18;
		t.elementsContent = [this.group_tool_i(),this.group_egg_i()];
		return t;
	};
	_proto.group_tool_i = function () {
		var t = new eui.Group();
		this.group_tool = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 590;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 550;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.group_egg_i = function () {
		var t = new eui.Group();
		this.group_egg = t;
		t.anchorOffsetY = 0;
		t.height = 215;
		t.left = 0;
		t.right = 0;
		t.y = 592;
		return t;
	};
	return toolsSkin;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/UsePay.exml'] = window.usePay = (function (_super) {
	__extends(usePay, _super);
	var usePay$Skin15 = 	(function (_super) {
		__extends(usePay$Skin15, _super);
		function usePay$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = usePay$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wutong_json.btn_add_1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return usePay$Skin15;
	})(eui.Skin);

	var usePay$Skin16 = 	(function (_super) {
		__extends(usePay$Skin16, _super);
		function usePay$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = usePay$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "wutong_json.btn_sub_1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return usePay$Skin16;
	})(eui.Skin);

	function usePay() {
		_super.call(this);
		this.skinParts = ["use_pay_bg","use_pay_img","btn_close","use_pay_add","use_pay_dec","use_pay_conf","confirm","use_pay_dete","use_pay_num","use_pay"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.use_pay_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.propsIntro.intro_name"],[0],this._Image1,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.usePay.confirm"],[0],this.confirm,"text");
	}
	var _proto = usePay.prototype;

	_proto.use_pay_i = function () {
		var t = new eui.Group();
		this.use_pay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 600;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 630;
		t.elementsContent = [this.use_pay_bg_i(),this._Image1_i(),this._Group1_i(),this.btn_close_i(),this.use_pay_add_i(),this.use_pay_dec_i(),this.use_pay_conf_i(),this.use_pay_dete_i(),this.use_pay_num_i()];
		return t;
	};
	_proto.use_pay_bg_i = function () {
		var t = new eui.Image();
		this.use_pay_bg = t;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(61,108,531,37);
		t.source = "wutong_json.tips_panel";
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.y = 19;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 108;
		t.horizontalCenter = 0;
		t.y = 149;
		t.elementsContent = [this._Image2_i(),this.use_pay_img_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 110;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "auction_json.farem_white_1new";
		t.width = 110;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.use_pay_img_i = function () {
		var t = new eui.Image();
		this.use_pay_img = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Image();
		this.btn_close = t;
		t.height = 60;
		t.horizontalCenter = 291;
		t.source = "wutong_json.delete";
		t.verticalCenter = -230;
		t.width = 60;
		return t;
	};
	_proto.use_pay_add_i = function () {
		var t = new eui.Button();
		this.use_pay_add = t;
		t.height = 50;
		t.horizontalCenter = 168;
		t.label = "";
		t.verticalCenter = 13;
		t.width = 50;
		t.skinName = usePay$Skin15;
		return t;
	};
	_proto.use_pay_dec_i = function () {
		var t = new eui.Button();
		this.use_pay_dec = t;
		t.height = 50;
		t.horizontalCenter = -168;
		t.label = "";
		t.verticalCenter = 13;
		t.width = 50;
		t.skinName = usePay$Skin16;
		return t;
	};
	_proto.use_pay_conf_i = function () {
		var t = new eui.Label();
		this.use_pay_conf = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "PingFang-SC-Medium";
		t.height = 85;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x3c2405;
		t.verticalAlign = "middle";
		t.verticalCenter = 80;
		t.width = 490;
		return t;
	};
	_proto.use_pay_dete_i = function () {
		var t = new eui.Group();
		this.use_pay_dete = t;
		t.anchorOffsetX = 0;
		t.height = 66;
		t.horizontalCenter = 0;
		t.verticalCenter = 204;
		t.width = 160;
		t.elementsContent = [this._Image3_i(),this.confirm_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "wutong_json.btn_green";
		t.top = 0;
		return t;
	};
	_proto.confirm_i = function () {
		var t = new eui.Label();
		this.confirm = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.textColor = 0xffe5b8;
		t.verticalCenter = 0;
		return t;
	};
	_proto.use_pay_num_i = function () {
		var t = new eui.Group();
		this.use_pay_num = t;
		t.height = 50;
		t.horizontalCenter = 0;
		t.verticalCenter = 13;
		t.width = 150;
		return t;
	};
	return usePay;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/UsePayInput.exml'] = window.usePayInput = (function (_super) {
	__extends(usePayInput, _super);
	function usePayInput() {
		_super.call(this);
		this.skinParts = ["text_type"];
		
		this.height = 52;
		this.width = 150;
		this.elementsContent = [this._Image1_i(),this.text_type_i()];
	}
	var _proto = usePayInput.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "auction_json.farem_white_3new";
		t.top = 0;
		return t;
	};
	_proto.text_type_i = function () {
		var t = new eui.EditableText();
		this.text_type = t;
		t.fontFamily = "PingFang-SC-Heavy";
		t.height = 52;
		t.horizontalCenter = "0";
		t.size = 30;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0x3c2405;
		t.verticalAlign = "middle";
		t.verticalCenter = "0";
		t.width = 150;
		return t;
	};
	return usePayInput;
})(eui.Skin);generateEUI.paths['resource/garden_skin/wutong/Wait.exml'] = window.wait = (function (_super) {
	__extends(wait, _super);
	function wait() {
		_super.call(this);
		this.skinParts = ["full_mask","group_mc","group_wait"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.full_mask_i(),this.group_wait_i()];
	}
	var _proto = wait.prototype;

	_proto.full_mask_i = function () {
		var t = new eui.Rect();
		this.full_mask = t;
		t.bottom = 0;
		t.fillAlpha = 0.2;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 0.5;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.group_wait_i = function () {
		var t = new eui.Group();
		this.group_wait = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 750;
		t.elementsContent = [this.group_mc_i()];
		return t;
	};
	_proto.group_mc_i = function () {
		var t = new eui.Group();
		this.group_mc = t;
		t.height = 150;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 150;
		return t;
	};
	return wait;
})(eui.Skin);