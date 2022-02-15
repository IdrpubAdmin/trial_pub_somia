// function paddedFormat(num) {
//     return num < 10 ? "0" + num : num; 
// }

// function startCountDown(duration, element) {

//     let secondsRemaining = duration;
//     let min = 0;
//     let sec = 0;

//     min.style.fontFamily = "nanumB";

//     let countInterval = setInterval(function () {

//         min = parseInt(secondsRemaining / 60);
//         sec = parseInt(secondsRemaining % 60);

//         element.textContent = `${paddedFormat(min)}분 ${paddedFormat(sec)}초`;

//         secondsRemaining = secondsRemaining - 1;
//         if (secondsRemaining < 0) { clearInterval(countInterval) };

//     }, 1000);
// }

var timer;

var compareDate = new Date();
compareDate.setMinutes(compareDate.getMinutes() + 15);

timer = setInterval(function() {
    timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {

        // Timer done
        clearInterval(timer);

    } else {

        var seconds = Math.floor(difference / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        $(".minutes").text(minutes);
        $(".seconds").text(seconds);
    }
}
