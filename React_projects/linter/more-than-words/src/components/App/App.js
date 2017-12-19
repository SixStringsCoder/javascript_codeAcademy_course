import React, { Component } from 'react';
import './App.css';
import TextArea from '../TextArea/TextArea';
import Analyze from '../Analyze/Analyze';
import AnalyzeTextArea from '../AnalyzeTextArea/AnalyzeTextArea';
import Dictionary from '../Dictionary/Dictionary';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.',
      wordCount: 0,
      sentenceCount: 0,
      overusedWordsCount: 0,
      unNecessaryWordsCount: 0,
      really: 0,
      very: 0,
      basically: 0,
      extremely: 0,
      literally: 0,
      actually: 0,
      analysis: '',
    } // end of this.state
    this.cleanAnalyze = this.cleanAnalyze.bind(this);
    this.setPrintState = this.setPrintState.bind(this);
  }


  cleanAnalyze(text) {
    // Storage object for 'stats' before setting state
    const stats = {
      numberOfWords: 0,
      overusedWordsCount: 0,
      unnecessaryWordsCount: 0,
      sentenceCount: 0,
      really: 0,
      very: 0,
      extremely: 0,
      literally: 0,
      actually: 0,
      basically: 0,
    }

    // Split text entry into an array and get length to know numberOfWords
    let storyWords = this.state.story.split(' ');
    stats.numberOfWords = storyWords.length;
    console.log(storyWords);

    // Set the word rules based on these arrays
    let overusedWords = ['really', 'very', 'basically'];
    let unnecessaryWords = ['extremely', 'literally', 'actually' ];

    // Filter out unnecessary words
    let betterWords = storyWords.filter(function(word) {
      	return !unnecessaryWords.includes(word);
    });

    // Isolate OVER-USED words and log their frequency
    betterWords.forEach(function(freqWord) {
      if (overusedWords.includes(freqWord)) {
        stats.overusedWordsCount += 1;
      }
      if (freqWord === overusedWords[0]) {
          stats.really += 1;
    	 } else if (freqWord === overusedWords[1]) {
           stats.very += 1;
    	 } else if (freqWord === overusedWords[2]) {
           stats.basically += 1;
    	 };
    });

    // Isolate UNNECESSARY words and log their frequency
    storyWords.forEach(function(noNeedWord) {
      if (unnecessaryWords.includes(noNeedWord)) {
        stats.unnecessaryWordsCount += 1;
      }
      if (noNeedWord === unnecessaryWords[0]) {
          stats.extremely += 1;
    	 } else if (noNeedWord === unnecessaryWords[1]) {
           stats.literally += 1;
    	 } else if (noNeedWord === unnecessaryWords[2]) {
           stats.actually += 1;
    	 };
    });

    // Count how many sentences are in the paragraph based on punctuation
    betterWords.forEach((punctuation) => {
      const re = /[.!?]/;
      // Length-1 is the last character in the element
      const punct = punctuation[punctuation.length-1];
      if ( re.test(punct) ) {
           stats.sentenceCount += 1;
    	    }
    }); // End of forEach

    // send stats storage object to setPrintState function to set state
    this.setPrintState(stats);
  } // End of cleanAnalyze

  // Fill in report template with stats and Set state for all stats
  setPrintState(statsObject) {
    // Populate template with object values
    let report = `There are ${statsObject.numberOfWords} words.
                 There are ${statsObject.sentenceCount} sentences.
                 You included these over-used words ${statsObject.overusedWordsCount} times.
                 REALLY: ${statsObject.really} times
                 VERY: ${statsObject.very} times
                 BASICALLY: ${statsObject.basically} time(s)
                 You included these unnecessary words ${statsObject.unnecessaryWordsCount} times.
                 EXTREMELY: ${statsObject.extremely} times
                 LITERALLY: ${statsObject.literally} times
                 ACTUALLY: ${statsObject.actually} time(s)`;

    this.setState({
      wordCount: statsObject.numberOfWords,
      sentenceCount: statsObject.sentenceCount,
      overusedWordsCount: statsObject.overusedWordsCount,
      really: statsObject.really,
      very: statsObject.very,
      basically: statsObject.basically,
      extremely: statsObject.extremely,
      literally: statsObject.literally,
      actually: statsObject.actually,
      analysis: report
    });
  }

  render() {
    return (
      <main id="app">
        <header class="navBar">
          <h1>More Than Words &#9997; <span>The Online Linter</span></h1>
        </header>

        <TextArea text={this.state.story} />
        <Analyze analyze={this.cleanAnalyze} />
        <AnalyzeTextArea printAnalysis={this.state.analysis} />
        <Dictionary />

      </main>
    );
  }
}

export default App;
