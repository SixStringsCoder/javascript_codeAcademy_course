/*
Kelvin Weather project that converts Kelvin temperature to Fahrenheit.
User inputs the starting Kelvin temperature through a prompt.
Kelvin is converted to Celsius then to Fahrenheit
followed by console.log statements
--programmed by Steve Hanlon Sept. 19, 2017--
*/


// prompt user for temperature in Kelvin, using as basis for conversion to Fahrenheit so use 'const'
const kelvin = prompt('What is the Kelvin temperature today?');
// Celsius is 273 degrees less than Kelvin
const celsius = kelvin - 273;
// fahrenheit to be rounded with Math library so storing as 'let' for flexibility
let fahrenheit = Math.floor(celsius * (9/5) + 32);

// logging temp. in F using JS string interpolation
console.log(`The temperture is ${fahrenheit} degrees fahrenheit.`);

// follow up statements using conditional control flow
if (fahrenheit < 50) {
  console.log("Prep for Antartic winter olympics!");
} else if (fahrenheit > 50 && fahrenheit < 90) {
  console.log("Time to go kayaking on the Willamette!");
} else if (fahrenheit > 90 && fahrenheit < 110) {
  console.log("Prep for Las Vegan Summer Olympics!");
} else {
  console.log("Prep for Saudi Arabian summer olympics marathon!");
}
