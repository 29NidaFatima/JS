// // foreach
// let arr = [1, 2, 3, 4, 5];
// let print = function (el) {
//     console.log(el);
// }
// arr.forEach(print);
// //Another way
// arr.forEach(function (el) {
//     console.log(el);
// })
// //same code can write by using arrow fn
// arr.forEach((el) => {
//     console.log(el);
// })
// let arr =[{
// name:"nida",
// marks:"95"
// },
// {
// name:"afsha",
// marks:"98"
// }, 
// {
// name:"adiba",
// marks:"97"
// }];

// console.log(arr);

// arr.forEach((student)=>{
// console.log(student);
// })
// //To access the individual properties of objects in array
// arr.forEach((student)=>{
//     console.log(student.name);
//     })
// // MAP
// let num=[1,2,3,4];
// let double=num.map((el)=>{
//     return el*el;
// })
// console.log(double);

// let students =[
//     {
// name:"nida",
// marks:95,
// },
// {
// name:"afsha",
// marks:98,
// }, 
// {
// name:"adiba",
// marks:97,
// },
// ];
// let gpa = students.map((el)=>{
//     return  el.marks / 10;
// });
// console.log(gpa);
// // filter
// let nums=[1,2,3,4,5,6,7,8,9,10,12];
// let ans = nums.filter((el)=>{
// return el%2==0;  //for even it will be true
// })
// console.log(ans);
// //Every
// let number=[1,2,3,4,5,6,7,8,9,10,12];
// let answer= number.every((el)=>{
//     el%2==0;
// })
// console.log(answer);
// //REDUCE
// let nums=[1,2,3,4,5,6];
// let finalvalues= nums.reduce((res,el)=>{
// console.log(res);
// return res+el;
// });
// console.log(finalvalues);
// //how to find  maximum value in array
// let nums = [1, 2, 3, 4, 5, 6];
// let max = -1;
// for (let i = 0; i < nums.length; i++) {
//     if (max < nums[i]) {
//         max = nums[i];
//     }
// }
// console.log(max);
// //how to find  maximum value in array using reduce methods
// let maxnumber= nums.reduce((max,el)=>{
// if(max<el){
//     return el;
// }
// else{
//     return max;
// };
// })
// console.log(maxnumber);
// //-------------PRACTICE QUESTION
// //check if all numbers in our array are multiples of 10 or not
// let nums = [2,4,10,5,9];
// let check=nums.every((el)=>{
// return el%10==0; 
// })
// console.log(check);
// // create a function to find the min number in array
let nums = [2,4,10,5,9]
function getMin(nums) {
    let minnumber= nums.reduce((min,el)=>{
    if(min<el){
        return min;
    }
    else{
        return el;
    }
    });
    return minnumber;
    
      
}
console.log(getMin(nums));