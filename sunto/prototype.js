//Qualsiasi OGGETTO JavaScript può scegliere un altro OGGETTO come prototipo
//significa che se non trovoi la proprietà nell'obj A, cerca nel prototype B

let human = {
    teeth: 32
};

let gwen = {
    __proto__: human,  //se non trovi la property in 'gwen' prova in 'human'
    // questo cavo PUNTA direttamente a {} di 'human'
    age: 19
};

//1 solo protpt x obj?      SIII
let mio = {
    //__proto__: human,
    __proto__: gwen,
    eta: 45
}

console.log(mio.age);   //19

///// é evidentemente possibile fare una CATENA:

let mammiferi = {
    proprieta: "allattare"
};

let erbivori = {
    __proto__: mammiferi,
    //proprieta: "non andrà mai in 'allattare' se lascio questa, perché trova la sua corrispondenza"
    caratteristica: "mangiano erba"
}

let pecora = {
    __proto__: erbivori,
    tipo: "fanno la lana per noi"
}

console.log(pecora.proprieta);      //allattare
console.log(pecora.hasOwnProperty('proprieta'));          //ha proprietà propria    FALSE

////come  vedere se la property é dell'obj o del prototype?     ->   .hasOwnProperty('property')

console.log("*************************");
// !!!!! GUARDAAAA !!!!! We’re going to call the Object Prototype:

let obj = {};
console.log(obj.__proto__); // sciolina il constructor (:= Object): a notare  !!!!! GUARDAAAA !!!!!
//get __proto__:
//set __proto__:
//isPrototypeOf(...)

//Object.assign

//Questo significa che ogni obj, anche se {}; HA UN __proto__ legato a se, con methods: Object (il padre di tutti, lui ha prototype null)

console.log(obj.hasOwnProperty);    //f := function (native code)
console.log(obj.toString);          //f  (native code)

///////////// An Object With NO Prototype  ////////

obj = {
    __proto__: null
}

console.log(obj.hasOwnProperty);    // undefined
console.log(obj.toString);          // undefined


console.log("*************************");

////    aggiungiamo una proprietà al Prototype (called prototype pollution)  ->  .__proto__.property     -> TUTTI gli obj in questa pagina l'EREDITANO
obj = {};                            //ripristiniamo il prototype
obj.__proto__.smell = "banana";

console.log(pecora.smell);      //banana

console.log("*************************");

//costruttore di donut
/*function Donut() {
    return { shape: 'round' };
}
    //identico a 
function Donut() {
    this.shape = 'round';
}

let donutProto = {
    eat() {
        console.log('Nom nom nom');
    }
};
    //identico a       // .prototype := aggiungo un method ou property a 'Donut() constructor'
Donut.prototype = {
    eat() {
        console.log('Nom nom nom');
    }
};



    //tutto questo nel codice moderno, usa la class (concetto prima indigesto a JS)
class Donut {
    constructor() {
        this.shape = 'round';
    }
    eat() {
        console.log('Nom nom nom');
    }
};



let donut1 = Donut();
donut1.__proto__ = donutProto;
    //identico a 
let donut1 = new Donut();  // appello il constructor con 'new'

let donut2 = Donut();
donut2.__proto__ = donutProto;
    //identico a 
let donut2 = new Donut();

donut1.eat();
donut2.eat();
*/
console.log("*************************");

let spider = {
    legs: 8
};

let miles = {
    __proto__: spider
};

miles.legs = 2;  /// VAI A CREARE UNA PROPERTY IN 'miles', quindi non salirà piu' per il prototype

console.log(miles.legs);        // 2
console.log(spider.legs);       // 8


console.log("*************************");

let gwenn = {
    __proto__: spider
};

spider.legs = gwenn.legs * 2; // tre tappe:
/*
the first:spider.legs = 8, so gwen.legs -> 8 because the request enter into prototype 'spider'

the second: spider.legs = gwen.legs * 2; -> 8*2 = 16

the tirdh : gwen.legs -> the request enter into prototype 'spider', but now the wire legs points on 16 -> so the result is 16 */

console.log(gwenn.legs) // 16

//il protype mi permette di avere una corda 'supplementare', se non trovo la property o method (=function) nell'obj, provo nel prorotype (se non c'é nemmeno là, allora sarà 'undefined')
//invece nel caso seguente 'caso' e 'spider puntano allo stesso obj ({} all'origine di spider); quindi diventano una cosa unica, cambio uno e cambia l'altro
let caso = spider;
caso.legs = 10;

console.log(caso.legs);     // 10
console.log(spider.legs);   // 10

//da qui' si capisce che prototype é piu' vicino al concetto di 'eredità'











console.log("*************************");

let automobile = {};
automobile.accendiTergicristalli = function (velocita) {
    alert("Tergicristalli accesi alla velocità " + velocita);
};
//alert(automobile.toString());
//automobile.accendiTergicristalli(5); 

console.log("*************************");
