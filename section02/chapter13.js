//Promise 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장객체
function add10(num){
    const promise = new Promise((resolve, reject)=>{
        // 비동기 작업 실행하는 함수 executor
        setTimeout(()=>{
            if(typeof num === 'number'){
                resolve(num+10);
            }else{
                reject("num이 숫자가 아닙니다.");
            }
        }, 2000);
    });
    return promise;
}
// const p = add10(0);


// 성공시 에는 then 실패시 에는 catch
// promise.then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log(error);
// });

// p.then((result)=>{
//     console.log(result);
//     const newP = add10(result);
//     newP.then((result)=>{
//         console.log(result);
//     });
// });

add10("??").then((result)=>{
    console.log(result);
    return add10(result);
}).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});