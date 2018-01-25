import React, { Component } from "react";

class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chirp: ""
    };
  }

  handleInputChange(value) {
    this.setState({ chirp: value });
  }

  handleClick(event) {
    this.props.handlePostChirp(this.state.chirp);
    this.setState({ chirp: "" });
  }

  render() {
    return (
      <form className="form col-md-6 my-2 mx-auto py-4 w-50">
        <input
          type="text"
          className="form-control"
          id="input-field"
          value={this.state.chirp}
          placeholder="What's Happening?"
          onChange={event => this.handleInputChange(event.target.value)}
        />
        <button
          type="button"
          className="btn btn-primary mt-3 w-25"
          onClick={event => this.handleClick(event)}
        >
          Chirp
        </button>
      </form>
    );
  }
}

export default InputField;
