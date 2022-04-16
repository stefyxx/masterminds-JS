let nbreLignes = parseInt(prompt('Combien de lignes/colonnes pour votre damier ?'));

function damier(nbreDamier)
{
    let caseDamier;
    for (let ligne = 0; ligne < nbreDamier; ligne++) {
        caseDamier = document.createElement('div');
        document.querySelector('#damier').appendChild(caseDamier);
        for (let colonne = 0; colonne < nbreDamier; colonne++) {
            caseDamier = document.createElement('div');
            document.querySelector('#damier').appendChild(caseDamier);
            if ((ligne+colonne)%2) caseDamier.setAttribute('class','damierBleu');
            else caseDamier.setAttribute('class','damierRouge');
        }        
    }
    
};

damier(nbreLignes);
