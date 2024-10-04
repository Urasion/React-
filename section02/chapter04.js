//Spread 연산자
//객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1,2,3];
let arr2 = [5,...arr1,6,7];

console.log(arr2);

let obj1 = {a:1,b:2};
let obj2 = {...obj1,c:1, d:3};

console.log(obj2);

function funcA(p1, p2, p3){
    console.log(p1,p2,p3);
}
funcA(...arr1);


//Rest 매개변수
// 여러개의 매개변수를 받아올때 배열같은 걸로 한번에 받아오는것
// 항상 Rest 매개변수가 마지막에 와야한다.

function funcB(one, ...rest){
    console.log(rest);
}
funcB(...arr1)