import React, { Component } from 'react';

const InputComponent = (props) => {
    
    return (
        <div>
            <input type="text" onChange={props.onUserInput} />
            <div>Text length is: {props.length} </div>
        </div>
    );
}

export default InputComponent