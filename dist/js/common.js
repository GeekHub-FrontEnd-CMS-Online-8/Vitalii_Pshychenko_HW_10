$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        nav: true,
        navText: false,
        dotsEach: true,
        responsiveClass:true,
        responsive:{
            0:{
                nav:false
            },
            600:{

                nav:false
            },
            991:{
                nav:true,
                loop:false
            }
        }
    });
});




$(document).on('click', '#openMenu', function () {
    $(this).toggleClass('active');
    $('.menu-list').toggleClass('open');
});

$(document).on('touchstart' && 'touchend', function (e) {
    var container = $(".header__menu");
    if (container.has(e.target).length === 0) {
        $('#openMenu').removeClass('active');
        $('.menu-list').removeClass('open');
    }
});