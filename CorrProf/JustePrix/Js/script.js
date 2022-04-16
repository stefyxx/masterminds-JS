/*Génération du nombre aléatoire*/
let LeNombre = Math.floor(Math.random() * (100 - 1) + 1);
console.log(LeNombre);

 let proposition;
 let message="";
 let divMessage= document.getElementById("MessageId");
do
{
    /*Récupération de la proposition de notre joueur*/
    proposition= parseInt(prompt(`Proposez un nombre entre 1 et 100 `));
    console.log(proposition);
    
    /*Vérification ou Comparaison*/
    if(LeNombre<proposition)
    {
        message="C'est moins!";
       //-> remplace l'attribut donc on perd la classe Message divMessage.setAttribute("class","Moins");
       divMessage.classList.remove("Plus");
        divMessage.classList.add("Moins");
    }
    if(LeNombre>proposition)
    {
        message="C'est plus!"; 
        divMessage.classList.remove("Moins");
        divMessage.classList.add("Plus");
    }
    divMessage .innerHTML=message;
   
}while(LeNombre!=proposition); 
divMessage.innerHTML="C'est gagné!!!!!!"; 
divMessage.classList.add("Gagne");