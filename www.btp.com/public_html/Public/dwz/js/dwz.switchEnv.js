/**
 * @author zhanghuihua@msn.com
 */
(function($){
	$.fn.navMenu = function(){
		return this.each(function(){
			var $box = $(this);
			$box.find("li>a").click(function(){

				var $a = $(this);
				
				var html = $('#menu_data #' + $a.attr('item') ).html();

				$( "#sidebar" ).find(".app_menu_div").hide(); //��������

				//��ǰ�˵�������������߶�
				var menu_height				= $( '#sidebar #' + $a.attr('item') ).parent().height();

				//���˵�ͷ���߶�
				var main_menu_height_height	= $( '#sidebar #' + $a.attr('item') ).parent().find(".toggleCollapse").height();

				//�˵�ͷ���߶�
				var menu_header_height		= $( '#sidebar #' + $a.attr('item') + ' .accordionHeader' ).size() * 25;


				var max_height				= menu_height - menu_header_height - main_menu_height_height - 3;

				var count_height			= $( '#sidebar #' + $a.attr('item') ).find("a").length * 22;

				//alert( count_height );

				//alert( 'menu_height:'+menu_height+',toggleCollapse:'+main_menu_height_height+',header_height:'+menu_header_height );

				$( '#sidebar #' + $a.attr('item') + ' .accordionContent'  ).height( count_height<=max_height?count_height:max_height );

				//��ǰ�˵���������Ӧ�����õĸ߶� =  ���߶� - ͷ���߶�
				$( '#sidebar #' + $a.attr('item')  ).show(  );  //��ʾ��ǰ�����

				$box.find("li").removeClass("selected");
				$a.parent().addClass("selected");
	
				/*
				$.post($a.attr("href"), {}, function(html){
					$("#sidebar").find(".accordion").remove().end().append(html).initUI();
					$box.find("li").removeClass("selected");
					$a.parent().addClass("selected");
					//navTab.closeAllTab();
				});
				*/
				return false;
			});
		});
	}
	
	$.fn.switchEnv = function(){
		var op = {cities$:">ul>li", boxTitle$:">a>span"};
		return this.each(function(){
			var $this = $(this);
			$this.click(function(){
				if ($this.hasClass("selected")){
					_hide($this);
				} else {
					_show($this);
				}
				return false;
			});
			
			$this.find(op.cities$).click(function(){
				var $li = $(this);

				$.post($li.find(">a").attr("href"), {}, function(html){
					_hide($this);
					$this.find(op.boxTitle$).html($li.find(">a").html());
					navTab.closeAllTab();
					$("#sidebar").find(".accordion").remove().end().append(html).initUI();
				});
				return false;
			});
		});
	}
	
	function _show($box){
		$box.addClass("selected");
		$(document).bind("click",{box:$box}, _handler);
	}
	function _hide($box){
		$box.removeClass("selected");
		$(document).unbind("click", _handler);
	}
	
	function _handler(event){
		_hide(event.data.box);
	}
})(jQuery);


