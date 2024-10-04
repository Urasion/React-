//5가지의 요소 순회 및 탐색 메서드

//forEach
//모든 요소를 순회하면서, 각각의 요소에 특ㅈ벙 동작을 수행시킴

let arr1 = [1,2,3];
arr1.forEach(function(item, idx, arr){})

let doubledArr = [];
arr1.forEach((item) =>{
    doubledArr.push(item*2);
})


//includes
//배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1,2,3];
let isInclude = arr2.includes(2);



//indexOf
//특정 요소의 인덱스를 반환
//indexof 는 기본적으로 얕은 복사로 비교를 하기 떄문에 객체 프로퍼티를 참고해서 비교하지 않음

let arr3=[1,2,3];
let index = arr3.indexOf(2);



//findindex
//특정요소의 인덱스를 반환하는 메서드
//모든요소를 순회하면서, 콜백함수를 만족하는
//findindex는 콜백함수를 만족해야하기 때문에 프로퍼티를 직접 참고해서 비교를 진행
let arr4= [1,2,3];
arr4.findIndex((item)=>{
    if(item ===2){
        return true;
    }
})



//find
//findindex와 동일한데 인덱스가 아닌 그 값 자체를 반환