import React from "react";
import Checkbox from "./Checkbox";

function ListItem(props) {
  return (
    <div className="row flex container justify-content-center">
      <li className="justify-content-center alert alert-warning">
        <span>
          {props.item.text}
          <Checkbox
            id={props.item.id}
            checked={props.checked}
            handleChange={props.handleChange}
          />
        </span>
      </li>
      <br />
    </div>
  );
}

export default ListItem;
