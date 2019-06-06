// @flow

import React, { createRef, Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import MyLocation from "./MyLocation.js";
import Search from "./search.js";
import FirePerimeter from "./FirePerimeter.js";

class OSMap extends Component {
  state = {
    lat: 39.7596,
    lng: -121.6219,
    zoom: 13,
    latlng: { lat: 39.7596, lng: -121.6219 },
    hasLocatoin: true
  };

  mapRef = createRef();

  map = this.mapRef.current;

  // handleClick = () => {
  //   const map = this.mapRef.current;
  //   if (map != null) {
  //     map.leafletElement.locate();
  //   }
  //   console.log("handleClick called");
  // };

  handleLocationFound = e => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng
    });
    console.log("handle location found called");
  };

  componentDidUpdate(prevProps) {
    if (this.props.showLocation && !prevProps.showLocation) {
      const map = this.mapRef.current;
      if (map != null) {
        map.leafletElement.locate();
      }
      console.log("handleClick called");
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

        <Marker position={this.state.latlng}>
          <Popup>You are here</Popup>
        </Marker>

        <FirePerimeter show={this.props.showFire} />
        {/* <MyLocation /> */}
      </Map>
    );
  }
}

export default OSMap;
