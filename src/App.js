import React, { Component } from "react";
import Chirps from "./Components/Chirps";
import NavBar from "./Components/NavBar";
import "./App.css";
// import SingleChirp from "./Components/SingleChirp";

class App extends Component {
  handlePostChirp(message) {
    // this logic will add a new chirp to the array
    console.log(message);
    // this.setState({ message });
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container" />
        <Chirps />
      </div>
    );
  }
}

export default App;
