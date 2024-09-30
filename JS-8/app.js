// Call Stack
function hello() {
    console.log("inside hello function");
    
    console.log("Hello!");
    
}
function demo(){
    console.log("calling hello function");
    
   hello();
    
}
console.log("calling demo function");

demo();
console.log("Done Bye!");
 // Visualizing the Call Stack
function one(){
    return 1;
}
function two(){
    return one()+ one();
}
function three(){
     let ans= two() + one();
     console.log(ans);
     
}
three();
// JS is Single Threaded Language
let a=29;
console.log(a);
let b=10;
console.log(b);
console.log(a+b);

setTimeout(()=>{
    console.log("Apna College");
    
},2000)
setTimeout(()=>{
    console.log("Hello World");
    
},2000)
console.log("Hello.......");
