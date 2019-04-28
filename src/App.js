import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import Gmap from "./Gmap.js";
import Button from "./Button.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>header & navbar stuff go here</p>
        </header> */}
        
        <Gmap ref={el => (this.mapComponent = el)} />
        
        <button
          onClick={() => {
            if (this.mapComponent) {
              this.mapComponent.addHexagon();
            }
          }}
        >
          Button from parent
        </button>
      </div>
    );
  }
}

export default App;