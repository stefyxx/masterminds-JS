//exo 1 una stritta che gira
let frase;
do {
    frase=(prompt("Scrivi la frase che vuoi vedere girare, deve essere più di un carattere"));
} while (frase.length<2);

let div = document.getElementById('rota');

/*body -> 4° child->2° child é l'input -> controlla submit , che non funziona
let input = document.body.childNodes[3].childNodes[1].getAttribute('value');
//console.log(input); */

//se frase fosse una tab era sufficiente .pop() -> .unshift(del poppato)

//prima recupero l'ultimo e poi lo tolgo
let ultimo= frase.substring(frase.length -1); //console.log("ultimo: " + ultimo);
frase = frase.substring(0, frase.length -1);
frase = ultimo.concat(frase);
console.log(frase);
div.innerHTML= frase;

/*let ultimo;
while (frase.length>1) {
    ultimo= frase.substring(frase.length -1);
    frase = frase.substring(0, frase.length -1);
    frase = ultimo.concat(frase);
    div.innerHTML=frase;
}*/

//ritorna la stringa:
function first_last(str1) {
    if (str1.length <= 1) {
        return str1;
    }
    mid_char = str1.substring(1, str1.length -1);//ultimo carattere escluso
    return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
}
//div.innerHTML=first_last(frase);

//exo 2: della frase, la prima lettera in maiuscolo
let div2= document.getElementById('primaMaiuscolo');
let tabfrase = frase.split(" ");
console.log(tabfrase);

for (let i = 0; i <tabfrase.length; i++) {
    let elemento = tabfrase[i];
    tabfrase.shift();
    let midle= elemento.slice(1).toLowerCase();
    let first = elemento.substring(0,1).toUpperCase();
    elemento= first.concat(midle);
    tabfrase.push(elemento);  
}
//div2.innerHTML= tabfrase.toString();

//lo stesso, con una funzione:
function firstUppercase(stringaFrase){
    let tabFrase = stringaFrase.split(" ");
    let tabNuova=[];
    for (let i = 0; i < tabFrase.length; i++) {
        tabNuova.push(tabFrase[i].charAt(0).toUpperCase()+tabFrase[i].slice(1).toLowerCase());
        //push : aggiungi un el alla fine
    }
    return tabNuova.join(" ");
    //return tabNuova.toString();
}

console.log(firstUppercase(frase));
div2.innerHTML= firstUppercase(frase);

//exo 3:ricevere una funzione in parametro
function addStudent(id, refreshCallback) {
    refreshCallback();
}

function refreshStudentList() {
    console.log('Hello');
}

addStudent(1, refreshStudentList);
// test

let a = 1;
let b = "2";
let c = null;
//console.log("risultato"+ a&&b&&c);

function getDateFromUtcEpoch(epoch) {
    let data = new Date(epoch * 1000);
    return data;
}

function getDateFromTimestamp(timestamp) {
    let data = new Date(timestamp);
    return data;
}
//console.log(getDateFromUtcEpoch(1234567));

var arrMap = new Map([
    [1, 'ONE'],
    [2, 'TWO']
]);

var arr1Map = new Map(
    arr.map(object => {
        return [object.key, object.val];
    }),
);

int random(){
    return (rand() % 2);
}

function rand() {
    let nb = 0;

    var essaye = Math.random() // n° tra 0 et 1
    if (essaye < 0.25) {
        nb = 1;
    } else {
        nb = 0;
    }
    return nb;
}