 // fetch method
let url = "https://catfact.ninja/fact";
fetch(url)
  .then((response) => {
    console.log(response); // Logs the raw response object
    return response.json(); // Return the promise that resolves to the parsed JSON
  })
  .then((data) => {
    console.log(data); 
    console.log(data.fact);// Log the resolved JSON data
  })
  .catch((error) => {
    console.log(error); // Log any errors
  });
// ---------------------------------------------------
 // using fetch with async and await
let url = "https://catfact.ninja/fact";
async function getFacts(){
    let response= await fetch(url);
    let data= await response.json();
    console.log(data);

}
// ---------------------------------------------------
//If there is any error in URL
let url = "https://catfact.ninja/fact2";

async function getFacts() {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);

        let response2 = await fetch(url);
        let data2 = await response2.json();
        console.log(data2);
    } 
    catch (error) {
        console.log("ERROR:-", error);

    }
    console.log("Bye");


}