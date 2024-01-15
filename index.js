const playerRock = document.querySelector("#Player-Rock"); 
const playerPaper = document.querySelector("#Player-Paper");
const playerScissors = document.querySelector("#Player-Scissors");

const choice = document.querySelector("#choice");

playerRock.addEventListener("click", ()=>{

    playRound("Rock",getComputerChoice())
})
playerPaper.addEventListener("click", ()=>{

    playRound("Paper",getComputerChoice())
})
playerScissors.addEventListener("click", ()=>{

    playRound("Scissors",getComputerChoice())
})
function getComputerChoice(){

    let number = Math.floor(Math.random() * 3);

    return (number === 0) ? "rock" : (number === 1) ? "paper":  "scissors";
}

playRound(getPlayerChoice(), getComputerChoice());

function playRound(playerSelection, computerSelection) {
    let playerchoice = playerSelection.toLowerCase();

    console.log(computerSelection);

    (playerchoice === computerSelection) ? console.log("It`s a tie"):
    ((playerchoice === "paper")&&(computerSelection === "rock")) ? console.log("PLAYER WON!") :
    ((playerchoice === "scissors")&&(computerSelection === "paper")) ? console.log("PLAYER WON!"):
    console.log("COMPUTER WON!");
    
} 

game();
function game(){

    playRound(getPlayerChoice(), getComputerChoice())
    
}
