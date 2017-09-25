/*
Using array methods, transform an array of strings into a secret message!
S. Hanlon Sept. 24, 2017
*/

let secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

// remove last item
secretMessage.pop();
// add two items to end
secretMessage.push("to", "program");
// replace item at index pos. 6
secretMessage[6] = "right";
// remove first item
secretMessage.shift();
// add to start of array
secretMessage.unshift("Programming");
// replace 5 items start at idex pos. 5 with the string 'know'
secretMessage.splice(5, 5, 'know');

// log the results to the console
console.log(secretMessage.join(' '));

// Programming isn't about what you know it's about what you can figure out. -2015, Chris Pine, Learn to program
