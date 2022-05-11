/*You can access object properties in two ways.*/

objectName.propertyName
//or
objectName['propertyName']

var course = { name: "JS", lesson: 41 };
document.write(course.name.length);

/*creare un obj con il constructor (:= una function)*/
var person = {
    name: "John", age: 42, favColor: "green"
};
//constructor function: NON SCORDATE this.
function person(name, age, color) {
    this.name = name;
    this.age = age;
    this.favColor = color;
}

var p1 = new person("Jhon", 42, "green");
console.log(p1.color);
console.log(p1['age']);

//I methods sono funzioni memorizzate come proprietà dell'oggetto.
//per accedervi -> objectName.methodName()
//costruttore di persone che ha anche un method:
function persone(name, age) {
    this.name = name;
    this.age = age;
    this.changeName = function (nom) {
        this.name = nom;
        //NON HA RETURN -> modifica direttamente this.name
        //NBB nom che é preso nel parametro non ha this.
    }
}
var p2 = new persone("Marc", 43);
console.log(p2['name']);  // Marc
p2.changeName("Alex");
console.log(p2['name']);  //Alex

//altro es:
var prodID = "ddee";   //readLine();
var price = 1700;      //parseInt(readLine(),10);
var discount = 20;        //parseInt(readLine(),10);

var prod1 = new Product(prodID, price);
console.log(prod1.prodID + " price: " + prod1.price);

prod1.changePrice(discount);
console.log(prod1.prodID + " new price: " + prod1.price);

function Product(prodID, price) {
    this.prodID = prodID;
    this.price = price;
    //discount é la  % di sconto:
    this.changePrice = function (discount) {
        this.price = price - (discount / 100 * price);
    }
}

//altro es method
//person é il costruttore, infatti ha this.
function person3(name, age) {
    this.name = name;
    this.age = age;
    this.yearOfBirth = bornYear;  // non scrivo bornYear()
}
//bornYear é una funzione= method
function bornYear() {
    return new Date().getFullYear() - this.age;     // richiamo 'age' con this.

    //NBB 'new' é un costruttore, quindi quandi appello la func 'bornYear()' -> JS crea l'obj Date() et appella 'age'; ma alla fine dell'esecuzione della funzione DATE E' DISTRUTTO (x! valori primitivi)
}

// ma per chiamare la prorpietà yearOfBirth SCRIVO ()
var p3= new person3("Al", 22);
p3.yearOfBirth();   //ho messo le ()

//Nota: possiamo creare un obj, ma non possiamo distruggerlo; per questo un'app potrebbe usare molta memoria
//pero' se creo un obj in una func, finito l'appello della func, cessa di vivere anche j'obj creato in essa, quindi é DISTRUTTO