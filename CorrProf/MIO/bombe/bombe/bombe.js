function boom() {
    let text=document.createElement('p');
    document.body.appendChild(text);
    text.innerText=' Boom! ';    
}

//quando deve apparire boom
setTimeout(boom,300001);

// calcolo in secondi
const TIME_START = 63; // in secondi
let timePassed = 0;
let timeLeft = TIME_START;
let timerInterval = null; // dichiarazione della variabile x setInterval

function formatTime(time) {
  let minutes =`0${Math.floor(time / 60)}`; //cosi' c'è sempre 0 davanti
  let seconds = time % 60;
  if (seconds < 10) {                       //cosi' c'è sempre 0 davanti
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed ++; //toglie 1 sec alla volta
    timeLeft = TIME_START - timePassed;
    document.getElementById("timer").innerHTML = formatTime(timeLeft);
    if(timeLeft<61){
      //je vais a créer un class sur ma div de ligne 46
      document.getElementById('demostr').firstElementChild.setAttribute('class','alarm');
      
    }

    //stoppare (clearInterval) ed eliminare (.remove()) il setInterval
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      document.getElementById('demostr').remove();
    }
  }, 1000);
}
  
document.getElementById("demostr").innerHTML =`
  <div id="timer" class="start">${formatTime(
      timeLeft
    )}</div>`;
  
startTimer();