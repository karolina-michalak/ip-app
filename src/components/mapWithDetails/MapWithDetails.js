import { TileLayer, Marker, Popup } from "react-leaflet";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import * as S from "./style";

const Item = styled(Paper)(({ theme }) => ({
  padding: "20px",
  color: theme.palette.text.secondary,
}));

export const MapWithDetails = ({ data, searchResult }) => {
  return (
    data && (
      <S.Wrapper>
        <Item>
          <S.GridWrapper container direction="row">
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
            <S.DataWrapper>
              {searchResult ? (
                <S.Heading>Search result</S.Heading>
              ) : (
                <S.Heading>Your location</S.Heading>
              )}
              <S.DetailWrapper>
                <S.Label>IP: </S.Label>
                {data.query}
              </S.DetailWrapper>
              <S.DetailWrapper>
                <S.Label>Country: </S.Label>
                {data.country}
              </S.DetailWrapper>
              <S.DetailWrapper>
                <S.Label>Region: </S.Label>
                {data.regionName}
              </S.DetailWrapper>
              <S.DetailWrapper>
                <S.Label>City: </S.Label>
                {data.city}
              </S.DetailWrapper>
              <S.DetailWrapper>
                <S.Label>Latitude: </S.Label>
                {data.lat}
              </S.DetailWrapper>
              <S.DetailWrapper>
                <S.Label>Longitude: </S.Label>
                {data.lon}
              </S.DetailWrapper>
            </S.DataWrapper>
          </S.GridWrapper>
        </Item>
      </S.Wrapper>
    )
  );
};
