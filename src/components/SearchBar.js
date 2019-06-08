import React, { Component } from "react";
import "../styles/SearchBar.css"; // Tell Webpack that Toggle.js uses these styles
import ToggleIcon from "./ToggleIcon.js";

class SearchBar extends Component {
  render() {
    return (
      <div className="component-SearchBar">
        <div className="component-DropDownToggle">
          <ToggleIcon
            src={this.props.iconSrc}
            title={this.props.iconAlt}
            onClick={() => this.props.handleClick()}
          />
        </div>
        <div className="component-Separator" />
        <input className="component-SearchBarInput" type="text" placeholder="Search"/>
      </div>
    );
  }
}

export default SearchBar;
