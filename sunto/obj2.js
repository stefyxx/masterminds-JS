//OBJ IN ARRAY 
/*  Object.entries(object1)               -> return un ARRAY ma [key, value]      -> [ [key, value], [key, value] ]
        se object1 é un type primitive    -> return []  ECCETTO X STRINGHE ( v. ex 2 et 3)
*/
const object1 = {
  a: 'somestring',
  b: 42
};

for (const key in object1) {
  console.log(`${key}: ${object1[key]}`);     // "a: somestring"
                                              // "b: 42"
}

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);            // "a: somestring"
                                              // "b: 42"
}

console.log(Object.entries(object1));         //[ ['a', 'somestring'], ['b', 42] ]      -> [ [key, value], [key, value] ]

//potrei aver bisogno di ordinare gli elementi del mio 'object1', e allora:
// Object.entries(object1).sort((a, b) => b[0].localeCompare(a[0]));

// ex 2   ////////////////////////////////
//object1 = 'foo'
console.log(Object.entries('foo'));           // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]  

// ex 3   ////////////////////////////////

// returns an empty array for any primitive type except for strings (see the above example), since primitives have no own properties
console.log(Object.entries(100));           // [ ]

//////////////////////////////////
// getFoo is property which isn't enumerable

const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });      //come si legge ???
myObj.foo = 'bar';
console.log(Object.entries(myObj));       // [ ['foo', 'bar'] ]

// ITERAZIONI (for...of) E FOREACH ////////////////////////////////

// iterate through key-value gracefully
const obj = { a: 5, b: 7, c: 9 };

Object.entries(obj);          // [[a,5],[b,7],[c,9]]

for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});

//..............................................................................................................//
//OBJ IN MAP  
/*
new Map() accetta d'iterare sulle entries di un Object.entries(object1), in modo semplice e veloce:
*/
const obj1 = { foo: 'bar', baz: 42 };
const map = new Map(Object.entries(obj1));
console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}

//..............................................................................................................//
//iterare su OBJ

Object.entries(obj1).forEach(([key, value]) => console.log(`${key}: ${value}`));       // "foo: bar", "baz: 42"

/////..........................................................................

let objQuery = {
  "requestDate": "2022/05/20 15:50:13",
  "data": {
    "CAT17": {
      "hour_cnt": 61,
      "day_cnt": 779,
      "year_cnt": 174392,
      "cnt_time": "2022/05/20 15:49:00"
    },
    "CB02411": {
      "hour_cnt": 104,
      "day_cnt": 1109,
      "year_cnt": 203616,
      "cnt_time": "2022/05/20 15:49:00"
    },
    "CB1142": {
      "hour_cnt": 65,
      "day_cnt": 1911,
      "year_cnt": 334142,
      "cnt_time": "2022/05/20 15:49:00"
    }
  }
}

let arrayQuery = Object.entries(objQuery);
console.log(arrayQuery);
/*
[
  [requestDate, "2022/05/20 15:50:13"],
  [
    data, {.......}
  ]
]
{.......} =
{
 "CAT17":   {"hour_cnt": 61,"day_cnt": 779,"year_cnt": 174392,"cnt_time": "2022/05/20 15:49:00"},
 "CB02411": {"hour_cnt": 104,"day_cnt": 1109,"year_cnt": 203616,"cnt_time": "2022/05/20 15:49:00"},
 "CB1142":  {"hour_cnt": 65,"day_cnt": 1911,"year_cnt": 334142,"cnt_time": "2022/05/20 15:49:00"} 
}
*/

let mapQuery = new Map(Object.entries(objQuery));
console.log(mapQuery);
/*
{
  'requestDate' =>"2022/05/20 15:50:13" ,
  'data' => {....}
}
'data' := key con value un obj := {....}
value = {....} =
{
 "CAT17":   {"hour_cnt": 61,"day_cnt": 779,"year_cnt": 174392,"cnt_time": "2022/05/20 15:49:00"},
 "CB02411": {"hour_cnt": 104,"day_cnt": 1109,"year_cnt": 203616,"cnt_time": "2022/05/20 15:49:00"},
 "CB1142":  {"hour_cnt": 65,"day_cnt": 1911,"year_cnt": 334142,"cnt_time": "2022/05/20 15:49:00"} 
}
*/
console.log(mapQuery.data);       // NOT CORRECT !!!!
console.log(mapQuery.get('data'));

////////////////////////////////////
const objData = {
  CAT17 : {
    "hour_cnt": 65,
    "day_cnt": 746,
    "year_cnt": 182635,
    "cnt_time": "2022/05/25 11:58:00"
  },
  CB02411 : {
    "hour_cnt": 89,
    "day_cnt": 858,
    "year_cnt": 213210,
    "cnt_time": "2022/05/25 11:58:00"
  },
  CB1142: {
    "hour_cnt": 144,
    "day_cnt": 1532,
    "year_cnt": 347590,
    "cnt_time": "2022/05/25 11:58:00"
  }
};
let arrayData = Object.entries(objData);
console.log(arrayData);
/*
[
  ["CAT17",   {"hour_cnt": 61,"day_cnt": 779,"year_cnt": 174392,"cnt_time": "2022/05/20 15:49:00"}],
  ["CB02411", {"hour_cnt": 104,"day_cnt": 1109,"year_cnt": 203616,"cnt_time": "2022/05/20 15:49:00"}],
  ["CB1142",  {"hour_cnt": 65,"day_cnt": 1911,"year_cnt": 334142,"cnt_time": "2022/05/20 15:49:00"}] 
]
*/
let mapData = new Map(Object.entries(objData));
console.log(mapData);
/*
{
  "CAT17" =>   {"hour_cnt": 61,"day_cnt": 779,"year_cnt": 174392,"cnt_time": "2022/05/20 15:49:00"},
  "CB02411" => {"hour_cnt": 104,"day_cnt": 1109,"year_cnt": 203616,"cnt_time": "2022/05/20 15:49:00"},
  "CB1142" =>  {"hour_cnt": 65,"day_cnt": 1911,"year_cnt": 334142,"cnt_time": "2022/05/20 15:49:00"}
}
*/
