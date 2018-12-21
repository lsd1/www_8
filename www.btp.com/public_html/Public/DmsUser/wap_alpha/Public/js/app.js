//菜单
$(document).on('click', '.logout', function () {
    $.confirm('确认退出？', function () {
        location.href = '/pc_denglu.php/DmsUser/Public/logout';
    });
});
$(document).on('click', '.pop-nav', function () {
    var step = $(this).attr('data-rol');
    $.popup('.popup-' + step);
});
$(document).on('click', '.pop-close', function () {
    $.closeModal();
});

//返回
$(document).on('click', '.back,.goback', function () {
    history.back();
});

$(document).on('click', '.info-more', function () {
    $(this).find('.icon-down').toggle();
    $(this).find('.icon-up').toggle();
    $(this).parents('.card').find('.card-box-more').toggle();
});

