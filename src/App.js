import React from "react";
import "./styles/App.css";
import ToggleIconAndTitle from "./components/ToggleIconAndTitle.js";
import OSMap from "./components/OSMap.js";
import SearchBarWrapper from "./components/SearchBarWrapper.js";
import fire_icon from "./img/fire_icon.jpg";
import location_icon from "./img/location_icon.jpg";
import data_toggle_icon from "./img/data_toggle_icon.png";
import road_closures_icon from "./img/road_closures_icon.png";

class App extends React.Component {
  //   a state & a function to toggle fire
  state = {
    showFire: true,
    showLocation: false,
    showFRLocations: false
  };

  toggleFire = () => {
    this.setState({ showFire: !this.state.showFire });
  };

  toggleLocation = () => {
    this.setState({ showLocation: !this.state.showLocation });
  };

  toggleFRLocations = () => {
    this.setState({ showFRLocations: !this.state.showFRLocations });
  };

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
            dragging={true}
            touchZoom={true}
          />
        </div>
        <div id="mainSearchBarWrapper">
          <SearchBarWrapper
            dataOverlayNames={["WIND", "FUEL TYPE", "TEMPERATURE", "HUMIDITY"]}
            iconSrc={data_toggle_icon}
            iconAlt="DATA"
          />
        </div>
        <div className="toggleFPWrapper">
          <ToggleIconAndTitle
            src={fire_icon}
            title="FIRE PERIMETER"
            onClick={this.toggleFire}
          />
        </div>
        <div className="toggleFRLWrapper">
          <ToggleIconAndTitle
            src={location_icon}
            title="RESPONDER LOCATIONS"
            onClick={this.toggleFRLocations}
          />
        </div>
        <div className="toggleRLWrapper">
          <ToggleIconAndTitle
            src={location_icon}
            title="MY CURRENT LOCATIONS"
            onClick={this.toggleLocation}
          />
        </div>
        <div className="toggleRCWrapper">
          <ToggleIconAndTitle src={road_closures_icon} title="ROAD CLOSURES" />
        </div>
      </div>
    );
  }
}

export default App;
