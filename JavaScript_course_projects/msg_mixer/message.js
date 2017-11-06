// import module MessageMixer
const Mixer = require('./messageMixer.js');

//call each of the functions as properties of the MessageMixer object, now assigned to const Mixer
function displayMessage() {
  console.log(Mixer.countCharacter("What is the color of the sky?", "t"));
  console.log(Mixer.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(Mixer.reverseWord("What is the color of the sky?"));
  console.log(Mixer.reverseAllWords("What is the color of the sky?"));
  console.log(Mixer.replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
  console.log(Mixer.encode("What is the color of the sky?"));
  console.log(Mixer.palindrome("Banana"));
  console.log(Mixer.pigLatin("What is the color of the sky?", "ay"));
}

// Show logs of messages
displayMessage();
