//* ---Les tableaux
let a = new Array();
a[0] = "chien";
a[1] = "chat";
a[2] = "poule";
a.length; // 3
/* console.log(a[3]);    //undefined

['chien', 'chat', 'poule'].forEach(function (currentValue, index, array) {
  // Faire quelque chose avec currentValue ou array[index]
});

// Methods array
a.push(item); // Ajouter a la fin un élément à un tableau
a.toString() // Renvoie une chaîne composée des différents éléments auxquels on a appliqué toString(), séparés par des virgules.
a.concat(item1[, item2[, ...[, itemN]]]) // Renvoie un nouveau tableau auquel on a ajouté les éléments.
array1.concat(array2) // Renvoie un nouveau tableau auquel on a ajouté les éléments.
a.join(sep) // Convertit le tableau en une chaîne dont les valeurs sont séparées par le paramètre sep.
a.pop() // 	Renvoie le dernier élément du tableau et le retire du tableau.
a.push(item1, ..., itemN) // Ajoute un ou plusieurs éléments à la fin du tableau.
a.shift() // Renvoie le premier élément du tableau et le retire du tableau.
a.unshift(item1[, item2[, ...[, itemN]]]) // Ajoute des éléments au début du tableau.
a.slice(start[, end]) //NON MODIFICA l'array di partenza(ossia 'a'), Renvoie un sous-tableau da index start a end ESCLUSO .
a.sort([cmpfn]) // Trie le tableau (avec une fonction de comparaison optionnelle).
a.splice(start, delcount[, item1[, ...[, itemN]]]) // Permet de modifier un tableau en supprimant une partie et en la remplaçant avec plus d'éléments.
a.reverse() // Retourne le tableau.

//* Array map()
const samMap = new Map();
samMap.set("nom", "Legrain");
samMap.set("prenom", "Samuel");
console.log(samMap);

//Return a new array with the square root of all element values:
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt);

//Multiply all the values in an array with 10:
const nombres = [65, 44, 12, 4];
const newTab = nombres.map(myFunction);

function myFunction(num) {
  return num * 10;
}

//Get the full name for each person:
const persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" }
];

persons.map(getFullName);

function getFullName(item) {
  return [item.firstname, item.lastname].join(" ");
}

//array ASSOCIATIVI
var person = [];
person["name"]= "John";
person["age"] = 42;
console.log(person["age"]);
console.log(person.length); //-> 0   PERCHE' L'HO TRASFORMATO IN OBJ 
//sarebbe stato piu' appropriato:
//var person = {};
//var person = { name: "John", age: 42};  //-> person.name ->"John"

////////////////////////////////////////////////////////////////////////////////////
    //comparare 2 arrays:
var a1 = ['a', 'b','e'];
var a2 = ['a', 'b', 'c', 'd'];
    //.include returns un bool
    //.filter returns un array che matches alla CONDIZIONE 
let intersection = a1.filter(element => a2.includes(element));   //['a', 'b']
let diverso_a1 = a1.filter(element => !a2.includes(element));     //['e']

  //trucchetto per avere un array con tutto quello non in comune:
let notCommon = a1.filter(element => !a2.includes(element)).concat(a2.filter(element => !a1.includes(element)));  // ['e','c','d']
  //
let notCommon1 = a1.filter(element => !a2.includes(element)).concat(a2.filter(element => !a1.includes(element))).sort();  // ['c','d','e']

console.log("not common sorted", notCommon1);
*/
  //problema con '.include' -> puo' solo cercare l'elemento INTERO
  //se l'elemento é un obj, e bisogna controllare UNA sola property, bisogna usare anche .map =>
/**
 * @param {String} forma
 * @param {String} colore
 */
function formaColore(forma, colore) {
  return{
    forma : forma,
    colore : colore
  }
};

const rotondoRosso = formaColore("rotondo","rosso");
const rotondoVerde = formaColore("rotondo","verde");
const quadratoRosso = formaColore("quadrato", "rosso");

let arr1 = [rotondoRosso, rotondoVerde];
  /*
  =[
    {
      forma: "rotondo",
      colore: "rosso"
    },
    {
      forma: "rotondo",
      colore: "verde"
    },
  ]
  */
let arr2 = [rotondoRosso, quadratoRosso];

console.log("arr1",arr1); // [{forma: 'rotondo', colore: 'rosso'}, {forma: 'rotondo', colore: 'verde'}]

  //.find matcha solo il PRIMO riscontro
  //se vuoi quello che non é in comune, NON DIMENTICARE in 'not' := !
let nonInComune = arr1.filter(elemento=>{
  if(!arr2.map(el=>{return el.colore}).includes(elemento.colore)) return elemento;
})
.concat(arr2.filter(elemento2 =>{
  if(!arr1.map(el=>{return el.colore}).includes(elemento2.colore)) return elemento2;
}));

console.log("nonInComune",nonInComune);