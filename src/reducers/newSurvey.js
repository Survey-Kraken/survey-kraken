import { ADD_QUESTION } from '../actions/index.js';

const initialState = {
  newSurvey: {
    title: '',
    questions: [],
  },
  allSurveys: []
}

function newSurvey(state = initialState, action) {
  const question = {};
  switch(action.type) {
    case ADD_QUESTION:
      switch (action.payload) {
        case 't/f':
        question['type'] = action.payload
        question['prompt'] = ''
        question['choices'] = ['true', 'false']
        break;
        case 'multipleChoice':
        question['type'] = action.payload
        question['prompt'] = '';
        question['choices'] = ['','','',''];
        break;
        default:
        question['type'] = action.payload
        question['prompt'] = '';
        question['response'] = '';
        break;
      }
      const newSurvey = state.newSurvey;
      newSurvey.questions.push(question);
      return Object.assign({}, state, newSurvey)
    default:
      return state;
  }
}

export default newSurvey;
