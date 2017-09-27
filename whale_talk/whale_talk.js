/*
Take a sentence (e.g.'Turpentine and turtles,') and
translate it into its "whale talk" equivalent: 'UUEEIEE A UUEE'.
Steve Hanlon Sept. 26, 2017
*/

const input = 'Elvis has left the building'; // sample phrase
const vowels = ['a', 'e', 'i', 'o', 'u']; // vowels array to match vowels of 'input' string
const resultArray = []; // storage for vowels

// loop through each letter of 'input'
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  // for every letter of 'input', loop thru vowels array to match vowels
  for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++ ) {
    //if the match is a vowel, add it to resultArray
    if (input[inputIndex].toLowerCase() === vowels[vowelsIndex]) {
        resultArray.push(input[inputIndex]);
    }
  } // end of 'vowels' loop
  	//additionally, if the vowel is an 'e', add a second 'e' then add to resultArray
    if (input[inputIndex].toLowerCase() === 'e') {
        resultArray.push(input[inputIndex]);
    //if the vowel is 'u', add a second 'u' then add to resultArray
    } else if (input[inputIndex] === 'u') {
        resultArray.push(input[inputIndex]);
    }
} // end of 'input' loop

console.log(resultArray.join('').toUpperCase()); // EEIAEEEEUUII
// To maintain the space between words, just add empty ' ' to the end of the 'vowels' array
