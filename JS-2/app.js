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
//return keyword
function sum(a,b) {
   return a+b;
}
sum(2,3); //will not work like this ,we have to store in any variable or console it directlty when defination fn return something
console.log(sum(2,3));