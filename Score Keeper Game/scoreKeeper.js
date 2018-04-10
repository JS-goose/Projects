// Variables
let maxNumber = document.getElementById("maxNumber");
const playingTo = document.getElementById("playingTo");
const playerOne = document.querySelector("#playerOne");
const playerTwo = document.querySelector("#playerTwo");
const resetButton = document.querySelector("#reset");
let playerOneScore = document.querySelector("#playerOneScore");
let playerTwoScore = document.querySelector("#playerTwoScore");
let buttons = document.querySelectorAll("button");
let gameOver = false;

// Setting the score Maximum
maxNumber.addEventListener("change", function() {
  playingTo.innerHTML = "<h2>Max Score Set to " + maxNumber.value + "</h2>";
  reset();
});

// Event listeners to update score
let scoreOne = 0;
let scoreTwo = 0;

// Player One score event
playerOne.addEventListener("click", function() {
  if (!gameOver) {
    scoreOne++;
    if (scoreOne === parseInt(maxNumber.value)) {
      playerOneScore.classList.toggle("green");
      gameOver = true;
    }
    playerOneScore.innerHTML = scoreOne;
  }
});

// Player Two score event
playerTwo.addEventListener("click", function() {
  if (!gameOver) {
    scoreTwo++;
    if (scoreTwo === parseInt(maxNumber.value)) {
      playerTwoScore.classList.toggle("green");
      gameOver = true;
    }
    playerTwoScore.innerHTML = scoreTwo;
  }
});

// Game reset
resetButton.addEventListener("click", function() {
  reset();
  alert("The game has been reset!");
});

function reset() {
  playerOneScore.innerHTML = 0;
  playerTwoScore.innerHTML = 0;
  playerOneScore.classList.remove("green");
  playerTwoScore.classList.remove("green");
  scoreOne = 0;
  scoreTwo = 0;
  gameOver = false;
}

// Button hover effect
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseover", function() {
    this.classList.toggle("selected");
  });

  buttons[i].addEventListener("mouseout", function() {
    this.classList.remove("selected");
  });
}
