//BOUCLES (FOR IN)
let tab = ["a","b","c","d","e"]
for(const index in tab){
    console.log(`${tab[index]} est en ${parseInt(index)+1} position`)
}
//FOR OF = FOREACH => à utiliser pour de la lecture uniquement
for(const value of tab){
    console.log(`${value} est là`)
}

//Make the loop stop when i is 5.
for (i = 0; i < 10; i++) {
    console.log(i);
    if (i == 5) {
        break;
    }
}

//Make the loop jump to the next iteration when i is 5.
for (i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}