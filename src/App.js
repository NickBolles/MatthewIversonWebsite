import React, { Component } from 'react';
import './App.css';
import PrimarySearchAppBar from "./Components/UI/PrimarySearchAppBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        Welcome all!
        </header>
        <div><PrimarySearchAppBar/></div>
      </div>
    );
  }
}

export default App;
