// Qs1
let h1=document.querySelector("h1");

function changeBgColor(){
    h1.style.backgroundColor="purple"
}
h1.addEventListener("mouseout",changeBgColor)
// --------------------------------------------------------------
 let input=document.querySelector("#user");
input.addEventListener("keypress",function(event){
    console.dir(event);
    console.log(event);
    console.log(event.key);
    console.log(event.code);
    console.log(displayed);
    
})
// --------------------------------------------------------------
let scrollableDiv = document.querySelector("#scrollable-div");

function onScroll() {
    console.log("Scrolled!");
    scrollableDiv.style.backgroundColor = "lightblue";
}
scrollableDiv.addEventListener("scroll", onScroll);
// --------------------------------------------------------------
window.addEventListener("load", function() {
    alert("The page has fully loaded!");
});
// Qs2. Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.
 
let button=document.createElement("button");
button.innerText="clicked";
let body= document.querySelector("body");
body.prepend(button);
 
let btn=document.querySelector("button");
function changeColor(){
    btn.style.backgroundColor="green"
}
btn.addEventListener("click" ,changeColor);
// Qs3.
//  Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading
// soln--
let input = document.querySelector("#userr");  
let h2 = document.querySelector("h2");         

input.addEventListener("input", function() {
    console.log(input.value);     
    h2.innerText = input.value;  
});

