import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/Test'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to Survey Kraken</h1>
        <Test />
      </div>
    );
  }
}

export default App;
