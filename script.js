'use strict';

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// random number generator for secret number guess
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);

/////////////////////////////////////////////////////////////////
// FUNCTIONS
/////////////////////////////////////////////////////////////////

// Reset input by keyboard to normal Function
const guessResetToNormal = function (number) {
  Number((document.querySelector('.guess').value = number));
};

// Display Text Functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayHighScore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};

// Resets guess to desired value
const resetGuessValue = function (value) {
  document.querySelector('.guess').value = value;
};

// Styling Functions
const bodyBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const boxNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

/////////////////////////////////////////////////////////////////

// 'Check!' button event listener
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Max, Min when user enters a number by keyboard
  if (guess < 1) {
    guessResetToNormal(1);
  } else if (guess > 20) {
    guessResetToNormal(20);
  }

  // When there is no input
  if (!guess) {
    displayMessage('No number!⛔');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct number🌟');
    displayNumber(secretNumber);
    bodyBackgroundColor('#60b347');
    boxNumberWidth('30rem');

    // Set and memorize highscore
    if (score > highScore) {
      highScore = score;
      displayHighScore(highScore);
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!📈' : 'Too low!📉');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game! 💥');
      displayScore(0);
    }
  }
});

// 'Again!' button event listener
document.querySelector('.again').addEventListener('click', function () {
  // Reset score and secretNumber
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // console.log(secretNumber);

  // Reset initial message, number, score and guess input field
  displayMessage('Start guessing...');
  displayNumber('?');
  displayScore(score);
  resetGuessValue('');

  // Reset initial background color and number box width
  bodyBackgroundColor('#222');
  boxNumberWidth('15rem');
});
