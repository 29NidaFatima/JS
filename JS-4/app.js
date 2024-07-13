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
//  // REST
// function sum(...args) {
//     for(let i=0;i<args.length;i++){
//         console.log("you gave us:"+ args[i]);
//     }
// }
// sum([1,2,3])
// // Destructuring for array
// let names=["nida","afsha","adiba","shabana","anamul"]
// let[winner,runnerup,...others]=names;
// console.log(winner,runnerup,others);
// //Destructuring for objects
// const student={
//     name:"Nida",
//     age:14,
//     class:9,
//     subjects:["hindi","english","math","science"],
//     username:"29nida",
//     password:"abcd123"
// };
// let{username,password}=student;
// console.log(username,password);
//  // PRACTICE QUESTION
// // Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.

// let arr = [2, 4, 6, 8];
// let square=arr.map((el)=>{
//     return el*el;
// })
// console.log(square);

// let sum= arr.reduce((acc,el)=>{
//     return acc+el;
// })
// console.log(sum);

// let average = arr.reduce((acc, el) => {
//     return acc + el / arr.length;
// })
// console.log(average);
// // Qs2. Create a new array using the map function whose each element is equal to the
// // original element plus 5.
// let arr = [1, 2, 3, 4, 5];
// let newwarr=arr.map((el)=>{
//     return el+5;
// })
// console.log(newwarr);
//  //Qs3. Create a new array whose elements are in uppercase of words present in the
// original array.
// let array=["nida","adiba","afsha"];
// let newArray=array.map((val)=>{
// return val.toUpperCase();
// })
// console.log(newArray);
// // Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// // object which contains all the keys and values of the first object and second object.
// function mergeObjects(obj1, obj2) {
//     return { ...obj1, ...obj2 };
// }
// let object1 = {
//     a: "Nida",
//     b: "Afsa"
// };

// let object2 = {
//     c: "Niiida",
//     d: "Afffsa"
// };

// let mergedObject = mergeObjects(object1, object2);
// console.log(mergedObject);
// // Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// // variable number of arguments. The function should return a new array with the original
// // array values and all of the additional arguments doubled.
// const doubleAndReturnArgs=(arr,...args)=>[
//     ...arr,
//    args.map((el)=>
// el*2
//     )
// ]
// console.log(doubleAndReturnArgs([1,2,3],4,5,8));

