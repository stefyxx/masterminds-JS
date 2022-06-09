//.filter()
/*
lo stesso di .map()
RETURN un ARRAY di matches;  no match -> return [];
*/

const ages = [32, 33, 16, 40,55];
const result = ages.filter(checkAdult);

function checkAdult(age) {
    return age >= 18;
}
//console.log(result);
//lo stesso
const result2 = ages.filter(age => {
    return age >= 18;
});
//console.log("result2", result2)

// array.filter(function(currentValue, index, arr), this)

// vedi anche array.js

const allPoles = [
    {
        name: "ciao",
        history: [
            {
                date: "20220609",
                count: 30
            },
            {
                date: "20220608",
                count: 3
            },
        ]
    },
    {
        name: "hallo",
        history: [
            {
                date: "20220609",
                count: 30
            },
            {
                date: "20220608",
                count: 3
            },
        ]
    },
    {
        name: "ola",
        history: [
            {
                date: "20220609",
                count: 30
            },
            {
                date: "20220608",
                count: 3
            },
        ]
    }
]
const totalCountBikesToday = allPoles.map(pole => pole.history).flat().filter(el=>el.date === "20220609")
.map(e=>e.count).reduce((prec,post)=> prec + post);
/* .map(...)
 = [
  [ {date: '20220609', count: 30}, {date: '20220608', count: 3}],
  [ {date: '20220609', count: 30}, {date: '20220608', count: 3}],
  [ {date: '20220609', count: 30}, {date: '20220608', count: 3}]
]
*/
/*.flat()
(6) [{…}, {…}, {…}, {…}, {…}, {…}]
0: {date: '20220609', count: 30}
1: {date: '20220608', count: 3}
2: {date: '20220609', count: 30}
3: {date: '20220608', count: 3}
4: {date: '20220609', count: 30}
5: {date: '20220608', count: 3}
*/
/* .filter(..)
(3) [{…}, {…}, {…}]
0: {date: '20220609', count: 30}
1: {date: '20220609', count: 30}
2: {date: '20220609', count: 30}
*/

console.log(totalCountBikesToday);
/*

(method) Array<{ date: string; count: number; }>.reduce<number>(callbackfn: (previousValue: number, currentValue: {
    date: string;
    count: number;
}, currentIndex: number, array: {
    date: string;
    count: number;
}[]) => number, initialValue: number): number (+2 overloads)

*/
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)