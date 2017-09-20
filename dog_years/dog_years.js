/*
This program uses JavaScript math operators and variables
to convert a human age into dog years.
programmed by Steve Hanlon Sept 20, 2017
*/

// Initialize variable for person's name with prompt
const yourName = prompt("What's your name?");

// Initialize variable for human age with prompt.
const yourAge = prompt(`Hi, ${yourName}. How old are you?`);

// This equals first two human years; a dog's life is 10.5 years per human year
let earlyYears = 2;
earlyYears *= 10.5;

// Adjust human age for first two years accounted for
let laterYears = yourAge - 2;
// The value for later years, i.e. after year 2
laterYears *= 4;

// Value of human age expressed in dog years
yourAgeInDogYears = earlyYears + laterYears;

// initialize a variable to hold the final phrase along with string interpolation, then show result with an alert.
let phrase = `${yourName}, you are ${yourAgeInDogYears} years old in dog years.`;
alert(phrase);
