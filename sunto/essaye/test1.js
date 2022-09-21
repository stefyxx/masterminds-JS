//#region 
// var array1 = ["A", "B", "C", "D", "A", "G"];
// var array2 = ["A", "A", "A", "E", "F"];
// var isMatched = 0;

// array1.forEach(el1 => {
//     var myBool = false;
//     array2.forEach(el2 => {
//         if (!myBool) {
//             if (el1 === el2) {
//                 isMatched++;
//                 const i = array2.indexOf(el2);
//                 console.log("i:", i);
//                 array2.splice(i, 1);
//                 console.log("arr 2 in if: ", array2);
//                 myBool = true;
//             }
//         }

//     })
// })
// console.log("array2: ", array2); // ["A", "E", "F"]
// console.log("matched: ", isMatched); //2

// console.log("undefined: ", Boolean(undefined)),  //false
// console.log("!undefined: ", Boolean(!undefined)),  //false

// console.log("NaN :", Boolean(NaN));              //false
// console.log("null :", Boolean(null));            //false
//#endregion

//#region 

//da usare solo x GraphQJ routes
function getNormalizedString2(string, splitter = "/") {
    let cleanedString = string;
    //ottengo un array con 1 o 2 elementi
    cleanedString = cleanedString.split(splitter);
    var myResult = [];
    console.log("my cleanedString: ", cleanedString)
    cleanedString.forEach(el => {
        const a = getNormalizedString(el);
        myResult.push(a);
    });
    console.log("my result: ", myResult)
    //é un array con 2 stringhe 
    return myResult;
};
//string, charsToRemove = [], splitter = "/", joiner = ' '

function getNormalizedString(string, charsToRemove = [".", "/", "_"], splitter = "-", joiner = '_') {
    let cleanedString = string;
    // this function leave the white-spaces and the capital-letters
    charsToRemove.forEach(char => {
        cleanedString = cleanedString.replaceAll(char, '')
    })
    return cleanedString.split(splitter).map(el => (el.trim())).join(joiner);
};

var arrayDel = [
    { id: '5', shortName: '11', longName: 'Brugge Station-Centrum-Assebroek Peerdeke-St.Kruis', description: 'Brugge Station-Centrum-Assebroek Peerdeke-St.Kruis', normalizedLongName: 'Brugge Station_Centrum_Assebroek Peerdeke_StKruis' },
    { id: '1', shortName: '11', longName: 'Berchem Station - Melkmarkt', description: 'Berchem Station - Melkmarkt', normalizedLongName: 'Berchem Station_Melkmarkt' },
    { id: '1', shortName: '11', longName: 'Melkmarkt - Berchem Station', description: 'Melkmarkt - Berchem Station', normalizedLongName: 'Melkmarkt_Berchem Station' }];

arrayDel = arrayDel.map(el => ({
    ...el,
    myProperty: getNormalizedString(el.description, [], "/", "")
}))
var arrayGraph = [
    { shortName: "11", description: "Genk - Maaseik/Maaseik - Genk", longName: "Genk - As - Neeroeteren - Maaseik", id: "delijn:64610" },
    {
        id: "delijn:64661", shortName: "11", longName: "Maaseik - Genk - Hasselt", description: "Hasselt - Maaseik/Maaseik - Hasselt",
    },
    {
        id: "delijn:66050", shortName: "11", longName: "Brugge Station-Assebroek Peerdeke-St.Kruis kerk",
        description: "St.Kruis-Assebroek Peerdeke-Brugge Station/Brugge Station-Centrum-Assebroek Peerdeke-St.Kruis",
    },
    { id: "delijn:66371", shortName: "11", longName: "Berchem - Melkmarkt", description: "Berchem Station - Melkmarkt/Melkmarkt - Berchem Station", }
];

arrayGraph = arrayGraph.map(el => ({
    ...el,
    myProperty: getNormalizedString2(el.description)
}));
console.log(arrayDel);
console.log(arrayGraph);

var myResult = [];
// es in longName é aggiunta una parola che non é un description e description ha / con andata e ritorno
//es 
arrayDel.forEach(route => {
    arrayGraph.forEach(element => {
        if (element.myProperty[0].length === element.myProperty[1].length) {
            if (element.myProperty[0] === route.longName || element.myProperty[1] === route.longName) myResult.push(route)
        }
        //else if(element.myProperty[1] === undefined && ) 
    });
})
console.log(myResult);
//#endregion