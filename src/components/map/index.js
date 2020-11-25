import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
var drawingManager = '';
var map;
var shapes = [];
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  //static drawingManager;
  handleGoogleMapApi = google => {
    map = google.map;

    drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.MARKER,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT,
        drawingModes: [google.maps.drawing.OverlayType.CIRCLE, google.maps.drawing.OverlayType.POLYGON],
      },

      markerOptions: {
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag',
      },
      circleOptions: {
        clickable: true,
        editable: true,
        draggable: false,
        zIndex: 1,
      },
      polygonOptions: {
        clickable: true,
        editable: false,
        draggable: false,
        zIndex: 1,
      },
    });
    google.maps.event.addListener(drawingManager, 'overlaycomplete', function (e) {
      if (e.type !== google.maps.drawing.OverlayType.MARKER) {
        // Switch back to non-drawing mode after drawing a shape.
        drawingManager.setDrawingMode(null);
        // To hide:
        // drawingManager.setDrawingMode({
        //   drawingControl: false,
        // });
      }
    });

    google.maps.event.addListener(drawingManager, 'overlaycomplete', function (event) {
      var newShape = event.overlay;
      newShape.type = event.type;
      if (drawingManager.getDrawingMode()) {
        drawingManager.setDrawingMode(null);
      }
    });
    google.maps.event.addListener(drawingManager, 'overlaycomplete', function (event) {
      var newShape = event.overlay;
      newShape.type = event.type;
      shapes.push(newShape);
      if (drawingManager.getDrawingMode()) {
        drawingManager.setDrawingMode(null);
      }
    });

    google.maps.event.addListener(drawingManager, 'drawingmode_changed', event => {
      //this.props.resetMapData();
      if (drawingManager.getDrawingMode() != null) {
        for (var i = 0; i < shapes.length; i++) {
          shapes[i].setMap(null);
        }
        shapes = [];
      }
    });
    google.maps.event.addListener(drawingManager, 'overlaycomplete', event => {
      if (event.type === google.maps.drawing.OverlayType.CIRCLE) {
        const radius = event.overlay.getRadius();
        const lat = event.overlay.getCenter().lat();
        const lng = event.overlay.getCenter().lng();
        //   this.props.mapSearchAction({ radius, lat, lng, shape: 'circle' });
      }
      //(lat,lang)corrdinates of polygon
      if (event.type === google.maps.drawing.OverlayType.POLYGON) {
        const coordinates = event.overlay.getPath();
        //const lat=event.overlay.getPath();
        //const lng=event.overlay.getPath();
        let letLang = [];
        coordinates.forEach(el => {
          let chords = [];
          chords.push(el.lng());
          chords.push(el.lat());
          letLang.push(chords);
        });
        // this.props.mapSearchAction({ latLng: letLang, shape: 'polygon' });
      }

      google.maps.event.addListener(drawingManager, 'drawingmode_changed', function () {
        if (drawingManager.getDrawingMode() != null) {
          for (var i = 0; i < shapes.length; i++) {
            shapes[i].setMap(null);
          }
          shapes = [];
        }
      });
      google.maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon) { });
    });
    drawingManager.setMap(map);
    google.maps.event.addListener(drawingManager, 'overlaycomplete', this.getPolygonCoords);
    google.maps.event.addListener(drawingManager, 'dragend', this.getPolygonCoords);
    drawingManager.setMap(map);
  };
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ libraries: 'drawing', key: "" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={this.handleGoogleMapApi}
        >

          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="kmdkcklm"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;