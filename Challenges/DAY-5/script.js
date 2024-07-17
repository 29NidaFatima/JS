//ACTIVITY:1-->TASK-1
let n;
function isEven(n){
    if (n % 2 == 0) {
        console.log("Number is Even");
    } else {
        console.log("Number is Odd");
    }
}

isEven(5); 
 //TASK-2
let n;
function square(n) {
    return n*n;
}
let result=square(4);
console.log(result);
 // ACTIVITY:2-->TASK-3
let a;
let b;
let maxOfTwo= function(a,b){
    if (a>b) {
       console.log("a is greater"); 
    }
    else{
        console.log("b is greater"); 
    }
}
maxOfTwo(2,4);
// TASK-4
let str1="Nida";
let str2="Fatima";
let concatenate= function(str1,str2){
return str1+str2;
}
let result= concatenate(str1,str2);
console.log(result);
// ACTIVITY:3-->TASK-5
let sum=(a,b)=>{
    return a+b;
}
console.log(sum(7,3));
// TASK-6
let str="Adiba";
let check=(str)=>{
    if (str.includes('b')) {
        return true;
    }
    else {
        return false;
    }
    
}
console.log(check(str));
// ACTIVITY:4-->TASK-7
let product=(a,b=4)=>{
    return a*b;
}
console.log(product(2));
// TASK-8

let greeting=(name,age=17)=>{
return "Assamualaikum";
}
console.log(greeting("Nida"));
// ACTIVITY:5-->TASK-9
let greet = () => {
    console.log("Hieee");
}

function multiplegreet(func, number) {
    for (let i = 1; i <= number; i++) { 
        func(); 
    }
}

multiplegreet(greet, 5); 
// TASK-10
let func1 = num => (num + 1);
let func2 = num => (num * num);

function abc(func1, func2, num) {
    const result1 = func1(num);
    const result2 = func2(result1);
    return result2;
}

const finalResult = abc(func1, func2, 5);
console.log(finalResult); 


