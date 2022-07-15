//https://www.w3schools.com/jsref/met_console_time.asp
console.assert();
console.clear();
console.warn();

console.count();
console.countReset();

console.error();
console.debug();

console.group();
console.groupCollapsed();
console.groupEnd();

console.info();
console.table();

console.time();
console.timeEnd();

console.trace();

//  console.time() et console.timeEnd()
/*
PRATICAMENTE: prima esegue tutto il code tra console.time() et console.endtime() e poi procede
- permette di far partire un timer in console
- usato SOLO per fare dei TEST
- ne posso mettere diversi usando un 'label'->  console.time(label)

RETURNS : in quanti millisecondi esegue in test 
(ossia esegue il codice entro console.time() et console.endtime())
*/
console.time("for loop");
console.log("sono tra time et endtime");
for (let i = 0; i < 1000000; i++) {
}
console.timeEnd("for loop");

console.log("ma ora sono fuori");

let i = 0;
console.time("while loop");
while (i < 1000000) {
  i++;
}
console.timeEnd("while loop");

console.log("e quindi io saro' l'ultimo a essere visto?");
/*
RESULT:
    sono tra time et endtime
    for loop: 1.472900390625 ms
    ma ora sono fuori
    while loop: 2.35595703125 ms
     e quindi io saro' l'ultimo a essere visto?
*/
// Infatti:
console.time("for loop");
console.log("sono tra time et endtime");
for (let i = 0; i < 1000000; i++) {
}

console.log("ma ora sono fuori");

let i = 0;
console.time("while loop");
while (i < 1000000) {
    i++;
}
console.timeEnd("while loop");

console.log("e quindi io saro' l'ultimo a essere visto?");

console.timeEnd("for loop");
/*
RESULT:
    sono tra time et endtime
    ma ora sono fuori
    while loop: 2.287841796875 ms
    e quindi io saro' l'ultimo a essere visto?
    for loop: 3.97119140625 ms

*/

