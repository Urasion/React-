// 5가지 배열 변형 메서드

//filter
//기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    {name:"1", hobby:"테니스"},
    {name:"2", hobby:"테니스"},
    {name:"3", hobby:"야구"}
]
const tennis = arr1.filter((item)=>{
    if(item.hobby === "테니스") return true;
})
console.log(tennis);



//map
//배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과를 모아서 새로운 배열로 반환

let arr2 = [1,2,3];
const mapresult = arr2.map((item,idx,arr)=>{
    console.log(idx, item);
    return item*2;
});


let names = arr1.map((item)=>item.name);
console.log(names);


//sort
//배열을 사전순으로 정렬

let arr3 = [10,3,5];
arr3.sort((a,b)=>{
    if(a>b){
        return 1;
    }else if(a<b){
        return -1
    }else{
        return 0;
    }
});


//toSorted
//정렬된 새로운 배열을 반환하는 메서드

let arr5= ["c","a","b"];
const sorted = arr5.toSorted();
console.log(arr5);
console.log(sorted);



//join
//배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
const joined = arr5.join();
console.log(joined);