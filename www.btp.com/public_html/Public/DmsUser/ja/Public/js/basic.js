$(function() {

    $('.nav-list span', '.sidebar-menu').on('click', function() {
        $(this).parents('.nav-list').siblings('.active').removeClass('active');
        $(this).parents('.nav-list').toggleClass('active');
        //$(this).parents('.nav-list').siblings('.nav-list').find('.nav-child').stop().slideUp();
        //$(this).parents('.nav-list').find('.nav-child').stop().slideToggle();
    });

});

