//i 3 puntini: spread operator := operatore di diffusione
const parola = "parola";
const letters = [...parola];
console.log(letters);   // ["p","a","r","o","l","a"]
const tab = ["ciao", "hallo", "ola"];
const tab2 = ["ciaoo", "halloo", "olaà"];
const tabSpread = [...tab, ...tab2];
console.log(tabSpread); // ["ciao", "hallo", "ola","ciaoo", "halloo", "olaà"]
const tabNoSpread = [tab, tab2];
console.log(tabNoSpread);       //[ ["ciao", "hallo", "ola"], ["ciaoo", "halloo", "olaà"] ] index 0 -> un array et index 1 -> l'altro array
const tabSiSpread = [tab, tab2].flat(); // diventa uguale a 'tabSpread'

/*a cosa puo' servire tutto questo: 
posso creare 2 obj identici velocemente MA CHE NON PUNTANO ALLO STESSO VALORE: */

//se scrivo:
const tab3 = tab;
tab3.push("che ci faccio!");

console.log(tab); // ["ciao", "hallo", "ola", "che ci faccio!"] 
//noto che in 'tab' ho aggiunto anche l'altro elemento !! perché entrambe puntano allo stesso valore

//MA:
const tab4= [...tab];
tab4[0]= "tanto io non cambio 'tab' !";

console.log(tab); // ["ciao", "hallo", "ola", "che ci faccio!"] 
//ciao non é stato sostituito !! 

//////////  COME FUNZIONA CON GLI OGGETTI key-value ///////

const persona = {nome: "Daniele", cognome: "di Stefano"};
const persona2 = {...persona, city: "Napoli"};
//questo lo posso fare perché 'persona e persona2 sono due obj := {...}

//ma se volessi ottenere un array di array key-value?
/*const arrayPersona = [...persona2]; 
error: persona2 non é iterabile! 
iterabili sono gli elementi in un array  o
una stringa, dove OGNI lettera é considerata un elemento , x questo ho il risultato di -> 
console.log(letters);   // ["p","a","r","o","l","a"]*/

const arrayPersona = [...Object.entries(persona2)];
console.log(arrayPersona); // [ ["nome", "Daniele"], ["cognome", "di Stefano"], ["city", "Napoli"] ]
/*(method) ObjectConstructor.entries<T>(o: {
    [s: string]: T;
} | ArrayLike<T>): [string, T][] (+1 overload)

Returns an array of key/values of the enumerable properties of an object

@param o — Object that contains the properties and methods. 
This can be an object that you created or an existing DOM object.*/

console.log(arrayPersona.flat()); // ["nome", "Daniele", "cognome", "di Stefano", "city", "Napoli"]