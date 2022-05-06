//* ---Les tableaux
let a = new Array();
a[0] = "chien";
a[1] = "chat";
a[2] = "poule";
a.length; // 3
console.log(a[3]);    //undefined

['chien', 'chat', 'poule'].forEach(function (currentValue, index, array) {
  // Faire quelque chose avec currentValue ou array[index]
});

// Méthodes array
a.push(item); // Ajouter un élément à un tableau
a.toString() // Renvoie une chaîne composée des différents éléments auxquels on a appliqué toString(), séparés par des virgules.
a.concat(item1[, item2[, ...[, itemN]]]) // Renvoie un nouveau tableau auquel on a ajouté les éléments.
array1.concat(array2) // Renvoie un nouveau tableau auquel on a ajouté les éléments.
a.join(sep) // Convertit le tableau en une chaîne dont les valeurs sont séparées par le paramètre sep.
a.pop() // 	Renvoie le dernier élément du tableau et le retire du tableau.
a.push(item1, ..., itemN) // Ajoute un ou plusieurs éléments à la fin du tableau.
a.shift() // Renvoie le premier élément du tableau et le retire du tableau.
a.unshift(item1[, item2[, ...[, itemN]]]) // Ajoute des éléments au début du tableau.
a.slice(start[, end]) // Renvoie un sous-tableau.
a.sort([cmpfn]) // Trie le tableau (avec une fonction de comparaison optionnelle).
a.splice(start, delcount[, item1[, ...[, itemN]]]) // Permet de modifier un tableau en en supprimant une partie et en la remplaçant avec plus d'éléments.
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
