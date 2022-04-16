//DEPART
const nbreEssai = 12;
const longueurCode = 4;
const nbrePossibiliteCode = 4;
let victoire = false;

// ESSAIS RESTANTS
let essais = nbreEssai;
placeEssai = document.getElementById("essai");
placeEssai.innerText = essais;

// CODE ORDI
function creationCodeOrdi(longueurCode, nbrePossibiliteCode) { 
    codeOrdi = [];
    for (let index = 0; index < longueurCode; index++) {
        codeOrdi.push(Math.floor(Math.random()*nbrePossibiliteCode)+1); 
    }
    return codeOrdi;
}

let codeOrdi = [];
codeOrdi = creationCodeOrdi(longueurCode, nbrePossibiliteCode)

// console.log(codeOrdi) // ! A SUPPRIMER 


// TIMER
let placeTimer = document.getElementById("timer");
let heures = 0;
let minutes = 6;
let secondes = 0;
placeTimer.innerHTML = `0${heures}:0${minutes}:0${secondes}`;

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
    let strHeure = heures<10?`0${heures}`:heures;
    let strMinutes;    
    if(minutes<10){
        strMinutes=`0${minutes}`;
    }
    else{
        strMinutes= `${minutes}`;
    }

    let strSecondes=`${secondes}`;
    if(secondes<10){        
        if(secondes<0){
            strSecondes='00';
        }else{
        strSecondes='0'+ secondes;
        }
    }

    placeTimer.innerHTML = `${strHeure}:${strMinutes}:${strSecondes}`;

    if(heures==0 && minutes==0 && secondes==-1){
        document.getElementById("timer").setAttribute('class','texteRouge');
        finPartie();
    }
}

// BOUTON JOUER -> LANCEMENT PARTIE (Showme, Timer)
let boutonJouer = document.getElementById('play');
boutonJouer.addEventListener("click", lancementPartie);
let myVar;
function lancementPartie(event) {
    // SHOWME
    document.getElementById('plateauJeu').removeAttribute('hidden');
    
    // LANCEMENT TIMER
    myVar = setInterval(timer, 1000);

    // FAIRE DISPARAITRE BOUTON JOUER
    document.getElementById('play').setAttribute('hidden', '');

}

// SUBMIT PROPOSITION
let boutonSubmit = document.getElementById("submit");
boutonSubmit.addEventListener("click", submitProposition);
let reponseVictoire;
let placeReponse = document.getElementById("reponseOrdi");
let placeResultat = document.getElementById("resultat");

function submitProposition(event) {
    let placeMessageSubmit = document.getElementById("messageSubmit");
    let codeJoueurTableau = [];
    let placeProposition = document.getElementById("codeJoueur");
    let propositionSubmited = placeProposition.value;
        for (let index = 0; index < propositionSubmited.length; index++) {
            codeJoueurTableau[index] = parseInt(propositionSubmited[index]);
        }

    //Validation 4 chiffres
    if(codeJoueurTableau.length == 4){
        let validationCode;
        //Validation chiffres 1 à 4
        for (let index = 0; index < codeJoueurTableau.length; index++) {
            if(codeJoueurTableau[index]>0 && codeJoueurTableau[index] < 5){
                validationCode = true;
            }
            else{
                validationCode = false;
                placeMessageSubmit.innerHTML = "Merci d'utiliser des chiffres de 1 à 4"
                return
            }
        }

        //CHECK BON PLACEMENT
        let copieCodeJoueur = Array.from(codeJoueurTableau);
        let copieCodeOrdi = Array.from(codeOrdi);

        let bonPlacement = 0;
        for (let index_user = 0; index_user < copieCodeJoueur.length; index_user++) {
            if(copieCodeJoueur[index_user] == copieCodeOrdi[index_user])
            {
                bonPlacement += 1;
                copieCodeJoueur[index_user] = -1;
                copieCodeOrdi[index_user] = -1;
            }
        }
        if (bonPlacement == 4){
            victoire = true;
        }

        //CHECK MAUVAISE PLACE
        let mauvaisePlace = 0;
        for (let index_user = 0; index_user < copieCodeJoueur.length; index_user++) {
            for (let index_ordi = 0; index_ordi < copieCodeOrdi.length; index_ordi++) {
                if ((copieCodeJoueur[index_user] == copieCodeOrdi[index_ordi])
                && copieCodeJoueur[index_user] !== -1 
                && copieCodeOrdi[index_ordi] !== -1) {
                    mauvaisePlace += 1;
                    copieCodeJoueur[index_user] = -1;
                    copieCodeOrdi[index_ordi] = -1;
                }
            }
        }

        //Conclusion Validation
        let validationReponse = "Vous avez " + bonPlacement + " pion(s) correctement placé(s) & " + mauvaisePlace + " pions au mauvais endroit.";


        //Changer tableau code en string
        codeJoueurString=codeJoueurTableau.toString();
        for (let index = 0; index < codeJoueurString.length; index++) {
            codeJoueurString = codeJoueurString.replace(",", " ");
        }

        //Vider le champs texte
        placeMessageSubmit.innerHTML = "";

        //Creation Div pour résultat proposition
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
        newDivProposition.innerHTML = codeJoueurString;
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
    }

    else{
        placeMessageSubmit.innerHTML = "Merci d'indiquer 4 chiffres"
    }
}


//FIN PARTIE         

function finPartie() {
    document.getElementById("submit").setAttribute("disabled","");
    document.getElementById("essaiRestant").innerHTML = "<br>";

    //Arrêter Timer
    clearInterval(myVar);

    if (victoire == true) {
        reponseVictoire = "YOU WIN ! ";
        placeReponse.innerText = "Congratulations";

    }
    else{
        reponseVictoire = "YOU LOOSE ! ";
        codeOrdi=codeOrdi.toString();
        for (let index = 0; index < codeOrdi.length; index++) {
                codeOrdi = codeOrdi.replace(",", " ");
        }
        placeReponse.innerText = "Le code était : " + codeOrdi;

    }
    placeResultat.innerText = reponseVictoire;
}