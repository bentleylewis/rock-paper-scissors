console.log("Hello World!");

function getComputerChoice(){
    let genNum = Math.random();
    let compChoice;

    if (genNum < .33) {
        compChoice = 0;
    }

    else if ( genNum < .67) {
        compChoice = 1;
    }

    else {
        compChoice = 2;
    }

    return compChoice;

}


function getHumanChoice() {
    let humChoice;
    humChoice = parseInt(prompt("Enter one of the following numbers :0(rock), 1(paper), 2(scissors)"));
    return humChoice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());