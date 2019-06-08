import React, { Component } from 'react';
import '../styles/DropDownMenu.css'; // Tell Webpack that Toggle.js uses these styles
import Panel from "./Panel.js";

class DropDownMenu extends Component {
	
  constructor(props) {
	  super(props);
	  	  
	  //React Silliness
	  this.buildTable = this.buildTable.bind(this);
	  this.handleClick = this.handleClick.bind(this);
	  this.state = {
		  //-1 means no panel selected, all other #s correspond to the corresponding panel
		  selectedPanel: -1,
	  };
  }
  
  buildTable() {
  	  var table = [];
	  const maxI = this.props.panelNames.length;
	  for (let i = 0; i < maxI; i++) {
		  // Panel Colors are an array of strings where each string is an rgba value
		  // EX "rgba(255, 255, 255, 1)"
		  const name = this.props.panelNames[i];
		  const toggledOn = this.state.selectedPanel === i;
		  table.push(
			<tr key={i}><td>
				{<Panel title={name} Engaged={toggledOn} onClick={() => this.handleClick(i)}/>}	
			</td></tr>
		  );
	  }
	  return table;
  }
  
  handleClick(i) {
	  const prevPanel = this.state.selectedPanel;
	  if (prevPanel == i) {
		  this.setState({selectedPanel: -1});
	  } else {
		  this.setState({selectedPanel: i});
	  }
  }
  
  render() {	
    return (
      <div className="component-DropDownMenu">
		<table className="component-DropDownMenu_Table">
			<tbody>
				{this.buildTable()}
			</tbody>
		</table>
      </div>
    );
  }
}

export default DropDownMenu