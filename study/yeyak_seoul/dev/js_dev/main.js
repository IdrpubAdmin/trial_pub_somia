'use strict';


/*---------------------------------------------------------------------------------------------------------------------------
 * 	 dropdown
 *--------------------------------------------------------------------------------------------------------------------------*/

function dropdown() {
  let dept = document.querySelectorAll('.dept-list');
  let subDept = document.querySelectorAll('.sub-dept');
  let deptHeader = document.querySelectorAll('.dept-header'); // 1180px 이하일때
  let moHam = document.querySelector('.mo-hamburger');
  let moMenuOpen = document.querySelector('.mo-menu-open');
  let moClose = document.querySelector('.mo-btn-close');

  // test
  let body = document.querySelector('body');

//   덜컥거리는거 예시 찾기 : innerheight? auto?
// 현대 캐피탈 / lg bestshop https://bestshop.lge.co.kr/
  // let deptH = subDept.innerHeight();
//   let num = deptH + 101; 

  if (matchMedia("screen and (max-width: 1180px)").matches) {

    // mobile accordion menu
    for (let i = 0; i < deptHeader.length; i++) {
      deptHeader[i].onclick = function () {
        for (let j = 0; j < deptHeader.length; j++) {
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

    // mobile hambuger menu click
    moHam.addEventListener('click', () => {
      moMenuOpen.classList.add('r0');
    });

    moClose.addEventListener('click', () => {
      moMenuOpen.classList.remove('r0');
    });


  } else {

    //pc

    // pc menu hover
    let _loop = function _loop(_i) {
      dept[_i].addEventListener('mouseover', () =>  {
        subDept[_i].classList.add('h310');
      });

      dept[_i].addEventListener('mouseout', () => {
        subDept[_i].classList.remove('h310');
      });
    };

    for (let _i = 0; _i < dept.length; _i++) {
      _loop(_i);
    }

  }
  
}

dropdown();
// reload 하는거 말고 다른거 생각해보기 : 깜빡임 문제
window.onresize = function () {
  document.location.reload();
};
// window.addEventListener('resize', dropdown);


/*---------------------------------------------------------------------------------------------------------------------------
 * 	 search
 *--------------------------------------------------------------------------------------------------------------------------*/

function search() {

  let search = document.querySelector('.search');
  let searchOn = document.querySelector('.search-on');
  let activeBg = document.querySelector('.active-bg');
  let searchInput = document.querySelector('.search-input-icon');

    // search click
    search.addEventListener('click', () => {
      search.classList.toggle('search-active');
      searchOn.classList.toggle('db');
      activeBg.classList.toggle('db');
    });

    searchInput.addEventListener('click', () => {
        alert('검색어를 입력해주세요.')
    })

};

search();