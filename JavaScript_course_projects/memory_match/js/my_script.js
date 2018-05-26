/*============================================
                  CONTENT
============================================*/
const content = ["strawberry", "lemon", "grapes", "durian", "mango", "guava", "apple", "plum", "strawberry", "lemon", "grapes", "durian", "mango", "guava", "apple", "plum"];


/*============================================
          Audio Sound effects
============================================*/

const gameAudio = {
    clickCard: new Audio('audio/click.mp3'),
    rightAnswer: new Audio('audio/right.mp3'),
    wrongAnswer: new Audio('audio/wrong.mp3'),
    winningSound: new Audio('audio/winner.mp3'),
    losingSound: new Audio('audio/loser.mp3')
}

const playClickCard = () => gameAudio.clickCard.play();
const playRightAnswer = () => gameAudio.rightAnswer.play();
const playWrongAnswer = () => gameAudio.wrongAnswer.play();
const playWinnerSound = () => gameAudio.winningSound.play();
const playLoserSound = () => gameAudio.losingSound.play();


/*============================================
              Shuffle Content
============================================*/

// Click Play Button to trigger Shuffle
$('#play-btn').on('click', () => {
  resetGame();
  shuffle(content);
});

// Using Fisher-Yates method
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

/*============================================
            Add Content to DOM
============================================*/
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
};


/*============================================
                    TIMER
============================================*/
let timer;
let centiseconds = 0;
let seconds = 0;
let minutes = 0;
let timerGoing = true;

const timeHandler = () => {
  return timerGoing ? (
    timer = setInterval(function(){ timeCounter() }, 100)
  ) : (
    clearInterval(timer)
  );
}

const timeCounter = () => {
	let increment = centiseconds++;

    if (centiseconds > 9 && seconds >= 59) {
      minutes += 1;
      seconds = 0;
      centiseconds = 0;
    }
	  if (centiseconds > 9) {
      seconds += 1;
      centiseconds = 0;
    }
    return $('#time').html(`<span>${minutes}:${seconds}:${centiseconds}</span>`)
};

const stopTimer = () => {
  timerGoing = false;
  console.log(timerGoing);
  timeHandler();
};

/*============================================
              SCORE and STRIKES
============================================*/
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

// Event handler to catalog card picks in array 'cardPicks'
const handlePicks = (event) => {
  playClickCard(); // audio effect
  $(event.target).addClass('card-show');
  console.log(event);
  let pick = $(event.target).siblings("p").attr('class');
  // Disable the card picked so it can't be clicked twice
  $(event.target).prop( "disabled", true );
  cardPicks.push(pick);
  console.log(cardPicks);

  if (cardPicks.length === 2) {
    setTimeout(decideMatch, 500, cardPicks);
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
      score === 80 ? wonGame() : playRightAnswer(); // audio effect
      emptyCardPicks();
  } else {
    // Re-enable the cards picked so they're back in play again
     $('div.card-cover').prop( "disabled", false );
       changeStrikes();
       strikes === 3 ? lostGame() : playWrongAnswer(); // audio effect
       console.log(strikes);
       hideCardsAgain(cardPicks);
       emptyCardPicks();
  }
};

// Event listener to pick cards
$("#gameboard").on('click', 'div.card-cover', handlePicks);


/*============================================
              WINNING and LOSING
============================================*/

const wonGame = () => {
  playWinnerSound();
  // Disable game board
  $('#gameboard, div.card-cover').prop( "disabled", true );
  // stop clock
  stopTimer();
  // show modal window with totals + Play Again button;
};

const lostGame = () => {
  playLoserSound();
  // Disable game board
  $('#gameboard, div.card-cover').prop( "disabled", true );
  // stop clock;
  stopTimer();
  // show modal window with totals and consolatioin message + Play Again button;
};


/*============================================
                  RESET GAME
============================================*/
const resetGame = () => {
  score = 0;
  strikes = 0;
  centiseconds = 0;
  seconds = 0;
  minutes =  0;
  timerGoing = true;

  $('#time').html(`<span>${minutes}:${seconds}:${centiseconds}</span>`);
  $('#score').html(score);
  $('#strikes').html(strikes);
};
