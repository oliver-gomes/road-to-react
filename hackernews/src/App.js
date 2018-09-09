import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'http://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
];


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
