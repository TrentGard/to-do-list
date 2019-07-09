import React from "react";
import ListItem from "./ListItem";

function List({ items, handleChange }) {
  return (
    <div className="row justify-content-center">
      <br />
      <ul className="col-auto">
        {items.map(item => {
          return (
            <ListItem
              item={item}
              checked={item.checked}
              handleChange={handleChange}
              id={item.id}
              key={item.id}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default List;
