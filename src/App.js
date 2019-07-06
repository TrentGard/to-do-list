import React from "react";
import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import List from "./components/List";

class App extends React.Component {
  state = {
    text: "",
    items: []
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleDelete = items => {
    this.setState(state => {
      const items = state.items.filter(item => !item.checked);
      return { items };
    });
  };

  handleCheck = id => {
    this.setState(state => {
      // cycle through existing items creating new array to prevent mutation
      const items = state.items.map(item => {
        // find item we clicked on
        if (id === item.id) {
          // for the one we clicked on return a new (copy of) object with checked field to prevent mutation
          return { ...item, checked: !item.checked };
        }
        // we hit here if this item is not one clicked on to return the item unchanged
        return item;
      });
      // we set the items in our state equal to our new array of items
      return { items };
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      checked: false
    };

    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ""
    }));
  };

  render() {
    return (
      <div className="App p-5">
        <Title />
        <List items={this.state.items} handleChange={this.handleCheck} />
        <Form
          userInput={this.state.text}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
