//const := una var a cui non posso cambiare il valore


//7 type primitivi (non li creiamo, evochiamo solo il valore)
/*
Undefined (undefined)   //console.log(typeof(undefined)); // "undefined" : NBB undefined E' UN VALORE
Null (null)                 //-> ma x un bug di JS typeof(null) -> OBJ  ma non si comporta da obj, bensi' da 'valore primitivo'
Booleans (true and false)
Numbers (-100, 3.14, and others)
BigInts (uncommon and new)      ->ottima precisione x i calcoli, ma richiedono tempo e   risorse della macchina
Strings ("hello", "abracadabra", and others)
Symbols (uncommon)

//nota. new Date() -> typeof: 'obj'

//tipi non-primitivi:
Objects ({}, [], new Date() and others)  
Functions
*/

//NB Boolean:
let con = true && false;
console.log(con);       // false

con = true || false;
console.log(con); // true

// NB number:
/* CURIOSITà : i n° in JS non sono uguali ai n° matematici: floating-point math(matematica a virgole mobili)

console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2 === 0.30000000000000004); // true  

Questo perché in realtà JS legge un arrotondamento di 0.1 (ossia sceglie il n°'macchina' più prossimo a 0.1); cio' varrà anche per 0.2 
ed ecco che 0.1 + 0.2 === 0.3 -> false
*/

let pet = 2;
console.log(typeof (pet)); //number -> in realtà 'pet' ORA PUNTA A UN ALTRO VALORE

pet = pet + null;   // LO PRENDE COME 0 !!!!!!!
console.log(pet); // 4
console.log(typeof (pet)); //number 

pet = pet + undefined;
console.log(pet); // NaN    // typeof(NaN) é un number  !!!!!!
console.log(typeof pet);             //......   NUMBER     .......

pet = new Date();
console.log(pet); // data di oggi
console.log(typeof pet); //obj -> perché pet PUNTA A UN ALTRO VALORE

/* ---  Special numbers  ---  */
NaN, Infinity, -Infinity, -0;

let notAnumber = 0 / 0;    //-> NaN    // typeof(NaN) é un number  !!!!!!

NaN === NaN     //false
isNaN(NaN); isNaN(Number.NaN);      //true
// NB BigInts: 

/*sono Grandi numeri := sono numeri che terminano x n
* ci permettono di fare calcoli precisi, es: */

let alot = 9007199254740991n;   // n at the end makes it a BigInt!
console.log(alot + 1n);         // 9007199254740992n
console.log(alot + 5n);         // 9007199254740996n

// invece:  !!!!!
console.log(Number.MAX_SAFE_INTEGER);       // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1);   // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2);   // 9007199254740992 (again!)
console.log(Number.MAX_SAFE_INTEGER + 3);   // 9007199254740994
console.log(Number.MAX_SAFE_INTEGER + 4);   // 9007199254740996
console.log(Number.MAX_SAFE_INTEGER + 5);   // 9007199254740996 (again!)

/*Ma tieni presente che nulla è gratuito. 
Le operazioni con numeri davvero enormi possono richiedere tempo e risorse */

//NB String:
console.log(typeof (''));    // string -> una stringa vuota é pur sempre una stringa
let reaction = 'yikes';
reaction[0] = 'l';
console.log(reaction); //yikes
console.log(reaction[0]); //y
reaction[0] = 'l';
console.log(reaction[0]); //y
/* Non possiamo cambiare i valori primitivi.
Lo spiegherò con un piccolo esempio. Le stringhe (che sono Valori PRIMITIVI) e gli array (che non lo sono) hanno alcune somiglianze superficiali. Un array è una sequenza di elementi e una stringa è una sequenza di caratteri
Ma i valori primitivi sono IMMUTABILI*/

function cambioLaPrima(lettera, frase) {
    //let spezzo = frase.slice(1,frase.length);
    let spezzo = frase.slice(1);
    let ritorno = concat(lettera, spezzo);
    return ritorno;
}

// NB Symbols:
/*I simboli hanno uno scopo simile alle chiavi delle porte: consentono di nascondere alcune informazioni all'interno di un oggetto e di controllare quali parti del codice possono accedervi. Sono anche relativamente rari */


// ***********  COMPARARE   *************** 
//https://dorey.github.io/JavaScript-Equality-Table/
//1)  === vs !==

//Object.is serve per comparare 2 valori; NON DEVONO essere per forza obj
//Object.is(a, b) is true when variables a and b point to the same value on our diagram.

Object.is(val1, val2);      //bool:=  if val1 === val2 -> true 
console.log(Object.is(2, 2));       // true é sempre 2 (type Primitive)
console.log(Object.is({}, {}));     // false perché sono DUE obj, identici MA NON LO STESSO obj

NaN === NaN;            // false    Number.isNaN(NaN)-> true

//tuttavia:
console.log(NaN === NaN);         // false -> errore storico, come console.log(typeOf(null)) -> obj
console.log(Object.is(NaN, NaN));   //true

console.log(NaN !== NaN);           //true
console.log(typeof (NaN));          //number

console.log(val !== val);          //l'unico caso in cui una variabile NON é uguale a se stessa é NaN
//quindi sempre 'false'; tranne x NaN, 'true'

//tuttavia:
console.log(Object.is(0, -0));      // false
-0 === 0; 0 === -0;                // true (-0 non esiste in matematica, ma esiste nella Matematica a virgola mobile := la matematica di JS che approssima il valore al valore dato)

//tuttavia
console.log([[]] == ''); // true   //array con a index 1 un array
console.log(true == [1]); // true
console.log(false == [0]); // true
console.log(false == ''); // true
console.log(null == undefined); // true
console.log({} == 'qualsiasi altra cosa'); // false
console.log(NaN == 'qualsiasi altra cosa'); // false

//da ritenere: 

if (x == null) {
    // ...
}
//é uguale a scrivere:

if (x === null || x === undefined) {
    // ...
}
//quindi x puo' essere solo null o undefined
