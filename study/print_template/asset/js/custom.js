document.addEventListener('DOMContentLoaded', function() { 

  var target = document.querySelectorAll('.btn-open');
  var popClose = document.querySelectorAll('.popup .btn-close')
  var targetID;
  
  // 팝업 열기
  for(var i = 0; i < target.length; i++){
    target[i].addEventListener('click', function(){
    // getAttribute : 선택한 요소의 특정 속성을 가져옴 ex) a값의 href
      targetID = this.getAttribute('href');
      document.querySelector(targetID).classList.remove("dn");
      document.querySelector(targetID).classList.add("db");
    });
  }
  
  // 팝업 닫기
  for(var j = 0; j < target.length; j++){
    popClose[j].addEventListener('click', function(){
      document.querySelector(targetID).classList.remove("db");
      document.querySelector(targetID).classList.add("dn");
    });
  }
  
});


// print
function pageprint()
{
    window.print();
}


