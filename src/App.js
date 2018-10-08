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
        <div>
          <ProfileIntro />
        </div>
        Projects
        <div>
          <SimpleExpansionPanel />
        </div>
        Contact info
      </div>
    );
  }
}

export default App;
