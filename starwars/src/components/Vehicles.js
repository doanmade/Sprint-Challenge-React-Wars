import React, { Component } from "react";

class Vehicles extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.model}</p>
      </div>
    );
  }
}

export default Vehicles;
