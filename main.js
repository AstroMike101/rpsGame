function computerPlay() {
           
    let computerChoices = ["Rock", "Paper", "Scissors"] //declare array
    //chooses from rock, paper, or scisosrs
    let computerChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    //returns the value of the choice in all lowercase

    return(computerChoice.toLowerCase());
    
     
 }
 computerPlay();

 function playRound(playerSelection, computerSelection){

 
//rock scenarios
if (playerSelection = "rock" && computerSelection == "scissors") {
return("You win! Rock beats scissors.");
}

else if (playerSelection = "rock" && computerSelection == "paper") {
return("You lose! Paper beats rock.");
}

else if (playerSelection = "rock" && computerSelection == "rock") {
return("It's a tie!");
}

// paper scenarios
if (playerSelection = "paper" && computerSelection == "rock") {
return("You win! Paper beats rock.");
}

else if (playerSelection = "paper" && computerSelection == "scissors") {
return("You lose! Scissors beats paper.");
}

else if (playerSelection = "paper" && computerSelection == "paper") {
return("It's a tie!");
}
//scissors
if (playerSelection = "scissors" && computerSelection == "paper") {
return("You win! Scissors beats Paper.");
}
else if (playerSelection = "scissors" && computerSelection == "rock") {
return("You lose! Rock beats Scissors.");
}
else if (playerSelection = "scissors" && computerSelection == "scissors") {
return("It's a tie!");



}

}

playerSelection = window.prompt("Choose Rock, Paper, or Scissors!");
playerSelection = playerSelection.toLowerCase();
computerSelection = computerPlay();