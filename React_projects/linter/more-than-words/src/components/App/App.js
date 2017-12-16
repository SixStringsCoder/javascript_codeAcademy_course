import React, { Component } from 'react';
import './App.css';
import TextArea from '../TextArea/TextArea';
import Analyze from '../Analyze/Analyze';
import Dictionary from '../Dictionary/Dictionary';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.',
      stats: {
        ...this.state.stats,
        sentenceCount: 0,
        overusedWordsCount: 0,
        really: 0,
        very: 0,
        basically: 0,
      }
    }
  }


  cleanAnalyze() {

    // foundational arrays to help set the rules
    let overusedWords = ['really', 'very', 'basically'];
    let unnecessaryWords = ['extremely', 'literally', 'actually' ];

    // filter out unnecessary words
    let betterWords = this.state.story.filter(function(word) {
      	return !unnecessaryWords.includes(word);
    });

    // isolate over-used words and log their frequency
    betterWords.forEach(function(freqWord) {
      if (overusedWords.includes(freqWord)) {
        this.setState({
          stats: Object.assign({}, this.state.stats, {overusedWordsCount: overusedWordsCount + 1,})
        });
      }
      if (freqWord === overusedWords[0]) {
        this.setState({
          stats: Object.assign({}, this.state.stats, {really: really + 1,})
        });
    	 } else if (freqWord === overusedWords[1]) {
         this.setState({
           stats: Object.assign({}, this.state.stats, {very: very + 1,})
         });
    	 } else if (freqWord === overusedWords[2]) {
         this.setState({
           stats: Object.assign({}, this.state.stats, {basically: basically + 1,})
         });
    	 };
    });

    // Count how many sentences are in the paragraph
    const re = /(\w+\.?\!?)/;

    betterWords.forEach((punctuation) => {
      if (punctuation[punctuation.length-1] === "." ||
          punctuation[punctuation.length-1] === "!" ) {
            this.setState({
              stats: Object.assign({}, this.state.stats, {sentenceCount: sentenceCount + 1,})
            });
    	     }
    }); // End of forEach
  } // End of cleanAnalyze

  printResults() {
    const analysis = `There are ${this.state.story.length} words.
    There are ${this.state.stats.sentenceCount} sentences.
    You included these over used words ${this.state.stats.overusedWordsCount} times.
    really: ${this.state.stats.really} times
    very: ${this.state.stats.very} times
    basically: ${this.state.stats.basically} time(s)
    You've achieved 'Valley Girl' status!`
  }

  render() {
    return (
      <main id="app">
        <header class="navBar">
          <h1>More Than Words &#9997; <span>The Online Linter</span></h1>
        </header>

        <TextArea text={this.state.story} />
        <Analyze analyze={this.cleanAnalyze}/>
        <Dictionary />

      </main>
    );
  }
}

export default App;
