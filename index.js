function getComputerChoice(){

    let number = Math.floor(Math.random() * 3);

    return (number === 0) ? "rock" : (number === 1) ? "paper":  "scissors";
}

function getPlayerChoice(){

    let choice;
    for(let i = 0; i < 5;i++){
        
     choice = prompt("Choose rock, paper or scissors","default");
    
     if(choice.toLowerCase() !== "paper" && choice.toLowerCase() !== "rock" && choice.toLowerCase() !== "scissors")
     {
        alert("Give in rock, paper or scissors");
        if(i === 5) alert("bro.....");
     }

     else{
        break;
     }
    }
    return choice;
}

playRound(getPlayerChoice(), getComputerChoice());

function playRound(playerSelection, computerSelection) {
    let playerchoice = playerSelection.toLowerCase();

    (playerchoice === computerSelection) ? console.log("It`s a tie"):
    ((playerchoice === "paper")&&(computerSelection === "rock")) ? console.log("PLAYER WON!") :
    ((playerchoice === "scissors")&&(computerSelection === "paper")) ? console.log("PLAYER WON!"):
    console.log("COMPUTER WON!");
    
} 

game();
function game(){

    playRound(getPlayerChoice(), getComputerChoice())
    
}