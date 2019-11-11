import React, { Component } from "react";
import "./App.css";
import Ninjas from "./Ninjas";

class App extends Component {
  state = {
    ninjas: [
      { name: "Daniel", age: 26, belt: "black", id: 1 },
      { name: "Anabel", age: 24, belt: "brown", id: 2 },
      { name: "Jenhy", age: 48, belt: "yellow", id: 3 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Ninjas</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
