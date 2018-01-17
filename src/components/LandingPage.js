import React from 'react';

import CreateSurvey from '../components/CreateSurvey'
import AddQuestion from '../components/AddQuestion'
import ViewAll from '../components/ViewAll'

const LandingPage = () => {
  return (
    <div>
    <h1 className="App-title">Welcome to Survey Kraken</h1>
    <p>Please begin by either creating a survey or viewing/taking a survey</p>
    <div>
      <button>
      <CreateSurvey />
      </button>
    </div>
    <div>
      <button>
      <ViewAll />
      </button>
    </div>
    </div>
  )
}



export default LandingPage
