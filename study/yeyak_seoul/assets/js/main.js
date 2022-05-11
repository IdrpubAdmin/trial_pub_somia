'use strict';
/*---------------------------------------------------------------------------------------------------------------------------
 * 	 dropdown
 *--------------------------------------------------------------------------------------------------------------------------*/

function dropdown() {
  var dept = document.querySelectorAll('.dept-list');
  var subDept = document.querySelectorAll('.sub-dept');
  var deptHeader = document.querySelectorAll('.dept-header'); // 1180px 이하일때

  var moHam = document.querySelector('.mo-hamburger');
  var moMenuOpen = document.querySelector('.mo-menu-open');
  var moClose = document.querySelector('.mo-btn-close'); //   덜컥거리는거 예시 찾기 : innerheight? auto?
  // 현대 캐피탈 / lg bestshop https://bestshop.lge.co.kr/

  var deptH = subDept.innerHeight(); //   let num = deptH + 101; 

  if (matchMedia("screen and (max-width: 1180px)").matches) {
    // mobile accordion menu
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
    } // mobile hambuger menu click


    moHam.addEventListener('click', function () {
      moMenuOpen.classList.add('r0');
    });
    moClose.addEventListener('click', function () {
      moMenuOpen.classList.remove('r0');
    });
  } else {
    //pc
    // pc menu hover
    var _loop = function _loop(_i) {
      dept[_i].addEventListener('mouseover', function () {
        subDept[_i].classList.add('h310');
      });

      dept[_i].addEventListener('mouseout', function () {
        subDept[_i].classList.remove('h310');
      });
    };

    for (var _i = 0; _i < dept.length; _i++) {
      _loop(_i);
    }
  }
}

dropdown(); // reload 하는거 말고 다른거 생각해보기 : 깜빡임 문제

window.onresize = function () {
  document.location.reload();
};
/*---------------------------------------------------------------------------------------------------------------------------
 * 	 search
 *--------------------------------------------------------------------------------------------------------------------------*/


function search() {
  var search = document.querySelector('.search');
  var searchOn = document.querySelector('.search-on');
  var activeBg = document.querySelector('.active-bg');
  var searchInput = document.querySelector('.search-input-icon'); // search click

  search.addEventListener('click', function () {
    search.classList.toggle('search-active');
    searchOn.classList.toggle('db');
    activeBg.classList.toggle('db');
  });
  searchInput.addEventListener('click', function () {
    alert('검색어를 입력해주세요.');
  });
}

;
search();