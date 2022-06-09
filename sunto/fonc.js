//You can also call a function using this syntax: nomFunction.call().
function hallo() {
    alert("hallo");
}
hallo.call();

/////////
function greeting(name = "world") {
    console.log(`Hello, ${name}`);
};
greeting();

// sono i 3 ... che dicono di prendere da args ogni suo elemento
function moyenne(...args) {
    let somme = 0;
    for (let valeur of args) {
        somme += valeur;
    }
    return somme / args.length;
}
moyenne(2, 3, 4, 5); // 3.5

        //i 3 puntini: spread operator := operatore di diffusione
    const parola = "parola";
    const letters = [...parola];
    console.log(letters);   // ["p","a","r","o","l","a"]
    const tab = ["ciao", "hallo", "ola"];
    const tab2= ["ciaoo", "halloo", "olaà"];
    const tabSpread = [...tab,...tab2];
    console.log(tabSpread); // ["ciao", "hallo", "ola","ciaoo", "halloo", "olaà"]
    const tabNoSpread = [tab, tab2];
    console.log(tabNoSpread);       //[ ["ciao", "hallo", "ola"], ["ciaoo", "halloo", "olaà"] ] index 0 -> un array et index 1 -> l'altro array
    const tabSiSpread = [tab, tab2].flat(); // diventa uguale a 'tabSpread'
    //v sreadOperator.js anche
////////////////////////////////////
// Fonctions anonymes
let moyenne = function () {
    let somme = 0;
    for (let i = 0, j = arguments.length; i < j; i++) {
        somme += arguments[i];
    }
    return somme / arguments.length;
};
console.log(moyenne(2,2,2,3,3)); //se scrivo solo console.log(moyenne) -> in console mi appare scritta la func, il suon codice
///////
let division = function (a, b) {
    let response;
    if (b != 0) {
        response = a / b;
    }
    else {
        response = "infinity";
    }
    return response;
}

for (var i = 0; i < 10; i++) {
    console.log(division(10, i));
}

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


//2° //* Fonctions lamda

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
//'Personne()' is a function, is a contructor:
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

//3° //* Les fermetures : possiamo ritornare anche una funzione !!!!
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

