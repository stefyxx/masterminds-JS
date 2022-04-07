const colors = [0, 1, 2, 3];
let sceltaPC = randomPC();
//sceglie 4 colori
function randomPC() {
    let scelta = [];
    for (let index = 0; index < 4; index++) {
        scelta[index] = colors[Math.floor(Math.random() * colors.length)];
    }
    return scelta;
};
console.log(sceltaPC);

let sceltaPlayer = [];
const maxTentativi = 12;
let nb_tentativi = 0;
// let selected = document.getElementById("selectNumber");
// selected.addEventListener("change",selectNumber);

// function selectNumber(event) {
//     let nmbr = parseInt(event.currentTarget.value); //perchè mi dona una string
//     if(sceltaPlayer[0]==NaN){
//         sceltaPlayer.push(nmbr);
//     }else{
//         sceltaPlayer=[];
//         sceltaPlayer.push(nmbr);
//     }
//     console.log(sceltaPlayer);
// }

let options = document.querySelectorAll("select");
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("change", selectNumber);
    function selectNumber(event) {
        let nmbr = parseInt(event.currentTarget.value); //perchè mi dona una string
        if (sceltaPlayer[i] == NaN) {
            sceltaPlayer.push(nmbr);
        } else {
            sceltaPlayer.splice(i, 1, nmbr);
        }
        console.log(sceltaPlayer);

        if (sceltaPlayer.length == 4) {
            addScelta(sceltaPlayer); 
            console.log("nuovo array");
            nb_tentativi++;
            nb_corretti = bonPlace();
            nb_mauvaisPlace = bonNumber() - nb_corretti;
            add_suggerimentoDIV();
            if(nb_corretti==4){
                // soluzPC(sceltaPC);
                alert('Tu as gagné!!');
            }
            sceltaPlayer = [];
        }
        if (nb_tentativi == maxTentativi) {
            alert('Hai perso');
            soluzPC(sceltaPC);
        }
    }
}

//recupero la mia scelta prima di svuotare l'array-Player
function addScelta(sceltaPlayer) {
    let tbody = document.getElementsByTagName("tbody")[0]; //il primo:= soluzPlayer
    let row = "<tr>";
    for (let i = 0; i < sceltaPC.length; i++) {
        row += `<td>${sceltaPlayer[i]}</td>`
    }
    row += "</tr>";
    tbody.innerHTML += row;
}

//i corretti
function bonPlace() {
    let nb_corretti = 0;
    for (let index = 0; index < sceltaPC.length; index++) {
        if (sceltaPlayer[index] == sceltaPC[index]) {           
            nb_corretti++;
        }
    }
    return nb_corretti;
}


//i buoni colori al mal posto
function bonNumber() {
    let nb_mauvaisPlace = 0;
    let mio = sceltaPlayer;
    let pc = sceltaPC;
    
    for (let i = 0; i < sceltaPlayer.length; i++){
        for (let j = 0; j < sceltaPC.length; j++){
            if (mio[i] == pc[j]) {
                nb_mauvaisPlace ++;
                mio[i] = -1;
                pc[j] = -1;
                if(i==4){
                    break;
                }else{i++;} 
            }
        }
    }
    return nb_mauvaisPlace;
}

let suggerimentiDiv = document.querySelector(".hints");
function add_suggerimentoDIV() {
    let div = document.createElement("div");
    suggerimentiDiv.appendChild(div);
    div.innerText = nb_corretti + " nombre(s) est au bon endroit, " + nb_mauvaisPlace + " autre(s) n'est pas a sa place";
}


function soluzPC(sceltaPC) {
    let tbody = document.getElementsByTagName("tbody")[1]; //il secondo:= soluz PC
    let row = "<tr>";
    for (let i = 0; i < sceltaPC.length; i++) {
        row += `<td>${sceltaPC[i]}</td>`
    }
    row += "</tr>";
    tbody.innerHTML += row;
}


//timer //

function perdu() {
    soluzPC(sceltaPC);
    let text = document.createElement('p');
    document.body.appendChild(text);
    // text.innerText = ' Tu as perdue!! ';
    text.innerHTML=`<div style="color:red width:50%">Tu as perdue!!</div>`
    alert(' Tu as perdue!! ');

}
//quando deve apparire 'perso'
setTimeout(perdu, 360000);

//timer del tempo che corre
const TIME_LIMIT = 360; // in secondi 
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

let div_timer= document.getElementById("testata");
div_timer.innerHTML=`<div id="timer-label">${formatTime(timeLeft)}</div>`;
document.body.appendChild(div_timer);

startTimer();

function formatTime(time) {
    const minutes = `0${Math.floor(time / 60)}`;
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
}

function onTimesUp() {
    clearInterval(timerInterval);
}

//parte ogni secondo
function startTimer() {
    timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        document.getElementById("timer-label").innerHTML = formatTime(
            timeLeft
        );

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            document.getElementById('testata').remove();
        }
    }, 1000);
}