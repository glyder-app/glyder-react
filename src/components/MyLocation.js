import React from "react";
import { Marker, Popup } from "react-leaflet";

function MyLocation(props) {
  return props.show && props.hasLocation ? (
    <Marker position={props.location}>
      <Popup>My current location</Popup>
    </Marker>
  ) : (
    <div />
  );
}
export default MyLocation;
