import React from 'react';

//code goes here
const ViewAll = () => {
  return (

    <div>
      {this.props.allSurveys.map(el => {
        return <span>{el.title}</span>
      })}
    </div>

  )
}

export default ViewAll
