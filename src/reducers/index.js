import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import newSurvey from './newSurvey.js';

const rootReducer = combineReducers( {
  newSurvey, routing: routerReducer
});

export default rootReducer;
