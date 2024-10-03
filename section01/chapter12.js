function funcA(){
    console.log("funcA");
}
let varA = funcA;
console.log(varA);
varA();

// 함수표현식
let varB = function(){
    console.log("funcB");
}

varB();



//화살표함수

let varC = () =>{
    return 1;
}

//단순히 반환만 하는 경우, 축약가능
let varD = () => 1;