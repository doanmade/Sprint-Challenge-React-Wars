import React from "react";
import Worlds from "./Worlds";

class Characters extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.world);
  }

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
        <p>Homeworld: {this.props.home}</p>

        {this.props.world.map(world => {
          return <Worlds home={world.name} />;
        })}
      </div>
    );
  }
}

export default Characters;
