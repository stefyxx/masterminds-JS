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
//NON ESISTER0 MAI UN METHOD DELLA STRINGA c ESTRERNO (es: c.listaLettere())

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
    y --> 10        y punta al valore di x: 10
    x --> 0         ora x punta a 0
*/

/*let answer = true;
answer.opposite = false;
console.log(answer.opposite); //undefined*/


