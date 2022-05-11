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