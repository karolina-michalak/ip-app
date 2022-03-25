import { useEffect, useState, useCallback } from 'react';
import { useMap } from 'react-leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export const Map = ({ coords }) => {

  return (
    coords.length && <>
      <MapContainer center={[51.505, -0.09]} zoom={1} scrollWheelZoom={false} style={{ width: '700px', height: '350px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={coords}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer >
    </>
  )
}



