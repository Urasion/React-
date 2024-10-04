//Date 객체를 생성하는 방법

let date1 = new Date(); // 현재 시간을 저장

let date2 = new Date("1997-05-21/10:10:10");
console.log(date2);


//타임스탬프
//특정시간이 1970.01.01시 00시 00분 00초 기준으로 몇 ms가 지났는지를 의미하는 숫자


let ts1 = date1.getTime();
let date4 = new Date(ts1);
console.log(date1, date4);


// 시간요소들을 추출하는 방법

let year = date1.getFullYear();
let month = date1.getMonth(); // 자바스크립트는 0을 1월로 치기떄문에 +1 해줘야됨
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// 시간수정.. 기타동일..
date1.setFullYear(2023);
date1.setMonth(3);


//시간을 여러 포맷으로 출력하기

console.log(date1.toDateString());
console.log(date1.toLocaleDateString());