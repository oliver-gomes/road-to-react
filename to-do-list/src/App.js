import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: ""
    };
  }

  onInputChange = e => {
    this.setState({ currentTodo: e.target.value });
  };

  addTodo = () => {
    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.currentTodo);

    this.setState({ todos: todosCopy, currentTodo: "" });
  };
  render() {
    let bulletTodo = this.state.todos.map((e, i) => {
      return <li key={i}>{e}</li>;
    });
    return (
      <div>
        <input
          placeholder="Enter todo"
          value={this.state.currentTodo}
          onChange={this.onInputChange}
        />
        <button onClick={this.addTodo}>Add!</button>
        <br />
        {this.state.todos.length === 0 ? (
          "No todos yet!"
        ) : (
          <ul>{bulletTodo}</ul>
        )}
      </div>
    );
  }
}

export default App;
