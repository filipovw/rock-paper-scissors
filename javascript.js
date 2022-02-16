function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function computerPlay() {
  let computerResponse = getRandomInt(1, 3);
  if (computerResponse == 1) {
    return "Rock";
  } else if (computerResponse == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (computerSelection == "Rock") {
    if (playerSelection.toLowerCase() == "rock") {
      console.log("Tie!");
    }

    if (playerSelection.toLowerCase() == "scissors") {
      console.log("You lose! Rock beats Scissors!");
    }

    if (playerSelection.toLowerCase() == "paper") {
      console.log("You win! Paper beats Scissors!");
    }
  }

  if (computerSelection == "Paper") {
    if (playerSelection.toLowerCase() == "rock") {
      console.log("You lose! Paper beats Rock!");
    }

    if (playerSelection.toLowerCase() == "paper") {
      console.log("Tie!");
    }

    if (playerSelection.toLowerCase() == "scissors") {
      console.log("You win! Scissors beats Paper!");
    }
  }

  if (computerSelection == "Scissors") {
    if (playerSelection.toLowerCase() == "rock") {
      console.log("You win! Rock beats Scissors!");
    }

    if (playerSelection.toLowerCase() == "paper") {
      console.log("You lose! Scissors beats Paper!");
    }

    if (playerSelection.toLowerCase() == "scissors") {
      console.log("Tie!");
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(prompt("Rock, Paper, Scissors"), computerPlay());
    console.log(i);
  }
}

game();
