import React, { Component } from "react";
import { Map, Marker, Popup } from "react-leaflet";
import "../styles/Button.css";

class MyLocation extends Component {
  state = {
    hasLocation: false,
    latlng: { lat: 39.7596, lng: -121.6219 }
  };

  handleLocationFound = e => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng
    });
    console.log("location found");
  };

  componentDidUpdate(prevProps) {
    if (this.props.showLocation && !prevProps.showLocation) {
      const map = this.props.mapRef.current;
      // console.log("8");
      console.log(map);
      if (map != null) {
        console.log("locate");
        map.leafletElement.locate();
      }
    }
  }

  render() {
    return this.state.hasLocation ? (
      <Marker position={this.state.latlng}>
        <Popup>You are here</Popup>
      </Marker>
    ) : null;
  }
}

export default MyLocation;
