document.addEventListener('DOMContentLoaded', function() { 

var target = document.querySelectorAll('.btn-open');
var popClose = document.querySelectorAll('.popup .btn-close')
var targetID;

// 팝업 열기
for(var i = 0; i < target.length; i++){
  target[i].addEventListener('click', function(){
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