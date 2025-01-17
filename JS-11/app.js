// // For Cat
// let btn=document.querySelector("button");
// btn.addEventListener("click",async ()=>{

//   let fact= await getFacts();
//   console.log(fact);
//   let p=document.querySelector("#result");
//   p.innerText=fact;
    
// })
// let url="https://catfact.ninja/fact";

// async function getFacts(){
//     try {
//         let response=await axios.get(url);
//         // console.log(response);
//         // console.log(response.data); // we get only those we want to acquire 
//         // console.log(response.data.fact); // getting fact data[Many cats love having their forehead gently stroked.]
//         return response.data.fact;
//     }

//      catch (error) {
//         console.log("ERROR-",error);
//         return "NO fact found"
//     }
// }
// //For Dog
// let btn=document.querySelector("button");
// btn.addEventListener("click",async ()=>{

//   let image= await getImage();
//   console.log(image);
//   let img =document.querySelector("#result");
//   img.setAttribute("src",image);
    
// })
// let url2="https://dog.ceo/api/breeds/image/random";
// async function getImage(){
//     try {
//         let response=await axios.get(url2);
//         return response.data.message;
        
//     }

//      catch (error) {
//         console.log("ERROR-",error);
//         return "NO image found"
//     }
// }
// // Axios:sending headers
// let url3="https://icanhazdadjoke.com";
// async function getJokes() {
//     try {
//         const config = {headers:{Accept:"application/json"}};
//         let res= await axios.get(url3,config);
//         console.log(res.data);
        
//     } catch (error) {
//        console.log(error);
        
//     }
// }
// // Axios:Query String Update  
// let url="http://universities.hipolabs.com/search?name=";
// let btn=document.querySelector("button");
// btn.addEventListener("click",async()=>{
//     let country = document.querySelector("input").value;
// console.log(country);

//   let colArr= await getColleges(country);
 
// show(colArr);
    
// })
// function show(colArr) {
// let list=document.querySelector("#list");
//     for(let col of colArr) {
//       console.log(col.name); 
// let li=document.createElement("li");
//       li.innerText=col.name;
// list.appendChild(li);
//     }
    
// }
// async function getColleges(country) {
//     try {
//          let result=await axios.get(url+country);
//          return result.data;
         
//     } catch (error) {
//         console.log(error);
//         return [];
//     }
// }
let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let state = document.querySelector("input").value;
console.log(state);

  let colArr= await getColleges(state);
 
show(colArr);
    
})
function show(colArr) {
  let list=document.querySelector("#list");
  list.innerText=" "
    for(let col of colArr) {
      console.log(col.name);
      let li=document.createElement("li");
      li.innerText=col.name;
      list.appendChild(li);
    }
    
}
async function getColleges(state) {
    try {
         let result=await axios.get(url+state);
         return result.data;
         
    } catch (error) {
        console.log(error);
        return [];
    }
}