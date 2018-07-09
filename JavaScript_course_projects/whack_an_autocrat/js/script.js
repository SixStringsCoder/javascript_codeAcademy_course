// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;

const autocrats_club = ["putin", "duterte", "erdogan", "trump", "maduro", "mussolini", "mugabe", "stalin", "kim"];


const buildBoard = () => {
  const spaces = 15;
  let counter = 0;
  while (counter < spaces) {
    $('#gameboard').append(`<div class='hole'><figure id=${counter} class='pic-frame'></figure></div>`);
    counter += 1;
  }
}

const randomNumber = (totalChoices) => Math.floor(Math.random() * totalChoices)

const picHandler = (arr) => {
  let pickHole = randomNumber(15);
  let picAutocrat = arr[randomNumber(arr.length)]
  console.log(picAutocrat);
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

buildBoard();
picHandler(autocrats_club);
