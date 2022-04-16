let table=document.getElementById('table');

let numberChosen=parseInt(prompt("n° del lato del vostro cubo"));

// creo le righe
for (let index = 0; index < numberChosen; index++) {
    let tr= document.createElement('tr');
    table.appendChild(tr);
    tr.setAttribute('class','class_tr');
    tr.setAttribute('id',index);
    //dico quante colonne deve avere una riga e mi mette tutte sulla sessa riga!
    for (let i = 0; i < numberChosen; i++) {
        let th=document.createElement('th');
        //table.firstChild.appendChild(th); // si ma va a mettere SEMPRE nel firstchild!
        tr.appendChild(th); 
        th.setAttribute('class','class_th')
        th.innerText="B";
    }
}
//table.firstChild.appendChild(th);

// //dico quante colonne deve avere una riga
// let ttr= document.querySelectorAll(".class_tr");

// for (let index = 0; index < ttr.length; index++) {
//     for (let i = 0; i < numberChosen; i++) {
//         let th=document.createElement('th');
//         ttr[index].appendChild(th);
//         th.setAttribute('class','class_th')
//         th.innerText="B";
//     }
// }

