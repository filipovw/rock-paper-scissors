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
      result =
        "Tie!" +
        "\nPlayer score: " +
        playerScore +
        "\nComputer score: " +
        computerScore;
      checkIfWon();
    }

    if (playerSelection.toLowerCase() == "scissors") {
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
      result =
        "Tie!" +
        "\nPlayer score: " +
        playerScore +
        "\nComputer score: " +
        computerScore;
      checkIfWon();
    }

    if (playerSelection.toLowerCase() == "scissors") {
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

console.log("atanas e pedal");
