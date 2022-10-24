console.log("Number guessing game")
const number = Math.floor(Math.random()*26);
guess = Number(prompt("Guess a number between 1 and 26. You only get 5 ties. "))
let numberOfGuesses=1
let endGame=false;

while(!endGame && numberOfGuesses<5){
  if(guess===number){
    console.log("You guess correct")
    endGame=true;    
  }
  else{
    if(guess > number){
      console.log("Guess is too high")
    }
    else{
      console.log("Guess is too low")
    }      
    guess=Number(prompt("Guess again: "))
  }
  numberOfGuesses++;
}

if(endGame===false){
  console.log("you lost")
}
