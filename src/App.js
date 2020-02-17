// Name: Parsa Honarmand
// UCID: 30040722
// Tutorial: B05

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Keypad from './Keypad'
import Result from './Result'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>React Calculator</h2>
      </header>
      <div id="keypad">
        <Keypad />
      </div>
    </div>
  );
}

export default App;
