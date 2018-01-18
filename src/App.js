import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path='/' render={(props) => <LandingPage />}/>
      </div>
      </Router>
    );
  }
}

export default App;
