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

    function MyLogoControl(controlDiv) {
      controlDiv.style.padding = '5px';
      var logo = document.createElement('IMG');
      logo.src = "./logo.png";
      //logo.src = "%PUBLIC_URL%/favicon_3.ico"
      logo.style.cursor = 'pointer';
      logo.style.height = '40px';
      controlDiv.appendChild(logo);
  
   }

   USGSOverlay.prototype = new google.maps.OverlayView();

    var bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(39.5596, -122.1000),
        new google.maps.LatLng(39.9596, -121.1219));

    // The photograph is courtesy of the U.S. Geological Survey.
    var srcImage = './full_fire_processed.png';

    // The custom USGSOverlay object contains the USGS image,
    // the bounds of the image, and a reference to the map.
    this.overlay = new USGSOverlay(bounds, srcImage, this.map);


    var logoControlDiv = document.createElement('DIV');
    var logoControl = new MyLogoControl(logoControlDiv);
    logoControlDiv.index = 0; // used for ordering
    this.map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(logoControlDiv);

    this.map.mapTypes.set("OSM", this.osmMapType);
    this.map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
    //add WMS layer
    this.map.overlayMapTypes.push(this.SHLayer);

    /** @constructor */
    function USGSOverlay(bounds, image, map) {

      // Initialize all properties.
      this.bounds_ = bounds;
      this.image_ = image;
      this.map_ = map;

      // Define a property to hold the image's div. We'll
      // actually create this div upon receipt of the onAdd()
      // method so we'll leave it null for now.
      this.div_ = null;

      // Explicitly call setMap on this overlay.
      this.setMap(map);
    }

    /**
     * onAdd is called when the map's panes are ready and the overlay has been
     * added to the map.
     */
    USGSOverlay.prototype.onAdd = function() {

      var div = document.createElement('div');
      div.style.borderStyle = 'none';
      div.style.borderWidth = '0px';
      div.style.position = 'absolute';

      // Create the img element and attach it to the div.
      var img = document.createElement('img');
      img.src = this.image_;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.position = 'absolute';
      div.appendChild(img);

      this.div_ = div;

      // Add the element to the "overlayLayer" pane.
      var panes = this.getPanes();
      panes.overlayLayer.appendChild(div);
    };

    USGSOverlay.prototype.draw = function() {

      // We use the south-west and north-east
      // coordinates of the overlay to peg it to the correct position and size.
      // To do this, we need to retrieve the projection from the overlay.
      var overlayProjection = this.getProjection();

      // Retrieve the south-west and north-east coordinates of this overlay
      // in LatLngs and convert them to pixel coordinates.
      // We'll use these coordinates to resize the div.
      var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
      var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

      // Resize the image's div to fit the indicated dimensions.
      var div = this.div_;
      div.style.left = sw.x + 'px';
      div.style.top = ne.y + 'px';
      div.style.width = (ne.x - sw.x) + 'px';
      div.style.height = (sw.y - ne.y) + 'px';
    };

    // The onRemove() method will be called automatically from the API if
    // we ever set the overlay's map property to 'null'.
    USGSOverlay.prototype.onRemove = function() {
      console.log("here we are ")
      this.div_.parentNode.removeChild(this.div_);
      this.div_ = null;
    };
    
  }

  toggleSat = () => {
    if(this.map.overlayMapTypes.length > 0){
      this.map.overlayMapTypes.clear()
    }
    else {
      this.map.overlayMapTypes.push(this.SHLayer)
    }
  }

  toggleFire = () => {
    if(this.overlay.map != null) {
      this.overlay.map = null
      this.overlay.div_.style.visibility = "hidden"
    } else {
      this.overlay.setMap(this.map)
      this.overlay.div_.style.visibility = "visible"
    }
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div
        id="map"
        style={{
          height: "100vh",
          width: "100vw"
        }}
      />
    );
  }
}


export default Gmap;
