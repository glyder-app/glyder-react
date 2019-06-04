import React, { Component } from 'react';
import '../styles/ToggleIconAndTitle.css'; // Tell Webpack that Toggle.js uses these styles

class ToggleIconAndTitle extends Component {
	
  constructor(props) {
	  super(props);
	  this.state = {isToggleOn: false};
	  
	  //React Silliness
	  this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
	  this.setState(state => ({
			isToggleOn: !state.isToggleOn
		})
	  );
  }
  
  render() {
    return (
      <div className="component-ToggleIconAndTitle">
		<p className="component-ToggleIconAndTitle_Title">{this.props.title}</p>
		<input className="component-ToggleIconAndTitle_Icon" type="image" src={this.props.src} onClick={this.handleClick}></input>
      </div>
    );
  }
}

export default ToggleIconAndTitle