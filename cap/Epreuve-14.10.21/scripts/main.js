// Créer les CONST
const count = 10;
const codeLength = 4;
const timerDuration = 5; // en minute

//ha 10 tentativi
document.getElementById("count").innerText = count;

// Afficher le jeu au click
document.getElementById("play").addEventListener("click", function() {
    let hidden = document.getElementsByTagName('main')[0];
    hidden.classList.remove("hidden");
    let time = setInterval("timer()", 1000);
});

// Lancer le timer au play
// Rajouter dans la fonction si dessus
let timerLeft = timerDuration * 60 * 1000;
let minutes = timerDuration;
let secondes = 1;
function timer() {
    if (minutes < 10) {
        document.getElementById("minutes").innerText = "0" + minutes;
    } else {
        document.getElementById("minutes").innerText = minutes;
    }
    if (secondes < 10) {
        document.getElementById("secondes").innerText = "0" + secondes;
    } else {
        document.getElementById("secondes").innerText = secondes;
    }
    secondes = secondes - 1;
    if (secondes == 0) {
        secondes = 59;
        minutes = minutes - 1
    }
    if (minutes == -1) {
        document.getElementById("secondes").innerText = "00";
        document.getElementById("game").innerHTML = "<img src='https://c.tenor.com/hD50d2m1QFgAAAAC/ru-pauls-drag-race-sashay-away.gif' alt='You loose!'>";
        clearInterval(time);
    }
}


// Générer un code de 4 avec 1234
const codeColors = ['1','2','3','4'];

function getRandomCode (max) {
    let code = [];
    for (let index = 0; index < codeLength; index++) {
        let x = codeColors[Math.floor(Math.random() * max)];
        code.push(x);
    }
    return code;
}
let code = getRandomCode(codeLength);
console.log(code)

// Récupérer le code proposé par le joueur
let userCode = [];
let userCount = count;
document.getElementById("submit").addEventListener("click", function getUserCode() {
    if (s1.value == "" || s2.value == "" || s3.value == "" || s4.value == "") {
        document.getElementById("message").innerText = "Error.";
    } else {
        let select1 = document.getElementById('s1').value;
        userCode.push(select1);
        let select2 = document.getElementById('s2').value;
        userCode.push(select2);
        let select3 = document.getElementById('s3').value;
        userCode.push(select3);
        let select4 = document.getElementById('s4').value;
        userCode.push(select4);

        // Diminuer le compteur et l'afficher
        userCount = userCount - 1;
        document.getElementById("count").innerText = userCount;
        console.log("user count : " + userCount);
        // Ajouter un truc pour quand le compteur est à 0 
        if (userCount == 0) {
            document.getElementById("game").innerHTML = "<img src='https://c.tenor.com/hD50d2m1QFgAAAAC/ru-pauls-drag-race-sashay-away.gif' alt='You loose!'>";
            return;
        }
        
        // Afficher l'indice et l'essais dans l'historique
        // Vérifier les bien placés
        let userCopy = Array.from(userCode);
        let codeCopy = Array.from(code);
        let a = 0; // compteur des bien placés
        let b = 0; // compteur des bonnes couleurs
        for (let index = 0; index < codeLength; index++) {
            if (userCopy[index] == codeCopy[index]) {
                userCopy[index] = "a";
                codeCopy[index] = "c";
                a++;
            }
        }
        for (let i = 0; i < codeLength; i++) {
            for (let j = 0; j< codeLength; j++) {
                if (userCopy[i] == codeCopy[j]) {
                    userCopy[i] = "b";
                    codeCopy[j] = "c";
                    b++;
                }
            }
        }
        
        // Vérifier si on a gagner avant le reste
        if (a == 4) {
            document.getElementById("message").innerHTML = "<img src='https://media0.giphy.com/media/dBf0OpOH96MTM6hYqr/giphy.gif' alt='You won!'>";
            return;
        }
        
        // Afficher les indices et historiques
        document.getElementById("past-title").innerHTML = "Past attempt :";
        let hint = "Right position + color : " + a + "<br>Right color + wrong position : " + b +"<br>";
        let board = document.querySelector(".past-board");
        let addPast = "<div class='past-board-row'><divclass='past-code'>" + userCode + "</><div class='past-hint'>" + hint + "</div></div>";
        board.innerHTML += addPast;
        
    }

    // Remettre à zéro
    userCode = [];
    s1.selectedIndex = 0;
    s2.selectedIndex = 0;
    s3.selectedIndex = 0;
    s4.selectedIndex = 0;
})




// Pas oublier de remettre la class hidden sur mon main quand j'ai fini la phase de test



// BONUS SI Y A LE TEMPS :
// Corriger le timer
// Optimisation du code, faire des boucles pour les selects (remise à zéro et récupération du code de l'utilisateur)
// Remplacer les chiffres par des couleurs ou autre truc cool
// Rendre le tout joli, avec des trucs et des machins et des brols
// Faire une option replay
// Faire des options timer, count, longueur de code