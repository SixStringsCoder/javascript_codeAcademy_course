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
      $('#gameboard').append(`<div class="square" data-match=${word}><p>${word}</p></div>`);
    });

    // start timer
    timeHandler();
}


// Timer
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
