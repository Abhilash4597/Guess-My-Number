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

// # Again Button reset
againBtn.addEventListener('click', () => {
  secretNum = Math.floor(Math.random() * 20) + 1;
  body.style.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
  number.textContent = '?';
  guess.value = '';
  score.textContent = 20;
});

// # main events

checkBtn.addEventListener('click', () => {
  let guessedValue = Number(guess.value);

  // # wrong number entered
  if (guessedValue < 1 || guessedValue > 20) {
    message.textContent = ' 🚫 Wrong Input';
  }

  // # correct answer
  else if (guessedValue === secretNum) {
    number.textContent = secretNum;
    message.textContent = '🎉 Correct Number';
    body.style.backgroundColor = '#60b347';
    score.textContent = --count;
  }
    
  // # guess is greater than the actual value
  else if (guessedValue > secretNum) {
    if (count > 1) {
      message.textContent = 'Too High 📈';
      score.textContent = --count;
    } else {
      message.textContent = '😟 You Lose 😟';
      body.style.backgroundColor = '#fa4343';
    }
  }

  // # guess is smaller than the actual value
  else if (guessedValue < secretNum) {
    if (count > 1) {
      message.textContent = 'Too Low 📉';
      score.textContent = --count;
    } else {
      message.textContent = '😟 You Lose 😟';
      body.style.backgroundColor = '#fa4343';
    }
  }
});
