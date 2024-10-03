// 객체타입
//객체생정

let obj1 = new Object(); //객체 생성자
let obj2 = {}; //객체 리터럴(대부분 사용)
let person = {
    name:"정지원",
    age:27,
    hobby:"게임",
    "like cat" : true
}; // 문자열사용시 띄어쓰기 있는 경우 ""로 묶기

//객체 프로퍼티를 다루는 방법

let name = person.name;

let age = person["age"];

let property = "hobby";
let hobby = person[property];
console.log(hobby);

//프로퍼티 추가

person.job = "be developer";
person["favoriteFood"] = "치킨"

//프로퍼티 수정

person.job = "be developerrrr";
person["favoriteFood"] = "치킨킨킨킨"

//프로퍼티 삭제

delete person.job;

//프로퍼티 존재여부

let result1 = "name" in person;
