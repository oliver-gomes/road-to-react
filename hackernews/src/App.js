import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var helloWorld = 'Welcome to the Road to React';
    var learn = 'Super excited to learn React';
    var userName = {
      firstname: 'Oliver',
      lastname: 'Gomes'
    }
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <h3>{learn}</h3>
        <h4>{`My name is ${userName.firstname} ${userName.lastname}`}</h4>
      </div>
    );
  }
}

export default App;
