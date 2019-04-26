import React from "react";

class Worlds extends React.Component {
  render() {
    return (
      <div className="characters">
        <p>Homeworld: {this.props.home}</p>
      </div>
    );
  }
}

export default Worlds;
