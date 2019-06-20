import React from 'react';

function Button(props) {

    return <button onClick={props.onClick}>{props.text} Item</button>

}

export default Button;