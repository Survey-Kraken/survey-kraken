import React, { Component } from 'react';
import './App.css';
import LandingPage from './containers/LandingPage';
import CreateSurvey from './containers/CreateSurvey'
import ViewAll from './containers/ViewAll'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from './store.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className = 'app'>
          <Route exact path='/' render={(props) => <LandingPage />}/>
          <Route path='/create' component={ CreateSurvey } />
          <Route path='/surveys' component={ ViewAll } />
        </div>
      </Router>
    );
  }
}

export default App;
