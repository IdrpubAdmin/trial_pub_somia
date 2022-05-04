'use strict';

var dept = document.querySelector('.dept-list');
var subDept = document.querySelectorAll('.sub-dept');
console.log(subDept); // function test() {
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

var _loop = function _loop(i) {
  dept[i].addEventListener('mouseover', function () {
    subDept[i].classList.add('h310');
  });
};

for (var i = 0; i < dept.length; i++) {
  _loop(i);
}

for (var index = 0; index < array.length; index++) {
  var element = array[index];
} // function dropdown(i) {
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