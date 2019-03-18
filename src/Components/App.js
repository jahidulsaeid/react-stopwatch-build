import React, { Component } from 'react';
// import logo from '../logo.svg';
import './App.css';

import Title from './Title/Title'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        <Title/>
        </div>
      </div>
    );
  }
}

export default App;
