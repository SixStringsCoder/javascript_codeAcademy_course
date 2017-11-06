/*
Message Mixer is a messaging service that allows you to perform an action a string of text
and display the output of that behavior to the console.
Objective: turn Message Maker into a module
Steve Hanlon Oct. 10, 2017
*/

// empty object to represent this module as an object
let MessageMixer = {};

// make each MessageMixer.a property on the object MessageMixer
MessageMixer.countCharacter = function(inputString, inputCharacter) {
  let count = 0;
  let string = inputString.toLowerCase();
  let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
         count++;
      }
    }
  return 'Word count: ' + count;
};

MessageMixer.capitalizeFirstCharacterOfWords = function(string) {
  let arr = string.split(" ");
    for (let i = 0; i < arr.length; i++) {
      let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1);
    }
  return arr.join(" ");
};


MessageMixer.reverseWord = function(word) {
  return word.split("").reverse().join("");
};

MessageMixer.reverseAllWords = function(sentence) {
  let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = MessageMixer.reverseWord(words[i]);
    }
   return words.join(" ");
};


MessageMixer.replaceFirstOccurence = function(string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};


MessageMixer.replaceAllOccurrences = function(string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};

MessageMixer.encode = function(string) {
  let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
    for (let key in replacementObject) {
      string = MessageMixer.replaceAllOccurrences(string, key, replacementObject[key]);
    }
    return string;
};

MessageMixer.palindrome = function(string) {
  return `This is a palindrome: ${string} ${MessageMixer.reverseWord(string)}`;
}

// return the sentence split at each of the spaces, and joined back together using the character argument concatenated with a " ".
MessageMixer.pigLatin = function(sentence, character) {
  return sentence.split(' ').join(character + ' ');
}

// export the MessageMixer object
module.exports = MessageMixer;
