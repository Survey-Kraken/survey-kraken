import React from 'react';



//code goes here
class Question extends React.Component {
  constructor(props) {
    super(props);
  }

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
