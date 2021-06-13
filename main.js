function computerPlay() {
           
    let computerChoices = ["Rock", "Paper", "Scissors"] //declare array
    //chooses from rock, paper, or scisosrs
    let computerChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    //returns the value of the choice in all lowercase

    return(computerChoice.toLowerCase());
    
     
 }


 function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
        return "It's a tie!"
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors!";
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        return "You win! Paper beats rock!";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats paper!";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper beats rock!";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock beats Scissors!";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors beats Paper!";
    }
   

    }

 



 playerSelection = window.prompt("Choose Rock, Paper, or Scissors!");
playerSelection = playerSelection.toLowerCase();
computerSelection = computerPlay();



console.log(playRound(playerSelection, computerSelection));



function game() {
    for (i=1;i<=4; i++){
    playerSelection = window.prompt("Choose Rock, Paper, or Scissors!");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

    }

}


game();







