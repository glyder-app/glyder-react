import React from "react";
import "./styles/App.css";
import ToggleIconAndTitle from "./components/ToggleIconAndTitle.js";
import OSMap from "./components/OSMap.js";
import SearchBarWrapper from "./components/SearchBarWrapper.js";
import fire_icon from "./img/fire_icon.jpg";
import location_icon from "./img/location_icon.jpg";
import FRIcon from "./img/firefighter.png";
import data_toggle_icon from "./img/data_toggle_icon.png";
import road_closures_icon from "./img/road_closures_icon.png";
import Panel from "./components/Panel.js";

class App extends React.Component {
  //   a state & a function to toggle fire

  state = {
    showFire: true,
    showLocation: false,
    showFRLocations: false,
    showRoadClosures: false,
    selectedPanel: -1
  };
  
  overlayNames = ["WIND", "TEMPERATURE", "PRECIPITATION", "PRESSURE"];
  overlayColors = ["#787878", "#ff8C00", "#0014C8", "#8B8B00"]
  //fuel type: #8B008B

  toggle = key => this.setState({ [key]: !this.state[key] });

  //   toggleFire = () => {
  //     this.setState({ showFire: !this.state.showFire });
  //   };

  //   toggleLocation = () => {
  //     this.setState({ showLocation: !this.state.showLocation });
  //   };

  //   toggleFRLocations = () => {
  //     this.setState({ showFRLocations: !this.state.showFRLocations });
  //   };

  //   toggleRoadClosures = () => {
  //     this.setState({ showRoadClosures: !this.state.showRoadClosures });
  //   };

  //   toggleLocation = () => {
  //     this.setState({ showLocation: !this.state.showLocation });
  //   };

  //   state = {
  //     showFire: true,
  //     hasLocation: false,
  //     latlng: {
  //       lat: 39.7596,
  //       lng: -121.6239
  //     }
  //   };

  // mapRef = createRef<Map>()

  //   handleClick = () => {
  //     const map = this.mapRef.current;
  //     if (map != null) {
  //       map.leafletElement.locate();
  //     }
  //   };

  //   handleLocationFound = e => {
  //     this.setState({
  //       hasLocation: true,
  //       latlng: e.latlng
  //     });
  //   };

  opacity = key => {
<<<<<<< HEAD
	  if (this.state.selectedPanel === key) {
		  return 0.5;
	  } else {
		  return 0;
	  }
  }
  
  selectedOverlay() {
	  if (this.state.selectedPanel === -1) {
		  return "";
	  } else {
		  return this.overlayNames[this.state.selectedPanel];
	  }
  }
  
  selectedOverlayColor() {
	  if (this.state.selectedPanel === -1) {
		  return "";
	  } else {
		  return this.overlayColors[this.state.selectedPanel];
	  }
  }
  
  overlayEngaged() {
	  if (this.state.selectedPanel === -1) {
		  return false;
	  } else {
		  return true;
	  }
  }
  
  buildTable(panelNames, panelColors) {
  	  var table = [];
	  const maxI = panelNames.length;
	  for (let i = 0; i < maxI; i++) {
		  const name = panelNames[i];
		  const color = panelColors[i];
		  const toggledOn = this.state.selectedPanel === i;
		  table.push(
			<tr key={i}>
			  <td>
				{<Panel 
					title={name} 
					Engaged={toggledOn} 
					color={color} 
					onClick={() => this.handleOverlayMenuClick(i)}
				/>}	
			  </td>
			</tr>
		  );
	  }
	  return table;
  }

  handleOverlayMenuClick(i) {
    const prevPanel = this.state.selectedPanel;
    if (prevPanel === i) {
      this.setState({ selectedPanel: -1 });
    } else {
      this.setState({ selectedPanel: i });
    }
  }

  render() {
    //TODO: MAP -
    //	Fire Overlay
    //	Data Overlay
    //	Responder Geo Markers

    //TODO: UI -
    //	Search Bar
    //	Data Overlay Menu

    return (
      <div className="FRApp">
        <div className="MapWrapper">
          <OSMap
            latlng={this.state.latlng}
            showFire={this.state.showFire}
            showLocation={this.state.showLocation}
            showFRLocations={this.state.showFRLocations}
            showRoadClosures={this.state.showRoadClosures}
            dragging={true}
            touchZoom={true}
			windSpeedOpacity={this.opacity(0)}
			tempOpacity={this.opacity(1)}
			precipitationOpacity={this.opacity(2)}
			pressureOpacity={this.opacity(3)}
          />
        </div>
        <div id="mainSearchBarWrapper">
          <SearchBarWrapper
            iconSrc={data_toggle_icon}
            iconAlt="DATA"
			table={this.buildTable(this.overlayNames, this.overlayColors)}
			selectedOverlay={this.selectedOverlay()}
			Engaged={this.overlayEngaged()}
			selectedOverlayColor={this.selectedOverlayColor()}
          />
        </div>
        <div className="toggleFPWrapper">
          <ToggleIconAndTitle
            src={fire_icon}
            title="FIRE PERIMETER"
            onClick={() => this.toggle("showFire")}
            Engaged={this.state.showFire}
          />
        </div>
        <div className="toggleFRLWrapper">
          <ToggleIconAndTitle
            src={FRIcon}
            title="RESPONDER LOCATIONS"
            onClick={() => this.toggle("showFRLocations")}
            Engaged={this.state.showFRLocations}
          />
        </div>
        <div className="toggleRLWrapper">
          <ToggleIconAndTitle
            src={location_icon}
            title="MY LOCATION"
            onClick={() => this.toggle("showLocation")}
            Engaged={this.state.showLocation}
          />
        </div>
        <div className="toggleRCWrapper">
          <ToggleIconAndTitle
            src={road_closures_icon}
            title="ROAD CLOSURES"
            onClick={() => this.toggle("showRoadClosures")}
            Engaged={this.state.showRoadClosures}
          />
        </div>
      </div>
    );
  }
}

export default App;
