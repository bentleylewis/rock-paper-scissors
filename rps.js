let humanScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice(){
    let genNum = Math.random();
    if (genNum < .33) {
        return "rock";
    }

    else if ( genNum < .67) {
        return "paper";
    }

    else {
        return "scissors";
    }

    return compChoice;

}


function getHumanChoice() {
    let humChoice;
    humChoice = (prompt("Enter one of the following: rock, paper, scissors"));
        return humChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
    }

    else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper") )
            {
                console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
                humanScore ++;
            }

    else {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}.`);
                computerScore ++;
    }

}

while (round < 6) { 
playRound(getHumanChoice(), getComputerChoice());
round ++;
}
console.log(`Your Score: ${humanScore}`);
console.log(`Computer Score: ${computerScore}`);