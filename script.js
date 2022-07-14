"use strict";

//Selecting elements
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.getElementById("score--1");
const current0EL = document.getElementById("current--0");
const current1EL = document.getElementById("current--1");
const diceEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnInst = document.querySelector(".btn--inst");
const name1 = document.querySelector(".name1");
const name0 = document.querySelector(".name0");

diceEL.src = `dice.gif`;
let scores, currentScore, activePlayer, Playing;
const init = function () {
  diceEL.classList.remove("hidden");
  diceEL.src = `dice.gif`;
  name1.classList.add("hidden");
  name0.classList.add("hidden");
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  Playing = true;
  score0.textContent = 0;
  score1.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;
  player0.classList.remove("player-winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player-active");
  player1.classList.remove("player--active");
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");
};
init();
name1.classList.add("hidden");
name0.classList.add("hidden");
const switchPlayer = function () {
  //Switch to next player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  //For CSS
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};
function yourFunction() {
  // do whatever you like here
  diceEL.src = `dice.gif`;
}

btnRoll.addEventListener("click", function () {
  if (Playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEL.classList.remove("hidden");

    yourFunction();
    setTimeout(yourFunction, 5000);
    diceEL.src = `dice-${dice}.png`;

    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (Playing) {
    //Add current score
    scores[activePlayer] += currentScore;
    //scores[1]+=currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
  }
  if (scores[activePlayer] >= 100) {
    Playing = false;
    diceEL.classList.add("hidden");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
    document.querySelector(`.name${activePlayer}`).classList.remove("hidden");
  } else {
    switchPlayer();
  }
});
btnNew.addEventListener("click", init);
