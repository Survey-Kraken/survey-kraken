import React from 'react';



//code goes here
class Question extends React.Component {
  componentWillMount() {
    console.log(this.props)
  }

  render () {
    return(

      <div>
        <div>{this.props.question.type}</div>
        <div>
          <label>
            Prompt:
          </label>
          <input name='prompt' type='text'/>
          {this.props.question.choices && this.props.question.choices.length === 4 && this.props.question.choices.map(function(el, index) {
            return <div key={index}>
              <input type='text'/>
            </div>
          })}
        </div>
      </div>
    )
  }

}



export default Question
