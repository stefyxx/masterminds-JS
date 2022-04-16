/**
 * ? EX 11
 */
// créer un prompt pour demander l'heure de fin
// créer un décompte pour voir le temps restant jusqu'à la fin du cours


// alert('A quelle heure finissent les cours ?')

function DiffHeure(heuresFin, minutesFin, secondesFin, emplacement){
    let today = new Date();
    let heuresMnt = today.getHours();
    let minutesMnt = today.getMinutes();
    let secondesMnt = today.getSeconds();
    let minutes_restantes;
    let sec_restantes;
    if (secondesFin - secondesMnt > 0){
        sec_restantes = secondesFin - secondesMnt;
    }
    else{
        sec_restantes = 60 - secondesMnt
        minutesFin -= 1
    }
    if (minutesFin - minutesMnt > 0){
        minutes_restantes = minutesFin - minutesMnt;
    }
    else{
        minutes_restantes = 60 - minutesMnt
        heureFin -= 1
    }
    let heure_restantes = heuresFin - heuresMnt;
    if (heure_restantes < 10) heure_restantes = '0'+heure_restantes   
    if (minutes_restantes < 10) minutes_restantes = '0'+minutes_restantes     
    if (sec_restantes < 10) sec_restantes = '0'+sec_restantes     
    let temps_restant = `${heure_restantes.toString()}:${minutes_restantes.toString()}:${sec_restantes.toString()}`;
    // emplacement.innerText = temps_restant;

    let title_time = document.querySelector('#chrono');
    title_time.innerText = temps_restant;
};

let heureFin;
let minFin;
let secFin;
let titre1 = document.createElement('h1');

// do {
//     heureFin = parseInt(prompt('Heures (0 - 23 heures)'));
//     if (heureFin < 10) heureFin = '0'+heureFin   
// } while (isNaN(heureFin) || heureFin < 0 || heureFin > 23);
// do {
//     minFin = parseInt(prompt('Minutes (0 - 59 minutes)'));  
//     if (minFin < 10) minFin = '0'+minFin     
// } while (isNaN(minFin) || minFin < 0 || minFin > 59);
// do {
//     secFin = parseInt(prompt('Secondes (0 - 59 secondes)'));  
//     if (secFin < 10) secFin = '0'+secFin     
// } while (isNaN(secFin) || secFin < 0 || secFin > 59);

// setInterval(function(){
//     DiffHeure(heureFin, minFin, secFin, titre1)},
//     1000);


setInterval(function(){
    DiffHeure(13, 25, 00, titre1)},
    1000);

    