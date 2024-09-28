let btn = document.querySelector("button");
let ul = document.querySelector("ul"); 
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;
    let DelBtn=document.createElement("button");
    DelBtn.innerText="Delete";
    DelBtn.classList.add("Delete");
    item.appendChild(DelBtn);
    ul.appendChild(item); // appending to a single ul
// console.log(inp.value);
    inp.value = ""; // clear the input after adding the item
});
// // Event Delegation
ul.addEventListener("click",function(e){
   if (e.target.nodeName=="BUTTON") {
    let listItem=e.target.parentElement;
    listItem.remove();
    console.log("Deleted");
    
   }
    
  else{
    console.log("Don't Delete");
    
  }
    
})

let dltBtns=document.querySelectorAll(".Delete");
for(DelBtn of dltBtns){
DelBtn.addEventListener("click",function(){
    console.log("elemet deleted");
    let par= this.parentElement;
    console.log(par);
    par.remove();
})
}
