//ANS-1
let input = document.createElement("input");
let button = document.createElement("button");
button.innerText = "Click me";
document.querySelector("body").prepend(input);
document.querySelector("body").prepend(button);
//ANS-2
button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");
//ANS-3
let btn = document.querySelector("#btn")
console.log(btn);
btn.classList.add("design")
//ANS-4
let h1 = document.createElement("h1");
h1.innerHTML = "DOM Practice";
h1.classList.add("design1");
document.querySelector("body").prepend(h1);
// ANS-5
let p = document.createElement("p");
p.innerText = "Apna College <b> Delta </b> Practice";
document.querySelector("body").prepend("p");

