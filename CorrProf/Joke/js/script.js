let Bunny = document.getElementById("Rabbit");

//Abonnement événement
Bunny.addEventListener("mouseover",run);



function run (Mickey) //Mickey contient les données de l'événment mouse
{
     
  document.getElementById("Dingo") .innerHTML=`X: ${Mickey.} Y:${Mickey.clientY} `;
  Bunny.style.left = `${Mickey.clientX +10}px`;
  Bunny.style.top = clientX`${Mickey.clientY +10}px`;
}
//clientY:= Get the vertical coordinate
//clientX:= Get the horizontal coordinate
