import React, {Component} from 'react';

const CharComponent = (props) => {
    
    return (
        <div className="CharComponent" onClick={props.clicked}>
            <p>{props.charInput}</p>
        </div>
    )
}

export default CharComponent;