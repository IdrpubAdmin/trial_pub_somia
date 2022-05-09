'use strict';


function dropdown() {

    const dept = document.querySelectorAll('.dept-list');
    const subDept = document.querySelectorAll('.sub-dept');
    const deptHeader = document.querySelectorAll('.dept-header');

    // 1180px 이하일때
    if ( matchMedia("screen and (max-width: 1180px)").matches) {

        for ( let i = 0; i < deptHeader.length; i++ ) {

            deptHeader[i].onclick = function() {
                for (let j = 0; j < deptHeader.length; j++) {
                    deptHeader[j].classList.remove("active");
                    if ( this !== deptHeader[j]) {
                        deptHeader[j].nextElementSibling.style.height = null;
                    }        
                }

                this.classList.toggle("active");
                let panel = this.nextElementSibling;
                if (panel.style.height){
                    this.classList.remove("active");
                    panel.style.height = null;
                } else {
                    panel.style.height = panel.scrollHeight + "px";
                }

            }    
            
        }


    } else {

        //시작
        for ( let i=0; i<dept.length; i++ ) {
            dept[i].addEventListener('mouseover', () => {
                subDept[i].classList.add('h310')
            })
    
            dept[i].addEventListener('mouseout', () => {
                subDept[i].classList.remove('h310')
            })
        }
        //끝

    }
}

dropdown();
window.onresize = function(){ document.location.reload(); };
