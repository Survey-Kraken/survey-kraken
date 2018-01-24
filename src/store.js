import { createStore } from 'redux';
// import { syncHistoryWithStore } from 'react-router-redux';
// import { browserHistory } from 'react-router';

import rootReducer from './reducers/index.js';
//
// const defaultState = {
//   newSurvey: {
//     title: '',
//     questions: []
//   },
//   allSurveys: []
// }

const store = createStore(rootReducer);

// export const history = syncHistoryWithStore(browserHistory, store);

export default store;
