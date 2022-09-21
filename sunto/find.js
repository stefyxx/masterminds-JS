// .find(..)          -> .findIndex(..)
/*
non esegue la func su elementi vuoti

RETURN -> ritorna il valore DEL primo che passa il test; 
          no mach -> return UNDEFINED

*/
const ages = [3, 10, 18, 20];

const result = ages.find(function (age) {
    return age > 18;
});

console.log(result);        //20
const result2 = ages.findIndex(function (age) {
    return age > 18;
});
console.log(result2);       //3

// .find(function(elemento, index, array){}, this) -> ha la stessa sintax di .map()
/*
    this = undefined per default
    this é un valore che puo' essere usato DENTRO la func callback
*/
const result3 = ages.find(age => { return age > 18 });
console.log(result3);       //20
//////this, lo chiamo come mi pare ///
// NBB che ageMax NON SARà presa se scrivo la func cosi' .find(age => {return age > ageMax}, ageMax)
const ageMax = 18
const result4 = ages.find(function (age) {
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

/////////////////////////////////////////////////////////////////////////
const enumType = {
    0: 'Tram',
    1: 'Subway',
    3: 'Bus',
}

//console.log(enumType[3]);

const value = 'Bus';
const key = '0'; // opp 0


//const el = Object.getOwnPropertyDescriptor(enumType, key);
//console.log("el: ", el);
//{value: 'Tram', writable: true, enumerable: true, configurable: true}

//console.log(Object.hasOwn(enumType,key))
const keys = Object.keys(enumType);
const myKey = keys.find(key => enumType[key] === value)
console.log(myKey);
console.log(Object.keys(enumType).find(key => enumType[key] === value))
//////////////////////////////////////////////////////////////////////////

/**
 * Dato un array di objs
 * posso ritornare l'array di doppioni
 * MODIFICO la variabile report per contare e/o memorizzare i doppioni
 * 
 * report = {
 * duplicates : 0,
 * array : {
 *     duplicates : [], 
 *    }
 * }
 * @param {Object[]} arrayElements 
 * @param {Object} report 
 */
function findAndReportDuplicates(arrayElements, report) {
    const Duplicates = [];
    arrayElements.map((el, index) => {
        //tutto l'array tranne el:
        const allArrayElementsButThisOne = arrayElements.slice(0, index).concat(arrayElements.slice(index + 1));
        const findDuplicated = allArrayElementsButThisOne.find(element => element.id === el.id && element.shortName === el.shortName);
        //se findDuplicated esiste && non é dentro 
        if (findDuplicated && !Duplicates.includes(findDuplicated.shortName)) {
            report.duplicates++;
            //report.array.duplicates.push(el); // questo o il return
            Duplicates.push(findDuplicated);
        }
    });
    //return Duplicates;
}

/**
 * Dato un array di objs
 * returns un array SENZA doppioni
 * @param {Object[]} arrayElements 
 * @returns {Object[]}
 */
function removeDuplicatedElements(arrayElements) {
    const arrayElementsWithoutDuplicates = [];
    arrayElements.forEach(el => {
        //se in 'routesWithoutDuplicates' non trovi la route che corrisponde alla condiz dell'if -> ossia !false (che é = a true )
        if (!arrayElementsWithoutDuplicates.find(element => element.id === el.id && element.shortName === el.shortName)) {
            arrayElementsWithoutDuplicates.push(el);
        }
    });
    return arrayElementsWithoutDuplicates;
}

//#region   Stop not found without duplicated
let StopsStibNotFound = [];


//StopsStibNotFound without duplicated:
let copy_StopsStibNotFound = [...StopsStibNotFound];
/**
 * @type {any[]}
 */
let StopsStibNotFound_withoutDuplicated = [];
StopsStibNotFound.map(current => {
    copy_StopsStibNotFound.shift();
    const found = copy_StopsStibNotFound.find(el => el.id === current.id);
    if (!found) StopsStibNotFound_withoutDuplicated.push(current);
})

//________________________

//oppure direttamente non li metto :
if (stopObj === undefined && !StopsStibNotFound.find(el => el.id === elStop.id)) {
    //console.log('stop Stib not found :', elStop );
    StopsStibNotFound.push(elStop);
    //console.log(StopsStibNotFound.length)
}
//#endregion