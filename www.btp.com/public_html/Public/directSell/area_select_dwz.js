/**
* 注意！！！！！！！！在使用本脚本时,要确定加载的jquery库
*
*/
$.extend( 
{
	//默认国家
	area_default_country:'',//'中国',

	//默认省份/州
	area_default_province:'',//'北京市',

	//默认城市
	area_default_city:'',//'市辖区',

	//默认区县
	area_default_county:'',//'东城区',

	//默认乡镇
	area_default_town:'',//'建国门街道',

	//判断是否已加载过 省更新的方法
	province_select:[],

	//判断是否已加载过 城市更新的方法
	city_select:[],

	//判断是否已加载过 区县更新的方法
	county_select:[],

	//判断是否已加载过 街道更新的方法
	town_select:[],

	//是否显示默认的国、省、市、区县
	area_default_show:false,

	//当前界面的对象
	parent:'',

	//区域选择绑定
	area_select_bind:function(countryId,provinceId,cityId,countyId,townId,type)
	{
		$.province_select[countryId]=false;
		$.city_select[countryId]=false;
		$.county_select[countryId]=false;
		$.town_select[countryId]=false;
		if(type == "dialog"){
			$.parent=$.pdialog.getCurrent();
		}else{
			$.parent=navTab.getCurrentPanel();
		}
		$.area_init_country(countryId,provinceId,cityId,countyId,townId);
		/*if($.area_default_show!=true){
			$.area_bind_country(countryId,provinceId,cityId,countyId,townId);
			$.area_bind_province(countryId,provinceId,cityId,countyId,townId)
			$.area_bind_city(countryId,provinceId,cityId,countyId,townId);
			$.area_bind_county(countryId,provinceId,cityId,countyId,townId);
		}*/
	},

	/*
	* 初始化国家 Select 控件
	*
	* countryId		国家Select控件 的 ID 
	*/
	area_init_country:function(countryId,provinceId,cityId,countyId,townId)
	{
		$('#'+countryId,$.parent).empty();
		$('#'+countryId,$.parent).append("<option value=''>不限</option>");
		$.getJSON("/Public/directSell/country.json",function(data){ 
			$.each(data,function(areakey,areaval){
				var country_json=eval(areaval);
				var default_country=false;
				//加载国家对应的省
				for( var key in country_json)
				{
					if(key=="name"){
						if($.area_default_show && country_json['name']==$.area_default_country){
							default_country=true;
							$('#'+countryId,$.parent).append("<option selected='selected' value='" + country_json['name'] + "' areakey='"+areakey+"'>" + country_json['name'] + "</option>");
						}else{
							$('#'+countryId,$.parent).append("<option value='" + country_json['name'] + "' areakey='"+areakey+"'>" + country_json['name'] + "</option>");
						}
					}
				}
				if($.area_default_show){
					//触发加载省州
					$.area_bind_country(countryId,provinceId,cityId,countyId,townId);
					$('#'+countryId,$.parent).change();
					if(default_country!=true)
						$.area_default_show=false;
					$.province_select[countryId]=true;
				}else{
					if(!$.province_select[countryId])
						$.area_bind_country(countryId,provinceId,cityId,countyId,townId);
					$('#'+countryId,$.parent).change();
					$.province_select[countryId]=true;
				}
			})
		})
	},

	/*
	* 绑定国家Select
	*
	* 当选择国家时,自动更新省/州Select
	*
	* countryId		国家Select控件 的 ID 
	*
	* provinceId	省份Select控件 的 ID 
	*
	* cityId		城市Select控件 的 ID,传值则自动清空,不传值则不处理
	*
	* countyId		区县Select控件 的 ID,传值则自动清空,不传值则不处理
	*
	* townId		乡镇Select控件 的 ID,传值则自动清空,不传值则不处理
	*
	*/
	area_bind_country:function(countryId,provinceId,cityId,countyId,townId)
	{
		$('#'+countryId,$.parent).bind('change',function()
		{
			var country = $(this,$.parent).children(":selected").attr('areakey');
			var countryval = $(this,$.parent).children(":selected").val();
			//清空省Select
			$('#'+provinceId,$.parent).empty();
			$('#'+provinceId,$.parent).append("<option value=''>不限</option>");
			$.getJSON("/Public/directSell/country.json",function(data){
				var province_json=eval(data[country]);
				var default_province=false;
				//加载国家对应的省
				for( var key in province_json)
				{
					if(key!="name"){
						if(province_json[key]==$.area_default_province && countryval==$.area_default_country){
							default_province=true;
							$('#'+provinceId,$.parent).append("<option selected='selected' value='" + province_json[key] + "' areakey='"+key+"'>" + province_json[key] + "</option>");
						}else{
							$('#'+provinceId,$.parent).append("<option value='" + province_json[key] + "' areakey='"+key+"'>" + province_json[key] + "</option>");
						}
					}
				}
				if($.area_default_show){
					//触发加载城市
					$.area_bind_province(countryId,provinceId,cityId,countyId,townId);
					$('#'+provinceId,$.parent).change();
					if(default_province!=true)
						$.area_default_show=false;
					$.city_select[countryId]=true;
				}else{
					if(!$.city_select[countryId])
						$.area_bind_province(countryId,provinceId,cityId,countyId,townId);
						$('#'+provinceId,$.parent).change();
					$.city_select[countryId]=true;
				}
			})
			if(cityId) $('#'+cityId,$.parent).empty().append("<option value=''>不限</option>");
			if(countyId) $('#'+countyId,$.parent).empty().append("<option value=''>不限</option>");
			if(townId) $('#'+townId,$.parent).empty().append("<option value=''>不限</option>");
		});
	},


	/*
	* 绑定省Select
	*
	* 当选择省时,自动更新市Select
	*
	* countryId		国家Select控件 的 ID
	*
	* provinceId	省份Select控件 的 ID 
	*
	* cityId		城市Select控件 的 ID
	*
	* countyId		区县Select控件 的 ID,传值则自动清空,不传值则不处理
	*
	* townId		乡镇Select控件 的 ID,传值则自动清空,不传值则不处理
	*
	*/
	area_bind_province:function(countryId,provinceId,cityId,countyId,townId)
	{
		$('#'+provinceId,$.parent).bind('change',function()
		{
			var country  = $('#'+countryId,$.parent).children(":selected").attr('areakey');
			var province = $(this,$.parent).children(":selected").attr('areakey');
			var provinceval = $(this,$.parent).children(":selected").val();
			//清空城市Select
			$('#'+cityId,$.parent).empty();
			$('#'+cityId,$.parent).append("<option value=''>不限</option>");
			if(province){
				//判断处于哪个文件中 取余数
				var provincekey=province.replace(country,'0');
				var default_city=false;
				$.getJSON("/Public/directSell/area"+(provincekey%110)+".json",function(data){
					var city_json=eval(data[province]);
					//加载国家对应的省
					for( var key in city_json)
					{
						if(city_json[key]==$.area_default_city && provinceval==$.area_default_province){
							default_city=true;
							$('#'+cityId,$.parent).append("<option selected='selected' value='" + city_json[key] + "' areakey='"+key+"'>" + city_json[key] + "</option>");
						}else{
							$('#'+cityId,$.parent).append("<option value='" + city_json[key] + "' areakey='"+key+"'>" + city_json[key] + "</option>");
						}
					}
					if($.area_default_show){
						//触发加载区县
						$.area_bind_city(countryId,provinceId,cityId,countyId,townId);
						$('#'+cityId,$.parent).change();
						if(default_city!=true)
							$.area_default_show=false;
						$.county_select[countryId]=true;
					}else{
						if(!$.county_select[countryId])
							$.area_bind_city(countryId,provinceId,cityId,countyId,townId);
						$('#'+cityId,$.parent).change();
						$.county_select[countryId]=true;
					}
				})
			}
			if(countyId) $('#'+countyId,$.parent).empty().append("<option value=''>不限</option>");
			if(townId) $('#'+townId,$.parent).empty().append("<option value=''>不限</option>");
		});
	},


	/*
	* 绑定市Select
	*
	* 当选择市时,自动更新县Select
	*
	* countryId		国家Select控件 的 ID
	*
	* provinceId	省份Select控件 的 ID 
	*
	* cityId		城市Select控件 的 ID
	*
	* countyId		区县Select控件 的 ID
	*
	* townId		乡镇Select控件 的 ID,传值则自动清空,不传值则不处理
	*
	*/
	area_bind_city:function(countryId,provinceId,cityId,countyId,townId)
	{
		$('#'+cityId,$.parent).bind('change',function()
		{
			var country  = $('#'+countryId,$.parent).children(":selected").attr('areakey');
			var province = $('#'+provinceId,$.parent).children(":selected").attr('areakey');
			var city	 = $(this,$.parent).children(":selected").attr('areakey');
			var cityval  = $(this,$.parent).children(":selected").val();
			//清空区县Select
			$('#'+countyId,$.parent).empty();
			$('#'+countyId,$.parent).append("<option value=''>不限</option>");
			if(city){
				var citykey=city.replace(country,'0');
				$.getJSON("/Public/directSell/area"+(citykey%110)+".json",function(data){
					var county_json=eval(data[city]);
					if(county_json == undefined){ // 如果区县为空
						$('#'+countyId,$.parent).empty();
						$('#'+countyId,$.parent).append("<option value='不限'>不限</option>");
						$('#'+townId,$.parent).empty();
						$('#'+townId,$.parent).append("<option value='不限'>不限</option>");
						return;
					}
					//加载国家对应的省
					for( var key in county_json)
					{
						if(county_json[key] == $.area_default_county && cityval==$.area_default_city){
							$('#'+countyId,$.parent).append("<option selected='selected' value='" + county_json[key] + "' areakey='"+key+"'>" + county_json[key] + "</option>");
						}else{
							$('#'+countyId,$.parent).append("<option value='" + county_json[key] + "' areakey='"+key+"'>" + county_json[key] + "</option>");
						}
					}
					if($.area_default_show){
						//触发加载街道镇
						$.area_bind_county(countryId,provinceId,cityId,countyId,townId);
						$('#'+countyId,$.parent).change();
						$.area_default_show=false;
						$.town_select[countryId]=true;
					}else{
						if(!$.town_select[countryId])
							$.area_bind_county(countryId,provinceId,cityId,countyId,townId);
						$('#'+countyId,$.parent).change();
						$.town_select[countryId]=true;
					}
				})
			}
			if(townId) $('#'+townId,$.parent).empty().append("<option value=''>不限</option>");
		});
	},

	/*
	* 绑定区县Select
	*
	* 当选择区县时,自动更新乡镇Select
	*
	* countryId		国家Select控件 的 ID
	*
	* provinceId	省份Select控件 的 ID 
	*
	* cityId		城市Select控件 的 ID
	*
	* countyId		区县Select控件 的 ID
	*
	* townId		乡镇Select控件 的 ID
	*
	*/
	area_bind_county:function(countryId,provinceId,cityId,countyId,townId)
	{
		$('#'+countyId,$.parent).bind('change',function()
		{
			var country		= $('#'+countryId,$.parent).children(":selected").attr('areakey');
			var province	= $('#'+provinceId,$.parent).children(":selected").attr('areakey');
			var city		= $('#'+cityId,$.parent).children(":selected").attr('areakey');
			var county		= $('#'+countyId,$.parent).children(":selected").attr('areakey');
			var countyval		= $('#'+countyId,$.parent).children(":selected").val();
			//清空乡镇Select
			$('#'+townId,$.parent).empty();
			$('#'+townId,$.parent).append("<option value=''>不限</option>");
			if(county){
				var countykey=county.replace(country,'0');
				$.getJSON("/Public/directSell/area"+(countykey%110)+".json",function(data){
					var town_json=eval(data[county]);
					if(town_json == undefined){ // 如果街道为空
						$('#'+townId,$.parent).empty();
						$('#'+townId,$.parent).append("<option value='不限'>不限</option>");
					}
					//加载国家对应的省
					for( var key in town_json)
					{
						if(town_json[key] == $.area_default_town && countyval==$.area_default_county){
							$('#'+townId,$.parent).append("<option selected='selected' value='" + town_json[key] + "' areakey='"+key+"'>" + town_json[key] + "</option>");
						}else{
							$('#'+townId,$.parent).append("<option value='" + town_json[key] + "' areakey='"+key+"'>" + town_json[key] + "</option>");
						}
					}
				})
			}
		});
	}
})
