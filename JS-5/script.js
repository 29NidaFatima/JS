let para1 = document.createElement("p");
para1.innerText = "Hey I 'm red";
let container = document.querySelector("body");
container.prepend(para1);
para1.classList.add("red");
// -------------------------------------------
let h3 = document.createElement("h3")
h3.innerText = "Hey I'm Blue";
let container1 = document.querySelector("body");
container1.prepend(h3);
h3.classList.add("blue");
// -----------------------------------
let div = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");
h1.innerText = "I'm in a div";
p.innerText = "ME TOO!"
div.append(h1);
div.append(p);
div.classList.add("sty");
document.querySelector("body").prepend(div)