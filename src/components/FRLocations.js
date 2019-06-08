import React from "react";
import { Marker, Popup } from "react-leaflet";
// import FRIcon from "../img/firefighter.png";
import FRIcon from "./icon.js";

function FRLocations(props) {
  return props.show ? (
    <div>
      <Marker position={{ lat: 39.7496, lng: -121.6219 }}>
        <Popup First Responder />
      </Marker>
      <Marker position={{ lat: 39.7486, lng: -121.6219 }}>
        <Popup First Responder />
      </Marker>
      <Marker position={{ lat: 39.7489, lng: -121.6319 }}>
        <Popup First Responder />
      </Marker>
      <Marker position={{ lat: 39.7597, lng: -121.6122 }}>
        <Popup First Responder />
      </Marker>
    </div>
  ) : (
    <div />
  );
}

export default FRLocations;
