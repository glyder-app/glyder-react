// @flow

import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import Search from "./search.js";

class OSMap extends Component {
  state = {
    lat: 39.7596,
    lng: -121.6219,
    zoom: 13
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* toggle based on the passed in showPolygon prop */}
        {this.props.showFire && (
          <Polygon
            color="red"
            positions={[
              [39.7596, -121.6219],
              [39.7596, -121.6319],
              [39.7496, -121.6219]
            ]}
          />
        )}
        {/* <Search/> */}
        {/* <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </Map>
    );
  }
}

export default OSMap;
