import React from 'react';

const ValidationComponent = (props) => {
  let validationMessage = 'text long enough';
  if(props.inputlength <= 5){
    validationMessage = 'text too shortt enough';
  }
    return (
      <div>{
          props.inputlength <= 5 ?

      <p>Text too Short</p> :
      <p>Text too Long</p>
      }
      <p> {validationMessage} </p>
      </div>

    )
};


export default ValidationComponent;
