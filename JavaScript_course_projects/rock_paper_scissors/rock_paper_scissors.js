/*
This is the classic game "Rock, Paper, Scissors" programmed
with ES6.  The code in top section is my solution to the game and the bottom
code is CodeAcademy's
*/

const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let you = 0;
let computer = 0;

// Prompt user for answer, return error if unacceptable answer, and start game again
const yourMove = () => {
  const yourChoices = prompt("Rock, paper, or scissors?");
  const yourPick = yourChoices.toLowerCase();

  if (yourPick === rock || yourPick === paper || yourPick === scissors) {
    return yourPick;
  } else {
    alert("Sorry bad pick! Try again!");
    playGame();
  }
};

// Computer's choice gotten from Math Lib. random
const compMove = () => {
  const computerChoices = ["rock", "paper", "scissors"];
  const computerPick = computerChoices[Math.floor(Math.random() * 3)];
  return computerPick;
};

// Initiates player picks, conditions to decide winner, increment score
const playGame = () => {
  const yourPick = yourMove();
  const computerPick = compMove();
  console.log(`${yourPick} vs. ${computerPick}`);

  // Conditions to tie or win a round and increment the score
  if (yourPick === computerPick) {
    console.log("It's a tie!");
  } else if (yourPick === rock && computerPick === scissors ||
  yourPick === paper && computerPick === rock ||
  yourPick === scissors && computerPick === paper){
    you += 1;
    console.log(`You win that one!
      You: ${you} Compy: ${computer}`);
  } else {
    computer += 1;
    console.log(`Compy wins that one!
      You: ${you} Compy: ${computer}`);
  }
  // Conditions to win the game
  if (you === 3) {
    console.log('Game over! You won!')
  } else if (computer === 3) {
    console.log('Game over! Compy won!')
  } else {
    playGame();
  }
};

// Start the game
playGame();






/*
CodeAcademy's solution
*/

// User choice and criteria for picking
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput
  } else {
    console.log('Wrong input!')
  }
};

// Computer's pick using Math library
const getComputerChoice = () => {
  const comPick = Math.floor(Math.random() * 2);
  if (comPick === 1) {
    return "rock";
  } else if (comPick === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

// Conditiions to determine a winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return "You win automatically!"
  }
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return "You win!";
    } else {
      return "The Computer wins!"
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "The Computer wins!";
    } else {
      return "You win!"
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "The Computer wins!";
    } else {
      return "You win!"
    }
  }
};

// Initiates the game, shows results and winner statement
function playGame() {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log(`You: ${userChoice}
Computer: ${computerChoice}`)
  console.log(determineWinner(userChoice, computerChoice));
};

// Activates the game
playGame();
