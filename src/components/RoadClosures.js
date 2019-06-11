import React from "react";
import { Marker, Popup } from "react-leaflet";

function RoadClosures(props) {
  const L = require("leaflet");
  const RCIcon = new L.Icon({
    iconUrl: require("../img/road_closures_icon.png"),
    iconRetinaUrl: require("../img/road_closures_icon.png"),
    iconSize: new L.Point(30, 30),
    className: "leaflet-div-icon"
  });

  return props.show ? (
    <div>
      <Marker icon={RCIcon} position={{ lat: 39.7123, lng: -121.8045 }}>
        <Popup First Responder />
      </Marker>
      <Marker icon={RCIcon} position={{ lat: 39.6215, lng: -121.6935 }}>
        <Popup First Responder />
      </Marker>
      <Marker icon={RCIcon} position={{ lat: 39.6202, lng: -121.5956 }}>
        <Popup First Responder />
      </Marker>
      <Marker icon={RCIcon} position={{ lat: 39.9051, lng: -121.3469 }}>
        <Popup First Responder />
      </Marker>
      {/* <Marker icon={RCIcon} position={{ lat: 39.7379, lng: -121.6359 }}>
        <Popup First Responder />
      </Marker>
      <Marker icon={RCIcon} position={{ lat: 39.7689, lng: -121.6219 }}>
        <Popup First Responder />
      </Marker> */}
    </div>
  ) : (
    <div />
  );
}

export default RoadClosures;
