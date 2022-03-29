import styled from "styled-components";
import { MapContainer } from "react-leaflet";

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled(MapContainer)`
  width: 700px;
  height: 330px;
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const InfoWrapper = styled.div`
  font-size: 20px;
  line-height: 30px;
`;

export const Label = styled.span`
  font-weight: 800;
`;
