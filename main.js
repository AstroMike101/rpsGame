
 let playerScore = 0;
 let computerScore = 0; 



const playerScoreText = document.querySelector('.playerScoreText');
const computerScoreText = document.querySelector('.computerScoreText');
const resultText = document.querySelector('.resultText');






const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors'); 






function computerPlay() {
           
    let computerChoices = ["Rock", "Paper", "Scissors"] //declare array
    //chooses from rock, paper, or scisosrs
    let computerChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    //returns the value of the choice in all lowercase

    return(computerChoice.toLowerCase());
    
     
 }


rock.addEventListener('click', () => {
    playerSelection = 'rock'; 
    playRound();
} )

paper.addEventListener('click' , () => { 

    playerSelection= 'paper'; 
    playRound();
    
    
} )

scissors.addEventListener('click', () => {
    playerSelection = 'scissors'; 
    playRound();
    
    
})





 function playRound() {

    computerSelection = computerPlay();


    

    if (playerSelection == computerSelection) {
        resultText.textContent ="It's a tie!";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        
        playerScore++;
        playerScoreText.textContent = `${playerScore}`;
        resultText.textContent = "You win! Rock beats scissors!";
        
        
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore++;
        playerScoreText.textContent = `${playerScore}`; 
        resultText.textContent = "You win! Paper beats rock!";
        

    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        playerScoreText.textContent = `${playerScore}`;
        resultText.textContent = "You win! Scissors beats paper!";
        

    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        computerScoreText.textContent = `${computerScore}`; 
        resultText.textContent ="You lose! Paper beats rock!";
        
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        computerScoreText.textContent = `${computerScore}`; 
       resultText.textContent = "You lose! Rock beats Scissors!";
        
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        computerScoreText.textContent = `${computerScore}`; 
        resultText.textContent ="You lose! Scissors beats Paper!";
        
    }
   

    }

    



    







 