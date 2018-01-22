import React from 'react';
import AddQuestion from './AddQuestion.js';
import Question from './Question.js'

//code goes here
class CreateSurvey extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      title: ''
    }
    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.addQuestion = this.addQuestion.bind(this)
  }

  addQuestion(type) {
    let question = {};
    switch (type) {
      case 't/f':
        question['type'] = type
        question['prompt']
        question['choices'] = ['true', 'false']
        break;
      case 'multipleChoice':
        question['type'] = type
        question['prompt'] = '';
        question['choices'] = ['','','',''];
        break;
      case 'text':
        question['type'] = type
        question['prompt'] = '';
        question['response'] = '';
    }
    let questions = this.state.questions;
    questions.push(question)
    this.setState({
      questions: questions
    })
    console.log(this.state)
  }

  handleChangeTitle(e) {
    const object = {};
    let title = e.target.name;
    object[title] = e.target.value;
    this.setState(object)
    console.log(this.state)
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
            <input type='text' name='title' onChange={this.handleChangeTitle}/>
          </div>
          <div>
            <span>Choose a type of question to add: </span>
            {this.state.questions.map(function(question, index) {
              return <Question question={question} key={index}/>
            })}
          </div>
        </form>
        <AddQuestion addQuestion={this.addQuestion}/>

      </div>
    )
  }
}






export default CreateSurvey
