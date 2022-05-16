/* Una STRINGA e vista da JS come un array di lettere e spazi
* ma JS non la tratta da obj, la Stringa resta sempre un type primitivo e quindi inmmutabile:
*/
console.log(typeof(''));    // string -> una stringa vuota é pur sempre una stringa
let reaction = 'yikes';
reaction[0] = 'l';
console.log(reaction); //yikes
console.log(reaction[0]); //y
reaction[0] = 'l';
console.log(reaction[0]); //y

//let risultato = lettera.concat(frase.slice(1));
function cambioLaPrima(parola) {
    let risultato = 'l'.concat(parola.slice(1));
    console.log(risultato);   
}
cambioLaPrima(reaction);



// String methods:

.slice(start, end not included); // se scrivo .slice(-4,-2); CONTA DALLA FINE
    //se scrivo un n°: da quello alla fine -> .slice(3,string.length) == .slice(3)
.substring(start, end);
.sudstr (start, length);
.replace(una stringa/lettera, con questa stringa/lettera);//se ci sono + lettere, sostituisce SOLO la prima
    //NBBB MAIUSCOLA E MINUSCOLA SONO DIVERSE
    //per poter rimpiazzare TUTTI i casi, si utilizza l'espressione regolare '/.../g'
    .replace(/a/g,"i"); // -> sostituisci OGNI a con i

"esempio".split();  //'trasforma' la stringa in array, ogni el dell'array sarà considerando per cosa plitto; es(",") -> "oggi, vado,a,scuola" ->["oggi"," vado","a","scuola"]
        let text = "Hello";
        const myArr = text.split(""); //["H","e","l","l","o"] ->ogni lettera é un elem

"stringa uno".concat(stringa due);
        let text3 = text1.concat(" ", text2);
        let hashtagName = '#'.concat(email.slice(0,email.indexOf('@')));

.charAt(index carattere);          -> return string
.charCodeAt(index carattere);  a   -> return UNICODE:= cone ASCHI della lettera
.fromCharCode(n°,n°,n°);            -> da ASCHI return char/str (es: .fromCharCode(98,99))
"esempio".codePointAt();
.indexOf(carattere);
"esempio".endsWith();
"esempio".includes();
"esempio".lastIndexOf();
"esempio".length();
"esempio".localeCompare();
"esempio".match(espressione regolare); //maccia la prima
"esempio".matchAll();           //maccia tutte
"esempio".repeat();
"esempio".search();
"esempio".valueOf();
"esempio".trim();   //rimuove gli spazi bianchi all'inizio e alla fine, MA NON TRA
"esempio".toUpperCase();
"es".toLowerCase();
.toString();


"esempio".normalize();