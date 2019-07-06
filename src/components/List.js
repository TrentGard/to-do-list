import React from "react";
import ListItem from "./ListItem";

function List({ items, handleChange }, props) {
  return (
    <div className="container flex justify-content-center">
      <br />
      <ul>
        {items.map(item => {
          return (
            <div>
              <ListItem
                item={item}
                checked={item.checked}
                handleChange={handleChange}
                id={item.id}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
