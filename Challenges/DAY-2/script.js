// ACTIVITY:1-->TASK-1
let a = 12;
let b = 4;
console.log(a + b);
// TASK-2
console.log(a - b);
// TASK-3
console.log(a * b);
// TASK-4
console.log(a / b);
// TASK-5
console.log(a % b);
// ACTIVITY:2-->TASK-6
console.log(a += 1);
// TASK-7
console.log(a -= 1);
// ACTIVITY:3-->TASK-8
let num1= 15;
let num2=7;
if (num1>num2) {
    console.log(num1);
}else{
    console.log(num2);
}
// TASK-9
let num3= 5;
let num4=5;
if (num3>=num4) {
    console.log(num3);
}else{
    console.log(num4);
}
// TASK-10
if (num1==num2) {
    console.log("Equal");
}
else{
    console.log("not equal");
}
let v1= "2";
let v2= 2;
console.log(v1===v2);
// ACTIVITY:4-->TASK-11
if (num1==num2 && v1===v2) {
    console.log("if both condition will be true,print true");
} else {
    console.log("if both condition will not true,print false");
}
// TASK-12
if (num3==num4 || v1===v2) {
    console.log("if one of them (condition) will be true,print true");
} else {
    console.log("if both condition will be false,print false");
}
// TASK-13
console.log(!(v1===v2)); 
// TASK-14

let isNum= (12>0)? "Positive num":"Negative num";
console.log(isNum);