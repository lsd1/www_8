$(function() {
    $('.nav-list span', '.sidebar-menu').on('click', function() {
        $(this).parents('.nav-list').siblings('.active').removeClass('active');
        $(this).parents('.nav-list').toggleClass('active');
    });
	sidebarH();
	$(window).resize(function(){
		sidebarH();
	});

	function sidebarH() {
		var $sidebarH = $(window).height()-166;
		$(".sidebar-menu").height($sidebarH);
	}


});

