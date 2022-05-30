// 1) obj creato ex-novo:
for (let index = 0; index < 3; index++) {
    console.log(2);     //2 é type primitive -> la console punterà x 3 volte al n° 2
}
for (let index = 0; index < 3; index++) {
    console.log({});     //{} NON é type primitive -> la console creerà 3 OBJ !!!
}

////// dove punta cosa:
let bees = {};
let peas = bees;
let knees = {};
/*
bees -->{}
         ^      bees et peas PUNTANO LO STESSO obj
peas   --|
knees --> {}
*/

////// dove punta cosa: tree et flower fanno appello SEPARATAMENTE a plant 
let plant = function () {
    return {};
};
let tree = plant();
let flower = plant();

/*
plant   --> ()
tree    --> {}
flower  --> {} 
*/

////// dove punta cosa:
let sherlock = {
    surname: 'Holmes',
    address:
        { city: 'London' }
};

let john = {
    surname: 'Watson',
    address: sherlock.address
};

john.surname = 'Lennon';
john.address.city = 'Malibu';  //NBBBBB questa property punta a quella di 'sherlock'
//ANCHE IL VALORE DI 'sherlock' SARA' CAMBIATO !!!

console.log(john.address.city);     // Malibu
console.log(sherlock.address.city); // Malibu   !!!!  //questo perché john.address.city punta all'obj sherlock -> e ne segue il percorso
// sherlock -> {} --address(nome del cavo)--> {} --city(nome del cavo)-->  "..."
// john -> {} --address(nome del cavo)--> {} --city(nome del cavo)--> sherlock -> {} --address(nome del cavo)--> {} --city(nome del cavo)-->  "..." 

    console.log(sherlock.board);        //undefined := la property 'board' non punta ad ALCUN valore 
    console.log(sherlock.board.name);   //undefined.name := TypeError -> Le regole dicono che null o undefined sul lato sinistro è un errore

////// dove punta cosa:
let batman = {
    address: { city: 'Gotham' }
};
let robin = {
    address: batman.address      //entrambe puntano allo stesso obj
};
batman.address = { city: 'Ibiza' };  //cambio dove punta il cavo:
//qui al cavo 'address' dico di puntare a un NUOVO obj che ha un cavo 'city' che punta al valore "ibiza", 

console.log(robin.address.city);  //Gotham    //poiché questo punta allo stesso valore; RESTA PUNTATO AL VECCHIO VALORE


// il senso del puntatore: cosa vuol dire memorizzare una 'copia' in una proprietà
let citta = 'London';       // citta -> "London"
let sherlockk = {
    surname: 'Holmes',
    address: { city: citta }    // sherlock -> {} --address(nome del cavo)--> {} --city(nome del cavo)--> "London"  //PUNTA DIRETTAMENTE AL VALORE (e non a un altro obj come in 'john')
};
console.log(sherlockk.address.city); //London

citta = 'Malibu';       //punta al nuovo valore

console.log(sherlockk.address.city); //London       //qui' non cambia perché resta puntato sul suo valore, non fa nessun cammino passando dall'obj
//QUESTO E' QUANDO DICONO CHE NELLA PROPERTY sherlockk.address.city E'MEMOROZZATA UNA COPIA DI citta


////// dove punta cosa:

//  non corretto:
let presidento = {
    name: 'Pooh',
    next: presidento
};  // l'obj 'president' non é ancora finito di essere creato (infatti non ho ancora chiudo '}')  qundi non posso già 'utilizzarlo' in 'next'

//Corretto:
let president = { name: 'Pooh' };
president.next = president;

////// dove punta cosa:
const spreadsheet = { title: 'Sales' };
const copy = spreadsheet;
copy.title = copy.title + ' (Copy)';

console.log(spreadsheet.title);     //Sales (copy)  //entrambe puntano allo stesso obj


////// dove punta cosa:
let daria = {
    address: { city: 'Lawndale' }
};
let place = daria.address;
place.city = 'L.A.';
let jane = {
    address: place
};

console.log(daria.address.city); // L.A.
