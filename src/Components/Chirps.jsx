import React, { Component } from "react";
import SingleChirp from "./SingleChirp";
import InputField from "./InputField";

class Chirps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chirpsList: [
        "Oh it's a chirp",
        "My second chirp",
        "Third time is the charm"
      ]
    };
  }

  handleList(value) {
    let newList = [...this.state.chirpsList];
    if (value === "") {
      console.log("It worked");
    } else {
      newList.push(value);
      this.setState({ chirpsList: newList });
    }
  }
  render() {
    return (
      <div>
        <InputField handlePostChirp={text => this.handleList(text)} />
        <SingleChirp list={this.state.chirpsList} />
      </div>
    );
  }
}

export default Chirps;
