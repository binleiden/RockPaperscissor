//--------------------First Part-------------------------
// randomly generates Rock, Paper or Scissors
function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissor"]
    let computerChoice = Math.floor(Math.random() * choice.length);
    return choice[computerChoice];
       
}

//-------------Second Part--------------------------------

// play a single round of the game (this is the game logic)

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "Rock" && computerSelection == "Scissor") ||
    (playerSelection == "Scissor" && computerSelection == "Paper")||
    (playerSelection == "Paper" && computerSelection == "Rock")) {
        return "You Win";
    } else if (playerSelection == computerSelection) {
        return "Draw";
    } else {
        return "You Loose";
    }
  }

  //-----------Final Part-------------------------------------
  
  // Program to get player selection
  function game() {
    for (let i = 0; i < 5; i++) {
      let playerSelection = prompt("Enter Rock, Paper or Scissors - CaseSensetive");
      let computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
    }
  }
  game();