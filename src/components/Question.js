import React from 'react';



//code goes here
class Question extends React.Component {
  

  render () {
    return(

      <div>
        {this.props.question.type}
        Question!
      </div>
    )
  }

}



export default Question
