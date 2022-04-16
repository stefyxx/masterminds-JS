// Exercise 4: Build a guess the number game.

// Generate a random number between 1 and 100.
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Record the turn number the player is on.
let guessCount = 1;

// Store guesses.
let currentGuess;

// Set up game board.
const resultPanel = document.querySelector(".result-panel");
const allGuess = document.querySelector(".all-guess");
const clue = document.querySelector(".clue");

const guessSubmit = document.querySelector(".guess-form-submit");
const guessField = document.getElementById("guess-field");
guessField.focus();

guessSubmit.addEventListener("click", checkGuess);

function checkGuess() {
  // Record the previous guess if player is not on first try.
  if (guessCount > 1) {
    const recordGuess = document.createElement("li");
    recordGuess.textContent = clue.textContent;
    allGuess.appendChild(recordGuess);
  }

  // Retrieve and save the current guess.
  currentGuess = Number(guessField.value);

  // Is guess correct?
  if (currentGuess === randomNumber) {
    clue.textContent = "Congratulations! You got it right!";
    clue.style.color = "green";
    allGuess.innerHTML = "";
    setGameOver();
  }

  // It's not but has user reached maximum number of tries?
  else if (guessCount === 10) {
    clue.textContent = "!!!GAME OVER!!!";
    clue.style.color = "red";
    allGuess.innerHTML = "";
    setGameOver();
  } else {
    if (currentGuess < randomNumber) {
      clue.textContent = currentGuess + " is too low!";
      clue.style.color = "blue";
    } else if (currentGuess > randomNumber) {
      clue.textContent = currentGuess + " is too high!";
      clue.style.color = "purple";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  resultPanel.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  resultPanel.removeChild(resetButton);

  for (const element of resultPanel.children) {
    element.innerHTML = "";
    element.style.color = "black";
  }

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  randomNumber = Math.floor(Math.random() * 100) + 1;
}