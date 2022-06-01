// .find()
/*
non esegue la func su elementi vuoti

RETURN -> ritorna il valore DEL primo che passa il test; no mach -> return UNDEFINED

*/
const ages = [3, 10, 18, 20];

const result = ages.find(function(age){
    return age > 18;
});

console.log(result);        //20
const result2 = ages.findIndex(function(age){
    return age > 18;});
console.log(result2);       //3

// .find(function(elemento, index, array){}, this) -> ha la stessa sintax di .map()
/*
    this = undefined per default
    this é un valore che puo' essere usato DENTRO la func callback
*/
const result3 = ages.find(age => {return age > 18});
console.log(result3);       //20
    //////this, lo chiamo come mi pare ///
    // NBB che ageMax NON SARà presa se scrivo la func cosi' .find(age => {return age > ageMax}, ageMax)
const ageMax = 18
const result4 = ages.find(function(age){
    return age > ageMax;
}, ageMax);
console.log(result4);       //20

//.findIndex()
/*
all for array
non esegue la func su elementi vuoti

RETURN -> index dell'elemento machato, no mach -> -1 !!
*/

//array.findIndex(function(currentValue, index, arr), this)
/*
    this = undefined per default
    this é un valore che puo' essere usato DENTRO la func callback
*/

//array.lastIndexOf(item, start) 
/*
la ricerca del mach INIZIA DALLA FINE , o da 'start' verso sin
item ->"apple"
start -> optional:
    Default is the last element (array.length-1)
    I valori iniziali negativi vengono conteggiati dall'ultimo elemento (ma cercano comunque da destra a sinistra).
RETURN o index, o -1 se no mach
    */
const fruits = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
let index = fruits.lastIndexOf("Apple");    //5

// vedi anche array.js