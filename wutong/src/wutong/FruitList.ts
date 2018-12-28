class FruitList extends eui.ItemRenderer{
	//动态控件
	private status_list:eui.Group;
	//图片
	private fru_icon:eui.Image;
	// 数量
	private fru_number:eui.Label;
	// 状态
	private fru_state:eui.Label;
	// 时间
	private fru_time:eui.Label;
	//
	private langdata:any;
	public constructor() {
		super();
		this.skinName = "resource/garden_skin/wutong/FruitList.exml";
		// this.data = Main.Shared().lang_config;
		this.langdata = Main.Shared().lang_config;
		this.cacheAsBitmap = true;
	}

	protected dataChanged():void{
		//数据改变时，会自动调用 dataChanged 这个方法
		this.fru_number.text = this.data.matureFruit;
		if(this.data.count_down > 0){
			if(this.data.count_down >= 72000){
				this.fru_icon.source = 'wutong_json.flower';
				this.fru_state.text = this.langdata.fruitListTs.is_flower;
			}else if(this.data.count_down < 72000){
				this.fru_icon.source = 'wutong_json.fruit_green';
				this.fru_state.text = this.langdata.fruitListTs.being_fru;
			}
		}else{
			this.fru_icon.source = 'wutong_json.fruit_1';
			this.fru_state.text = this.langdata.fruitListTs.already_mature;
		}

		if( this.data.count_down <= 0){
			// this.fru_time.text = this.langdata.fruitListTs.already_mature;
		}else{
			//倒计时
			let Timer = this.data.count_down;
			var t = setInterval(()=>{
				if(Timer > 0){
					this.fru_time.text = Common.Shared().secondToTime(Timer);
					Timer --;
				}else{
					clearInterval(t)
					// this.fru_time.text = this.langdata.fruitListTs.already_mature;
				}
			},999);
		}
	}
}