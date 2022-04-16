// DEPART
const nbreEssai = 12;
const longueurCode = 4;
const liste_couleurs = ["🔴","🟠","🟡","🟢","🔵","🟣","🟤"];
const heuresStart = 0;
const minutesStart = 6;
const secondesStart = 0;
const victoireStart = false;

// VARIABLES
let codeOrdi;
let heures;
let minutes;
let secondes;
let strHeure;
let strMinutes;
let strSecondes;
let newDivCouleur;
let choixCouleur;
let reponseVictoire;
let essais;
let placeEssai;
let myVar;
let victoire;

// EMPLACEMENT DOM
let placeTimer = document.getElementById("timer");
let placeReponse = document.getElementById("reponseOrdi");
let placeResultat = document.getElementById("resultat");
let placeBoutonJouer = document.getElementById('play');
let placeBoutonSubmit = document.getElementById("submit");
let placeActionEnter = document.getElementById("codeJoueur");
let placeBoutonDelete = document.getElementById("delete");



// ! FONCTIONS
// ? CREATION CODE ORDI
/**
 * Fonction permettant de créer le code couleur aléatoire
 * @param {Int} longueur_code
 * @param {Array} liste_couleurs
 */
function creationCodeOrdi(longueurCode, liste_couleurs) { 
    codeOrdi;
    for (let index = 0; index < longueurCode; index++) {
        index_aleatoire = Math.floor(Math.random()*liste_couleurs.length);
        codeOrdi += (liste_couleurs[index_aleatoire]);
    }
    return codeOrdi;
}

// ? INITIALISATION PARTIE
function InitialisationJeu(){

    victoire = false;
    // CREATION CODE A DEVINER
    codeOrdi = "";
    codeOrdi = creationCodeOrdi(longueurCode, liste_couleurs);

    // INITIALISATION TIMER
    heures = heuresStart;
    minutes = minutesStart;
    secondes = secondesStart;
    if(heures<10){        
        if(heures<0){
            strHeure='00';
        }else{
        strHeure='0'+ heures;
        }
    }
    if(minutes<10){
        strMinutes=`0${minutes}`;
    }
    else{
        strMinutes= `${minutes}`;
    }
    strSecondes=`${secondes}`;
    if(secondes<10){        
        if(secondes<0){
            strSecondes='00';
        }else{
        strSecondes='0'+ secondes;
        }
    }
    placeTimer.innerHTML = `${strHeure}:${strMinutes}:${strSecondes}`;

    // INITIALISATION ESSAIS 
    essais = nbreEssai;
    placeEssai = document.getElementById("essai");
    placeEssai.innerText = essais;

    // APPARITION PROPOSITION COULEURS
    document.getElementById("choixCouleurs").innerHTML ="<span>Choisis 4 couleurs :  </span>";
    for (let index = 0; index < liste_couleurs.length; index++) {
        newDivCouleur = document.createElement("div");
        newDivCouleur.setAttribute("class","couleur hover");
        newDivCouleur.innerHTML = liste_couleurs[index];
        document.getElementById("choixCouleurs").appendChild(newDivCouleur);    
    }

    //CHOIX COULEURS JOUEUR
    choixCouleur = document.getElementsByClassName('couleur');
    for (let indexCouleur = 0; indexCouleur < choixCouleur.length; indexCouleur++) {
        choixCouleur[indexCouleur].addEventListener("click", pickColor);
    }

    // MISE AU PROPRE PLATEAU JEU (Suppression anciennes propositionset info victoire/défaite)
    placeResultat.innerText = "Résultat";
    placeReponse.innerText = "Propositions Joueur";

    document.getElementById("colonnePropositions").innerText = "";
}

// ? TIMER
function timer()
{
    // Calcul
    if(secondes==-1) {
    minutes-=1;
    secondes=59;
    }else{
    secondes-=1;
    }

    //Affichage
    strHeure = heures<10?`0${heures}`:heures;
    strMinutes;    
    if(minutes<10){
        strMinutes=`0${minutes}`;
    }
    else{
        strMinutes= `${minutes}`;
    }

    strSecondes=`${secondes}`;
    if(secondes<10){        
        if(secondes<0){
            strSecondes='00';
        }else{
        strSecondes='0'+ secondes;
        }
    }

    //Affichage Timer
    placeTimer.innerHTML = `${strHeure}:${strMinutes}:${strSecondes}`;

    //Fin du Timer
    if(heures==0 && minutes==0 && secondes==-1){
        document.getElementById("timer").setAttribute('class','texteRouge');
        finPartie();
    }
}

function pickColor(event){
    event.preventDefault();
    let colorPicked = event.currentTarget.innerText;
    for (let index = 0; index < liste_couleurs.length; index++) {
        if(document.getElementById('codeJoueur').value.length<8){
            if(colorPicked == liste_couleurs[index]){
                document.getElementById('codeJoueur').value += (liste_couleurs[index]);
            }
        }      
    }
    //replacer le curseur dans le input pour l'entrée suivante
    document.getElementById("codeJoueur").focus();
}

// ! EVENTS 
// ? BOUTON JOUER -> LANCEMENT PARTIE (Showme, Timer)
placeBoutonJouer.addEventListener("click", lancementPartie);
function lancementPartie(event) {
    // SHOWME
    document.getElementById('Jeu').removeAttribute('hidden');
    
    // LANCEMENT TIMER
    myVar = setInterval(timer, 1000);

    // FAIRE DISPARAITRE BOUTON JOUER
    document.getElementById('play').setAttribute('hidden', '');
}

// ? SUBMIT PROPOSITION JOUEUR
// Lancement Proposition si click sur input Submit
placeBoutonSubmit.addEventListener("click", submitProposition);
// Lancement Proposition si Enter dans input text
placeActionEnter.addEventListener("keyup", function(e){
    if(e.keyCode === 13){
        e.preventDefault();
        document.getElementById("submit").click();
        }
});

// ? DELETE PROPOSITION
placeBoutonDelete.addEventListener("click", deleteColor);

function deleteColor(event){
    event.preventDefault();
    document.getElementById("codeJoueur").value = "";
}

function submitProposition(event) {
    let placeMessageSubmit = document.getElementById("messageSubmit");
    let codeJoueurTableau = [];
    let placeProposition = document.getElementById("codeJoueur");
    let propositionSubmited = placeProposition.value;

    //Validation 4 couleurs (pas plus ni moins de 4)
    if(propositionSubmited.length == longueurCode*2){

        //CHECK CODES
        let copieCodeJoueur = propositionSubmited.split("");
        let copieCodeOrdi = codeOrdi.split("");

        //SUPPRIMER CARACTÈRE "\uD83D" qui apparait à cause des emojis 
        for (let index_user = 0; index_user < copieCodeJoueur.length; index_user++) {
            if(copieCodeJoueur[index_user] == "\uD83D")
            {
                copieCodeJoueur[index_user] = -1;
            }
            if(copieCodeOrdi[index_user] == "\uD83D")
            {
                copieCodeOrdi[index_user] = -1;
            }
        }

        //CHECK BON PLACEMENT
        let bonPlacement = 0;
        for (let index_user = 0; index_user < copieCodeJoueur.length; index_user++) {
            if(copieCodeJoueur[index_user] !== -1 && copieCodeJoueur[index_user] == copieCodeOrdi[index_user])
            {
                bonPlacement += 1;
                copieCodeJoueur[index_user] = -1;
                copieCodeOrdi[index_user] = -1;
            }
        }
        if (bonPlacement == longueurCode){
            victoire = true;
        }

        //CHECK MAUVAISE PLACE
        let mauvaisePlace = 0;
        for (let index_user = 0; index_user < copieCodeJoueur.length; index_user++) {
            for (let index_ordi = 0; index_ordi < copieCodeOrdi.length; index_ordi++) {
                if ((copieCodeJoueur[index_user] == copieCodeOrdi[index_ordi])
                && copieCodeJoueur[index_user] !== -1) {
                    mauvaisePlace += 1;
                    copieCodeJoueur[index_user] = -1;
                    copieCodeOrdi[index_ordi] = -1;
                }
            }
        }

        //Conclusion Validation
        let validationReponse = "Vous avez " + bonPlacement + " pion(s) correctement placé(s) & " + mauvaisePlace + " pions au mauvais endroit.";

        //Vider le champs texte message erreur
        placeMessageSubmit.innerHTML = "";

        //Creation Div pour ajouter résultat proposition
        let placeColonnePropositions = document.getElementsByClassName("colonnePropositions");
        let newDivLigne = document.createElement("div");
        newDivLigne.setAttribute("id","ligneProposition");
        newDivLigne.setAttribute("class","ligneProposition");
        let newDivProposition = document.createElement("div");
        newDivProposition.setAttribute("id","proposition");
        let newDivValidation = document.createElement("div");
        newDivValidation.setAttribute("id","validation");

        document.getElementById("colonnePropositions").appendChild(newDivLigne);

        document.getElementById('ligneProposition').appendChild(newDivProposition);
        newDivProposition.innerHTML = propositionSubmited;
        document.getElementById('ligneProposition').appendChild(newDivValidation);
        newDivValidation.innerHTML = validationReponse;        
        newDivLigne.setAttribute("id",""); // cleaner id pour prochaine proposition       
            
        //DIMINUER ESSAI
        essais = essais-1;
        if(essais>1){
        placeEssai = document.getElementById("essai");
        placeEssai.innerText = essais;
        }
        else{
        placeEssai = document.getElementById("essai");
        placeEssai.innerText = "Dernier Essai...";
        }

        //FIN PARTIE - VICTOIRE ?        

        if(victoire == true || essais == 0){
            finPartie();
        }    

        //cleaner le input code joueur
        document.getElementById("codeJoueur").value = "";
        //replacer le curseur dans le input pour l'entrée suivante
        document.getElementById("codeJoueur").focus();
    }

    // Si pas 4 couleurs
    else{
        placeMessageSubmit.innerHTML = "Merci de choisir 4 couleurs"
    }
}


// ? FIN PARTIE         
function finPartie() {
    //empêcher l'encodage
    document.getElementById("codeJoueur").setAttribute('disabled','');
    //empêcher l'appuyage du bouton submit
    document.getElementById("submit").setAttribute("disabled","");
    //enlever l'esthétique bouton de submit (boxshadow)
    document.getElementById("submit").removeAttribute('class','hover');
    //empêcher l'appuyage du bouton delete
    document.getElementById("delete").setAttribute("disabled","");
    //enlever l'esthétique bouton de delete (boxshadow)
    document.getElementById("delete").removeAttribute('class','hover');
    //faire disparaitre les essais restants
    document.getElementById("essaiRestant").setAttribute('hidden', '');
    //enlever events sur pions couleurs
    let placeCouleur = document.getElementsByClassName('couleur hover')

    for (let index = 0; index < liste_couleurs.length; index++) {
        placeCouleur[0].removeEventListener("click", pickColor);
        placeCouleur[0].removeAttribute("class", "couleur hover");
    }

    //Arrêter Timer
    clearInterval(myVar);

    if (victoire == true) {
        reponseVictoire = "YOU WIN ! ";
        reponseValidation = "Congratulations";

    }
    else{
        reponseVictoire = "YOU LOOSE ! ";
        reponseValidation = "Le code était : " + codeOrdi;
    }
    placeResultat.innerText = reponseVictoire;
    placeReponse.innerText = reponseValidation;

    document.getElementById('Replay').removeAttribute('hidden');
}

// BOUTON REJOUER -> Réinitialiser jeu
let boutonRejouer = document.getElementById('Replay');
boutonRejouer.addEventListener("click", newGame);

function newGame(event) {

    //REINITIALISATION VARIABLES
    InitialisationJeu();
    document.getElementById("timer").removeAttribute('class','texteRouge');
    //Remettre l'encodage
    document.getElementById("codeJoueur").removeAttribute('disabled');
    //Remettre l'appuyage du bouton submit
    document.getElementById("submit").removeAttribute("disabled");
    //Remettre l'esthétique bouton de submit (boxshadow)
    document.getElementById("submit").setAttribute('class','hover');
    //Remettre l'appuyage du bouton delete
    document.getElementById("delete").removeAttribute("disabled");
    //Remettre l'esthétique bouton de delete (boxshadow)
    document.getElementById("delete").setAttribute('class','hover');
    //faire Apparaitre les essais restants
    placeEssai = document.getElementById("essai");
    placeEssai.innerText = essais;

    // LANCEMENT TIMER
    myVar = setInterval(timer, 1000);

    // FAIRE DISPARAITRE BOUTON REJOUER
    document.getElementById('Replay').setAttribute('hidden', '');
}

// INITIALISATION JEU
InitialisationJeu(); 




