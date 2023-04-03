let start = document.getElementById('start');
let pause = document.getElementById('pause');
let stop = document.getElementById('stop');
let timer = document.getElementById('time');
let resume = document.getElementById('resume');
let minutes = 0;
let seconds = 0;
let Interval;

start.onclick = function Calc(){
    Interval = setInterval(startCalc,100);
    start.style.display = "none";
    changeStyleBlock();
}
resume.onclick = function Calc(){
    Interval = setInterval(startCalc,100);
    start.style.display = "none";
    changeStyleBlock();
    resume.style.display = "none";
}
function startCalc(){
    parseInt(seconds++);
    console.log(seconds);
    if(seconds <=9){
        timer.innerHTML = `0${minutes}:0${seconds}`;
    }
    if(seconds >=10){
        timer.innerHTML = `0${minutes}:${seconds}`;
    }
    if(seconds >=60){
        minutes ++;
        timer.innerHTML = `0${minutes}:${seconds}`;
        seconds = seconds/60;
    }
    if(minutes>=10){
        timer.innerHTML = `${minutes}:${seconds}`;
    }
}
stop.onclick = function(){
    clearInterval(Interval);
    seconds = 0;
    minutes = 0;
    timer.innerHTML = "00:00";
    start.style.display = "block";
    changeStyleNone();
    
}
pause.onclick = function(){
    clearInterval(Interval);
    resume.style.display = "block";
    pause.style.display = "none";
}

function changeStyleBlock(){
    pause.style.display = "block";
    stop.style.display = "block";
}

function changeStyleNone(){
    pause.style.display = "none";
    stop.style.display = "none";
    resume.style.display = "none";
}
