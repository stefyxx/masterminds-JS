let Bunny = document.getElementById("Rabbit");

//Abonnement événement
Bunny.addEventListener("mouseover",run);



function run (Mickey) //Mickey contient les données de l'événment mouse
{
     
  document.getElementById("Dingo") .innerHTML=`X: ${Mickey.clientX} Y:${Mickey.clientY} `;
  Bunny.style.left = `${Mickey.clientX +10}px`;
  Bunny.style.top = `${Mickey.clientY +10}px`;
}