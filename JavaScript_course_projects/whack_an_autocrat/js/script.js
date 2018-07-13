// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;

/*==========================
            CONTENT
===========================*/
const autocrats_club = ["putin", "duterte", "erdogan", "trump", "maduro", "mussolini", "mugabe", "stalin", "kim"];

// Audio SFX
const whack = new Audio('./audio/smack.mp3');
const miss = new Audio('./audio/laugh2.mp3');
const whackAcrat = () => whack.play();
const ohYouMissed = () => miss.play();


/*==========================
      BUILD GAMEBOARD
===========================*/
const buildBoard = () => {
  const spaces = 15;
  let counter = 0;
  while (counter < spaces) {
    $('#gameboard').append(`<div class='hole'><figure id=${counter} class='pic-frame'></figure></div>`);
    counter += 1;
  }
  picHandler(autocrats_club);
}

/*==========================
      APPEAR / DISAPPEAR
===========================*/
const randomNumber = (totalChoices) => Math.floor(Math.random() * totalChoices)

const picHandler = (arr) => {
  let pickHole = randomNumber(15);
  let picAutocrat = arr[randomNumber(arr.length)]
  // Add picture to the hole picked by randomNumber(15)
  $(`#${pickHole}`).html(`<img src=./images/${picAutocrat}.jpg class="picture" />`);
  // Detach picture from the hole
  const disappear = () => {
    $('.picture').detach();
    picHandler(autocrats_club);
  }
  // Set random delay for detaching the picture
  const randomTime = Math.floor(Math.random() * 1500);
  // console.log(randomTime);
  setTimeout(disappear, randomTime);
}


/*==========================
      SMACK THE PICTURE
===========================*/
let points = 0;

//  if the event equals class picture then play Audio
$('#gameboard').on('click', function(event) {
   if ( $(event.target).hasClass('picture') ) {
     whackAcrat();
     points += 10;
     $('#score').html(points);
   } else {
     ohYouMissed();
     points -= 5;
     $('#score').html(points);
   }

});


/*==========================
        START GAME
===========================*/
buildBoard();
