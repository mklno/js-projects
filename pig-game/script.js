"use strict";

const diceImg = document.querySelector(".score-img");
const rollDice = document.querySelector(".roll-dice");
const playerOneScore = document.querySelector(".player-1-score");
const playerTwoScore = document.querySelector(".player-2-score");
const playerOneCurrentScore = document.querySelector(".player-1-currentscore");
const playerTwoCurrentScore = document.querySelector(".player-2-currentscore");
const hold = document.querySelector(".hold");
const newGame = document.querySelector(".new-game");
const iconClose = document.querySelector(".icon-close");

let playerScoreOne = 0;
let playerScoreTwo = 0;
let currentScore = 0;
let playerActive = playerOneCurrentScore;
document.querySelector(".player-1").classList.add("active");

const changeTurn = function () {
  playerActive.textContent = 0;
  currentScore = 0;
  if (playerActive === playerOneCurrentScore) {
    playerActive = playerTwoCurrentScore;
    document.querySelector(".player-1").classList.remove("active");
    document.querySelector(".player-2").classList.add("active");
  } else {
    playerActive = playerOneCurrentScore;
    document.querySelector(".player-2").classList.remove("active");
    document.querySelector(".player-1").classList.add("active");
  }
};

const rolldice = function () {
  let randomNumber = Math.trunc(Math.random() * 6) + 1;
  switch (randomNumber) {
    case 1:
      diceImg.src = "dice-1.png";
      changeTurn();
      break;
    case 2:
      diceImg.src = "dice-2.png";
      currentScore += 2;
      break;
    case 3:
      diceImg.src = "dice-3.png";
      currentScore += 3;
      break;
    case 4:
      diceImg.src = "dice-4.png";
      currentScore += 4;
      break;
    case 5:
      diceImg.src = "dice-5.png";
      currentScore += 5;
      break;
    case 6:
      diceImg.src = "dice-6.png";
      currentScore += 6;
      break;
  }
  playerActive.textContent = currentScore;
};

const winStateChange = function () {
  document.querySelector(".win").classList.remove("hidden");
};

const updateScore = function () {
  if (playerActive === playerOneCurrentScore) {
    playerScoreOne += currentScore;
    playerOneScore.textContent = playerScoreOne;
  } else {
    playerScoreTwo += currentScore;
    playerTwoScore.textContent = playerScoreTwo;
  }
  if (playerScoreOne >= 100 || playerScoreTwo >= 100) {
    winStateChange();
  }
  changeTurn();
};

const stateRefresh = function () {
  const items = [
    playerOneCurrentScore,
    playerTwoCurrentScore,
    playerOneScore,
    playerTwoScore,
  ];
  for (let i = 0; i < items.length; i++) {
    items[i].textContent = 0;
  }
  playerScoreOne = 0;
  playerScoreTwo = 0;
  currentScore = 0;
};

rollDice.addEventListener("click", rolldice);
hold.addEventListener("click", updateScore);
newGame.addEventListener("click", stateRefresh);
iconClose.addEventListener("click", function () {
  document.querySelector(".win").classList.add("hidden");
  stateRefresh();
});
