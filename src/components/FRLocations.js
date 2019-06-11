import React from "react";
import { Marker, Popup } from "react-leaflet";

function FRLocations(props) {
  const L = require("leaflet");
  const FRIcon = new L.Icon({
    iconUrl: require("../img/firefighter.png"),
    iconRetinaUrl: require("../img/firefighter.png"),
    iconSize: new L.Point(30, 30),
    className: "leaflet-div-icon"
  });

  const PMIcon = new L.Icon({
    iconUrl: require("../img/police.png"),
    iconRetinaUrl: require("../img/police.png"),
    iconSize: new L.Point(30, 30),
    className: "leaflet-div-icon"
  });

  return props.show ? (
    <div>
      39.9016, -122.052
      <Marker icon={FRIcon} position={{ lat: 39.7163, lng: -121.7816 }}>
        <Popup First Responder />
      </Marker>
      <Marker icon={FRIcon} position={{ lat: 39.6239, lng: -121.7422 }}>
        <Popup First Responder />
      </Marker>
      <Marker icon={FRIcon} position={{ lat: 39.6238, lng: -121.5455 }}>
        <Popup First Responder />
      </Marker>
      <Marker icon={FRIcon} position={{ lat: 39.6359, lng: -121.4228 }}>
        <Popup First Responder />
      </Marker>
      <Marker icon={PMIcon} position={{ lat: 39.5135, lng: -121.6859 }}>
        <Popup First Responder />
      </Marker>
      <Marker icon={PMIcon} position={{ lat: 39.7059, lng: -121.8319 }}>
        <Popup First Responder />
      </Marker>
    </div>
  ) : (
    <div />
  );
}

export default FRLocations;
