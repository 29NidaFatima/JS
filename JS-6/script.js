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
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);

    btn.addEventListener("dblclick", function () {
        console.log("You double-clicked");
    });
}

