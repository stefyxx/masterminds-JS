//BOUCLES (FOR IN)
let tab = ["a","b","c","d","e"]
for(const index in tab){
    console.log(`${tab[index]} est en ${parseInt(index)+1} position`)
}
//FOR OF = FOREACH => à utiliser pour de la lecture uniquement
for(const value of tab){
    console.log(`${value} est là`)
}