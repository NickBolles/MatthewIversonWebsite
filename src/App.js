import React, { Component } from "react";
import "./App.css";
import PrimarySearchAppBar from "./Components/UI/PrimarySearchAppBar";
import ProfileIntro from "./Components/UI/ProfileIntro";
import ControlledExpansionPanels from "./Components/UI/ControlledExpansionPanels";
import SingleLineGridList from "./Components/UI/SingleLineGridList";

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
        <section>
        <ControlledExpansionPanels />
        </section>
        <section id="Books">
          Favorite Books
          <SingleLineGridList />
        </section>
        <section id="Contact">
        CONTACT
        </section>
      </div>
    );
  }
}

export default App;
