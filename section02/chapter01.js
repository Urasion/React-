//Truthy(참 같은 값) Falsy(거짓 같은 값)
//Falsy
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;



//Truthy
// -> 7가지의 Falsy한 값을 제외하고 나머지 모든값


//활용사례

function printName(person){
    if(!person){
        console.log("person에 값이 없음");
    }
}
let person;
printName(person);