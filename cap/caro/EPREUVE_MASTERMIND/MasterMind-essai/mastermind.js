/**
 * Fonction permettant de créer le code couleur
 * @param {Int} longueur_code
 * @param {Array} liste_couleurs
 */
function choix_code(longueur_code, liste_couleurs) {
    let code_ordi=[];
    for (let index = 0; index < longueur_code; index++) {
        index_aleatoire = Math.floor(Math.random()*liste_couleurs.length);
        code_ordi.push(liste_couleurs[index_aleatoire]);
    }
    code_ordi=code_ordi.toString();
    for (let index = 0; index < code_ordi.length; index++) {
            code_ordi = code_ordi.replace(",", " ");
    }
    return code_ordi;
}

let longueur_code = 4;
let liste_couleurs = ["🔴","🟠","🟡","🟢","🔵","🟣","🟤","⚫"];

//CHOIX JOUEUR
let choixCouleurJoueur = document.getElementsByClassName('codeCouleur');
// console.log(choixCouleurJoueur);
for (let indexCouleur = 0; indexCouleur < choixCouleurJoueur.length; indexCouleur++) {
    choixCouleurJoueur[indexCouleur].addEventListener("click", pickColor);
}

function pickColor(event){
    event.preventDefault();
    let colorPicked = event.currentTarget.id;
    console.log(colorPicked);
    let place_code = document.createElement("div");
    let emplacement_code = document.getElementById("couleursChoisies").appendChild(place_code);
    if(colorPicked == 'rouge'){
        emplacement_code.innerText = "🔴";
    }
    else if(colorPicked == 'orange'){
        emplacement_code.innerText = "🟠";
    }
    else if(colorPicked == 'jaune'){
        emplacement_code.innerText = "🟡";
    }
    else if(colorPicked == 'vert'){
        emplacement_code.innerText = "🟢";
    }
    else if(colorPicked == 'bleu'){
        emplacement_code.innerText = "🔵";
    }
    else if(colorPicked == 'mauve'){
        emplacement_code.innerText = "🟣";
    }
    else if(colorPicked == 'brun'){
        emplacement_code.innerText = "🟤";
    }
    else if(colorPicked == 'noir'){
        emplacement_code.innerText = "⚫";
    }
}


// BOUCLE POUR DEMANDER CODE COULEUR AU JOUEUR
// CHECKER LES COULEURS A LA BONNE PLACE
// CHECKER LES COULEURS PAS A LA BONNE PLACE
// MONTRER CODE COULEUR ORDI
let place_code = document.createElement("div");
let emplacement_code = document.getElementById("blocReponse").appendChild(place_code);
emplacement_code.innerText = choix_code(longueur_code,liste_couleurs);

