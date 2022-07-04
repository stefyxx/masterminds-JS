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
    })

})