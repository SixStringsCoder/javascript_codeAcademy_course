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
      $('#gameboard').append(
        `<div class="square">
          <div class="card-cover"></div>
          <p class="${word}">${word}</p>
         </div>`);
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
  return false;
};

const changeStrikes = () => {
  strikes += 1;
  console.log(`${strikes} strikes against you!`)
  $('#strikes').html(strikes);
  return false;
};

// Event handler to catalog card picks in array 'cardPicks'
const handlePicks = (event) => {
  $(event.target).addClass('card-show');
  console.log(event);
  let pick = $(event.target).siblings("p").attr('class');
  // Disable the card picked so it can't be clicked twice
  $(event.target).prop( "disabled", true );
  cardPicks.push(pick);
  console.log(cardPicks);

  if (cardPicks.length === 2) {
    setTimeout(decideMatch, 1000, cardPicks);
  }
};

const hideCardsAgain = (cardPicksArr) => {
  $(`p.${cardPicksArr[0]}, p.${cardPicksArr[1]}`).siblings('div.card-cover').removeClass('card-show');
};

const makeCardsInactive = (cardPicksArr) => {
  $(`p.${cardPicksArr[0]}, p.${cardPicksArr[1]}`).siblings('div.card-cover').prop( "disabled", true );
};

const emptyCardPicks = arr => cardPicks.splice(0, cardPicks.length)

const decideMatch = (cardPicksArr) => {
    if (cardPicksArr[0] === cardPicksArr[1]) {
      makeCardsInactive(cardPicks);
      changeScore();
      emptyCardPicks();
  } else {
    // Re-enable the cards picked so they're back in play again
     $('div.card-cover').prop( "disabled", false );
      hideCardsAgain(cardPicks);
      changeStrikes();
      emptyCardPicks();
  }
};

// Event listener to pick cards
$("#gameboard").on('click', 'div.card-cover', handlePicks);
