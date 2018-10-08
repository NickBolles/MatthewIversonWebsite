import React, { Component } from "react";
import "./App.css";
import PrimarySearchAppBar from "./Components/UI/PrimarySearchAppBar";
import SimpleExpansionPanel from "./Components/UI/SimpleExpansionPanel";
import ProfileIntro from "./Components/UI/ProfileIntro";
import Chip from "./Components/UI/ChipsPlayground";

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
        <div>
          <SimpleExpansionPanel />
        </div>
        <div>
        <Chip color="primary" /> 
        </div>
        Contact info
      </div>
    );
  }
}

export default App;

// avatar={<Avatar src="/static/images/uxceo-128.jpg" />}