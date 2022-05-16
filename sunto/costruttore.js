//costruttore di donut
function Donut() {
    return { shape: 'round' };
}
    //identico a 
function Donut() {
    this.shape = 'round';
}

let donutProto = {
    eat() {
        console.log('Nom nom nom');
    }
};
    //identico a       // .prototype := aggiungo un method ou property a 'Donut() constructor'
Donut.prototype = {
    eat() {
        console.log('Nom nom nom');
    }
};



    //tutto questo nel codice moderno, usa la class (concetto prima indigesto a JS)
class Donut {
    constructor() {
        this.shape = 'round';
    }
    eat() {
        console.log('Nom nom nom');
    }
};

let donut1 = new Donut();


            console.log("*************************");



//'Personne()' is a function, is a contructor di Personne:
function Personne(prenom, nom) {
    this.prenom = prenom;
    this.nom = nom;
}
//in this case, I add a method to constructor Personne
Personne.prototype.nomComplet = function () {
    return this.prenom + ', ' + this.nom;
}

Personne.prototype.nomCompletInverse = function () {
    return this.nom + ', ' + this.prenom;
}

// Ajout de méthode à la fonction Personne
let s = new Personne("Simon", "Willison");
s.prenomEnMajuscules();

Personne.prototype.prenomEnMajuscules = function prenomEnMajuscules() {
    return this.prenom.toUpperCase()
}

s.prenomEnMajuscules(); // "SIMON"

// Méthode string qui renvoie une chaine de caractère à l'envers
let es = "Simon";
es.inverse();

String.prototype.inverse = function inverse() {
    let r = "";
    for (let i = this.length - 1; i >= 0; i--) {
        r += this[i];
    }
    return r;
}
es.inverse(); // "nomiS"

        console.log("*************************");