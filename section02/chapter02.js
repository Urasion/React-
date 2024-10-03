//단락 평가
//AND 연산시 앞의 연산결과과 False인 경우 뒤의 경우를 보지않아도 False이므로 접근하지 않음

function returnFalse(){
    console.log("F")
    return false;
}
function returnTrue(){
    console.log("T")
    return true;
}
console.log(returnFalse() && returnTrue());

//Truthy와 Falsy한 값에도 적용이 가능하다.


//단락평가 활용 사례
function printName(person){
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}
let person;
printName({name : "정지원"});