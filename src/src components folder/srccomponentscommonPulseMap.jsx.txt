src/components/common/PulseMap.jsx
import React from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import { statusColor } from "@/lib/mockData";

export default function PulseMap({ zones, height = "100%" }) {
  return (
    <MapContainer
      center={[24.466, 54.366]}
      zoom={11}
      scrollWheelZoom={false}
      style={{ height, width: "100%" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {zones.map((z) => {
        const c = statusColor[z.status];
        return (
          <CircleMarker
            key={z.id}
            center={[z.lat, z.lng]}
            radius={z.status === "red" ? 16 : z.status === "yellow" ? 13 : 10}
            pathOptions={{ color: c, fillColor: c, fillOpacity: 0.45, weight: 2 }}
          >
            <Tooltip direction="top" offset={[0, -6]}>
              <div className="text-xs">
                <div className="font-semibold">{z.name}</div>
                <div className="capitalize text-muted-foreground">{z.type} · {z.value}</div>
                <div className="text-[11px]">{z.note}</div>
              </div>
            </Tooltip>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}