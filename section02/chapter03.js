// 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two , three, four = 4] = arr;

let[one1, two2] = arr;
console.log(one,two,three,four);


//객체의 구조 분해 할당

let person= {name: "정지원", age: 27};
let{name, age} = person;
console.log(name, age);


//객체 분해구조 할당을 이용하여 함수의 매개변수를 받는법
const func = ({name, age})=>{
    console.log(name, age);
}
func(person)