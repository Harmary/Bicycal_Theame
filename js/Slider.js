if($('.socialmedia__body').lenght>0){
    $('.socialmedia__body').slick({
       // autoplay:true,
        //infinite:false,
        dots:true,
        arrows:true,
        accessibility:false,
        slidesToShow:1,
        autoplaySpeed:3000,
        adaptiveHeight:true,
        nestArrow:'<button type="button" class="slick-next"></button>',
        prevArrow:'<button type="button" class="slick-prev"></button>',
        responsive:[{
            breakpoint: 768,
            settings:{}
        }]
    })
}