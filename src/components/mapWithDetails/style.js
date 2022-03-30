import styled from "styled-components";
import { MapContainer } from "react-leaflet";
import Grid from "@mui/material/Grid";

export const Wrapper = styled.div``;

export const GridWrapper = styled(Grid)`
  @media screen and (min-width: 1366px) {
    height: calc((100vh - 240px) / 2);
    display: flex;
    align-items: center;
  }
`;

export const Container = styled(MapContainer)`
  width: 550px;
  height: 240px;

  @media screen and (min-width: 1920px) {
    width: 700px;
    height: 330px;
  }
`;

export const Heading = styled.h1`
  margin: 20px 0 0 0;

  @media screen and (min-width: 1366px) {
    margin: 0 0 20px 0;
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const DetailWrapper = styled.div`
  font-size: 16px;
  line-height: 30px;

  @media screen and (min-width: 1920px) {
    font-size: 20px;
  }
`;

export const Label = styled.span`
  font-weight: 800;
`;
