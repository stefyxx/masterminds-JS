// Opérateur ...

function calcul(operateur, ...data) {
    let total = 0;
    if (operateur === "addition") {
        for (let index = 0; index < data.length; index++) {
            total += data[index];
        }
    }
    
    console.log(total);
}

calcul("addition", 1,2);
calcul(1,5,6,7,89,15);
calcul([1,2]);