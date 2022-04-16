
const colors=["yellow","red","white","black","green","orange","purple","blue"];

var nb_corretti=0;
var nb_bonColor=0;


let sceltaPC=randomPC();

//sceglie 4 colori
function randomPC() {
    let scelta=[];
    for (let index = 0; index <4; index++) {
        scelta[index]=colors[Math.floor(Math.random() *colors.length)];   
    }
    console.log(scelta);
    return scelta; 
};

let nb_tentativi=0;
let sceltaPlayer=[];

let selezioneDiv=document.querySelector(".selection");

//il giocatore seleziona il colore ma per 4 volte
function selezionaColor(color) {
    addColorDIV(color);
    sceltaPlayer.push(color);
    // console.log(color);
    // console.log(sceltaPlayer);
    if(sceltaPlayer.length==4){
        console.log("nuovo array");
        
        let div = document.createElement("div");
        selezioneDiv.appendChild(div);
        
        nb_tentativi++;
        div.innerText="Vai ancora! Hai provato " + nb_tentativi + " volte" ;
        //conto x i suggerimenti
        nb_corretti=bonPlace();
        console.log("nb_corretti:" + nb_corretti);
        nb_bonColor=bonColor()-nb_corretti;
        console.log("nb_bonColor:" + nb_bonColor);
        //creazione div -suggerimenti
        add_suggerimentoDIV();
        sceltaPlayer=[];
        if(nb_tentativi==10){
            alert('Hai perso');
        }
    } 
    //console.log(sceltaPlayer);
}

//ogni colore scelto, mi appare nella div -section (selectionSelector=selezioneDiv)

function addColorDIV(color) {
    let div = document.createElement("div");
    div.setAttribute('class','selection-item '+color);
    selezioneDiv.appendChild(div);  
}
    
//suggerimenti
//i corretti
function bonPlace() {
    let nb_corretti=0;
    for (let index = 0; index < sceltaPC.length; index++) {
        if(sceltaPlayer[index]==sceltaPC[index]){           ////recupera gli index
            nb_corretti++;
        }  
    }
    console.log("nb_corretti in func:" + nb_corretti);
    return nb_corretti;
}


//i buoni colori al mal posto///////////////////////////:: ho il probl dei multipli! v splice sulla copia dei 2 array
function bonColor() {
    ////rifare istruz di bonPlace per recuperare gli index e togliergi dalle copie degli array sceltaPlayer sceltaPC
    let nb_bonColor=0;
    for (let i = 0; i < sceltaPlayer.length; i++) {
        for (let j = 0; j < sceltaPC.length; j++) {
            if(sceltaPlayer[i]==sceltaPC[j]){
                nb_bonColor++; 
            }   
        } 
    }
    return nb_bonColor;
}

let suggerimentiDiv=document.querySelector(".hints");

function add_suggerimentoDIV() {
    let div = document.createElement("div");
    suggerimentiDiv.appendChild(div);
    div.innerText= nb_corretti+" color(s) est au bon endroit, " + nb_bonColor + " autre(s) n'est pas a sa place"; 
}
