// async keywords
async function greet() {
    throw "some random error"
    return "hello";
}

greet()
    .then((result) => {
        console.log("promise was succesful/resolved");
        console.log("result was :", result);
    })

    .catch((error) => {
        console.log("promise was rejected with error:", error);

    })
    //let's put async keywords to the arrow function
let demo= async()=>{
return 5;
}
let result=demo();
console.log(result);
// await keywords
function getNum(){
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        let num=Math.floor(Math.random()*10)+1;
     console.log(num);
     resolve()
       }, 1000);
    })

 
}
 async function demo(){
 await getNum();
 await getNum();
 await getNum();
 await getNum();
  await getNum();
}
// ---------------- Handling rejection with await --------------------
let h1 = document.querySelector("h1");
function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num=Math.floor(Math.random()*5)+1;
if(num>3){
    reject("promise rejected");
}
            h1.style.color = color;
            console.log(`color changed to ${color}`);

            resolve("color changed")
        }, delay)
    })
}
async function demo(){
    try{
        await changeColor("red",1000);
  await changeColor("orange",1000);
   await changeColor("blue",1000);
   await changeColor("green",1000);
   await changeColor("purple",1000);
    }
 catch(err){
    console.log("caught error");
    console.log(err);
    
    
 }
   let a=5;
   console.log(a);
   console.log("new number=",a+3);
   
   
}
// -------------JSON-----------
let jsonResponse='{"fact":"Mohammed loved cats and reportedly his favorite cat, Muezza, was a tabby. Legend says that tabby cats have an \u201cM\u201d for Mohammed on top of their heads because Mohammad would often rest his hand on the cat\u2019s head.","length":210}'

console.log(jsonResponse);
console.log(jsonResponse.fact); //invalid form-->gives undefined value as an output

let validResponse=JSON.parse(jsonResponse); //here JSON data gets converted into JS object
console.log(validResponse);

console.log(validResponse.fact);//to access a particular element of JSON data when it get converted in JS object

// how to convert JS object into JSON data
let student ={
    name:"nida",
    marks:97,
};
JSON.stringify(student);
let jsonData=JSON.stringify(student);
console.log(jsonData);



