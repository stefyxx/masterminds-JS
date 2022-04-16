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

// .getDay -> dimanche é 0 
let week = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
let day = new Date().getDay();
console.log(`Bonjour, nous sommes ${week[day]}!`);var today = new Date();
var dd = today.getDate();

//mese + 1
var todayi = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) dd='0'+dd;
if(mm<10) mm='0'+mm;

today = mm+'/'+dd+'/'+yyyy;
console.log(today);

//anno bisestile
function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));    //true

