import React from "react";
import "../App.css";
import Worlds from "./Worlds.js";

class Planet extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.world);
  }

  render() {
    return (
      <div className="allcharacters">
        {this.props.world.map(world => {
          return (
            <Worlds
              home={world.name}
              terrain={world.terrain}
              gravity={world.gravity}
              pop={world.population}
            />
          );
        })}
      </div>
    );
  }
}

export default Planet;
