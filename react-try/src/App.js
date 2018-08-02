import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './Validation/Validation.js';
import Char from './Char/Char.js'

class App extends Component {
state = {
  userInput: ''
}
inputChangedHandler = (event) => {
  this.setState({
    userInput:event.target.value
  });
}

  deleteCharHandler = ( index ) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render() {
    const charlist = this.state.userInput.split('').map((ch, index) => {
      return <Char character= {ch} key= {index} clicked = {() => this.deleteCharHandler(index)}/>
    });
    return (
      <div className= "App">

        <input type="text" onChange= {this.inputChangedHandler} value={this.state.userInput} />
      <p>{this.state.userInput}</p>
    <ValidationComponent inputlength = {this.state.userInput.length}/>
    {charlist}
      </div>
    );
  }
}

export default App;
