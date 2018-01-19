import React from 'react';



//code goes here
class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(

      <div>
        <button onClick={() => this.props.addQuestion('multipleChoice')}>Multiple Choice</button>
        <button onClick={() => this.props.addQuestion('t/f')}>True/False</button>
        <button onClick={() => this.props.addQuestion('text')}>Text</button>
      </div>
    )
  }

}



export default AddQuestion
