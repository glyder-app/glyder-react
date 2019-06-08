import Leaflet from 'react-leaflet'
import React, { StrictMode } from "react";
import "./styles/App.css";
import ToggleIconAndTitle from "./components/ToggleIconAndTitle.js"
import OSMap from './components/OSMap.js'
import SearchBarWrapper from './components/SearchBarWrapper.js'

class App extends React.Component {
	render(){
				//TODO: MAP - 
				//	Fire Overlay
				//	Data Overlay
				//	Responder Geo Markers
		return (
			<div className="FRApp">
				<div className="MapWrapper">
					<OSMap></OSMap>
				</div>
				<div className="UIWrapper">
					<div id="mainSearchBarWrapper">
						<SearchBarWrapper dataOverlayNames={["WIND", "FUEL TYPE", "TEMPERATURE", "HUMIDITY"]} iconSrc='data_toggle_icon.png' iconAlt='DATA'/>
					</div>
					<div className="toggleRLWrapper">
						<ToggleIconAndTitle src="./location_icon.jpg" title="RESPONDER LOCATIONS" />
					</div>	
					<div className="toggleRCWrapper">
						<ToggleIconAndTitle src="./road_closures_icon.png" title="ROAD CLOSURES" />
					</div>
				</div>
			</div>
		)
	};
}

export default App;