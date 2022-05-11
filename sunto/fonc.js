//You can also call a function using this syntax: nomFunction.call().
function hallo() {
    alert("hallo");
}
hallo.call();

/////////
function greeting(name = "world") {
    console.log(`Hello, ${name}`);
}

greeting();

// 
function moyenne(...args) {
    let somme = 0;
    for (let valeur of args) {
        somme += valeur;
    }
    return somme / args.length;
}
moyenne(2, 3, 4, 5); // 3.5

// Fonctions anonymes
let moyenne = function () {
    let somme = 0;
    for (let i = 0, j = arguments.length; i < j; i++) {
        somme += arguments[i];
    }
    return somme / arguments.length;
};

// Fonctions récursives
// Exemple de base
function countChars(elm) {
    if (elm.nodeType == 3) { // TEXT_NODE
        return elm.nodeValue.length;
    }
    let count = 0;
    for (let i = 0, child; child = elm.childNodes[i]; i++) {
        count += countChars(child);
    }
    return count;
}

// Exemple avec une IIFE "expression de fonction imédiatement invoquées"
let charsInBody = (function counter(elm) {
    if (elm.nodeType == 3) { // TEXT_NODE
        return elm.nodeValue.length;
    }
    let count = 0;
    for (let i = 0, child; child = elm.childNodes[i]; i++) {
        count += counter(child);
    }
    return count;
})(document.body);


//* Fonctions lamda

hello = () => {
    return "Hello World!";
}

hello = () => {
    document.getElementById("demo").innerHTML += this;
}

//Arrow Functions Return Value by Default:
hello = () => "Hello World!";

//Arrow Function With Parameters:
hello = (val) => "Hello " + val;

//Arrow Function Without Parentheses:
hello = val => "Hello " + val;

// Oject.prototype est un objet partagé par toutes les instances
function Personne(prenom, nom) {
    this.prenom = prenom;
    this.nom = nom;
}
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

//* Les fermetures
function creerAdditionneur(a) {
    return function (b) {
        return a + b;
    }
}
let ajoute5 = creerAdditionneur(5);
let ajoute20 = creerAdditionneur(20);
ajoute5(6); // 11
ajoute20(7); // 27

console.log("*************************");

