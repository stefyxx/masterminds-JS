/*
TYPEOF
var value = new Date();
console.log("ciao");
console.log(typeof(value));
if (typeof (value) === 'date') {
    console.log('This is a date, indeed!');
}

if(typeof(value)=='object') console.log("this is an object");

console.log(typeof(typeof(null))); // perché il risultato di typeof é una string
*/
let reaction = 'yikes';
reaction[0] = 'l';
console.log(reaction); //yikes
console.log(reaction[0]); //y
reaction[0] = 'l';
console.log(reaction[0]); //y

//let risultato = lettera.concat(frase.slice(1));
let ris = 'l'.concat(reaction.slice(1));
console.log(ris);

/* Non possiamo cambiare i valori primitivi.
Lo spiegherò con un piccolo esempio. Le stringhe (che sono Valori PRIMITIVI) e gli array (che non lo sono) hanno alcune somiglianze superficiali. Un array è una sequenza di elementi e una stringa è una sequenza di caratteri
Ma i valori primitivi sono IMMUTABILI*/

let arrReaction =reaction.split('');   //reaction.toArray();
arrReaction[0]='l';
let a = arrReaction.toString(); //l,i,k,e,s
let b= a.replace(',','');
console.log(b); // rimmpiazza solo il 1°: li,k,e,s
let c ="";
for (let index = 0; index < arrReaction.length; index++) {
    c = c.concat(arrReaction[index]);
    //console.log(c);
}
console.log('c fuori :'+c); // c fuori :likes
//NON ESISTERA' MAI UN METHOD DELLA STRINGA c ESTRERNO (es: c.listaLettere())

console.log("*************************");
let pet = 'Narwhal';
pet = 'The Kraken';
console.log(pet);  //'The Kraken'  //MA POSSO CAMBIARE IL CONTENUTO DELLA STRING!!!
//ossia: una variabile (pet) è un filo che punta a un valore (il suo contenuto)
pet = 2;
console.log(pet); //2
console.log(typeof(pet)); //number -> mi ha cambiato un type primitivo con un'altro-> in realtà 'pet' ORA PUNTA A UN ALTRO VALORE
pet = pet + 2;
console.log(pet); // 4

pet = pet + null;   // LO PRENDE COME 0 !!!!!!!
console.log(pet); // 4
console.log(typeof(pet)); //number 

pet = pet + undefined;
console.log(pet); // NaN    //typeof(NaN) é un number
console.log(typeof pet);             //......   NUMBER     .......

pet = new Date();
console.log(pet); // data di oggi
console.log(typeof pet); //obj -> perché pet PUNTA A UN ALTOR ALORE 

console.log("*************************");
//Le variabili non sono valori ->
// una variabile è un filo che punta a un valore(il filo va sempre da sin a dx): ossia

let x = 10;
let y = x;
x = 0;
console.log(x);     //0
console.log(y);     //10
/* x --> 10         x punta a 10
    y --> 10        y punta AL VALORE di x, e non a x perché y et x sono primitive type: 10
    x --> 0         ora x punta a 0
*/

/*let answer = true;
answer.opposite = false;
console.log(answer.opposite); //undefined*/
console.log("*************************");
var d = new Date(76,11,30,12,00); //la mia data di nascita
console.log(d);

function printTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let hours,minutes,seconds = "";
    hours = (h<12) ? "0"+h : h;
    if(m==60) minutes ="00";
    else if (m<10) minutes = "0"+m
    else minutes = m;

    seconds = (s<10) ? "0"+s : s;

    document.body.innerHTML= hours + ":" + minutes + ":" + seconds;    
}

//setInterval(printTime,1000);

console.log("*************************");
/*let answer = prompt('Enter your name'); //prompt é un method che ritorna una stringa, 'answer' é una stringa -> dopo l'ok' del prompt, gli assegno un nuovo valore, ossia quello che ho scritto nel prompt:
console.log(answer); //mi mette il contenuto di 'answer' (ovviamente string) , dopo che faccio 'ok'*/
console.log("*************************");
let shampoo;
let soap = null;
soap = shampoo;
console.log(soap);  //undefined

console.log("*************************");
console.log(Date()); 
console.log(new Date().getFullYear());

console.log("*************************");

let countDwarves = function() { return 7; };
let dwarves = countDwarves;
console.log(dwarves);           //ƒ () { return 7; } 
//ci attenderemmo 7; ma  noi non abbiamo appellato la funzione
//non dobbiamo dimenticare che dwarves punta al valore 'function() { return 7; }' e non all'appello !!!

let dwarvess = countDwarves();  // () is a function call
console.log(dwarvess);          // 7   !!!!

console.log("*************************");
console.log(NaN === NaN )           // false -> errore storico, come console.log(typeOf(null)) -> obj
console.log(Object.is(NaN,NaN));    //true

console.log(typeof([[]]));     // obj
console.log([[]]);     // array con a index 1 un array

console.log([[]] == ''); // true
console.log([] == ''); // true
console.log(true == [1]); // true
console.log(false == [0]); // true
console.log(false == 0); // true

//!!([0]) := reinversa due volte il valore, un modo + rapido di fare il casting (bool)
console.log(false==!!([0])); // FALSE  

var aaa = Boolean(0);        console.log(typeof(aaa)); //bool       console.log(aaa); //false    

console.log("*************************");

console.log({}.__proto__);

console.log("*************************");
let moyenne = function () {
    let somme = 0;
    for (let i = 0, j = arguments.length; i < j; i++) {
        somme += arguments[i];
    }
    return somme / arguments.length;
};
console.log("sono qui",moyenne(2,2,2,3,3));

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
    console.log("ora qui",division(10, i));
}
console.log("*************************");
