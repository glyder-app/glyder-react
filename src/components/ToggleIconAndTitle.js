import React, { Component } from "react";
import "../styles/ToggleIconAndTitle.css"; // Tell Webpack that Toggle.js uses these styles

class ToggleIconAndTitle extends Component {
  render() {
    return (
      //make the entire div a button
      <div
        className="component-ToggleIconAndTitle"
        onClick={this.props.onClick}
      >
        <p className="component-ToggleIconAndTitle_Title">{this.props.title}</p>
        <input
          className="component-ToggleIconAndTitle_Icon"
          type="image"
          src={this.props.src}
          alt={this.props.title}
        />
      </div>
    );
  }
}

export default ToggleIconAndTitle;
