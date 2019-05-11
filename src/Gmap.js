import React, { Component } from "react";
import Button from "./Button.js";

class Gmap extends Component {
  static defaultProps = {
    center: {
      lat: 39.7596,
      lng: -121.6219
    },
    mapTypeId: "terrain",
    zoom: 12
  };

  componentDidMount() {
    const google = window.google;

    this.mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(39.7596, -121.6219),
      mapTypeId: "OSM",
      mapTypeControlOptions: {
        mapTypeIds: [
          "OSM",
          google.maps.MapTypeId.ROADMAP,
          google.maps.MapTypeId.SATELLITE,
          google.maps.MapTypeId.HYBRID,
          google.maps.MapTypeId.TERRAIN
        ],
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      }
    };
    this.map = new google.maps.Map(document.getElementById("map"), this.mapOptions);
    var map = this.map

    //Define OSM as base layer in addition to the default Google layers
    this.osmMapType = new google.maps.ImageMapType({
      getTileUrl: function(coord, zoom) {
        return (
          "http://tile.openstreetmap.org/" +
          zoom +
          "/" +
          coord.x +
          "/" +
          coord.y +
          ".png"
        );
      },
      tileSize: new google.maps.Size(256, 256),
      isPng: true,
      alt: "OpenStreetMap",
      name: "OSM",
      maxZoom: 19
    });

    //Define custom WMS tiled layer
    this.SHLayer = new google.maps.ImageMapType({
      getTileUrl: function(coord, zoom) {
        var proj = map.getProjection();
        var zfactor = Math.pow(2, zoom);
        // get Long Lat coordinates
        var top = proj.fromPointToLatLng(
          new google.maps.Point(
            (coord.x * 512) / zfactor,
            (coord.y * 512) / zfactor
          )
        );
        var bot = proj.fromPointToLatLng(
          new google.maps.Point(
            ((coord.x + 1) * 512) / zfactor,
            ((coord.y + 1) * 512) / zfactor
          )
        );

        //create the Bounding box string
        var bbox =
          top.lng() + "," + bot.lat() + "," + bot.lng() + "," + top.lat();

        //base WMS URL
        var url =
          "https://services.sentinel-hub.com/ogc/wms/eddadba7-1a0a-4485-9a96-af519e7eb274";
        url += "?REQUEST=GetMap"; //WMS operation
        url += "&SERVICE=WMS"; //WMS service
        url += "&VERSION=1.1.1"; //WMS version
        url += "&LAYERS=NDVI"; //WMS layers
        url += "&FORMAT=image/jpg"; //WMS format
        url += "&SRS=EPSG:4326"; //set WGS84
        url += "&BBOX=" + bbox; // set bounding box
        url += "&WIDTH=512"; //tile size in google
        url += "&HEIGHT=512";

        return url; // return URL for the tile
      },
      tileSize: new google.maps.Size(512, 512)
    });

    this.map.mapTypes.set("OSM", this.osmMapType);
    this.map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
    //add WMS layer
    this.map.overlayMapTypes.push(this.SHLayer);
  }

  toggleSat = () => {
    if(this.map.overlayMapTypes.length > 0){
      this.map.overlayMapTypes.clear()
    }
    else {
      this.map.overlayMapTypes.push(this.SHLayer)
    }
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div
        id="map"
        style={{
          height: "100vh",
          width: "100vh"
        }}
      />
    );
  }
}

export default Gmap;
