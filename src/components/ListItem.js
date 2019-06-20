import React from 'react';
import Checkbox from './Checkbox';

function ListItem(props) {

    return (
        <li>
            <span>{props.item.text}</span>
            <Checkbox id={props.item.id} checked={props.checked} handleChange={props.handleChange} />
        </li>
    )
}

export default ListItem;