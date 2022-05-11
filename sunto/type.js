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
console.log(typeof(pet)); //number -> in realtà 'pet' ORA PUNTA A UN ALTRO VALORE

pet = pet + null;   // LO PRENDE COME 0 !!!!!!!
console.log(pet); // 4
console.log(typeof(pet)); //number 

pet = pet + undefined;
console.log(pet); // NaN    // typeof(NaN) é un number  !!!!!!
console.log(typeof pet);             //......   NUMBER     .......

pet = new Date();
console.log(pet); // data di oggi
console.log(typeof pet); //obj -> perché pet PUNTA A UN ALTRO VALORE

/* ---  Special numbers  ---  */
NaN, Infinity, -Infinity, -0;

let notAnumber= 0/0;    //-> NaN    // typeof(NaN) é un number  !!!!!!

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
console.log(typeof(''));    // string -> una stringa vuota é pur sempre una stringa
let reaction = 'yikes';
reaction[0] = 'l';
console.log(reaction); //yikes
console.log(reaction[0]); //y
reaction[0] = 'l';
console.log(reaction[0]); //y
/* Non possiamo cambiare i valori primitivi.
Lo spiegherò con un piccolo esempio. Le stringhe (che sono Valori PRIMITIVI) e gli array (che non lo sono) hanno alcune somiglianze superficiali. Un array è una sequenza di elementi e una stringa è una sequenza di caratteri
Ma i valori primitivi sono IMMUTABILI*/

function cambioLaPrima(lettera,frase) {
    //let spezzo = frase.slice(1,frase.length);
    let spezzo = frase.slice(1);
    let ritorno = concat(lettera,spezzo);
    return ritorno;
}

// NB Symbols:
/*I simboli hanno uno scopo simile alle chiavi delle porte: consentono di nascondere alcune informazioni all'interno di un oggetto e di controllare quali parti del codice possono accedervi. Sono anche relativamente rari */