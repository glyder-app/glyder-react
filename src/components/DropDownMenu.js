import React, { Component } from "react";
import "../styles/DropDownMenu.css"; // Tell Webpack that Toggle.js uses these styles
import Panel from "./Panel.js";

class DropDownMenu extends Component {
  render() {	
    return (
      <div className="component-DropDownMenu">
        <table className="component-DropDownMenu_Table">
          <tbody>{this.props.table}</tbody>
        </table>
      </div>
    );
  }
}

export default DropDownMenu;
