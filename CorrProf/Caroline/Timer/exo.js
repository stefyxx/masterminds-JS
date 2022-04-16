/**
 * ? EX 01
 */
//alert('Bienvenue sur mon site');

/**
 * ? EX 03
 */
// let AnneeNaissance = prompt('Quel est votre Année de naissance ?');
// AnneeNaissance = parseInt(AnneeNaissance);
// let age = 2021 - AnneeNaissance;
// alert("Vous avez " + age + " ans");
// alert(`${age} ans, vous avez`);
/** 
//// * ? en 1 ligne */
// alert(`Vous avez ${(2021 - parseInt(prompt("Quel est votre Année de naissance ?")))} ans`);

/**
 * ? EX 04
 */
// let expression = "ma formation javascript";
// console.log("Position de 'ma' : " + expression.indexOf('ma'));
// console.log("Indice de 'p' : " + expression.indexOf('p'));
// console.log("La lettre en position 21 est : " + expression.charAt(21));
// console.log(expression[21]);
// console.log(expression.replace('javascript', 'Java'));
// console.log(expression.split(" "));
// //INVERSION
// let expressionTableau = expression.split("");
// let tableauInverse = expressionTableau.reverse();
// console.log(tableauInverse.join(""));

/**
 * ? EX 05
 */
// let prix_HTVA = parseFloat(prompt("Quel est le prix HTVA du livre choisi ?"));
// let quantite = parseInt(prompt("Combien de livre(s) souhaitez-vous acheter ?"));
// alert("Le prix pour " + quantite + " livre(s) est de " + (((prix_HTVA*21/100) + prix_HTVA)*quantite).toFixed(2) + " €")

//EN DECOMPOSANT
// let TVA = prix_HTVA*21/100;
// let prix_TVAC = prix_HTVA + TVA;
// alert("Le prix pour " + quantite + " livre(s) est de " + (prix_TVAC*quantite) + " €");

//EN 1 LIGNE
// alert("Le prix est de " + (((parseFloat(prompt("Quel est le prix HTVA du livre choisi ?"))*1.21))*parseInt(prompt("Combien de livre(s) souhaitez-vous acheter ?"))).toFixed(2) + " €")

/**
 * ? EX 06
 */
// let jour;
// switch (new Date().getDay()) {
//   case 1:
//     jour = "Lundi";
//     break;
//   case 2:
//     jour = "Mardi";
//     break;
//   case 3:
//     jour = "Mercredi";
//     break;
//   case 4:
//     jour = "Jeudi";
//     break;
//   case 5:
//     jour = "Vendredi";
//     break;
//   case 6:
//     jour = "Samedi";
//     break;
//   case 0:
//     jour = "Dimanche";
//     break;
// }
// alert("Bonjour, aujourd'hui, nous sommes " + jour);
/**
 * ? EX 07
 */
// let symbole = 'A';
// let dessin = '';
// let nb_symbole = parseInt(prompt('Combien de lignes ?'));
// for (let index = 0; index < nb_symbole; index++) {
//     dessin += symbole;    
//     console.log(dessin);
// }

// let nbLigne = prompt('Veuillez indiquer le nombre de ligne à afficher : ');
// let text = 'A';
// for (let i = 0; i < nbLigne; i++) {
//     console.log(text);
//     text += 'A';
// }
/**
// * ? EX 07BIS - SAPINS
//  */
// let symbole = '🎄';
// let dessin = '';
// let nb_symbole = parseInt(prompt('Combien de lignes ?'));
// let tableau = [];
// for (let index = 0; index < nb_symbole; index++) {
//     tableau = [];
//     dessin = "";
//     for (let espace = nb_symbole - index; espace > 0; espace--){
//         tableau.unshift(" ");
//     }
//     for (let sapin = 0 ; sapin < index+1; sapin++){
//         tableau.push(symbole);
//     }
//     dessin = tableau.join("");    
//     console.log(dessin);
// }
// Exo sup
{
    //Exo sup : réaliser un sapin dans la console
        //          🎄
        //         🎄🎄
        //        🎄🎄🎄
        //       🎄🎄🎄🎄
        //        🎄🎄🎄
        //       🎄🎄🎄🎄
        //      🎄🎄🎄🎄🎄
        //     🎄🎄🎄🎄🎄🎄
        //      🎄🎄🎄🎄🎄
        //     🎄🎄🎄🎄🎄🎄
        //    🎄🎄🎄🎄🎄🎄🎄
        //   🎄🎄🎄🎄🎄🎄🎄🎄
}
// let symbole = '🎄';
// let dessin = '';
// let nb_ligne = parseInt(prompt('Combien de lignes ?'));
// let niveau_sapin = parseInt(prompt('Combien d\'étages au sapin ?'))
// let tableau = [];
// for (let index = 0; index < nb_ligne; index++) {
//     tableau = [];
//     dessin = "";
//     for (let espace = nb_ligne - index; espace > 0; espace--){
//         tableau.unshift(" ");
//     }
//     for (let sapin = 0 ; sapin < index+1; sapin++){
//         tableau.push(symbole);
//     }
//     dessin = tableau.join("");    
//     console.log(dessin);
// }
/*
 * ? EX 08
 */
//  fait en sorte que l'utilisateur puisse savoir si un nombre qu'il a entré est un carré et sans utiliser le Math.sqrt()
//  Exemple:
//  il entre 8, il reçoit une alerte : "8 n'est pas un carré"
//  il entre 9, il reçoit une alerte : "9 est le carré de 3"
// 
// let user_number;
// do {
//     user_number = parseInt(prompt('Entrez un nombre entier : '));
// } while (isNaN(user_number) || user_number < 0);
// let notFound = true;
// for (let i = 0; i < (user_number/2)+1 && notFound; i++) {
//     if(i*i == user_number){
//         notFound = false;
//         alert (`Le nombre ${user_number} est le carré de ${i}`);
//     }    
// }
// if (notFound) alert(`Le nombre ${user_number} n'est pas un carré...`)

/**
 * ? EX 09
 */
/**
 * Fonction me permettant d'inverser une chaine de caractères
 * @param {string} chaine
 */
// function inverser(chaine){
//     let chaine_tableau = chaine.toString().split("");
//     let tableau_inverse = chaine_tableau.reverse();
//     let chaine_inverse = tableau_inverse.join("");
//     console.log(chaine_inverse);
//     alert(chaine_inverse);
//     return
// }
// let chaine = "Test de ma fonction";
// inverser(chaine);

/**
 * ? EX 10
 */
// function heure(){
//     let today = new Date();
//     let heures = today.getHours();
//     let minutes = today.getMinutes();
//     if (minutes < 10) minutes = "0"+minutes;
//     let secondes = today.getSeconds();
//     if (secondes < 10) secondes = "0"+secondes;
//     let heure_mnt = `${heures}:${minutes}:${secondes}`.toString();
//     // let heure_mnt = today.getHours().toString() + ":" + today.getMinutes().toString() + ":" +today.getSeconds().toString();
//     return heure_mnt;
// };

// function jour(date){
//     let today = date;
//     let weekDayNames = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
//     let monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
//     let date_ajd = `${weekDayNames[today.getDay()]} ${today.getDate()} ${monthNames[today.getMonth()]}`;
//     return date_ajd;
// }

// function heure_body(){
//     let today = new Date();
//     let heures = today.getHours();
//     let minutes = today.getMinutes();
//     if (minutes < 10) minutes = "0"+minutes;
//     let secondes = today.getSeconds();
//     if (secondes < 10) secondes = "0"+secondes;
//     let heure_mnt = `${heures}:${minutes}:${secondes}`.toString();
//     titre2.innerHTML = heure_mnt;
// };

// function chgmt_color(){
//     if ((document.querySelector('h1').getAttribute('class')) === 'impair') {
//         document.querySelector('h1').setAttribute('class','pair')
//     }
//     else document.querySelector('h1').setAttribute('class','impair')
// }

// let today = new Date();

// setTimeout(function(){document.querySelector('title').innerText = heure()}, 3500);

// let titre1 = document.createElement('h1');
// document.querySelector('body').appendChild(titre1);
// titre1.setAttribute('class','pair')
// titre1.innerHTML = jour(today)

// let titre2 = document.createElement('h2');
// document.querySelector('body').appendChild(titre2);
// setInterval(heure_body,1000);

// setInterval(chgmt_color, 1000);

/**
 * ? EX 11
 */
// créer un prompt pour demander l'heure de fin
// créer un décompte pour voir le temps restant jusqu'à la fin du cours

alert('A quelle heure finissent les cours ?')

function DiffHeure(heuresFin, minutesFin, secondesFin, emplacement){
    let today = new Date();
    let heures = today.getHours();
    let minutes = today.getMinutes();
    // if (minutes < 10) minutes = "0"+minutes;
    let secondes = today.getSeconds();
    let minutes_mnt;
    let sec_mnt;
    if (secondesFin - secondes > 0){
        sec_mnt = secondesFin - secondes;
    }
    else{
        sec_mnt = 60 - secondes
        minutesFin -= 1
    }
    if (minutesFin - minutes > 0){
        minutes_mnt = minutesFin - minutes;
    }
    else{
        minutes_mnt = 60 - minutes
        heureFin -= 1
    }
    let heure_mnt = heuresFin - heures;
    if (heure_mnt < 10) heure_mnt = '0'+heure_mnt;   
    if (minutes_mnt < 10) minutes_mnt = '0'+minutes_mnt;     
    if (sec_mnt < 10) sec_mnt = '0'+sec_mnt;
    // if(sec_mnt==60){
    //     sec_mnt = '00';
    // }

    let temps_restant = `${heure_mnt.toString()}:${minutes_mnt.toString()}:${sec_mnt.toString()}`;
    // emplacement.innerText = temps_restant;

    let title_time = document.querySelector('body');
    title_time.innerText = temps_restant;
};

let heureFin;
let minFin;
let secFin;
let titre1 = document.createElement('h1');

do {
    heureFin = parseInt(prompt('Heures (0 - 23 heures)'));
    if (heureFin < 10) heureFin = '0'+heureFin   
} while (isNaN(heureFin) || heureFin < 0 || heureFin > 23);
do {
    minFin = parseInt(prompt('Minutes (0 - 59 minutes)'));  
    if (minFin < 10) minFin = '0'+minFin     
} while (isNaN(minFin) || minFin < 0 || minFin > 59);
do {
    secFin = parseInt(prompt('Secondes (0 - 59 secondes)'));  
    if (secFin < 10) secFin = '0'+secFin     
} while (isNaN(secFin) || secFin < 0 || secFin > 59);

console.log(`Les Cours finissent à ${heureFin}:${minFin}:${secFin}`)

setInterval(function(){
    DiffHeure(heureFin, minFin, secFin, titre1)},
    1000);