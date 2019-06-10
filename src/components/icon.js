import L from "leaflet";

const FRIcon = new L.Icon({
  iconUrl: require("../img/firefighter.png"),
  iconRetinaUrl: require("../img/firefighter.png"),
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: "leaflet-div-icon"
});

export default { FRIcon };
