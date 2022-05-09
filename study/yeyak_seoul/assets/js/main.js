'use strict';

function dropdown() {
  var dept = document.querySelectorAll('.dept-list');
  var subDept = document.querySelectorAll('.sub-dept');
  var deptHeader = document.querySelectorAll('.dept-header'); // 1180px 이하일때

  if (matchMedia("screen and (max-width: 1180px)").matches) {
    for (var i = 0; i < deptHeader.length; i++) {
      deptHeader[i].onclick = function () {
        for (var j = 0; j < deptHeader.length; j++) {
          deptHeader[j].classList.remove("active");

          if (this !== deptHeader[j]) {
            deptHeader[j].nextElementSibling.style.height = null;
          }
        }

        this.classList.toggle("active");
        var panel = this.nextElementSibling;

        if (panel.style.height) {
          this.classList.remove("active");
          panel.style.height = null;
        } else {
          panel.style.height = panel.scrollHeight + "px";
        }
      };
    }
  } else {
    var _loop = function _loop(_i) {
      dept[_i].addEventListener('mouseover', function () {
        subDept[_i].classList.add('h310');
      });

      dept[_i].addEventListener('mouseout', function () {
        subDept[_i].classList.remove('h310');
      });
    };

    //시작
    for (var _i = 0; _i < dept.length; _i++) {
      _loop(_i);
    } //끝

  }
}

dropdown();

window.onresize = function () {
  document.location.reload();
};