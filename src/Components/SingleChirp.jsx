import React, { Component } from "react";

class SingleChirp extends Component {
  render() {
    let chirpList = this.props.list.map((chirp, index) => {
      return (
        <div className="card w-50 mx-auto mt-3" key={index}>
          <div className="card-body my-3 py-3">{chirp}</div>
        </div>
      );
    });
    return <div>{chirpList}</div>;
  }
}

export default SingleChirp;
