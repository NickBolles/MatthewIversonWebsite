import React, { Component } from "react";
import "./App.css";
import PrimarySearchAppBar from "./Components/UI/PrimarySearchAppBar";
import Landing from "./Sections/Landing";
import ControlledExpansionPanels from "./Components/UI/ControlledExpansionPanels";
import Contact from "./Sections/Contact";
import BioButton from "./Components/UI/BioButton";
import Main from "./Sections/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <PrimarySearchAppBar />
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
