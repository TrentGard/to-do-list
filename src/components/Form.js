import React from 'react';
import Button from './Button';

function Form(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <input type="text" value={props.userInput} onChange={props.handleChange}></input>
            <Button text="Add" onClick={props.handleSubmit} />
            <Button text="Delete" onClick={props.handleDelete} />
        </form>
    );
};

export default Form;