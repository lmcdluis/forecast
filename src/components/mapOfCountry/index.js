import React from "react";

import { Map, Marker, Popup, TileLayer } from "react-leaflet";

// const { Map: LeaflefMap, TileLayer, Maker, Popup } = ReactLeaflet;

const MapOfSearch = (props) => {
  const position = [
    props.weatherInfo.latitud ?? 0,
    props.weatherInfo.longitud ?? 0,
  ];

  return (
    <div>
      <Map
        center={position}
        zoom={7}
        position="topright"
        showPopup={false}
        provider="OpenStreetMap"
        showMarker={true}
        openSearchOnLoad={true}
        closeResultsOnClick={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
      </Map>
    </div>
  );
};

export default MapOfSearch;
