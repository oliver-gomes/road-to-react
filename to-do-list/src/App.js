import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  Increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.Increment}>Increment</button>
        {this.state.count}
      </div>
    );
  }
}

export default App;
