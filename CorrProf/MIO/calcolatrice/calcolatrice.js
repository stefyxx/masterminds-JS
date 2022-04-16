function addition(nb1,nb2) {
    if(isNaN(nb1)||isNaN(nb2)) throw new TypeError('Vous n\'avez pas entré des nombres');
    let nb3=nb1+nb2;
    return nb3;
}

function soustraction(nb1,nb2) {
    let nb3=nb1-nb2;
    return nb3;
}

function multiplication(nb1,nb2) {
    let nb3=nb1*nb2;
    return nb3;
}

function division(nb1,nb2) {
    let nb3=nb1/nb2;
    return nb3;
}

let nb1=prompt("Rentrez le premier nombre ");
let nb2=prompt("Rentrez le deuxième nombre ");
let operation=prompt("Rentrez l'opération qui vous souhaitez faire ");
let risultato;
switch (operation) {
    case "+":
        risultato=addition(nb1,nb2);
        break;
    case "-":
        risultato=soustraction(nb1,nb2);
        break;
    case "*":
        risultato=multiplication(nb1,nb2);
        break;
    case "/":
        if(nb2==0)throw new TypeError('Division impossible !');
        else risultato = division(nb1,nb2);
        break;        
    default:
        risultato = new TypeError("Impossible faire l'operation!")
        break;
}
let ici= document.getElementById("ici");
ici.innerText = 'Votre résultat est '+  risultato

alert('Votre résultat est '+ risultato);
