
// swiper 위치 수정값
jQuery(document).ready(function() { 
  var main_W = jQuery(".main-slide").width();
  if(main_W <= 1280){
    $('.main-slide .swiper-button-next').css('right','120px');
    $('.main-slide .swiper-button-prev-').css('left','120px');
  }else{
    var w_change = (main_W - 1280)/2;
    $('.main-slide .swiper-button-next').css('right',120+ w_change + 'px');
    $('.main-slide .swiper-button-prev').css('left',120+ w_change + 'px');
  }		

  $(window).resize(function(){
    var main_W = jQuery(".main-slide").width();
    if(main_W <= 1280){
      $('.main-slide .swiper-button-next').css('right','10px');
      $('.main-slide .swiper-button-prev').css('left','10px');
    }else{
      var w_change = (main_W - 1280)/2;
      $('.main-slide .swiper-button-next').css('right',10+ w_change + 'px');
      $('.main-slide .swiper-button-prev').css('left',10+ w_change + 'px');
    }
  });
}); //지우지마
