import React from 'react';
import {addQuestion} from '../actions/index.js';
import store from '../store.js';


//code goes here
class AddQuestion extends React.Component {
  componentDudMount() {
    console.log('question mount')
  }
  render () {
    return(
      <div>
        <div>Choose a type of question to add: </div>
        <button onClick={() => store.dispatch(addQuestion('multipleChoice'))}>Multiple Choice</button>
        <button onClick={() => store.dispatch(addQuestion('t/f'))}>True/False</button>
        <button onClick={() => store.dispatch(addQuestion('text'))}>Text</button>
      </div>
    )
  }

}



export default AddQuestion
