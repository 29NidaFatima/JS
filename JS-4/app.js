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
// let nums = [2,4,10,5,9]
// function getMin(nums) {
//     let minnumber= nums.reduce((min,el)=>{
//     if(min<el){
//         return min;
//     }
//     else{
//         return el;
//     }
//     });
//     return minnumber;
    
      
// }
// console.log(getMin(nums));
// //Default parameters
// function sum(a,b=2) { // Here b is default value
//    return a+b; 
// }
// console.log(sum(3));
// //Spread
// function spread(str) {
//     console.log(...str); // string spread by putting three dots in front of string name
// }
// spread("Nida");
// let arr=[1,2,3,3,4,5,6,7,9,9,0]
// function spreadArrayValues(arr) {
//     console.log(...arr);//array spread by putting three dots in front of array name
// }

// spreadArrayValues(arr);
// -----------------SPREAD WITH ARRAY LITERALS--------------
// let arr=[1,2,3,4,5,6];
// console.log(...arr);
// let newArr=[...arr]; // existing array elements can be used in new arr
// console.log(newArr);
// console.log(newArr.push(10));
// console.log(newArr);
// let str=("NidaFatima")
// console.log([...str])
// let newStr=[...str] //existing string characters can be used in new string
// console.log(newStr);
//  // how can we merge two arrays usong spread
// let odd = [1, 3, 5, 7];
// let even = [2, 4, 6, 8];
// let merge = [...even, ...odd];
// console.log(merge);
// // -----------------SPREAD WITH OBJECTS LITERALS-----------------
// const data={
//     email:"2529nida!7@gmail.com",
//     password:"abc@123"
// };
// console.log(data);
// const dataCopy={...data, id:123, country:"India"};
// console.log(dataCopy);
// let arr=[1,2,3,4,5,6];
// const obj={...arr}
// console.log(obj);
// const obj1={..."NIDAFATIMA"}
// console.log(obj1);