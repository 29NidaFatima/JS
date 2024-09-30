// CallbackHell
let h1 = document.querySelector("h1");
function changeColor(color,delay,nextColorChange) {
    setTimeout(()=>{
        h1.style.color = color;
        nextColorChange();
    },delay)

}
// ----------------------------------
setTimeout(()=>{
    changeColor("red");
}, 1000);

setTimeout(()=> {
    changeColor("orange");
}, 2000);

setTimeout(()=>{
    changeColor("green");
}, 3000);

//Better way tor write this above code
//callbacks nesting-->Callback Hell
changeColor("red",1000,()=>{
    changeColor("orange",1000,()=>{
        changeColor("green",1000,()=>{
            changeColor("yellow",1000)
        });
    });
});
// Promises
function saveToDb(data,succes,failure){
     let internetSpeed=Math.floor(Math.random()*10)+1;
    if (internetSpeed>4) {
       succes();   
    }
    else{
       failure();
    }


}
// fn call
saveToDb("apna college",()=>{
    console.log(" success1:your data was saved ");
    saveToDb("hello World",()=>{
        console.log("success2:your data was saved ");
        saveToDb("Nida",()=>{
            console.log("success3:your data was saved "); 
        },()=>{
            console.log("failure2:weak connection.Data not saved");
        })
    },()=>{
        console.log("failure2:weak connection.Data not saved");

    })
},()=>{
    console.log(" failure1:weak connection.Data not saved");

})
 // ----------------------Promises working---------------------
function saveToDb(data) {

    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        // console.log(internetSpeed);

        if (internetSpeed > 4) {
            resolve("success:data was saved");
        } else {
            reject("failure:weak connection");
        }
    });


}
saveToDb("apna college")
// then() &.catch() --->Promise Methods
let request = saveToDb("apna college");
request.then(() => {
    console.log("resolved");
    console.log(request);



})
    .catch(() => {
        console.log("rejected");
        console.log(request);

    })
 // Compact way of writing above code
saveToDb("apna college")
.then(() => {
    console.log("resolved");
})
    .catch(() => {
        console.log("rejected");
    

    })
    //  Promise Chaining
    saveToDb("apna college")
.then(() => {
    console.log(" DATA:1 Saved,resolved");
    saveToDb("hello world")
    .then(()=>{
        console.log("DATA:2 saved,resolved");
        
    })

})
    .catch(() => {
        console.log("rejected");
    

    })
    // Improved version to write this code(more readable)
    saveToDb("apna college")
    .then((result) => {
        
        console.log(" DATA:1 Saved,resolved");
        console.log("result of promise:",result);
        
         return saveToDb("hello world")
       
    
    })
    .then((result)=>{
        console.log(" DATA:1 Saved,resolved");
        console.log("result of promise:",result);
        return saveToDb("Nida")
    })
    .then((result)=>{
        console.log(" DATA:3 Saved,resolved");
        console.log("result of promise:",result);
        
    })
        .catch((error) => {
            console.log("rejected");
            console.log("error of promise:",error);
            
        
    
        })
    // Let's apply promises on callback hell
    let h1 = document.querySelector("h1");
function changeColor(color,delay) {
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed")
        },delay)
    })
    

}
// -------fn call------
changeColor("red",1000)
.then(()=>{
    console.log("red color was completed");
    return changeColor("orange",1000)
})
.then(()=>{
    console.log("orange color was completed");
    return changeColor("green",1000)
})
.then(()=>{
    console.log("green color was completed");
    return changeColor("yellow",1000)
})
.then(()=>{
    console.log("yellow color was completed");
  
})
