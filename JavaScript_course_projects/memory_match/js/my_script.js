// Content
const content = ["strawberry", "lemon", "grapes", "durian", "mango", "guava", "apple", "plum", "strawberry", "lemon", "grapes", "durian", "mango", "guava", "apple", "plum"];

// Click Play Button to trigger Shuffle
$('#play-btn').on('click', () => shuffle(content));


// Shuffle Content using Fisher-Yates method
function shuffle(array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  makeGameBoard(array);
}

// Add Content to DOM
const makeGameBoard = (someList) => {
    // Remove all contents from game board
    $('#gameboard').empty();
    // Populate game baord
    content.map((word, index) => {
      $('#gameboard').append(`<div class="square"><p class="${word}">${word}</p></div>`);
    });

    // Start timer
    timeHandler();
}


// TIMER
let centiseconds = 0;
let seconds = 0;
let min = 0;

function timeHandler() {
  const timer = setInterval(function(){ myTimer() }, 100);
}

const myTimer = () => {
	let increment = centiseconds++;
    if (centiseconds > 9 && seconds >= 59) {
      min += 1;
      seconds = 0;
      centiseconds = 0;
    }
	  if (centiseconds > 9) {
      seconds += 1;
      centiseconds = 0;
    }
    return $('#time').html(`<span>${min}:${seconds}:${centiseconds}</span>`)
}



// SCORE and STRIKES
let score = 0;
let strikes = 0;
let cardPicks = [];

const changeScore = () => {
  score += 10;
  console.log(`Your score is ${score}`);
  $('#score').html(score);
};

const changeStrikes = () => {
  strikes += 1;
  console.log(`${strikes} strikes against you!`)
  $('#strikes').html(strikes);
};

// Event handler to catalog card picks
const handlePicks = (event) => {
  // $(event.target).toggleClass('visible');
  let pick = $(event.target).attr('class');

  cardPicks.push(pick)
console.log(cardPicks);
  if (cardPicks.length === 2) {
    decideMatch(cardPicks);
  }
};

const emptyCardPicks = arr => cardPicks.splice(0, cardPicks.length)

const decideMatch = (cardPicks) => {
    if (cardPicks[0] === cardPicks[1]) {
    changeScore();
    emptyCardPicks()
  } else {
    changeStrikes();
    emptyCardPicks();
  }
}

// Event listener to pick cards
$("#gameboard").on('click', 'div.square > p', handlePicks);
