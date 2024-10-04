// function add(a,b, callback){
//     setTimeout(()=>{
//         const sum = a+b;
//         callback(sum);
//     }, 3000);
// }
// add(1, 2, (value)=>{console.log(value);});


// 음식 주문 상황

function orderFood(callback){
    setTimeout(()=>{
        const food = "떡볶이";
        callback(food);
    }, 3000);
};

function colldownFood(food, callback){
    setTimeout(()=>{
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    },2000);
}
orderFood((value)=>{
    console.log(value + " 주문완료");
    colldownFood(value, (value2)=>{
        console.log(value2);
    });
})