/*
Mini Linter project will pratice to improve the quality of a paragraph
as well as gather some information about that paragraph.
*/

// sample paragraph
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

// Split paragraph's words into array elements
let storyWords = story.split(' ');

// foundational arrays to help set the rules
let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// filter out unnecessary words
let betterWords = storyWords.filter(function(word) {
  	return !unnecessaryWords.includes(word);
});

// isolate over-used words and log their frequency
let overusedWordsCount = 0;
let really = 0;
let very = 0;
let basically = 0;

betterWords.forEach(function(freqWord) {
  if (overusedWords.includes(freqWord)) {
    overusedWordsCount++;
  }
  if (freqWord === overusedWords[0]) {
      really++;
	 } else if (freqWord === overusedWords[1]) {
      very++;
	 } else if (freqWord === overusedWords[2]) {
      basically++;
	 };
});

// Count how many sentences are in the paragraph
let sentenceCount = 0;
const re = /(\w+\.?\!?)/;

betterWords.forEach((punctuation) => {
  if (punctuation[punctuation.length-1] === "." ||
      punctuation[punctuation.length-1] === "!" ) {
      sentenceCount++;
	}
});

// print out results with IIFE
(() => {
  console.log(`There are ${storyWords.length} words.
There are ${sentenceCount} sentences.
You included these over used words ${overusedWordsCount} times.
really: ${really} times
very: ${very} times
basically: ${basically} time(s)
You've achieved 'Valley Girl' status!
`);
  // print out linted paragraph
  console.log(betterWords.join(' '));
})();
