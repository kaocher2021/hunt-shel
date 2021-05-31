$(function(){

    $('.banner-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade:true,
        speed:1500,
        arrows:true,
        prevArrow:'.left',
        nextArrow:'.right',
      });
    $('.gal-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed:1500,
        arrows:false,
      });

      $('.service-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows:true,
        speed:1500,
        vertical:true,
        autoplaySpeed: 2000,
        centerMode:true,
        centerPadding:0,
        verticalSwiping:true,
        prevArrow:'.up',
        nextArrow:'.down',
      });



//gal-venobox//
$('.venobox').venobox(); 



});