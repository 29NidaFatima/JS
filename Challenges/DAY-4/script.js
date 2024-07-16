// ACTIVITY:1-->TASK-1
for(let i=1; i<=10; i++){
    console.log(i);
}
// TASK-2
let n= 5; //num whose you want to print table
for(let i=1; i<=10; i++){
    console.log( n*i);
}
// ACTIVITY:2-->TASK-3
let sum = 0;
let num = 1;

while (num <= 10) {
    sum += num;
    number++;
}

console.log("The sum of numbers from 1 to 10 is: " + sum);
//TASK-4
let i=10;
while (i>=1) {
    console.log(i);
    i--;
}
// ACTIVITY:2-->TASK-5
let num=1;
do {
    console.log(num);
    num++;
} while (num<=5);
// TASK-6
let f=1;
let num=1;

do {
f=f*num;
num++;

} while (num<=10);
console.log("factorial of number is:"+ f);
// ACTIVITY:4-->TASK-7

for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "*";
    }
    console.log(line);
}
// ACTIVITY:5-->TASK-8
for(let i=1; i<=10;i++){
    if(i==5){
continue;
    }
    console.log(i);
}
// TASK-9
for(let i=1; i<=10;i++){
    if(i==7){
break;
    }
    console.log(i);
}