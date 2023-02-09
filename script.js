'use strict';

// # Constants and Variables

const againBtn = document.querySelector('.again');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const body = document.body;

let secretNum = Math.floor(Math.random() * 20) + 1;
let count = 20;
// number.textContent = secretNum;

// # Again Button reset
againBtn.addEventListener('click', () => {
  secretNum = Math.floor(Math.random() * 20) + 1;
  body.style.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
  number.textContent = '?';
  guess.value = '';
});

// # main event

checkBtn.addEventListener('click', () => {
  let guessedValue = Number(guess.value);

  if (guessedValue < 1 || guessedValue > 20) {
    message.textContent = ' 🚫 Wrong Input';

    console.log(guessedValue, secretNum);
  } else if (guessedValue === secretNum) {
    number.textContent = secretNum;
    message.textContent = '🎉 Correct Number';
    body.style.backgroundColor = '#60b347';
    score.textContent = --count;
  } else if (guessedValue > secretNum) {
    message.textContent = 'Too High';
    // count--;
    score.textContent = --count;
  } else if (guessedValue < secretNum) {
    message.textContent = 'Too Low';
    // count--;
    score.textContent = --count;
  }
});
