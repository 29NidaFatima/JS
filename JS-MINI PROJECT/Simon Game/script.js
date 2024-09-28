let gameSeq=[];
let userSeq=[];
let btns=["red","yellow","purple","green"]
let started=false;
let level=0;
let h2= document.querySelector("H2");
document.addEventListener("keypress",function(){
   if (started==false) {
    console.log("Game is started!");
    started=true;
    levelUp();
   }
})
function  btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000)
}
function levelUp(){
    level++;
    h2.innerText=`Level-${level}`;
    let ranIndex=Math.floor(Math.random()*3);
    console.log(ranIndex);
    
    let randColor=btns[ranIndex];
    console.log(randColor);
    
    let randBtn=document.querySelector(`${randcolor}`)
    console.log(randBtn);
    
    btnFlash(randBtn);
}
function btnPress{
    console.log("btn was pressed");
    
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}