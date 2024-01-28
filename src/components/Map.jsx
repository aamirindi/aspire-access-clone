import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet";

export default function Map() {
  return (
    <div className="map-wrap">
      <MapContainer center={[17.366, 78.476]} zoom={13}>
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[17.366, 78.476]}>
          <Tooltip>Aspire Access</Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
}
