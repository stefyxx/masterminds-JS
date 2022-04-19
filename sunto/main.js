//dal formulario recupera i NAME := nome variabile riempita
//non va
var x = document.getElementById("form1");
function getFormvalue() {
    for (var i = 0; i < x.length; i++) {
        console.log(x[i]);

        if (x.elements[i].value != 'Submit') {
            console.log(x.elements[i].value);
        }
    }
}
console.log(x);

function changeContent() {
    rn = window.prompt("Input the Row number(0,1,2)", "0");
    cn = window.prompt("Input the Column number(0,1)", "0");
    content = window.prompt("Input the Cell content");
    var x = document.getElementById('myTable').rows[parseInt(rn, 10)].cells;
    x[parseInt(cn, 10)].innerHTML = content;
}

function volume_sphere() {
    var volume;
    var radius = document.getElementById('radius').value;
    radius = Math.abs(radius);
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4);
    document.getElementById('volume').value = volume;
    console.log()
    return false; //?
} 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
