import React, { Component } from 'react';
import './Button.css'; // Tell Webpack that Button.js uses these styles
import './App.css'

class Button extends Component {
  render() {
    return (
      <div className="App-nav">
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}

export default Button