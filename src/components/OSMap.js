// @flow

import React, { createRef, Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import '../styles/OSMap.css'; // Tell Webpack that Toggle.js uses these styles
import FirePerimeter from "./FirePerimeter.js";

class OSMap extends Component {
  state = {
    lat: 39.7596,
    lng: -121.6219,
    zoom: 13,
    locationLatlng: { lat: 39.7596, lng: -121.6219 },
    hasLocatoin: true
  };

  //create a ref to the map compoenent mounted
  mapRef = createRef();
  map = this.mapRef.current;

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
      console.log("finding location");
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map
        center={position}
        zoom={this.state.zoom}
        ref={this.mapRef}
        onClick={this.handleClick}
        onLocationfound={this.handleLocationFound}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* add a marker at the current location found  */}
        <Marker position={this.state.locationLatlng}>
          <Popup>My current location</Popup>
        </Marker>

        <FirePerimeter show={this.props.showFire} />
        {/* <MyLocation /> */}
      </Map>
    );
  }
}

export default OSMap;
