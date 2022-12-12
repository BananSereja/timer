import { intervalToDuration } from 'date-fns'

let inputTimer = document.querySelector('.input_timer');
const buttonStart = document.querySelector('.button_start');
const buttonStop = document.querySelector('.button_stop')
let valueTimer = document.querySelector('.value_timer');


buttonStart.addEventListener('click', timerDate)



console.log (buttonStop)

function timerDate (e) {
    e.preventDefault()

buttonStop.addEventListener('click', (e) => {
e.preventDefault()
clearInterval(timer)})



let timer = setInterval(() => {

   let valueTime = intervalToDuration({
    start:  new Date(inputTimer.value),
    end:  new Date()  
    })
    
    valueTimer.textContent = ''
    if (valueTime.years < 10){
        valueTimer.years = '0' + valueTime.years;
    }

    if (valueTime.days < 10){
        valueTime.days = '0' +  valueTime.days
    }

    if (valueTime.hours <10){
        valueTime.hours = '0' + valueTime.hours
    }

    if (valueTime.seconds < 10){
        valueTime.seconds = '0' + valueTime.seconds
    }

    console.log(new Date(inputTimer.value))
   
    valueTimer.textContent = valueTime.years  + ' years :' + valueTime.months + ' months : ' 
    + valueTime.hours + ' hours : ' + valueTime.minutes + ' minutes : '+ valueTime.seconds +' seconds.\n Countdown...'
}, 1000)

// buttonStop.addEventListener('click', () => clearInterval(timer))
  

}

