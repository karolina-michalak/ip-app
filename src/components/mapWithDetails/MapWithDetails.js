import { TileLayer, Marker, Popup } from "react-leaflet";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import * as S from "./style";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

export const MapWithDetails = ({ data, searchResult }) => {
  return (
    data && (
      <S.Wrapper>
        <Item>
          <Grid container direction="row">
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
              {searchResult ? <h2>Search result</h2> : <h2>Your location</h2>}
              <S.InfoWrapper>
                <S.Label>IP: </S.Label>
                {data.query}
              </S.InfoWrapper>
              <S.InfoWrapper>
                <S.Label>City: </S.Label>
                {data.city}
              </S.InfoWrapper>
              <S.InfoWrapper>
                <S.Label>Region: </S.Label>
                {data.regionName}
              </S.InfoWrapper>
              <S.InfoWrapper>
                <S.Label>Country: </S.Label>
                {data.country}
              </S.InfoWrapper>
              <S.InfoWrapper>
                <S.Label>Latitude:</S.Label>
                {data.lat}
              </S.InfoWrapper>
              <S.InfoWrapper>
                <S.Label>Longitude:</S.Label>
                {data.lon}
              </S.InfoWrapper>
            </S.DataWrapper>
          </Grid>
        </Item>
      </S.Wrapper>
    )
  );
};
