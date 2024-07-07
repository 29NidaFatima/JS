// //EX-1
// //Function defination
// function hello() { 
//     console.log("Hello!");
// }
// //Function calling
// hello();
// //EX-2
// function printName() {
//     console.log("Nida Fatima");
//     console.log("Anamul");
// }
// printName();
// //EX-3 Loop under function
// function print1to5() {
// for(let i=1; i<=5; i++){
//     console.log(i);
// }
// }
// print1to5();
// //EX-4 if-else under function
// function isAdult() {
//     let age=17;
//     if (age>=18) {
//         console.log("Adult");
//     } else {
//         console.log("Not Adult");
//     }
// }
// isAdult();

// // -----------PRACTICE QUESTION------------
// // Q1- create a function that prints a poem
// function printPoem() {
//     console.log("Twinkle Twinkle, little star");
//     console.log("how I wonder what you are");
//     console.log("Up above the world so high,");
//     console.log("Like a diamond in the sky.");
// }
// printPoem();
// // Q2- create a function to roll a dice & always display the value of dice(1to6)
// function rollDice() {
//     let value= Math.floor(Math.random()*6)+1;
//     console.log(value);
// }
// rollDice();
// rollDice();
// rollDice();
// rollDice();
// rollDice();
// rollDice();
// // -------Function with arguments
// // Function with  single arguments
// function printName(name) {
// console.log(name);
// }
// printName("NIDA");
// printName("FATIMA");
// // Function with  multiple arguments
// function printInfo(name,age) {
//  console.log(`${name}'s age is ${age}`);
// }
// printInfo("Adiba" ,15);
// printInfo("Afsha" ,26);
// printInfo("Nida");
// // ---------------Sum of two numbers using function with arguments
// function sum(a,b) {
//     console.log(a+b);
// }
// sum(2,3);
// sum(7,3);
// // -----------PRACTICE QUESTION------------
// // create a function that gives us the average of 3 numbers
// function calculateAverage(p,q,r) {
//     let average=(p+q+r)/3;
//     console.log(average);
// }
// calculateAverage(2,2,2);
// //create a function  that prints  the multiplication table of a number
// function printTableOfNumber(n) {

//     for (let i = 1; i <= 10; i++) {

//         console.log(n * i);
//     }
// }
// printTableOfNumber(2);
// // ------Another way
// function printTable(n) {
//     for(let i=n; i<n*10; i+=n) {
//       console.log(i);
//     }

// }
// printTable(5);
// // return keyword
// function sum(a,b) {
//     console.log("hey");
//    return a+b;
//    console.log("heyy"); //not executed after writing return keyword
// }
// sum(2,3); //will not work like this ,we have to store in any variable or console it directlty when defination fn return something
// console.log(sum(2,3));
// // ----- string could also be return
// function isAdult() {
//     let age=17;
//     if (age>=18) {
//       return "Adult";
//     } else {
//         return "Not Adult";
//     }
//     console.log("bye bye"); // Never be executed
// }
// console.log(isAdult());
// //create a fn that returns the sum of numbers from 1 to n
// function getSum(n) {
//     let sum=0;
//     for (let i = 1; i <=n; i++) {
//   sum=sum+i;

//     }
//     return sum;
// }
// console.log(getSum(8));
// //create a fn that returns the concatenation of all strings in array
// let str=["Hi","Hello","Bye","!"];
// function concatenation(str) {
//     let result="";
//     for (let i = 0; i < str.length; i++) {
//        result += str[i];

//     }
//     return result;
// }
// console.log(concatenation(str));
// SCOPE
// TYPE-1---->FUNCTION SCOPE
// let sum=54; //global scope
// function calSum(a,b) {
//     let sum=a+b; //function scope
//     console.log(sum)
// }

// calSum(3,4);
// console.log(sum);
// TYPE-2---->  BLOCK SCOPE
// {
//     let a=23;
//     console.log(a); //block scope
// }
// console.log(a); // not accessible
// TYPE-2---->  LEXICAL SCOPE
// function outerFunc() {
//     let x=5;
//     let y=6;
//     function innerFunc() {
//       console.log(x);  //lexical scope
//     }
//     innerFunc();
// }
// outerFunc();
// -------------PRACTICE QUESTION------
let greet = "hello"; //global scope
function changeGreet() {
    let greet = "Assamualaikum";
    console.log(greet); //function scope
    function innerGreet() {
        console.log(greet); //lexical scope
    }
    innerGreet();
}
console.log(greet);
changeGreet();