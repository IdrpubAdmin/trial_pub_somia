var target = document.querySelectorAll('.btn-open');
var targetID;
  
// 팝업 열기
  for(var i = 0; i < target.length; i++){
    target[i].addEventListener('click', function(){
    // getAttribute : 선택한 요소의 특정 속성을 가져옴 ex) a값의 href
      targetID = this.getAttribute('href');
      document.querySelector(targetID).classList.remove("dn");
    });
  };

// 팝업 닫기
function popClose() {
  // targetID -> a href의 #popTax와 #popCash에 클래스를 더함 
  document.querySelector(targetID).classList.add("dn");
};

// print
function pageprint()
{
    window.print();
}

// 질문할거 

