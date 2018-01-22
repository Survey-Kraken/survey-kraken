import React from 'react';

import CreateSurvey from '../components/CreateSurvey'
import AddQuestion from '../components/AddQuestion'
import ViewAll from '../components/ViewAll'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const LandingPage = () => {


  return (
    <div>
      <h1 className="App-title">Welcome to Survey Kraken</h1>
      <p>Please begin by either creating a survey or viewing/taking a survey</p>
      <div>
        <button>
          <Link to={'/create'}>Create a new Survey</Link>
        </button>
      </div>
      <div>
        <button>
          <Link to={'/surveys'}>Take a Survey</Link>
        </button>
      </div>
    </div>
  )
}



export default LandingPage
