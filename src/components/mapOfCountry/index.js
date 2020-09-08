import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapOfSearch = (props) => {
  const position = [
    props.weatherInfo.latitud ?? 0,
    props.weatherInfo.longitud ?? 0,
  ];
  const country = [props.weatherInfo.country];
  const temperature = [props.weatherInfo.temperature];
  const description = [props.weatherInfo.description];

  return (
    <div>
      <Map
        center={position}
        zoom={13}
        position="topright"
        showPopup={true}
        provider="OpenStreetMap"
        showMarker={true}
        openSearchOnLoad={true}
        closeResultsOnClick={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <span>
              <b>{country}</b>
            </span>
            <br />
            <span>
              <b>Temperatura:</b>&nbsp;{temperature}c°
            </span>
            <br />
            <span>
              <b>Coordenadas:</b>&nbsp;{position}°
            </span>
            <br />
            <span>
              <b>Estado:</b>&nbsp;{description}
            </span>
          </Popup>
        </Marker>
      </Map>
    </div>
  );
};

export default MapOfSearch;
