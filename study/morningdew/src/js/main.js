document.addEventListener("DOMContentLoaded", function(){

  const swiper = new Swiper('.main-slide', {
    navigation: {
      nextEl: ".main-slide .swiper-button-next",
      prevEl: ".main-slide .swiper-button-prev",
    },
    pagination: {
      el: ".main-slide .swiper-pagination",
    },
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    loop: true,
  });
  
});

document.addEventListener("DOMContentLoaded", function(){ 
  const swiper = new Swiper('.review-slider', {
    navigation: {
      nextEl: ".review-slider-btn-wrap .swiper-button-next",
      prevEl: ".review-slider-btn-wrap .swiper-button-prev",
    },
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    slidesPerView: 5,
    spaceBetween: 36,
    loop: true,
  });
});

$(function(){

  $(".dept01 li").hover(function() {

    $(this).children("ul").stop().slideToggle(300)

  })

});
  
