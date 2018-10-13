import React, { Component } from "react";
import "./App.css";
import AppBar from "./Components/UI/AppBar";
import Landing from "./Sections/Landing";
import ControlledExpansionPanels from "./Components/UI/ControlledExpansionPanels";
import Contact from "./Sections/Contact";
import BioButton from "./Components/UI/BioButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <AppBar />
        </section>
        <section className="Profile">
          <Landing />
        <section>
          <BioButton />
        </section>
        <section>
          <div className="page-content" />
{/*
             Main
*/}
        </section>
        <section>
          <ControlledExpansionPanels />
        </section>
        <section className="TempSmallContainer">
          <Contact />
        </section>
        <section>
        </section>
        </section>
      </div>
    );
  }
}

export default App;
