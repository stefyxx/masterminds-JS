
//form.addEventListener('submit',);
/*document.getElementById("pendu").addEventListener("submit", function(e){
    if(!isValid){
        e.preventDefault();    //stop form from submitting
    }
        console.log(form);
    let strScelta= document.getElementById('proposition').value;
    console.log(strScelta);
});*/
const listaParole = ["fiore", "cipolla", "pizza", "panda", "oliva", "maccheroni"];

let sceltaPC = randomPC();      //console.log(sceltaPC); //oliva
let sceltaPCtabella = sceltaPC.split(""); //mi serve x controllare le lettere
console.log(sceltaPCtabella);   //['o', 'l', 'i', 'v', 'a']

var form = document.getElementById('pendu');
var lettera = "";

//dove scrivo le lettere giuste
let parolaDaTrovare = document.getElementById('trovare');
var parolaDaTrovareTab = parolaDaTrovare.textContent.split("_ ");
//console.log(parolaDaTrovare); //ti da tutto lo 'span'
//let a = parolaDaTrovare.innerHTML=" _ _";
//console.log(a.valueOf());
console.log(parolaDaTrovareTab);


//PC sceglie la parola:
function randomPC() {
    let scelta = "";
    scelta = listaParole[Math.floor(Math.random() * listaParole.length)];
    return scelta;
};

window.onload = document.getElementById('pendu').onsubmit = penduValori;
//document.getElementById("pendu").onsubmit = penduValori;
function penduValori() {
    //var form = document.getElementById('pendu');
    //console.log(form.proposition.value);
    lettera = form.proposition.value; //il valore vive solo qui' dentro
    //console.log("lettera: " + lettera);

    //controlloLettera(): controllo che la letera sia nella scelta del PC
    if (lettera.length == 1) {
        for (let i = 0; i < sceltaPCtabella.length; i++) {
            if (sceltaPCtabella[i] == lettera) {
                var parolaDaTrovareTab = parolaDaTrovare.textContent.split("_ ");
                parolaDaTrovareTab[i] = lettera;
            }
        }
        console.log(parolaDaTrovareTab); //non tiene il vecchio
        //parolaDaTrovare.innerHTML = parolaDaTrovareTab.join("_ ");
        //parolaDaTrovare.innerHTML = parolaDaTrovareTab.join("");
    }

    //se indovino:
    var tentativi= 7;
    if(lettera == sceltaPC) {
        document.getElementById('info').setAttribute('class','info vinto');
        document.getElementById('info').innerHTML= " VINTOOO";
    }
    /*do {
        document.getElementById('info').innerHTML="Hai ancora "+tentativi+" tentativi";
        console.log(tentativi);
        tentativi--;  
    } while (tentativi> 0);*/
    

    return false; //se non lo scrivo, non entra nella funzione
    //return lettera; 
}





function trovaParola() {
    while (parolaDaTrovare.textContent == "Parola da trovare") {
        var trattino = "";
        var aggiunta = "_ ";
        for (let i = 0; i < sceltaPCtabella.length; i++) {
            trattino += aggiunta;
        }
        parolaDaTrovare.innerHTML = trattino;
    }
    var parolaDaTrovareTab = parolaDaTrovare.textContent.split("_ ");
    console.log("in trovaparola" + parolaDaTrovareTab);
    //if(form.proposition.length==1) controlloLettera();
    if (lettera.length == 1) controlloLettera();

    /*for (let i = 0; i < sceltaPCtabella.length; i++) {

    }*/
}
trovaParola();
//console.log(parolaDaTrovare.textContent); //ti da la scritta nello 'span' come stringa 
//let a = parolaDaTrovare.textContent; //stringa
//console.log("valore di parola da trovare  " + parolaDaTrovare.value); //undefined

function controlloLettera() {
    for (let i = 0; i < sceltaPCtabella.length; i++) {
        if (sceltaPCtabella[1] == lettera) {
            parolaDaTrovare.innerHTML = lettera;
        }

    }
}

//cambio immagine se non indovini (bisogna chiamarla)
function imageError(){
    let img =document.getElementsByName('img');
    let i=0;
    console.log(img.getAttribute('src'));
    //img.setAttribute('src','./images/pendu_'+ i +'.png');
}
imageError();
