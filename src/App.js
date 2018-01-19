import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import CreateSurvey from './components/CreateSurvey'
import ViewAll from './components/ViewAll'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' render={(props) => <LandingPage />}/>
          <Route path='/create' component={ CreateSurvey } />
          <Route path='/surveys' component={ ViewAll } />
        </div>
      </Router>
    );
  }
}

export default App;
