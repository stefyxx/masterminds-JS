let bouton = document.getElementById('changeColor');

bouton.addEventListener("click",color);
function color(event) {
    event.preventDefault(); //pour annuler les événements par défautl du navigateur

    //mieux d'ajouter une variable avec l'emplacement de l'ID pour les anciens navigateurs
    // let div = document.getElementById("carre");
    // div.setAttribute("class","carreBleu");
    if(carre.getAttribute("class")=="carreRouge"){
        carre.setAttribute("class","carreBleu");
    }
    else{
        carre.setAttribute("class","carreRouge");
    }

    let monForm = document.forms[0];
}
