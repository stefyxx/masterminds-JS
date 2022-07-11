//#region foreach et pseudo-break, ma geniale e veloce :)

// come fare un foreach che faccia un 'break' quando ha trovato un match
//  1)    invece di ritornare un obj x recuperare piu' valori:
/* 1- creo l'obj fuori, con una key x ogni valore da recuperare
    2- i valori delle keys li modifico nel foreach, l'obj fuori sarà modificato perché la key punta allo stesso obj

*/
var obj={
    key1: "",
    key2: 0,
    key3: undefined
}

//uso un booleen per esegiuire o no il ciclo-> come un break:

/*
Caso in cui ho un array 'arrayDaverificare' e lo confronto con l'array 'arrayMio':
io voglio che quando un el di 'arrayDaverificare' risolve una qualsiasi delle condizioni dell'if in foreach di 'arrayMio',
il forEach NON deve piu' controllare quello stesso el per TUTTI gli altri elementi di 'arrayMio' perché
lo ha già trovato 

-> cosi , se entro nell'if, modifico il bool e il foeach praticamente cambierà di el (ritorna al primo foreach)
*/

//in ogni condizione ritorno TRUE -> se non rispondo a alcuna condizione, ritorno  false e il ciclo ricomincia


arrayDaverificare.forEach(el=>{
    var breakme= false;
    arrayMio.forEach(element => {
        if(!breakme){
            if("first condition" ){
                obj.key1= "ok";
    
                //return true;              // NOTA : posso usare i return in caso voglia avere una funzione helper che riprende solo le mie condizioni
                breakme = true;

            }else if ("second condition") {
                obj.key2= 10;

                //return true;
                breakme = true;

            } else  if("terza condition"){
                obj.key3= "qualcosa";
                
                //return true;
                breakme = true;
                
            }
            //no matched
            //return false;
        }
    })

});

//stessa cosa con helperFunction:
 function helperFunction(el, element) {
    if(el === element ){
        obj.key1= "ok";

        return true; 
    }else if ("second condition") {
        obj.key2= 10;

        return true;

    } else  if("terza condition"){
        obj.key3= "qualcosa";
        
        return true;
        
    }
    //no matched
    return false;
 }

arrayDaverificare.forEach(el=>{
    var breakme= false;
    arrayMio.forEach(element => {
        if(!breakme){
            breakme = heperFunction(el,element); 
        }
    })
});
//#endregion

//#region ma, poniamo l'ipotesi che io debba poter avere anche una manipolazione di 'arrayMio' SENZA perdere/modificare 'arrayMio'
//faccio una bella copia con lo spread Operator:

var arrayMioCopy = [...arrayMio]; //-> sarà identico a arrayMio
//#endregion

//#region  --- Paragonare due array in modo piu' chiaro --- 
//Con il passare del tempo, non ricorderai piu' che property racchiudeva cosa , ect.. e allora diventa basilare lavorare oin modo che sia piu' semplice capirci qualcosa:
//Caso in cui devi paragonare due array dove le key-properties hanno nomi differenti:
// FURBIZIA  -> CREA DUE ARRAY CON LE PROPERTYES CHE SI CHIAMANO ALLA STESSA MANIERA
//il mùio amico .map mi velocizza le cose
fistAllRoutesFromAPIa = fistAllRoutesFromAPIa.map(el => {
    return {
        id: el.lijnnummer,
        shortName: el.lijnnummerPubliek,
        longName: el.omschrijving,
        description: el.omschrijving,
    };
});
secondAllRoutesFromAPIb = secondAllRoutesFromAPIb.map(el => {
    return {
        id: el.monID,
        shortName: el.nomTitre,
        longName: el.maDescription,
        description: el.maLongDescriptio,
    };
});

//e il mio foreach sarà semplice ;)

//#endregion