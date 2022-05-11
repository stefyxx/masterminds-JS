new Date(); //-> A date consists of a year, a month, a day, an hour, a minute, a second, and milliseconds.


new Date(milliseconds);
//02/01/1970    -> new Date(86400000);
new Date(dateString);
//fri jan 02 2015 10:42:00  -< new Date("January 2, 2015 10:42:00");
new Date(year, month, day, hours, minutes, seconds, milliseconds);
//Sat Jun 11 1988 11:42:00      ->new Date(88,5,11,11,42,0,0) = new Date(88,5,11,11,42,00,0)
//new Date(88,5,11,11,42,0,0) -> aa,m-1,gg,h,m,s,millisec -> = new Date(88,5,11,11,42)

/* --- METHODS --- */
d.getFullYear();    //aaaa    
d.getMonth();       // 0 - 11   !!!!!
d.getDate();        // gg
d.getDay();         // 0 = domenica - 6 = sabato
d.getHours();
d.getMinutes();
d.getSeconds();
d.getMilliseconds();    //start: 01/01/1970       One day = 86 400 000 millisecond.
d.getTime();

let info = prompt("Please enter your year of birth");
alert(`You are ${new Date().getFullYear() - parseInt(info)} years old`);

let date = prompt("Date of birth (day/month/year): ");
let dateArr = date.split("/");
let birthdate = new Date(parseInt(dateArr[2]), parseInt(dateArr[1]) - 1, parseInt(dateArr[0]));
// because month is a table so month - 1 to get correct position

//oppure:
let year = parseInt(dateArr[2]);
let month = parseInt(dateArr[1]);
let dAy = parseInt(dateArr[0]);
birthdate = new Date(year,month-1,dAy);

console.log(birthdate);

let today = new Date();
console.log(today);

let ageMS = today.getTime() - birthdate.getTime();
console.log(ageMS);
let age = new Date(ageMS).getFullYear() - new Date(0).getFullYear();
alert(`You are ${age} years old`);

let dayName;
switch (Date()) {
    case "0":
        dayName = "dimanche";
        break;
    case "1":
        dayName = "lundi";
        break;
    case "2":
        dayName = "mardi";
        break;
    case "3":
        dayName = "mercredi";
        break;
    case "4":
        dayName = "jeudi";
        break;
    case "5":
        dayName = "vendredi";
        break;
    case "6":
        dayName = "samedi";
        break;
}

// .getDay -> domenica é 0 
let week = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
let day = new Date().getDay();
console.log(`Bonjour, nous sommes ${week[day]}!`);
var todayi = new Date();
var dd = todayi.getDate();

//mese + 1
//months from 0 to 11: January is 0, and December is 11
var todayi = new Date();
var dd = todayi.getDate();
var mm = todayi.getMonth()+1; 
var yyyy = todayi.getFullYear();
if(dd<10) dd='0'+dd;
if(mm<10) mm='0'+mm;

today = mm+'/'+dd+'/'+yyyy;
console.log(todayi);

//anno bisestile
function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));    //true

console.log("*************************");
console.log(Date());                    //data completa di oggi
console.log(new Date().getFullYear());  //NON SCORDARE 'new', SENNO' TI DA ERRORE