import React, { Component } from "react";
import "./App.css";
import PrimarySearchAppBar from "./Components/UI/PrimarySearchAppBar";
import SimpleExpansionPanel from "./Components/UI/SimpleExpansionPanel";
import ProfileIntro from "./Components/UI/ProfileIntro";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
          <PrimarySearchAppBar />
        </div>
        <div class="container">
          <ProfileIntro />
        </div>
        Projects
        <div class="container">
          <SimpleExpansionPanel />
        </div>
        Contact info
      </div>
    );
  }
}

export default App;
