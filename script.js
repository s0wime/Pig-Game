'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');

function generateDice() {
  return Math.trunc(Math.random() * 6) + 1;
}

btnRoll.addEventListener('click', function () {
  const dice = generateDice();
  diceEl.classList.remove('hidden');
  diceEl.src = `images/dice-${dice}.png`;
});
