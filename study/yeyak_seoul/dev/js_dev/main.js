'use strict';

const dept = document.querySelectorAll('.dept-list')
const subDept = document.querySelectorAll('.sub-dept')

function dropdown(i) {
    dept[i].addEventListener('mouseover', () => {
        subDept[i].classList.add('h310')
    });

    dept[i].addEventListener('mouseout', () => {
        subDept[i].classList.remove('h310')
    })
};

for (var i = 0; i <6; i++) {
    dropdown(i); 
}