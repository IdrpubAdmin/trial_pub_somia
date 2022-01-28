//popup js 
// document.addEventListener('DOMContentLoaded', function() {

//     function setCookie( name, value, expiredays ) {
//     var todayDate = new Date();
//     todayDate.setDate( todayDate.getDate() + expiredays );
//     document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
//     }

//     //쿠키 불러오기
//     function getCookie(name) 
//     { 
//         var obj = name + "="; 
//         var x = 0; 
//         while ( x <= document.cookie.length ) 
//         { 
//             var y = (x+obj.length); 
//             if ( document.cookie.substring( x, y ) == obj ) 
//             { 
//                 if ((endOfCookie=document.cookie.indexOf( ";", y )) == -1 ) 
//                     endOfCookie = document.cookie.length;
//                 return unescape( document.cookie.substring( y, endOfCookie ) ); 
//             } 
//             x = document.cookie.indexOf( " ", x ) + 1; 
            
//             if ( x == 0 ) break; 
//         } 
//         return ""; 
//     }

//     //닫기 버튼 클릭시
//     function closeWin(key)
//     {
//         if($("#doNotOpen").prop("checked"))
//         {
//             setCookie('divpop'+key, 'Y' , 1 );
//         }
//         $("#divpop"+key+"").hide();
//     }
  
//     $(function(){    
//         if(getCookie("divpop1") !="Y"){
//             $("#divpop1").show();
//         }
//     });

// });


document.addEventListener('DOMContentLoaded', function() { 
  var swiper = new Swiper('.main-slide', {
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
    loopAdditionalSlides: 1,
    slidesPerView: 'auto',
    centeredSlides: true,
  });

  var swiper2 = new Swiper('.review-slider', {
    slidesPerView: 'auto',
    spaceBetween: 44,
    centeredSlides: true,
    navigation: {
    nextEl: ".review-slider-btn-wrap .swiper-button-next",
    prevEl: ".review-slider-btn-wrap .swiper-button-prev",
    },
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    breakpoints: {
      320 : {
        slidesPerView: 'auto',
        spaceBetween: 70
      },
      768 : {
        spaceBetween: 70
      },
      1024 : {
        spaceBetween: 126
      },
      1300 : {
        slidesPerView: 5,
        spaceBetween: 36
      }
    },
    loop: true,
  });
});


document.addEventListener('DOMContentLoaded', function() {  
  // 클래스는 동시에 돌아가게 하려면 for문이 필요. id의 경우 하나만 돌아감. getel~ 말고 querySelectorAll
  const menuhover = document.querySelectorAll(".menuhover");
  const dropdown = document.querySelectorAll(".dropdown");
  const bggray = document.querySelectorAll(".dep2-bg");

  //bggray는 하나니까 i 필요없음
  //js에서 직접적으로 style을 변경하는 것이 아닌 classList.add, classList.remove 를 사용하는 방법 사용
  function test(i){
      menuhover[i].addEventListener("mouseover", () => (
              (dropdown[i].style.display = "block"),
              (bggray[0].style.display = "block")
          )
      );

      menuhover[i].addEventListener("mouseout", () => (
              (dropdown[i].style.display = "none"),
              (bggray[0].style.display = "none")
          )
      );
}

  // for문 안에 이벤트 등록을 해줘야만함
  // 초기화; 조건식; 증감식 -> 조건식이 true일 때 실행될 명령 
  // 0으로 초기화, i가 5보다 작으면 명령반복 
  // 위에서 선언 후 밑에서 for 실행, for (){} 문장 지키기
  for (var i = 0; i <5; i++) {
      test(i); 
  }
});

document.addEventListener('DOMContentLoaded', function(e) {
  e.preventDefault();

  const bars = document.querySelector(".xi-bars");
  const momenu = document.querySelector("#moMenu");

  function onClick() {
    momenu.classList.toggle("l100");
  }

  bars.addEventListener("click", onClick);


});


