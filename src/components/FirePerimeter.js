import React from "react";
import { Polygon } from "react-leaflet";

function FirePerimeter(props) {
  return props.show ? (
    <Polygon
      color="red"
      positions={[
        [39.7596, -121.6339],
        [39.7506, -121.6439],
        [39.7426, -121.6419],
        [39.7506, -121.6201],
        [39.7556, -121.6139],
        [39.7696, -121.6159]
      ]}
    />
  ) : (
    <div />
  );
}

export default FirePerimeter;
