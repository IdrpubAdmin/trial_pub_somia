'use strict';

var dept = document.querySelectorAll('.dept-list');
var subDept = document.querySelectorAll('.sub-dept');

function dropdown(i) {
  dept[i].addEventListener('mouseover', function () {
    subDept[i].classList.add('h310');
  });
  dept[i].addEventListener('mouseout', function () {
    subDept[i].classList.remove('h310');
  });
}

;

for (var i = 0; i < 6; i++) {
  dropdown(i);
}