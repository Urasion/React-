//Type casting

//묵시적 형변환

let num = 10;
let str = "20";

const result = num + str;
console.log(result);

//명시적 형변환
//Number를 사용해 타입캐스팅 진행하는 경우 문자열에 숫자외 포함 x
let str1 = "10";
let str2 = Number(str1);

//parseInt를 이용해 타입캐스팅 진행하는 경우 문자열에 숫자외 포함해도 됨
let str3 = parseInt(str1+"개");
console.log(10 + str2);


let num1 = 20;
let num2 = String(num1);
console.log(num1 + "입니다");