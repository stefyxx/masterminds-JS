// let btn = document.getElementById("change");

// btn.addEventListener("click", changeColor);

// function changeColor(event)
// {
//     //J'empêche le formulaire d'être envoyé
//     event.preventDefault();
//     let div =document.getElementById("square");
    

//     //Mon formulaire
//     let monForm =document.forms[0];
//     //Je poste mon formulaire sous certaines conditions
//     //monForm.submit();

//     //Je récupère mon select
//     let strCouleur = monForm[0].value;
//     if(strCouleur=="Green")
//     {
//         div.setAttribute("class","GreenSquare");
//     }
//     if(strCouleur=="Yellow")
//     {
//         div.setAttribute("class","YellowSquare");
//     }
    
//     if(strCouleur=="Red")
//     {
//         div.setAttribute("class","RedSquare");
//     }
// }

/*En directe pour le select*/
let leselect = document.getElementById("SelColor");
leselect.addEventListener("change",setColor);

function setColor(event)
{ 
    let div =document.getElementById("square");
   let strCouleur = event.currentTarget.value;

    if(strCouleur=="Green")
        {
            div.setAttribute("class","GreenSquare");
        }
        if(strCouleur=="Yellow")
        {
            div.setAttribute("class","YellowSquare");
        }
        
        if(strCouleur=="Red")
        {
            div.setAttribute("class","RedSquare");
        }
}