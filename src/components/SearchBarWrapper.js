import React, { Component } from "react";
import "../styles/SearchBarWrapper.css"; // Tell Webpack that Toggle.js uses these styles
import DropDownMenu from "./DropDownMenu.js";
import SearchBar from "./SearchBar.js";

class SearchBarWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };

    this.handleClick = this.handleClick.bind(this);
    this.getMenuDisplay = this.getMenuDisplay.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  getMenuDisplay() {
    if (this.state.isToggleOn) {
      return "inline-block";
    } else {
      return "none";
    }
  }

  render() {
    return (
      <div className="SearchBarWrapper">
        <div className="SearchBarHolder">
          <SearchBar
            iconSrc={this.props.iconSrc}
            iconAlt={this.props.iconAlt}
            handleClick={() => this.handleClick()}
			selectedOverlay={this.props.selectedOverlay}
			Engaged={this.props.Engaged}
			selectedOverlayColor={this.props.selectedOverlayColor}
          />
        </div>
        <div
          className="dataOverlayMenuWrapper"
          style={{ display: this.getMenuDisplay() }}
        >
          <DropDownMenu
			table={this.props.table}
          />
        </div>
      </div>
    );
  }
}

export default SearchBarWrapper;
