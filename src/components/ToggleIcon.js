import React, { Component } from 'react';
import '../styles/ToggleIcon.css'; // Tell Webpack that Toggle.js uses these styles

class ToggleIcon extends Component {
	
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
      <div className="component-ToggleIcon">
		<input className="component-ToggleIcon_Icon" type="image" src={this.props.src} onClick={this.handleClick}></input>
      </div>
    );
  }
}

export default ToggleIcon