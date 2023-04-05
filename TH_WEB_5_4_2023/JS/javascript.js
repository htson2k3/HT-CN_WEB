const timer = document.querySelector('.timer');
const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('.reset-btn');
const pauseBtn = document.querySelector('.pause-btn');

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

function startTimer() {
    interval = setInterval(function() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
        timer.innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    }, 1000);
}

function pauseTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.innerHTML = "00:00:00";
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);