//Date 객체를 생성하는 방법

let date1 = new Date(); // 현재 시간을 저장

let date2 = new Date("1997-05-21/10:10:10");
console.log(date2);


//타임스탬프
//특정시간이 1970.01.01시 00시 00분 00초 기준으로 몇 ms가 지났는지를 의미하는 숫자


let ts1 = date1.getTime();
let date4 = new Date(ts1);
console.log(date1, date4);