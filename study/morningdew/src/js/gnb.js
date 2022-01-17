$(document).ready(function(){

    $(document).on('mouseover', '.gnb .hover-green', function () {
        $('.dept02').slideDown(200);
    });
    $(document).on('mouseover', 'div', function () {
        if (!$(this).hasClass('gnb')) {
            $('.dept02').slideUp(200);
        }
    });


});

alert("hello");