setInterval(tik, 1000)

let hourHand = document.querySelector('.hour-hand')
let minuteHand = document.querySelector('.min-hand')
let secondHand = document.querySelector('.second-hand')


function tik() {
  let time = new Date()
  let sec = time.getSeconds()
  let min = time.getMinutes()
  let hour = time.getHours()

  let secDeg = sec*6
  let minDeg = (min*6) + (sec*0.1)
  let hourDeg = (hour*12) + (min*0.1)

  secondHand.style.transform = `rotate(${secDeg}deg)`
  minuteHand.style.transform = `rotate(${minDeg}deg)`
  hourHand.style.transform = `rotate(${hourDeg}deg)`
}

