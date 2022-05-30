setInterval()   //-> chiama una funzione dopo   OGNI  TOT   MILLISECONDI
//setInterval(myfunc,tot millisec) ->es: setInterval(visualizzaQualcosa, 3000)
//myfunc NON HA ()

clearInterval() //->serve a 'pulire' il setInterval(), é l'unico metodo x BLOCCARE la ripetizione dell'appello della funz ogni tot millisecondi

function printTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let hours,minutes,seconds = "";
    hours = (h<12) ? "0"+h : h;
    if(m==60) minutes ="00";
    else if (m<10) minutes = "0"+m
    else minutes = m;

    seconds = (s<10) ? "0"+s : s;

    document.body.innerHTML= hours + ":" + minutes + ":" + seconds;    
}

setInterval(printTime,1000);
////////////////////array recuperato fuori//////////////////

let allPoles = [2, 3, 4];
let counter = 5

const intervallo = setInterval( function myFunc() {
    allPoles = allPoles.map(el => {return el*2;});
    if (true){counter -= 1;}
    if (counter === 0) {
        clearInterval(intervallo);
        console.log("BOOMMM!!!");
    }
    console.log("list inside", allPoles);
    console.log("cont",counter);
    //return allPoles;
}, 1000);

console.log("list outside", allPoles);

setInterval(()=>{
console.log("list outside in interval", allPoles);
},6000);

///////////////////////////////////
const a = new Promise((r, f) => {
    const a = setInterval(() => {
      if (transaction.isActive() === false) {
        clearInterval(a);
        r('transaction actually done');
      }
    }, 100);
  });

/////////////////////////////////
const timespacerMakeSureTransactionIsDoneDone = new Promise((r, f) => {
    const a = setInterval(() => {
      if (transaction.isActive() === false) {
        clearInterval(a)
        r('transaction actually done')
      }
    }, 100)
  })
