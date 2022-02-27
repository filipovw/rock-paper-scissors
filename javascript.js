let playerScore = 0;
let computerScore = 0;
let result = "";

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
      result =
        "Tie!" +
        "\nPlayer score: " +
        playerScore +
        "\nComputer score: " +
        computerScore;
      checkIfWon();
    }

    if (playerSelection.toLowerCase() == "scissors") {
      console.log("You lose! Rock beats Scissors!");
      computerScore++;
      result =
        "You lose! Rock beats Scissors!" +
        "\nPlayer score: " +
        playerScore +
        "\nComputer score: " +
        computerScore;
      checkIfWon();
    }

    if (playerSelection.toLowerCase() == "paper") {
      console.log("You win! Paper beats Scissors!");
      playerScore++;
      result =
        "You win! Paper beats Scissors!" +
        "\nPlayer score: " +
        playerScore +
        "\nComputer score: " +
        computerScore;
      checkIfWon();
    }
  }

  if (computerSelection == "Paper") {
    if (playerSelection.toLowerCase() == "rock") {
      console.log("You lose! Paper beats Rock!");
      computerScore++;
      result =
        "You lose! Paper beats Rock!" +
        "\nPlayer score: " +
        playerScore +
        "\nComputer score: " +
        computerScore;
      checkIfWon();
    }

    if (playerSelection.toLowerCase() == "paper") {
      console.log("Tie!");
      result =
        "Tie!" +
        "\nPlayer score: " +
        playerScore +
        "\nComputer score: " +
        computerScore;
      checkIfWon();
    }

    if (playerSelection.toLowerCase() == "scissors") {
      console.log("You win! Scissors beats Paper!");
      playerScore++;
      result =
        "You win! Scissors beats Paper!" +
        "\nPlayer score: " +
        playerScore +
        "\nComputer score: " +
        computerScore;
      checkIfWon();
    }
  }

  if (computerSelection == "Scissors") {
    if (playerSelection.toLowerCase() == "rock") {
      console.log("You win! Rock beats Scissors!");
      playerScore++;
      result =
        "You win! Rock beats Scissors!" +
        "\nPlayer score: " +
        playerScore +
        "\nComputer score: " +
        computerScore;
      checkIfWon();
    }

    if (playerSelection.toLowerCase() == "paper") {
      console.log("You lose! Scissors beats Paper!");
      computerScore++;
      result =
        "You lose! Scissors beats Paper!" +
        "\nPlayer score: " +
        playerScore +
        "\nComputer score: " +
        computerScore;
      checkIfWon();
    }

    if (playerSelection.toLowerCase() == "scissors") {
      console.log("Tie!");
      result =
        "Tie!" +
        "\nPlayer score: " +
        playerScore +
        "\nComputer score: " +
        computerScore;
      checkIfWon();
    }
  }

  document.querySelector(".results").innerText = result;
  return;
}

/*
function game() {
  for (let i = 0; i < 5; i++) {
    playRound(prompt("Rock, Paper, Scissors"), computerPlay());
    console.log(i);
  }
}

game();
*/
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => {
  playRound("Rock", computerPlay());
});

paper.addEventListener("click", () => {
  playRound("Paper", computerPlay());
});

scissors.addEventListener("click", () => {
  playRound("Scissors", computerPlay());
});

const results = document.querySelector(".results");

function checkIfWon() {
  if (playerScore == 5) {
    result += "\nI won!";
    document.querySelector(".rock").disabled = true;
    document.querySelector(".paper").disabled = true;
    document.querySelector(".scissors").disabled = true;
  }

  if (computerScore == 5) {
    result += "\nI lost!";
    document.querySelector(".rock").disabled = true;
    document.querySelector(".paper").disabled = true;
    document.querySelector(".scissors").disabled = true;
  }
}
