import React, { Component } from "react";
import "../styles/SearchBar.css"; // Tell Webpack that Toggle.js uses these styles
import ToggleIcon from "./ToggleIcon.js";

class SearchBar extends Component {
	
  showOverlay() {
	  if (this.props.Engaged) {
		  return "inline-block";
	  } else {
		  return "none";
	  }
  }
  
  getURL() {
	  if (this.props.menuOpen) {
		  return this.props.iconSrcOn;
	  } else {
		  return this.props.iconSrcOff;
	  }
  }
	
  render() {
    return (
      <div className="component-SearchBar">
        <div className="component-DropDownToggle">
          <ToggleIcon
            src={this.getURL()}
            title={this.props.iconAlt}
            onClick={() => this.props.handleClick()}
          />
        </div>
		<p className="component-SelectedOverlay" style={{display:this.showOverlay(), backgroundColor:this.props.selectedOverlayColor}}>{this.props.selectedOverlay}</p>
        <div className="component-Separator" />
        <input className="component-SearchBarInput" type="text" placeholder="Search"/>
      </div>
    );
  }
}

export default SearchBar;
