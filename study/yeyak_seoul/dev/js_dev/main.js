'use strict';

    const dept = document.querySelector('.dept-list');
    const subDept = document.querySelectorAll('.sub-dept');

    console.log(subDept);

    // function test() {

    //     for ( var i = 0; i < dept.length; i++ ) {

    //         dept[i].addEventListener('mouseover', () => {
    //             subDept[i].classList.add('h310')
    //         });

    //         dept[i].addEventListener('mouseout', () => {
    //             subDept[i].classList.remove('h310')
    //         })
    //     }
    // }
    
    // subDept 안되는 이유 찾기

    for ( let i=0; i<dept.length; i++ ) {
        dept[i].addEventListener('mouseover', () => {
            subDept[i].classList.add('h310')
        });
    }

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }

// function dropdown(i) {
//     dept[i].addEventListener('mouseover', () => {
//         subDept[i].classList.add('h310')
//     });

//     dept[i].addEventListener('mouseout', () => {
//         subDept[i].classList.remove('h310')
//     })
// };

// for (var i = 0; i <6; i++) {
//     dropdown(i); 
// }