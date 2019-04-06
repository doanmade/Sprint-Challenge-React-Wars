import React, { Component } from "react";
import Characters from "./Characters";

import "../App.css";
class Starwars extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.person);
  }

  render() {
    return (
      <div className="allcharacters">
        {this.props.person.map(person => {
          return (
            <Characters
              name={person.name}
              birth={person.birth_year}
              gender={person.gender}
              eye={person.eye_color}
              hair={person.hair_color}
              height={person.height}
              mass={person.mass}
              skin={person.skin_color}
            />
          );
        })}
      </div>
    );
  }
}

export default Starwars;
