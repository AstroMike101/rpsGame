
 let playerScore = 0;
 let computerScore = 0; 

 


const playerScoreText = document.querySelector('.playerScoreText');
const computerScoreText = document.querySelector('.computerScoreText');
const resultText = document.querySelector('.resultText');

const resetScore = document.querySelector('.resetScore');

resetScore.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreText.textContent = 0;
    computerScoreText.textContent = 0;
    resultText.textContent = "Start new game!";
    
})
    





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
        resultText.style.color = "#EA4C46";

    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        resultText.style.color = "black";
        playerScore++;
        playerScoreText.textContent = `${playerScore}`;
        resultText.textContent = "You win! Rock beats scissors!";
        
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        resultText.style.color = "black";
        playerScore++;
        playerScoreText.textContent = `${playerScore}`; 
        resultText.textContent = "You win! Paper beats rock!";

    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        resultText.style.color = "black";
        playerScore++;
        playerScoreText.textContent = `${playerScore}`;
        resultText.textContent = "You win! Scissors beats paper!";
        
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        resultText.style.color = "black";
        computerScore++;
        computerScoreText.textContent = `${computerScore}`; 
        resultText.textContent ="You lose! Paper beats rock!";
        
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        resultText.style.color = "black";
        computerScore++;
        computerScoreText.textContent = `${computerScore}`; 
       resultText.textContent = "You lose! Rock beats Scissors!";
        
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        resultText.style.color = "black";
        computerScore++;
        computerScoreText.textContent = `${computerScore}`; 
        resultText.textContent ="You lose! Scissors beats Paper!";
        
    }
    
    if (playerScore >= 5) {  
        resultText.style.color = '#173F5F';
        resultText.textContent = "You win the game! You're better then a computer!";
        

    }

    else if (computerScore >=5 ) {
        resultText.style.color = '#173F5F';
        resultText.textContent = "You lose the game! Computer wins! "
    }
    
    



    

}
        



    

    
    
    
   
    

    



    







 