// @flow

import React, { createRef, Component } from "react";
import { Map, TileLayer, Marker, Popup, ImageOverlay } from "react-leaflet";
import "../styles/OSMap.css"; // Tell Webpack that Toggle.js uses these styles
import FirePerimeter from "./FirePerimeter.js";
import FRLocations from "./FRLocations.js";
import RoadClosurs from "./RoadClosures.js";
import MyLocation from "./MyLocation.js";
// import PerimeterImg from "../img/Perimeter.png";

class OSMap extends Component {
  state = {
    zoom: 10,
    locationLatlng: { lat: 39.7596, lng: -121.6219 },
    hasLocatoin: false
    // center:
  };

  //create a ref to the map compoenent mounted
  mapRef = createRef();
  map = this.mapRef.current;
  apikey = "4a2dab7ba1df8c6201c34503fa4f315b";

  // functions for finding user's current location
  handleLocationFound = e => {
    this.setState({
      hasLocation: true,
      locationLatlng: e.latlng
    });

    console.log("location found");
  };

  componentDidUpdate(prevProps) {
    if (this.props.showLocation && !prevProps.showLocation) {
      const map = this.mapRef.current;
      if (map != null) {
        map.leafletElement.locate();
      }
    }
  }

  // start at current location
  // componentDidMount(prevProps) {
  //   const map = this.mapRef.current;
  //   if (map != null) {
  //     map.leafletElement.locate();
  //   }
  // }

  render() {
    // const position = [this.state.lat, this.state.lng];
    // url form of new weather maps (which aren't free) "http://maps.openweathermap.org/maps/2.0/weather/HRD0/{z}/{x}/{y}?appid=b593b0ebcc8372e45bcb701185a33497"
    return (
      <Map
        center={this.state.locationLatlng}
        zoom={this.state.zoom}
		zoomControl={false}
        ref={this.mapRef}
        onLocationfound={this.handleLocationFound}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
		
        <TileLayer
          opacity={this.props.windSpeedOpacity}
          attribution='Weather from <a href="https://openweathermap.org/">OpenWeatherMap</a>'
          url="https://tile.openweathermap.org/map/wind/{z}/{x}/{y}.png?appid=4a2dab7ba1df8c6201c34503fa4f315b"
        />

        <TileLayer
          opacity={this.props.tempOpacity}
          attribution='Weather from <a href="https://openweathermap.org/">OpenWeatherMap</a>'
          url="https://tile.openweathermap.org/map/temp/{z}/{x}/{y}.png?appid=4a2dab7ba1df8c6201c34503fa4f315b"
        />

        <TileLayer
          opacity={this.props.precipitationOpacity}
          attribution='Weather from <a href="https://openweathermap.org/">OpenWeatherMap</a>'
          url="https://tile.openweathermap.org/map/precipitation/{z}/{x}/{y}.png?appid=4a2dab7ba1df8c6201c34503fa4f315b"
        />

        <TileLayer
          opacity={this.props.pressureOpacity}
          attribution='Weather from <a href="https://openweathermap.org/">OpenWeatherMap</a>'
          url="https://tile.openweathermap.org/map/pressure/{z}/{x}/{y}.png?appid=4a2dab7ba1df8c6201c34503fa4f315b"
        />

        {/* add a marker at the current location found  */}
        {this.props.showLocation ? (
          <Marker position={this.state.locationLatlng}>
            <Popup>My current location</Popup>
          </Marker>
        ) : (
          <div />
        )}

        <FirePerimeter show={this.props.showFire} />
        <MyLocation
          show={this.props.showLocation}
          location={this.state.locationLatlng}
          hasLocation={this.state.hasLocation}
        />
        <FRLocations show={this.props.showFRLocations} />
        <RoadClosurs show={this.props.showRoadClosures} />
      </Map>
    );
  }
}

export default OSMap;
