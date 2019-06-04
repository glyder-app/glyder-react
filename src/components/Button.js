import React, { Component } from 'react';
import '../styles/Button.css'; // Tell Webpack that Button.js uses these styles

class Button extends Component {
  render() {
    return (
      <div className="component-button">
        <button onClick={this.handleClick}>{'buttons go here'}</button>
      </div>
    );
  }
}

export default Button