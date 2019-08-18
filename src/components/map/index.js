import React from 'react';
import L from 'leaflet';

class Map extends React.Component {

  componentDidMount() {
    let mymap = L.map('mapid', {layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]}).setView([this.props.island.latitude, this.props.island.longitude], 13, );
    let marker = L.marker([this.props.island.latitude, this.props.island.longitude]).addTo(mymap);
  }

  render() {
    return <div id="map"></div>
  }
}

export default Map;