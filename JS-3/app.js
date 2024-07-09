// 'this' keyword
const student = {
    name: "nida",
    math: 98,
    eng: 95,
    phy: 97,
    getAvg() {
        console.log(this); // this methods is for student object
        let avg = (this.math + this.eng + this.phy) / 3;
        console.log(`${this.name} got average marks= ${avg}`);
    }
}
console.log(student);
function getAvg() {
    console.log(this);
}
console.log(this); // in browser--> window object
// TRY & CATCH
console.log("heloooo");
console.log("heloooo");
try {
    console.log(a);
} catch (err) {
    console.log("caught an error..a is not defined");
    console.log(err);
}
console.log("heloooo");
console.log("heloooo");
// ARROW FUNCTION
const sum = (a, b) => {
    console.log(a + b);
}
sum(2, 3);
const power = (a, b) => {
    return a ** b;
}
console.log(power(2, 3));
const cube = (n) => {
    return n * n * n;
}
console.log(cube(3));
// Another way to define arrow function when having single argument, we can remove parentheses but we can not remove when there is no argument
const cube = n => {
    return n * n * n;
}
console.log(cube(3));
// ARROW FUNCTION-- implicit return
const mul = (a, b) => (a * b)
console.log(mul(9, 3));
//set timeout function
console.log("Hi there");
setTimeout(() => {
    console.log("Learning set timeout function");
}, 5000);
console.log("welcome to");
// set Interval function
console.log("Hi there");
setInterval(() => {
    console.log("Learning setinterval function");
}, 2000);
console.log("welcome to");
let id1 = setInterval(() => {
    console.log("First set timeinterval function");
}, 2000);
let id2 = setInterval(() => {
    console.log("Second set timeinterval function");
}, 2000);

clearInterval(id2); //to stop any set interval by given id
// 'this' keyword with arrow function
const student = {
    name: "nida",
    math: 98,
    eng: 95,
    phy: 97,
    prop: this,
    getName:function () {
        console.log(this); global scope
        return this.name;
    },
    getMarks:()=>{
        console.log(this); //parents's scope-->window
        return this.name; 

    },
    getInfo1:  function(){
        setTimeout(() => {
            console.log(this);
        },2000 );
    },
    getInfo2:  function(){
        setTimeout(function(){
            console.log(this);
        },2000 );
    }
};
console.log(student);
 // PRACTICE QUESTIONS
// Q1- write a arrow function that returns the square of a number n
let square=(n)=>{
return n*n;
}
let result=square(6);
console.log(result);
// Another way
let square=(n)=>(n*n);
  square(4);

 // Q2 write a function that prints "Hello World" 5Times at intervals of 2s each
 let id = setInterval(() => {
    console.log("Hello World");
}, 2000);  
setTimeout(() => {
    clearInterval(id);
    console.log("clear interval run");
}, 10000);
// Qs3. What is the output of the following code:
const object = {
    message: "Hello, World!",
    logMessage() {
      console.log(this.message);
    }
  };

  setTimeout(() => {
    console.log(object.logMessage);
  }, 1000);
 //Qs4. What is the output of the following code:
let length = 4;
function callback() { 
    console.log(this.length);
}
const object = {
length: 5,
method (callback) {
callback();
}
};
object.method(callback,1,2);
// Qs1. Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers
let arrayAverage = (arr) => {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum / arr.length;
};
let arr = [2, 4, 6, 8];
let result = arrayAverage(arr);
console.log(result);
 // Qs2. Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.
let isEven = (n)=>{
    if (n % 2 == 0) {
        console.log("even"); 
    }
    else{
        console.log("odd");
    }
}
isEven(7);
