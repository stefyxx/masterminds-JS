//.filter()
/*
lo stesso di .map()
RETURN un ARRAY di matches;  no match -> return [];
*/

const ages = [32, 33, 16, 40,55];
const result = ages.filter(checkAdult);

function checkAdult(age) {
    return age >= 18;
}
console.log(result);
//lo stesso
const result2 = ages.filter(age => {
    return age > 18;
});
console.log("result2", result2)

// array.filter(function(currentValue, index, arr), this)

// vedi anche array.js
