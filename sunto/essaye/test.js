/*const array = [1, 2, 3, 4, 1, 2];
const duplicates = [1, 2,];
console.log(array.indexOf(4));

function noDuplicated(tab,doppi){
    doppi.forEach(duplicate => {
        const myDuplicate = tab.find(el => el === duplicate);
        const index = tab.indexOf(myDuplicate);
        tab.splice(index,1);
    });
    return array;
}

noDuplicated(array,duplicates);
//console.log(array);
*/
const addStops = ['1', '2', '3'];
let routeObj = ['4', '5', '6'];
routeObj= routeObj.concat(addStops);
console.log(routeObj);