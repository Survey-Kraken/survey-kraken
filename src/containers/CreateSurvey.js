import React from 'react';
import AddQuestion from '../components/AddQuestion.js';
import Question from '../components/Question.js'
import {connect} from 'react-redux'
import { addQuestion } from '../actions/index.js';
import {bindActionCreators} from 'redux';
import store from '../store.js';

class CreateSurvey extends React.Component {
  componentWillReceiveProps(){
    console.log(this.props)
  }

  render() {
    return (

      <div>
        <div>Welcome to the create survey page!</div>
        <form id='newSurvey' name="form">
          <div>
            <label>
              Survey Title:
            </label>
            <input type='text' name='title'/>
          </div>
          <div>
            {this.props.questions && this.props.newSurvey.questions.map(function(question, index) {
              return <Question question={question} key={index}/>
            })}
          </div>
        </form>
        <AddQuestion/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.newSurvey
}

function mapDispatchToProps(dispatch) {
  return {
    addQuestion: bindActionCreators(addQuestion, dispatch),
    // createNewSurvey: bindActionCreators(createNewSurvey, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateSurvey)
