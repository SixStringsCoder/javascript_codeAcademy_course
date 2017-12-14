import React, { Component } from 'react';
import './App.css';
import TextArea from '../TextArea/TextArea';
import Analyze from '../Analyze/Analyze';
import Dictionary from '../Dictionary/Dictionary';

class App extends Component {
  render() {
    return (
      <main id="app">
        <header class="navBar">
          <h1>More Than Words &#9997; <span>The Online Linter</span></h1>
        </header>
        
        <TextArea />
        <Analyze />
        <Dictionary />

      </main>
    );
  }
}

export default App;
