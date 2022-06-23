import { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import jsonData from "../../data/equipmentPositionHistory.json";
import "./App.css";

function App() {
  return (
    <MapContainer
      center={[-19.15565431482435, -46.02166177683311]}
      zoom={11}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {jsonData.map((data, index) => (
        <Marker
          key={data.equipmentId}
          position={[data.positions[index].lat, data.positions[index].lon]}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default App;
