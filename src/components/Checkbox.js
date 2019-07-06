import React from "react";

function Checkbox(props) {
  return (
    <input
      className="m-2 p-2"
      type="checkbox"
      checked={props.checked}
      onChange={() => props.handleChange(props.id)}
    />
  );
}

export default Checkbox;
