import React from "react";
import { Polygon } from "react-leaflet";

function FirePerimeter(props) {
  return props.show ? (
    <Polygon
      color="red"
      positions={[
        [39.7596, -121.6239],
        [39.7596, -121.6339],
        [39.7496, -121.6239]
      ]}
    />
  ) : (
    <div />
  );
}

export default FirePerimeter;
