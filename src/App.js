import Leaflet from 'leaflet'
import React, { StrictMode } from "react";
import "./styles/App.css";
import Button from "./components/Button.js";
import ToggleIcon from "./components/ToggleIcon.js";
import ToggleIconAndTitle from "./components/ToggleIconAndTitle.js"
import SimpleExample from './components/simple.js'

class App extends React.Component {
	render(){
				//TODO: MAP - 
				//	Fire Overlay
				//	Data Overlay
				//	Responder Geo Markers
		
				//TODO: UI - 
				//	Search Bar
				//	Data Overlay Menu
				
		return (
			<div className="FRApp">
				<SimpleExample></SimpleExample>
				<div className="toggleRLWrapper">
					<ToggleIconAndTitle src="./road_closures_icon.png" title="RESPONDER LOCATIONS" />
				</div>
			</div>
		)
	};
}

export default App;