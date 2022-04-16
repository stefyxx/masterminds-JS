/*Un compte à rebours*/
let MaZone = document.getElementById("Zone");
let heures = 0;
let minutes = 5;
let secondes = 0;
let myVar = setInterval(compteARebours, 1000); /*1 seconde entre chaque exécution*/



function compteARebours() 
{
    // Calcul
      if(secondes==-1) 
      {
          minutes-=1;
          secondes=59;
      }
      else
      {
           secondes-=1;
      }
       
    //Affichage
    let strHeure = heures<10?`0${heures}`:heures;
    let strMinutes;    
    if(minutes<10)
    {
        strMinutes=`0${minutes}`;
    }
    else
    {
        strMinutes= `${minutes}`;
    }
    let strSecondes=`${secondes}`;
    if(secondes<10)
    {         
        if(secondes<0)
        {
            strSecondes='00'; 
        }
        else
        {
        strSecondes='0'+ secondes;
        }
    }
     
    MaZone.innerHTML = `${strHeure}:${strMinutes}:${strSecondes}`;
          
      
  if(heures==0 && minutes==0 && secondes==-1)
  {
        clearInterval(myVar);
        MaZone.innerHTML ="BOOOOUUUUUMMMMM!!!!!";
         MaZone.classList.add("Danger");
  }
}

//clearInterval(myVar); Si je le laisse ici, l'arrêt survient AVANT l'exécution