//* Array map()
const samMap = new Map();
samMap.set("nom", "Legrain");
samMap.set("prenom", "Samuel");
console.log(samMap);

//Get the full name for each person:
const persons = [
    { firstname: "Malcom", lastname: "Reynolds" },
    { firstname: "Kaylee", lastname: "Frye" },
    { firstname: "Jayne", lastname: "Cobb" }
];

console.log(persons.map(getFullName));

function getFullName(item) {
    return [item.firstname, item.lastname].join(" ");
}

var arrMap = new Map([
    [1, 'ONE'],
    [2, 'TWO']
]);

/*var arr1Map = new Map(
    arr.map(object => {
        return [object.key, object.val];
    }),
);*/


/*let obj = [
    CAT17: {
        hour_cnt: 9,
        day_cnt: 509,
        year_cnt: 179384,
        cnt_time: '2022/05/23 09:08:00'
    },
    CB02411: {
        hour_cnt: 19,
        day_cnt: 672,
        year_cnt: 208967,
        cnt_time: '2022/05/23 09:08:00'
    },
    CB1142: {
        hour_cnt: 69,
        day_cnt: 980,
        year_cnt: 340916,
        cnt_time: '2022/05/23 09:08:00'
    }];
//console.log(obj);
obj.map((el) => {
    console.log(el);
})*/