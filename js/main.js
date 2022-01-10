$(function() {

    $('.header__burger').on('click', function() {
        $('.header__burger,.header__navigation').toggleClass('active');
    });

    $('.slider__wrapper').slick({
        dots: true,
        arrows: false,
        dotsClass: 'slick-dots',
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        responsive: [{
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            }
        ]
    });


    new WOW().init();
})