import React from "react";
import { Marker, Popup } from "react-leaflet";
// import FRIcon from "../img/firefighter.png";
import FRIcon from "./icon.js";

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
      <Marker icon={FRIcon} position={{ lat: 39.7496, lng: -121.6219 }}>
        <Popup First Responder />
      </Marker>
      <Marker icon={FRIcon} position={{ lat: 39.7486, lng: -121.6235 }}>
        <Popup First Responder />
      </Marker>
      <Marker icon={FRIcon} position={{ lat: 39.7489, lng: -121.6319 }}>
        <Popup First Responder />
      </Marker>
      <Marker icon={FRIcon} position={{ lat: 39.7597, lng: -121.6122 }}>
        <Popup First Responder />
      </Marker>
      <Marker icon={PMIcon} position={{ lat: 39.7389, lng: -121.6319 }}>
        <Popup First Responder />
      </Marker>
      <Marker icon={PMIcon} position={{ lat: 39.7589, lng: -121.6319 }}>
        <Popup First Responder />
      </Marker>
    </div>
  ) : (
    <div />
  );
}

export default FRLocations;
