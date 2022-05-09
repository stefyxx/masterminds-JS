//9 type primitivi 
//nota. new Date() -> typeof: 'obj'
/*
Undefined (undefined)   //console.log(typeof(undefined)); // "undefined" : NBB undefined E' UN VALORE
Null (null)                 //-> ma x un bug di JS typeof(null) -> OBJ  ma non si comporta da obj, bensi' da 'valore primitivo'
Booleans (true and false)
Numbers (-100, 3.14, and others)
BigInts (uncommon and new)
Strings ("hello", "abracadabra", and others)
Symbols (uncommon)
Objects ({}, [], new Date() and others)  
Functions
*/

//NB Boolean:
let con = true && false;
console.log(con);       // false

con = true || false;
console.log(con); // true

// NB number:
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
console.log(typeof pet); //obj -> perché pet PUNTA A UN ALTRO ALORE