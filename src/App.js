import React, { Component } from 'react';
import './App.css';
import Input from './InputComponent/InputComponent';
import ValidatorComponent from './ValidatorComponent/ValidatorComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      textInput: {
        value: String,
        length: 0,
      }
    }
  }
  
  
  countLength = (event) => {

    const newState = {...this.state.textInput};
    const textInputLength = event.target.value.length;
    const textInputValue = event.target.value;
    newState.length = textInputLength;
    newState.value = textInputValue;
    this.setState({ 
      textInput: newState 
    });
  }

  clickDelete = (index) => {
    const text = this.state.textInput.value.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({
      textInput: {
        value: updatedText,
        length: updatedText.length
      }
    });
  }

  render() {

    var charArrayDisplay = null;
    charArrayDisplay = this.state.textInput.value.split('').map((ch, index) => {
      return <CharComponent charInput={ch}
                            key={index}
                            clicked={() => this.clickDelete(index)} />
    })

    return (
      <div className="App">
        <Input onUserInput={(event) => this.countLength(event)} length={this.state.textInput.length} />
        <ValidatorComponent textLength={this.state.textInput.length} />
        {charArrayDisplay}
      </div>
    );
  }
}

export default App;
