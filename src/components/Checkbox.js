import React from 'react';

function Checkbox(props) {

    return (

        <input type="checkbox" checked={props.checked} onChange={() => props.handleChange(props.id)}></input>

    )
}

export default Checkbox;