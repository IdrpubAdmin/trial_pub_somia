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
  let activeBg = document.querySelector('.active-bg');

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
      moMenuOpen.classList.add('l0');
      activeBg.classList.remove('dn');
    });

    moClose.addEventListener('click', () => {
      moMenuOpen.classList.remove('l0');
    });


  } else {

    // pc menu hover

    for (let i = 0; i < dept.length; i++) {
      dept[i].addEventListener('mouseover', () =>  {
        subDept[i].classList.add('h310');
        
      });

      dept[i].addEventListener('mouseout', () => {
        subDept[i].classList.remove('h310');
      });
    }

  }
  
}

dropdown();
window.addEventListener('resize', dropdown, false);

/*---------------------------------------------------------------------------------------------------------------------------
 * 	 lang-active
 *--------------------------------------------------------------------------------------------------------------------------*/

function langAct() {
  let langAct = document.querySelectorAll('.lang');

  for (let i = 0; i < langAct.length; i++) {
    langAct[i].addEventListener('click', () => {
      langAct[i].classList.toggle('lang-active')
    })
  }
}

langAct();

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