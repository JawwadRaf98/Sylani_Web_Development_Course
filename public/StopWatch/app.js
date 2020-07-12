var hr = 00
var min = 00
var sec = 00
var mSec = 00

var hours = document.getElementById('hr')
var minutes = document.getElementById('min')
var seconds = document.getElementById('sec')
var miliSeconds = document.getElementById('ms')

function timer() {
    mSec++
    if(mSec < 10){
        miliSeconds.innerHTML = "0"+mSec
    }
    else{
        miliSeconds.innerHTML = mSec
    }
    
    if (mSec >= 99) {
        sec++
        if (sec < 10) {
            seconds.innerHTML = "0"+sec
        }
        else{
            seconds.innerHTML = sec
        }
        mSec = 00
    }
    else if (sec > 59) {
        console.log(min, sec, mSec)
        min++
        sec = 00
        seconds.innerHTML = sec
        console.log(min, sec, mSec)
        if (min < 10) {
                minutes.innerHTML = "0"+min
        }
        else {
            minutes.innerHTML = min
        }
    }
    else if (min > 59) {
        console.log(min, sec, mSec)
        hr++
        if(hr<10){
            hours.innerHTML = "0"+hr
        }
        else{
            hours.innerHTML = hr
        }
        min = 00
        minutes.innerHTML = min
        sec = 00
        seconds.innerHTML = sec
        // console.log(min, sec, mSec)
    }
    else if (hr > 23) {
        var message = "One day completed"
        document.getElementById('demoPara').innerHTML = message
        hours.innerHTML = 23
        minutes.innerHTML = 59
        seconds.innerHTML = 59
        miliSeconds.innerHTML = 99
        stop()
    }


}
var interval
function play() {
    interval = setInterval(timer, 10)
}
function stop() {
    clearInterval(interval)
}
function restart() {
    stop()
    hours.innerHTML = "00"
    minutes.innerHTML = "00"
    seconds.innerHTML = "00"
    miliSeconds.innerHTML = "00"
}