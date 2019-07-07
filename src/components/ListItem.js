import React from "react";
import Checkbox from "./Checkbox";

function ListItem(props) {
  return (
    <div>
      <li className="alert alert-warning">
        <span>
          {props.item.text}
          <Checkbox
            id={props.item.id}
            checked={props.checked}
            handleChange={props.handleChange}
          />
        </span>
      </li>
    </div>
  );
}

export default ListItem;
