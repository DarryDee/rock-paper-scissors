const playerRock = document.querySelector(".Player-Rock"); 
const playerPaper = document.querySelector(".Player-Paper");
const playerScissors = document.querySelector(".Player-Scissors");

const BotRock = document.querySelector(".Computer-Rock"); 
const BotPaper = document.querySelector(".Computer-Paper");
const BotScissors = document.querySelector(".Computer-Scissors");

const webpage = document.getElementById("webpage");
const buttons = document.querySelectorAll("#button");


let buttonColored = false;
let playerCounter = 0;
let computerCounter = 0;

playerRock.addEventListener("click", ()=>{

    //#region Color reset
    /*
    if(buttonColored) e.preventDefault();
    */
   //#endregion

    const decision = playRound("Rock",getComputerChoice())
    console.log(decision);
    if(decision){   

        playerRock.style.background = "green";
        BotScissors.style.background = "red";

        playerCounter++;
        document.getElementById("player-score").innerHTML = playerCounter.toString();

        //#region Color reset
        //buttonColored = true;
        //#endregion
    }
    else if(decision === 0){

        playerRock.style.background = "Aqua";
        BotRock.style.background = "Aqua";
    }
    else{
        playerRock.style.background = "red";
        BotPaper.style.background = "green"; 

        computerCounter++;
        document.getElementById("computer-score").innerHTML = computerCounter.toString();
    }

    setTimeout(() => {
        buttons.forEach(buttons => {
            buttons.style.background = "transparent";

            //#region  Color reset
            /*
            buttonColored = false;
            preventDefaultEnabled = false;
            */
           //#endregion
        })
    },1000)

})
playerPaper.addEventListener("click", ()=>{

    const decision = playRound("Paper",getComputerChoice())

    if(decision){
        
        playerPaper.style.background = "green";
        BotRock.style.background = "red";

        playerCounter++;
        document.getElementById("player-score").innerHTML = playerCounter.toString();
    }

    else if(decision === 0){
        playerPaper.style.background = "Aqua";
        BotPaper.style.background = "Aqua";
    }

    else{
        playerPaper.style.background = "red";
        BotScissors.style.background = "green";

        computerCounter++;
        document.getElementById("computer-score").innerHTML = computerCounter.toString();
    }

    setTimeout(() => {
        buttons.forEach(buttons => {
            buttons.style.background = "transparent";
        })
    },1000)
})
playerScissors.addEventListener("click", () => {

    const decision = playRound("Scissors",getComputerChoice())

    if(decision){
        playerScissors.style.background = "green";
        BotPaper.style.background = "red";

        playerCounter++;
        document.getElementById("player-score").innerHTML = playerCounter.toString();
    }

    else if(decision === 0){
        playerScissors.style.background = "Aqua";
        BotScissors.style.background = "Aqua";
    }

    else{
        playerScissors.style.background = "red";
        BotRock.style.background = "green";

        computerCounter++;
        document.getElementById("computer-score").innerHTML = computerCounter.toString();
    }

    setTimeout(() => {
        buttons.forEach(buttons => {
            buttons.style.background = "transparent";
        })
    },1000)
})

function getComputerChoice(){

    let number = Math.floor(Math.random() * 3);

    return (number === 0) ? "rock" : (number === 1) ? "paper":  "scissors";
}

function playRound(playerSelection, computerSelection) {

    let isPlayerWinning = true;

    console.log(computerSelection);
    
    let playerchoice = playerSelection.toLowerCase();
    if (playerchoice === computerSelection) return 0; 
    else if ((playerchoice === "rock")&&(computerSelection === "scissors"))   return isPlayerWinning; 
    else if ((playerchoice === "scissors")&&(computerSelection === "paper"))  return isPlayerWinning;
    else if ((playerchoice === "paper")&&(computerSelection === "rock"))  return isPlayerWinning;
    else return false;
    
} 
