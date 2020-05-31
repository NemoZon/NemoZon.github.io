$(document).ready(function(){
    $('.carousel__slick').slick({
        speed: 1200,
        adaptiveHeight: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow:'<button type="button" class="slick-prev"><img src="../icons/left_arrow.svg"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="../icons/right_arrow.svg"></button>',
        dots: false,
        responsive:
        [
            {
                breakpoint: 991,
                settings:
                {
                  arrows: false,
                  dots: true
                }
            },
         
        ]
    });
    $('ul.catalog__list').on('click', 'li:not(.catalog__item_active)', function() 
        {
        $(this)
          .addClass('catalog__item_active').siblings().removeClass('catalog__item_active')
          .closest('div.container_catalog').find('div.cards').removeClass('cards_active').eq($(this).index()).addClass('cards_active');
    });

    $('ul.catalog__list_menu').on('click', 'li:not(.catalog__item_active)', function() 
        {
        $(this)
          .addClass('catalog__item_active').siblings().removeClass('catalog__item_active')
          .closest('section.catalog').find('div.cards').removeClass('cards_active').eq($(this).index()).addClass('cards_active');
    });

    function toggleSlide(item){
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.card-item__list').eq(i).toggleClass('card-item__list_active');

            })
        })
    }
    function menu(item){
        $(item).on('click',function(g){
            $('.menu').toggleClass('menu_active');
            $('.header__hamburger').toggleClass('header__hamburger_active');
        })
    }

    menu('.catalog__list')
    menu('.header__hamburger')
    toggleSlide('.card-item__link')
    toggleSlide('.card-item__back')
    
});