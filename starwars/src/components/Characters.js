import React, { Component } from "react";

class Characters extends React.Component {
  render() {
    return (
      <div className="characters">
        <h2>{this.props.name}</h2>
        <p>Gender: {this.props.gender}</p>

        <p>Eye-Color: {this.props.eye}</p>
        <p>Hair-Color: {this.props.hair}</p>
        <p>Height: {this.props.height}cm</p>
        <p>Mass: {this.props.mass}kg</p>
        <p>Skin Color: {this.props.skin}</p>
        <p>Birth Year: {this.props.birth}</p>
      </div>
    );
  }
}

export default Characters;
