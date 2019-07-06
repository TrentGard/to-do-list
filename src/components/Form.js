import React from "react";
import Button from "./Button";

function Form(props) {
  return (
    <form
      className="p-2 m-2 d-flex justify-content-center"
      onSubmit={props.handleSubmit}
    >
      <input
        className="row p-2 m-2 d-flex justify-content-center"
        type="text"
        value={props.userInput}
        onChange={props.handleChange}
      />
      <Button
        text="Add"
        onClick={props.handleSubmit}
        className="p-2 m-2 alert alert-success m3"
      />
      <Button
        className="p-2 m-2 alert alert-danger m3"
        text="Delete"
        onClick={props.handleDelete}
      />
    </form>
  );
}

export default Form;
