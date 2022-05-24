    ////////////// CHE COS'é .map()  /////////////////////////
//il method .map() puoi applicarlo solo a un ARRAY []
/*
é come un FOR : tu applichi una funzione a OGNI elemento del tuo array

RETURN: sempre un ARRAY con gli elementi modificati dalla tua funzione:
    NB: se dimentichi di scrivere un return, il tuo nuovo array é riempito di UNDEFINED

.map() non esegue la func su elementi vuoti
*/

let vals = [1, 2, 3, 4, 5];

let valsX2 = vals.map(nb => { return nb * 2 });

console.log("valsX2", valsX2); // [2, 4, 6, 8, 10]

//.map() ha 4 parametri:
/*
.map(function(elemento, index, array){}, this)

    this = undefined per default
    this é un valore che puo' essere usato DENTRO la func callback
*/

const essay = vals.map(function (el, index, array) {
    //console.log(el);        //elemento          1   2   3   4   5
    //console.log(index);     //e suo index       0   1   2   3   4
    //console.log(array);     // sarà sempre 'vals'[1, 2, 3, 4, 5]
});
console.log("no retuon",essay);     //[undefined, undefined, undefined, undefined, undefined]
// PERCHE' NON HO STRITTO RETURN

const essay2 = vals.map(function (el, index, array) {
    //console.log(el);        //      1   2   3   4   5
    //console.log(index);     //      0   1   2   3   4
    //console.log(array);     //sempre [1, 2, 3, 4, 5]

    return index;
});

console.log(essay2);        //[0, 1, 2, 3, 4]

////////// THIS/////
const vals2WithThis = vals.map(function (el) {
    return el * this;
}, 2);

console.log("vals2 con this: ", vals2WithThis);     //[2, 4, 6, 8, 10]

const vals2WithThis2 = vals.map(el => {
    return el * this;
}, 2);
console.log("vals2 con this: ", vals2WithThis2);     // [NaN, NaN, NaN, NaN, NaN]

///////// es con array di objs:
const utilisateurs = [
    { firstName: "Susan", lastName: "Ciccone" },
    { firstName: "Giorgio", lastName: "Armani" }
];
/* solo se scrivo let utilisateurs = new Map();
utilisateurs.set("firstName","Laura");
utilisateurs.set("lastName","Biagiotti");*/
const usersAllName = utilisateurs.map(el => {
    const allName = el.firstName + " " + el.lastName;
    const allName2 = [el.firstName,el.lastName].join(" ");
    return allName;
});
console.log(usersAllName);      // ['Susan Ciccone', 'Giorgio Armani']

/////////////////////////////////////////////////////////////////
const users = [
    { email: 'giovanni@gmail.com', display: 'giova38' },
    { email: 'giangiorgio@toptech.com', display: 'giangi23' }
];

let usersWithAdmin = [];
for (let i = 0; i < users.length; ++i) {
    const domain = users[i].email.split('@')[1]
    let admin = false
    if (domain === 'toptech.com') {
        admin = true
    }
    usersWithAdmin[i] = Object.assign(users[i], { admin })
}
console.log(usersWithAdmin);
  // l’output sarà
  // [ { email: 'giovanni@gmail.com', display: 'giova38', admin: false },
  //   { email: 'giangiorgio@toptech.com', display: 'giangi23', admin: true } ]

///identico a: 
const isUserAdmin = user => user.email.split('@')[1] === 'toptech.com';
/* 
function isAdm(user) {
    return user.email.split('@')[1] === 'toptech.com';
}*/

// 'isUserAdmin' ritorna un bool !! -> la seconda parte é o no 'toptech.com'
// x usarlo -> isUserAdmin(user)
const usersWithAdmin1 = users.map(user => Object.assign(user, { admin: isUserAdmin(user) }));
console.log(usersWithAdmin1);


///////////////// .map().reduce()   /////////////////
/*
.reduce() -> Agisce come accumulatore di valori
*/
const esperimenti = [
    { nome: 'Large Hadron Collider', costo: 5000000000 },
    { nome: 'Vulcano di bicarbonato', costo: 3.50 },
    { nome: 'International Space Station', costo: 150000000000 }
]
const nomiEsperimenti = esperimenti.map(esperimento => esperimento.nome)
console.log(nomiEsperimenti)
// l’output sarà
// [ 'Large Hadron Collider', 
//   'Vulcano di bicarbonato',
//   'International Space Station' ]
esperimenti.map(e => e.costo).reduce((prec, succ) => prec + succ)
// output: 155000000003.5


// .map() lavora solo con array e return array
//e se ho un obj di objs? {{..},{..},{..},...} -> Object.entries() 