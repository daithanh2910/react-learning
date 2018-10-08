import React, { Component } from 'react';

const ValidatorComponent = (props) => {

    return (
        <div>
            {props.textLength > 10 ? <p>Text too long</p> 
            : (props.textLength < 5 && props.textLength > 0) ? <p>Text too short</p> 
            : props.textLength === 0 ? <p>No input text</p>
            : <p>Length is ok</p>}
        </div>
    )    
}

export default ValidatorComponent;