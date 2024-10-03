// null 병합 연산자, 존재하는값을 추려내는 기능
// null이나 undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;
let var4 = var1 ?? var2; // var1은 undefined var2는 값이 들어가있으므로 ?? 연산시 var4에는 10이 들어가게됨.
console.log(var4);


//typeof 연산자

//값의 타입을 문자열로 변환하는 기능을하는 연산자



//삼항 연산자
let var8 = 10;

let res = var8 % 2 === 0 ? "짝수" : "홀수";