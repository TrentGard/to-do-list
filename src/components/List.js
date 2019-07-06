import React from "react";
import ListItem from "./ListItem";

function List({ items, handleChange }) {
  return (
    <div>
      <br />
      <ul>
        {items.map(item => {
          return (
            <div>
              <ListItem
                item={item}
                key={item.id}
                checked={item.checked}
                handleChange={handleChange}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
