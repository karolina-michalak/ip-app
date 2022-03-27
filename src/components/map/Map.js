import { TileLayer, Marker, Popup } from "react-leaflet";

import * as S from "./style";


export const Map = ({ data }) => {
  return (
    data && (
      <S.Wrapper>
        <S.Container
          center={[51.505, -0.09]}
          zoom={1}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[data.lat, data.lon]}>
            <Popup>
              {data.country} <br /> {data.city}
            </Popup>
          </Marker>
        </S.Container>
      </S.Wrapper>
    )
  );
};
