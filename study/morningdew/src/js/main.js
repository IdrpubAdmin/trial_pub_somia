//popup cookie
function setCookie( name, value, expiredays ) {
  var todayDate = new Date();
  todayDate.setDate( todayDate.getDate() + expiredays );
  document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
}

function closeWin() {
  if(document.getElementById("doNotOpen").checked){
  setCookie( "ncookie", "done" , 1 );
  }
  divpop1.classList.add("din")
} 


document.addEventListener('DOMContentLoaded', function() {

  cookiedata = document.cookie;

  if (cookiedata.indexOf("ncookie=done") < 0){

  divpop1.classList.remove("din")
  divpop1.classList.add("dib");
  } else {
  divpop1.classList.remove("dib")
  divpop1.classList.add("din");
  }

});

//swiper
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
      390 : {
        spaceBetween: 90
      },
      500 : {
        spaceBetween: 150        
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


// pc gnb
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

// mobile gnb
document.addEventListener('DOMContentLoaded', function() {

  const bars = document.querySelector(".xi-bars");
  const momenu = document.querySelector("#moMenu");
  const moBg = document.querySelector("#mo-bg");
  const mScroll = document.querySelector('body');

  function onClick() {
    momenu.classList.toggle("l100");
    moBg.classList.toggle("mo-bg");
    mScroll.classList.toggle("scroll-disable");
  }

  bars.addEventListener("click", onClick);


});

// mobile gnb scroll 
document.addEventListener('DOMContentLoaded', function() {
  function mScroll() {
    if(document.querySelector("l100") ) {
      divpop1.classList.add("din");
    }
  }  
});

//jqGrid 
document.addEventListener('DOMContentLoaded', function() { 

jQuery("#grid").jqGrid({
	  datatype: "local",
    height: 200,
    autowidth: true,
   	colNames: ['제목','작성자', '작성일', '별점'],
   	colModel: [
      {name:'title', index:'title', align:'left', width:'50%', formatter:link},
      {name:'writer', index:'writer', align:'center', width:'16.6666%'},
      {name:'date', index:'date', align:'center', width:'16.6666%'},
      {name:'star', index:'star', align:'center', width:'16.6666%'},
   	],
    pager: "pager",
    rowNum : 10,
    loadtext : '로딩중이에용...',
});

//title a링크 추가
function link(cellvalue, options, rowObject)
{
     url = '<a href="#none='+cellvalue+'">'+cellvalue+'</a>';
     return url;
}

var mydata = [
		{title : "후기 올려봐용 ㅎㅎ 갠적으로 좋은 제품 같애요 후기 올려봐용 ㅎㅎ 갠적으로 좋은 제품 같애요 후기 올려봐용 ㅎㅎ 갠적으로 좋은 제품 같애요 후기 올려봐용 ㅎㅎ 갠적으로 좋은 제품 같애요", writer : "하지수", date : "2022-02-08", star : "한개"},
		{title : "후기 올려봐용 ㅎㅎ 갠적으로 좋은 제품 같애요", writer : "하지수", date : "2022-02-08", star : "한개"},
		{title : "후기 올려봐용 ㅎㅎ 갠적으로 좋은 제품 같애요", writer : "하지수", date : "2022-02-08", star : "한개"},
		{title : "후기 올려봐용 ㅎㅎ 갠적으로 좋은 제품 같애요", writer : "하지수", date : "2022-02-08", star : "한개"},

		];
for(var i=0;i<=mydata.length;i++)
	jQuery("#grid").jqGrid('addRowData',i+1,mydata[i]);

// 반응형 설정
  $(window).on('resize.jqGrid', function () {
    jQuery("#grid").jqGrid( 'setGridWidth', $(".grid-wrap").width())
  })

});



