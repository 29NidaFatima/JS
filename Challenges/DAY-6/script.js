 // ACTIVITY:1-->TASK-1
 let arr=[1,2,3,4,5];
 console.log(arr);
//  TASK-2
console.log(arr[0]);
console.log(arr[arr.length-1]);
// ACTIVITY:2-->TASK-3
arr.push(6);
console.log(arr);
// TASK-4
arr.pop(arr[arr.length-1])
console.log(arr);
// TASK-5

arr.shift(arr[0]);
console.log(arr);
// TASK-6
arr.unshift(12);
console.log(arr);
// ACTIVITY:3-->TASK-7
let num=[1,2,3,4,5];
let newNum=num.map((el)=>{
    return el*el;
})
console.log(newNum);
// TASK-8

let num=[1,2,3,4,5];
let newNum=num.filter((el)=>{
    return el%2==0;
})
console.log(newNum);
// TASK-9
let num=[1,2,3,4,5];
let newNum=num.reduce((acc,el)=>{
    return acc+el;
})
console.log(newNum);]
// ACTIVITY:4-->TASK-10
let num=[1,2,3,4,5];
for(let i=0;i<num.length;i++){
    console.log(i);
}
// TASK-11
let num=[1,2,3,4,5];
console.log( num.forEach((el)=>{
console.log(el);
}));
// ACTIVITY:5 ->TASK-12
const arr2D = [[1, 2, 3], [4, 5, 6], [8, 9, 0]];
// Log the entire array
console.log(arr2D);
// TASK-13
let access = arr2D[1][0];
// Log the accessed element
console.log(access);

