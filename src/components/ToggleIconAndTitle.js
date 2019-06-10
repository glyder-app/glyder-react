import React, { Component } from "react";
import "../styles/ToggleIconAndTitle.css"; // Tell Webpack that Toggle.js uses these styles

class ToggleIconAndTitle extends Component {
  
  constructor(props) {
	  super(props);
	  
	  this.isEngagedColor = this.isEngagedColor.bind(this);
	  this.isEngagedWidth = this.isEngagedWidth.bind(this);
	  this.isEngagedSize = this.isEngagedSize.bind(this);
  }
  
  isEngagedColor() {
	  if (this.props.Engaged) {
		  return "rgba(255, 120, 0, 1)";
	  } else {
		  return "rgba(75, 75, 75, 0.75)";
	  }
  }  
  
  isEngagedWidth() {
	  if (this.props.Engaged) {
		  return "3px";
	  } else {
		  return "1px";
	  }
  } 

  isEngagedSize() {
	  if (this.props.Engaged) {
		  return "36px";
	  } else {
		  return "40px";
	  }
  }
	
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
		  style={{"borderColor":this.isEngagedColor(), 
				  "borderWidth":this.isEngagedWidth(),
				  "width":this.isEngagedSize(),
				  "height":this.isEngagedSize()
				}}
          src={this.props.src}
          alt={this.props.title}
        />
      </div>
    );
  }
}

export default ToggleIconAndTitle;
