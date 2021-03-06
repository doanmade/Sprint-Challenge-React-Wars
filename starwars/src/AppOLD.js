import React, { Component } from "react";
import "./App.css";
import Planet from "./components/Planet.js";
import Starwars from "./components/Starwars.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      homeWorld: []
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
    this.getWorlds("https://swapi.co/api/planets/");
  }

  getWorlds = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ homeWorld: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div>
        <h1 className="Header">The Real React Wars </h1>

        <div className="App">
          <h1 className="sectionHead">People</h1>
          <div className="people">
            <Starwars person={this.state.starwarsChars} />

            <h1 className="sectionHead">Planets</h1>
            <Planet world={this.state.homeWorld} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
