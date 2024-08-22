//2nd-METHOD to add Dom Events--> ABOUT (onclick events) in which it is necessary to click the button to run the function
// for selecting single button
let btn = document.querySelector("button");
console.dir(btn);
btn.onclick = function () {
    console.log("button was clicked")
    alert("Clicked")
}
//----------------Another  Way-------------------------
function sayHello() {
    alert("HEY NIDA!")
}
btn.onclick = sayHello;
//  for selecting multiple button
let btns = document.querySelectorAll("button");
function sayHello() {
    alert("HEY GUYS!")
}
// this for (of loop) is to gor all buttons
for (const btn of btns) {
    btn.onclick = sayHello;

    console.dir(btn);

}
// -----------------------------------------------
// 3rd-METHOD to add Dom Events-->ABOUT (onmouseenter) which  means that when the arrow is taken on button,function will automatically run
let btns = document.querySelectorAll("button");
function oME() {
    alert("you entered a button");

}
// this (forof loop) is for to go all buttons
for (const btn of btns) {
    btn.onmouseenter = oME;
    console.dir(btn);
}
// ------------------------------------------------
// 4th-METHOD to add Dom Events-->ABOUT (Event Listener)
let btns = document.querySelectorAll("button");
function sayHello() {
    alert("HEY GUYS!")
}
function sayName() {
    alert("Nida Fatima!")
}
for (const btn of btns) {
    btn.onclick = sayHello;
    btn.onclick = sayName;
    // In these situation one function execute, once at a time so that we have to use event listener to resolve this problem

}
// ------------------------------------------
let btns = document.querySelectorAll("button");

function sayHello() {
    alert("HEY GUYS!");
}

function sayName() {
    alert("Nida Fatima!");
}

for (const btn of btns) {
     btn.addEventListener("click", sayHello);
     btn.addEventListener("click", sayName);

    btn.addEventListener("dblclick", function () {
        console.log("You double-clicked");
    });
}
// click events on para
let p= document.querySelector("p");
p.addEventListener("click",function(){
    console.log("para clicked");
})
//   click events on div 
let box= document.querySelector(".box");
box.addEventListener("mouseenter",function(){
    console.log("div clicked");

})
//`this` in event listener
// for single element
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    console.log(this); // this will print element
    console.dir(this); // this will print element as a object
    console.log(this.innerText); // this will print text inside button
    this.style.backgroundColor = "red";

})
// -------------------------------------
// Having multiple elements,long method
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    console.log(this); // this will print element
    console.dir(this); // this will print element as a object
    console.log(this.innerText); // this will print text inside button
    this.style.backgroundColor = "red";

})
let h1 = document.querySelector("h1");
h1.addEventListener("click", function () {
    console.log(this); // this will print element
    console.dir(this); // this will print element as a object
    console.log(this.innerText); // this will print text inside button
    this.style.backgroundColor = "red";

})
let h3 = document.querySelector("h3");
h3.addEventListener("click", function () {
    console.log(this); // this will print element
    console.dir(this); // this will print element as a object
    console.log(this.innerText); // this will print text inside button
    this.style.backgroundColor = "red";

})
let p = document.querySelector("p");
p.addEventListener("click", function () {
    console.log(this); // this will print element
    console.dir(this); // this will print element as a object
    console.log(this.innerText); // this will print text inside button
    this.style.backgroundColor = "red";

})
// if we have multiple elements, we should try to remove redundancy as much as possible,so this is the efficient way to write the code
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");
function addColor() {
    console.log(this);
    console.dir(this);
    console.log(this.innerText);
    this.style.backgroundColor = "red";

}
h1.addEventListener("click", addColor);
h3.addEventListener("click", addColor);
p.addEventListener("click", addColor);
// keyboard events
let btn = document.querySelector("button");
btn.addEventListener("click",function(event){
    console.log(event);
    
    console.log("Button clicked");
    
})
btn.addEventListener("dblclick",function(event){
    console.log(event);
    console.log("Button clicked");
    
})
// ---------------------------------
let input= document.querySelector("input");
input.addEventListener("keydown",function (event){
console.log(event);
console.log("key = ",event.key);
console.log("code =",event.code);

    console.log("key was pressed");
    
})
let input= document.querySelector("input");
input.addEventListener("keyup" ,function () {
    console.log("key was released");
    
})
// ---------------------------------
let input= document.querySelector("input");
input.addEventListener("keydown",function (event){
console.log("code =",event.code); // ArrowUp,arrow down,arrow right,arrow left
if (event.code="ArrowUp") {
    console.log("character moves up");
    
} 
 else if (event.code="ArrowDown") {
    console.log("character moves down");
    
} 
 else if (event.code="ArrowLeft") {
    console.log("character mover left");
    
} 
 else if (event.code="ArrowRight") {
    console.log("character mover right");
    
} 
  // ---------------------------------
  let input= document.querySelector("input");
input.addEventListener("keydown",function (event){
console.log("code =",event.code); // ArrowUp,arrow down,arrow right,arrow left
if (event.code="KeyU") {
    console.log("character moves up");
    
} 
 else if (event.code="KeyD") {
    console.log("character moves down");
    
} 
 else if (event.code="KeyL") {
    console.log("character mover left");
    
} 
 else if (event.code="KeyR") {
    console.log("character mover right");
    
} 
    
})
 //form events
let form= document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    alert("form submitted");
});
// Extracting data from FORM
let form= document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    let inp=document.querySelector("input");
    console.log(inp);
    console.dir(inp);
    console.log(inp.value);
    
});

//---------------------------
let form= document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
  let user =document.querySelector("#user");
  let pass= document.querySelector("#pass");
  console.log(user.value);
  console.log(pass.value);
  alert(`Hi ${user.value} your password is set to ${pass.value}`)
  
});

// Different way to access elements from form -->Direct Method
let form= document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
  console.log(form);
  console.dir(form);
  console.log(form.elements);
  console.log(form.elements[0]);
  console.log(form.elements[1]);
  console.log(form.elements[3]);
});
// We can also use this keyword in the place of form,meaning will be remains same
let form= document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
  console.log(this);
  console.dir(this);
  console.log(this.elements);
  console.log(this.elements[0]);
  console.log(this.elements[1]);
  console.log(this.elements[3]);
});
//More events
let form= document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    });
let user =document.querySelector("#user");
// 1-Change Event
user.addEventListener("change",function(){
  
  console.log("input change");
  console.log("final value",this.value);
  
});
// 2-Input change
let form= document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    });
let user =document.querySelector("#user");

user.addEventListener("input",function(){
  
  console.log("input changed");
  console.log("final value",this.value);
  
});