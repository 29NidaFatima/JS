const max =prompt("Enter the max number");

const random=  Math.floor(Math.random()*max)+1;
console.log(random);
 let guess=prompt("Guess Number");
 while (true) {
    if (guess=="quit") {
      console.log("user quit");  
      break;
    }
    if(guess==random){
        console.log("You are right! congrats random number was " + random);
        break;
    }
    else if(guess<random){
        guess=prompt("Your guess was too small.please try again")
    }
    else(guess>random){
        guess=prompt("Your guess was too large.please try again")
    }

    
 }
