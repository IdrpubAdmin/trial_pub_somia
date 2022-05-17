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
  var moClose = document.querySelector('.mo-btn-close');
  var activeBg = document.querySelector('.active-bg');

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
      moMenuOpen.classList.add('l0');
      activeBg.classList.remove('dn');
    });
    moClose.addEventListener('click', function () {
      moMenuOpen.classList.remove('l0');
    });
  } else {
    var _loop = function _loop(_i) {
      dept[_i].addEventListener('mouseover', function () {
        subDept[_i].classList.add('h310');
      });

      dept[_i].addEventListener('mouseout', function () {
        subDept[_i].classList.remove('h310');
      });
    };

    // pc menu hover
    for (var _i = 0; _i < dept.length; _i++) {
      _loop(_i);
    }
  }
}

dropdown();
window.addEventListener('resize', dropdown, false);
/*---------------------------------------------------------------------------------------------------------------------------
 * 	 lang-active
 *--------------------------------------------------------------------------------------------------------------------------*/

function langAct() {
  var langAct = document.querySelectorAll('.lang');

  var _loop2 = function _loop2(i) {
    langAct[i].addEventListener('click', function () {
      langAct[i].classList.toggle('lang-active');
    });
  };

  for (var i = 0; i < langAct.length; i++) {
    _loop2(i);
  }
}

langAct();
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