import React, { Component } from 'react';
import './App.css';
import TextArea from '../TextArea/TextArea';
import Analyze from '../Analyze/Analyze';
import AnalyzeTextArea from '../AnalyzeTextArea/AnalyzeTextArea';
import Dictionary from '../Dictionary/Dictionary';
import Oxford from '../../util/Oxford';

const styles = {
  color: 'red',
  textShadow: '1px 1px green',
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textEntry: '',
      wordCount: 0,
      sentenceCount: 0,
      overusedWordsCount: 0,
      unNecessaryWordsCount: 0,

      analysis: '',
      dictWord: '',
    } // end of this.state
    this.cleanAnalyze = this.cleanAnalyze.bind(this);
    this.setPrintState = this.setPrintState.bind(this);
    this.addText = this.addText.bind(this);
  }

  // Text pasted into <textarea> box
  addText(text) {
    this.setState({
      textEntry: text
    });
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
      story: '',
    }

    // Split text entry into an array and get length to know numberOfWords
    let storyWords = this.state.textEntry.split(' ');
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
    storyWords.forEach(function(noNeedWord, index) {
      if (unnecessaryWords.includes(noNeedWord)) {
        stats.unnecessaryWordsCount += 1;
        storyWords[index] = `<span style={{color: 'red'}}>${noNeedWord}</span>`;
        console.log(storyWords[index]);
        stats.story = storyWords;
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

    // Send stats storage object to setPrintState function to set state
    this.setPrintState(stats);
  } // End of cleanAnalyze

  // Fill in report template with stats and Set state for all stats
  setPrintState(statsObject) {
    const highlights = statsObject.story.join(' ');
    const updatedText = <p>{highlights}</p>;

    // Populate template with object values
    let report = <div class="report">
                 <ul><li>There are {statsObject.numberOfWords} words.</li>
                 <li>There are {statsObject.sentenceCount} sentences.</li></ul>
                 <ul><li>You included these <span style={{color: 'red'}}>over-used words</span> {statsObject.overusedWordsCount} times.</li>
                 <li>You included these <span style={{fontWeight: 'bold'}}>unnecessary words</span> {statsObject.unnecessaryWordsCount} times.</li></ul>
                </div>;



    this.setState({
      textEntry: updatedText,
      wordCount: statsObject.numberOfWords,
      sentenceCount: statsObject.sentenceCount,
      overusedWordsCount: statsObject.overusedWordsCount,
      analysis: report
    });
  }

  lookUpWord(word) {
    Oxford.getAccess();
    // this.setState({
    //   dictWord: word
    // });
  }

  render() {


    return (
      <main id="app">
        <header class="navBar">
          <h1>More Than Words &#9997; <span>The Online Linter</span></h1>
        </header>

        <TextArea addText={this.addText} text={this.state.textEntry} />
        <Analyze analyze={this.cleanAnalyze} />
        <AnalyzeTextArea printAnalysis={this.state.analysis} />

        <Dictionary lookUpWord={this.lookUpWord}/>

      </main>
    );
  }
}

export default App;
