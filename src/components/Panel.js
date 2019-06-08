import React, { Component } from 'react';
import '../styles/Panel.css'; // Tell Webpack that Toggle.js uses these styles

class Panel extends Component {
	
  constructor(props) {
	  super(props);
	  this.selectDisplay = this.selectDisplay.bind(this);
  }
  
  selectDisplay() {
	  if (this.props.Engaged) {
		  return "inline";
	  } else {
		  return "none";
	  }
  }
	
  render() {
    return (
      <div className="component-Panel">
	  	<button id={"component-Panel_Color_" + this.props.title} className="component-Panel_Color" onClick={() => this.props.onClick()}></button>
	    <button className="component-Panel_Engaged" onClick={() => this.props.onClick()} style={{display:this.selectDisplay()}}></button>
		<p className="component-Panel_Title">{this.props.title}</p>
      </div>
    );
  }
}

export default Panel