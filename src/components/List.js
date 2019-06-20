import React from 'react';
import ListItem from './ListItem';

function List({ items, handleChange }) {

    return (
        <ul>
            {items.map(item => {
                return <ListItem item={item} key={item.id} checked={item.checked} handleChange={handleChange} />
            })}
        </ul>
    )
}

export default List;