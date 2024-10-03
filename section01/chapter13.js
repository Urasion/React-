// 콜백함수란? 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미함

function main(value){
    value();
}
function sub(){
    console.log("i am sub");
}

main(sub);


//콜백함수 활용

function repeat(count, callback){
    for(let idx = 1; idx<=count; idx++){
        callback(idx);
    }
}
repeat(5, (idx, num)=>{
    console.log(idx*num);
})
