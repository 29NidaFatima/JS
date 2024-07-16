// ACTIVITY:1-->TASK-1
let num=prompt("Enter you number")
if (num>0) {
    console.log("Positive Number");
} else if
(num<0) {
    console.log("Negative Number");
}
else{
    console.log("Number is zero");
}
// TASK-2
let age =prompt("Enter your age");
if (age>=18) {
  console.log( "Eligible for giving vote");
} else {
    console.log(" not eligible for giving vote");
}
ACTIVITY:2-->TASK-3
let a=10;
let b=8;
let c=1;
if (a > b) {
    if (a > c) {
        console.log("a is the greatest number among three of them");
    } else {
        console.log("c is the greatest number among three of them");
    }
} else {
    if (b > c) {
        console.log("b is the greatest number among three of them");
    } else {
        console.log("c is the greatest number among three of them");
    }
}
// ACTIVITY:3-->TASK-4
let weekNum=3;
switch ( weekNum) {
    case 1:console.log("Sunday");
        
        break;
        case 2:console.log("Monday");
        
        break;
        case 3:console.log("Tuesday");
        
        break;
        case 4:console.log("Wednesday");
        
        break;
        case 5:console.log("Thursday");
        
        break;
        case 6:console.log("friday");
        
        break;
        case 7:console.log("Saturday");
        
        break;
    default:console.log("wrong day");
        break;
}
// TASK-5
let grade=prompt("Enter your grade")
switch (grade) {
    case 'A':console.log("Score is 98%");
        break;
        case 'B':console.log("Score is 85%");
        break;
        case 'C':console.log("Score is 80%");
        break;
        case 'D':console.log("Score is 70%");
        break;
        case 'F':console.log("Score is 65%");
        break;
    default:console.log("fail");
        break;
}
// ACTIVITY:4-->TASK-6
let num=prompt("enter your number");
 let check=(num%2==0)?"Even":"odd";
 console.log(check);

// ACTIVITY:5-->TASK-7
let year=prompt("Enter you year which you have to check");
if (year%4==0 && (year%100!=0 || year%100==0)) {
    console.log( year + " is leap year");
} else{
    console.log( year + " is not leap year");
}



