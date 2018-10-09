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
        <section id="Profile">
          <ProfileIntro />
        </section>
        Projects
        <section id="Bio">
          <SimpleExpansionPanel />
        </section>
        <section id="Contact">
        Contact
        </section>
       
      </div>
    );
  }
}

export default App;
