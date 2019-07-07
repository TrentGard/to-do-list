import React from "react";
import Button from "./Button";

function Form(props) {
  return (
    <form
      className="d-flex justify-content-center"
      onSubmit={props.handleSubmit}
    >
      <input
        className="row p-2 m-2"
        type="text"
        value={props.userInput}
        onChange={props.handleChange}
      />
      <Button
        text="Add"
        onClick={props.handleSubmit}
        className="p-2 m-2 alert alert-success"
      />
      <Button
        className="p-2 m-2 alert alert-danger"
        text="Delete"
        onClick={props.handleDelete}
      />
    </form>
  );
}

export default Form;
