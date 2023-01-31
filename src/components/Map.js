import React from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  ZoomControl,
  useMap,
} from "react-leaflet";
import "../styles/map.css";
import { useSelector } from "react-redux";

const limeOptions = { color: "lime" };
const center = [59.939863, 30.314565];
const zoom = 12;

function getBounds(polyline) {
  let latArr = polyline.map((latLng) => latLng[0]);
  let lngArr = polyline.map((latLng) => latLng[1]);

  let minLat = Math.min(...latArr);
  let minLng = Math.min(...lngArr);

  let maxLat = Math.max(...latArr);
  let maxLng = Math.max(...lngArr);

  return [
    [minLat, minLng],
    [maxLat, maxLng],
  ];
}

function MapWithPolyline() {
  const polyline = useSelector((state) => state.route.polyline);
  const map = useMap();

  if (polyline.length > 0) {
    map.fitBounds(getBounds(polyline));
    return <Polyline pathOptions={limeOptions} positions={polyline} />;
  }
}

function Map() {
  return (
    <div id="map">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <ZoomControl position="topright" />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapWithPolyline />
      </MapContainer>
    </div>
  );
}

export default Map;
