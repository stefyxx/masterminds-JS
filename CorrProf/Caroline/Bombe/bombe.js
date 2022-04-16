function DiffHeure(heuresFin, minutesFin, secondesFin, emplacement){
    let today = new Date();
    let heures = today.getHours();
    let minutes = today.getMinutes();
    let secondes = today.getSeconds();
    let minutes_mnt;
    let sec_mnt;
    if (secondesFin - secondes > 0){
        sec_mnt = secondesFin - secondes;
    }
    else{
        sec_mnt = 60 - secondes
        minutesFin -= 1
    }
    if (minutesFin - minutes > 0){
        minutes_mnt = minutesFin - minutes;
    }
    else{
        minutes_mnt = 60 - minutes
        heureFin -= 1
    }
    let heure_mnt = heuresFin - heures;
    if (heure_mnt < 10) heure_mnt = '0'+heure_mnt   
    if (minutes_mnt < 10) minutes_mnt = '0'+minutes_mnt     
    if (sec_mnt < 10) sec_mnt = '0'+sec_mnt     
    let temps_restant = `${heure_mnt.toString()}:${minutes_mnt.toString()}:${sec_mnt.toString()}`;
    // emplacement.innerText = temps_restant;

    let title_time = document.querySelector('#timer');
    title_time.innerText = temps_restant;
};

let heuresDecompte = 0;
let minutesDecompte = 5;
let secondesDecompte = 0;
let today = new Date();
let secondes = today.getSeconds();
let heures = today.getHours();
let minutes = today.getMinutes();
if (secondes + secondesDecompte > 60){
    secondes -= (60-secondesDecompte); 
    minutes += 1;
}
else{
    secondes += secondesDecompte;
}
if (minutes + minutesDecompte > 60){
    minutes -= (60-minutesDecompte); 
    heures += 1
}
else{
    minutes += minutesDecompte;
}
heures += heuresDecompte ;
console.log("heures" + heures);
console.log("minutes" + minutes);
console.log("secondes" + secondes);
let decomptePlace = document.createElement('div');
decomptePlace.setAttribute("class", "chrono");
decomptePlace.setAttribute("id", "timer");
// documentPlace.querySelector('body').appendChild(decomptePlace);
// decomptePlace.innertext

setInterval(function(){
    DiffHeure(heures, minutes, secondes, decomptePlace)},
    1000);
// heure maintenant+5min ?