import React, { Component } from "react";
import logo from "../Images/owl-logo.png";

class NavBar extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Chirper</h1>
      </header>
    );
  }
}

export default NavBar;
