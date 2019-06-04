import React, { Component } from "react";
import "../styles/Panel.css"; // Tell Webpack that Toggle.js uses these styles

class Panel extends Component {
  constructor(props) {
    super(props);
    // Pass rgba value strings as this.props.color
    // EX: "rgba(255, 255, 255, 1.0)"

    //React Silliness
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // TODO: Implement Panel Functionality
    return false;
  }

  render() {
    return (
      <div className="component-Panel">
        <button
          id={"component-Panel_Color_" + this.props.title}
          className="component-Panel_Color"
          onClick={this.handleClick}
        />
        <p className="component-Panel_Title">{this.props.title}</p>
      </div>
    );
  }
}

export default Panel;
