import React from "react";
import Checkbox from "./Checkbox";

function ListItem(props) {
  return (
    <div className="container row">
      <div className="col-md-5" />
      <li className="col-md-3 flex-align-center alert alert-warning">
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
