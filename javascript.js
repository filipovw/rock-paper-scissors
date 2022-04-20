let playerScore = 0;
let computerScore = 0;
let result = "";
let result1 = "";

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
      result = "Tie!";
      result1 = "Rock ties with Rock!";
    }

    if (playerSelection.toLowerCase() == "scissors") {
      result = "You lose!";
      result1 = "Scissors is beaten by Rock!";
      computerScore++;
    }

    if (playerSelection.toLowerCase() == "paper") {
      result = "You win!";
      result1 = "Paper beats Scissors!";
      playerScore++;
    }
  }

  if (computerSelection == "Paper") {
    if (playerSelection.toLowerCase() == "rock") {
      result = "You lose!";
      result1 = "Rock is beaten by Paper!";
      computerScore++;
    }

    if (playerSelection.toLowerCase() == "paper") {
      result = "Tie!";
      result1 = "Paper ties with Paper!";
    }

    if (playerSelection.toLowerCase() == "scissors") {
      result = "You win!";
      result1 = "Scissors beats Paper!";
      playerScore++;
    }
  }

  if (computerSelection == "Scissors") {
    if (playerSelection.toLowerCase() == "rock") {
      result = "You win!";
      result1 = "Rock beats Scissors!";
      playerScore++;
    }

    if (playerSelection.toLowerCase() == "paper") {
      result = "You lose!";
      result1 = "Paper is beaten by Scissors!";
      computerScore++;
    }

    if (playerSelection.toLowerCase() == "scissors") {
      result = "Tie!";
      result1 = "Scissors ties with Scissors!";
    }
  }

  roundResult.textContent = result;
  roundResult1.textContent = result1;
  playerScoreBox.textContent = "Player: " + playerScore;
  computerScoreBox.textContent = "Computer: " + computerScore;
  checkIfWon();
  return;
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const roundResult = document.querySelector(".roundResult");
const playerScoreBox = document.querySelector(".playerScoreBox");
const computerScoreBox = document.querySelector(".computerScoreBox");
const roundResult1 = document.querySelector(".roundResult1");

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
    roundResult.textContent = "You win!";
    roundResult1.textContent = "Refresh the page (F5) to play again!";
    document.querySelector(".rock").disabled = true;
    document.querySelector(".paper").disabled = true;
    document.querySelector(".scissors").disabled = true;
  }

  if (computerScore == 5) {
    roundResult.textContent = "You lose!";
    roundResult1.textContent = "Refresh the page (F5) to play again!";
    document.querySelector(".rock").disabled = true;
    document.querySelector(".paper").disabled = true;
    document.querySelector(".scissors").disabled = true;
  }
}
