//import { poles } from "./poles";
//#region       CHE COS'é .map() 

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
console.log("no retuon", essay);     //[undefined, undefined, undefined, undefined, undefined]
// PERCHE' NON HO STRITTO RETURN

const essay2 = vals.map(function (el, index, array) {
    //console.log(el);        //      1   2   3   4   5
    //console.log(index);     //      0   1   2   3   4
    //console.log(array);     //sempre [1, 2, 3, 4, 5]

    return index;
});

console.log(essay2);        //[0, 1, 2, 3, 4]
//#endregion

//#region       ////// THIS/////
const vals2WithThis = vals.map(function (el) {
    return el * this;
}, 2);

console.log("vals2 con this: ", vals2WithThis);     //[2, 4, 6, 8, 10]

const vals2WithThis2 = vals.map(el => {
    return el * this;
}, 2);
console.log("vals2 con this: ", vals2WithThis2);     // [NaN, NaN, NaN, NaN, NaN]
//#endregion

///////// es con array di objs:
const utilisateurs = [
    { firstName: "Susan", lastName: "Ciccone" },
    { firstName: "Giorgio", lastName: "Armani" }
];

// NON CONFONDERE .map() -> method d'iterazione     et new Map() -> constructor -> mi crea un obj    key: value
/* solo se scrivo let utilisateurs = new Map();
utilisateurs.set("firstName","Laura");
utilisateurs.set("lastName","Biagiotti");*/
const usersAllName = utilisateurs.map(el => {
    const allName = el.firstName + " " + el.lastName;
    const allName2 = [el.firstName, el.lastName].join(" ");
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
esperimenti.map(elemento => elemento.costo).reduce((prec, succ) => prec + succ)
// output: 155000000003.5
////////////
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)


//////////
// .map() lavora solo con array e return array
//e se ho un obj di objs? {{..},{..},{..},...} -> Object.entries() che trasforma obj in array

//[{..}, {..}, {..}]
const arrayObj = [[
    'SEV011',
    {
        hour_cnt: 27,
        day_cnt: 118,
        year_cnt: 4108,
        cnt_time: '2020/07/31 09:46:00'
    }
],
[
    'SJE181',                                   //key
    {
        hour_cnt: 8,                            //}
        day_cnt: 163,                           //  }   value (é un obj)
        year_cnt: 69016,                        //  } 
        cnt_time: '2020/10/20 16:24:00'         //}    
    }
]];

//OBJ IN MAP
const obj1 = { foo: 'bar', baz: 42 };
const map = new Map(Object.entries(obj1));
console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}


/*Nota .map() -> return [{..obj modif da func..}, {..obj modif da func..}]
    new Map() -> return { key => value, key => value }  dove value puo' essere {....}
*/
//...................................................................................

/*const totalCount = poles.reduce((acc, pole) => acc + pole.count, 0);
console.log("poles con conto ....", )*/
let today = new Date();
let pole = {
    history : {
        date : today.toDateString(),        //posso usare la mia func del buon formato
        count : 22
    }
}
console.log("oggi: ", today);
console.log("oggi in string: ", pole.history.date);
/* func(stard, end){
    if(start === pole.startDate && end <= pole.endDate){
        pole.count += pole.count;  
    }
}

*/

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
