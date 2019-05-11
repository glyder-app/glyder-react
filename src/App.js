import React, { Component } from "react";
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
        
        <Gmap ref={el => (this.mapComponent = el)}/>
        
        <button class="toggleButton"
          onClick={() => {
            if (this.mapComponent) {
              this.mapComponent.toggleSat();
            }
          }}
        >
          Toggle Satellite
        </button>

        <button class="toggleFire"
          onClick={() => {
            if (this.mapComponent) {
              this.mapComponent.toggleFire();
            }
          }}
        >
          Toggle Fire
        </button>

      </div>
    );
  }
}

export default App;
