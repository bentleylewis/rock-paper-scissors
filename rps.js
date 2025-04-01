const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const choices = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;


function playRound(playerChoice) {
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";    
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    }

    else {
        switch(playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You Win!" : "You Lose!";
                break;            
            case "paper":
                result = (computerChoice === "rock") ? "You Win!" : "You Lose!";
                break;            
            case "scissors":
                result = (computerChoice === "paper") ? "You Win!" : "You Lose!";
                break;
        }
    }

resultDisplay.textContent = result;
playerDisplay.textContent = `You: ${playerChoice}`;
computerDisplay.textContent = `Computer: ${computerChoice}`;

    switch(result) {
        case "You Win!":
            playerScore ++;
            break;
        case "You Lose!":
            computerScore ++;
            break;
    }


playerScoreDisplay.textContent = `Your score: ${playerScore}`;
computerScoreDisplay.textContent = `Computer's score: ${computerScore}`;

}

