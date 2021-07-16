$(document).ready(function() {
    new WOW({
        animateClass: 'animate__animated'
    }).init();

    $('.main__btn').click(() => {
        $('html, body').animate({
            scrollTop: $('.connect__form').offset().top
        }, 700);
    });

    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 3,
        speed: 900,
        slidesToScroll: 1,
        dots: false,
        arrow: true,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});