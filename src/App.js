import React, { Component } from "react";
import "./App.css";
import PrimarySearchAppBar from "./Components/UI/PrimarySearchAppBar";
import SimpleExpansionPanel from "./Components/UI/SimpleExpansionPanel";
import ProfileIntro from "./Components/UI/ProfileIntro";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <PrimarySearchAppBar />
        </div>
        <h1>Matthew Iverson</h1>
        <div>
          <ProfileIntro />
        </div>
        <div>
          <SimpleExpansionPanel />
        </div>
      </div>
    );
  }
}

export default App;
