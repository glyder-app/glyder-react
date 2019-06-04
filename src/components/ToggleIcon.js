import React, { Component } from 'react';
import '../styles/ToggleIcon.css'; // Tell Webpack that Toggle.js uses these styles

class ToggleIcon extends Component {
  render() {
    return (
      <div className="component-ToggleIcon">
		<input className="component-ToggleIcon_Icon" type="image" src={this.props.src} alt={this.props.alt} onClick={() => this.props.onClick()}></input>
      </div>
    );
  }
}

export default ToggleIcon