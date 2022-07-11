var array1 = ["A", "B", "C", "D", "A","G" ];
var array2 = ["A", "A", "A", "E", "F" ];
var isMatched = 0;

array1.forEach(el1=>{
    var myBool = false;
    array2.forEach(el2=>{
        if(!myBool){
            if(el1 === el2){
                isMatched ++;
                const i = array2.indexOf(el2);
                console.log("i:", i);
                array2.splice(i, 1);
                console.log("arr 2 in if: ", array2);
                myBool= true;
            }
        }

        })
})
console.log("array2: ", array2); // ["A", "E", "F"]
console.log("matched: ",isMatched); //2