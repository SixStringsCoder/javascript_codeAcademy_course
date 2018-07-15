// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;

const gitHubLink = "https://rawgit.com/SixStringsCoder/javascript_codeAcademy_course/master/JavaScript_course_projects/whack_an_autocrat";

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
let pickHole;
let picAutocrat = [];

const picHandler = (arr) => {
  pickHole = randomNumber(15);
  picAutocrat = arr[randomNumber(arr.length)];
  // Add picture to the hole picked by randomNumber(15)
  $(`#${pickHole}`).html(`<img src=./images/${picAutocrat}.jpg class="picture" />`);
  // Detach picture from the hole
  const disappear = () => {
    $('.picture').detach();
    picHandler(autocrats_club);
  }
  // Set random delay to detaching/disappear the picture
  const randomTime = Math.floor(Math.random() * 2000);
  setTimeout(disappear, randomTime);
}


/*==========================
      SMACK THE PICTURE
===========================*/
let points = 0;

//  if the event equals class picture, show smacked pic, play audio, change score
$('#gameboard').mousedown(function(event) {
   if ( $(event.target).hasClass('picture') ) {
     $(`#${pickHole}`).html(`<img src=./images/${picAutocrat}_smacked.jpg class="picture" />`);
     whackAcrat();
     points += 10;
     $('#score').html(points);
   } else {
     ohYouMissed();
     points -= 5;
     $('#score').html(points);
   }
});

$('#gameboard').mouseup(function(event) {
   if ( $(event.target).hasClass('picture') ) {
     $(`#${pickHole}`).html(`<img src=./images/${picAutocrat}.jpg class="picture" />`);
   } else {
     return false;
   }
});

/*==========================
        START GAME
===========================*/
buildBoard();
