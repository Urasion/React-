//배열순회


//for of 반복문

let arr = [1,2,3]
for(let item of arr){
    console.log(item);
}

let person = {
    name: "지원",
    age:17,
};
//name, age
let keys = Object.keys(person);
console.log(keys);


//지원, 17
let values = Object.values(person);
console.log(values);

//value 순회는 for of

//key 순회는 for in

