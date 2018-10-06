import React, { Component } from 'react';
import './App.css';
import Input from './InputComponent/InputComponent';


class App extends Component {

  state= {
    textInput:{
      value: 'String',
      length: Number,
    }
  } 
  countLength = (event) =>{
    const newState = [...this.state.textInput];
    const textInputValue = event.target.value;
    const textInputLength = textInputValue.countLength();
    newState.value = textInputValue;
    newState.length = textInputLength;
    this.setState({textInput: newState});
    
    console.log(this.state.textInput.length);
  }
  render() {
    return (
      <div className="App">
        <Input onUserInput={(event) => this.countLength(event)} length={this.state.textInput.length} />
        {this.state.textInput.length}
        
      </div>      
    );
  }
}

export default App;
