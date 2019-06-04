import React, { StrictMode } from "react";
import "./styles/App.css";
import ToggleIconAndTitle from "./components/ToggleIconAndTitle.js";
import OSMap from "./components/OSMap.js";
import SearchBarWrapper from "./components/SearchBarWrapper.js";
import fire_icon from "./img/fire_icon.jpg";
import location_icon from "./img/location_icon.jpg";
import data_toggle_icon from "./img/data_toggle_icon.png";
import road_closures_icon from "./img/road_closures_icon.png";

class App extends React.Component {
  // a state & a function to toggle fire
  state = {
    showFire: true
  };

  toggleFire = () => {
    this.setState({ showFire: !this.state.showFire });
  };

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
          <OSMap showFire={this.state.showFire} />
        </div>
        <div className="UIWrapper">
          <div id="mainSearchBarWrapper">
            <SearchBarWrapper
              dataOverlayNames={[
                "WIND",
                "FUEL TYPE",
                "TEMPERATURE",
                "HUMIDITY"
              ]}
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
          <div className="toggleRLWrapper">
            <ToggleIconAndTitle
              src={location_icon}
              title="RESPONDER LOCATIONS"
            />
          </div>
          <div className="toggleRCWrapper">
            <ToggleIconAndTitle
              src={road_closures_icon}
              title="ROAD CLOSURES"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
