import styled from "styled-components";
import Grid from "@mui/material/Grid";

export const GridWrapper = styled(Grid)``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  font-size: 20px;
  line-height: 30px;
  height: 100px;
  overflow-y: auto;
  position: relative;
  width: 100%;

  @media screen and (min-width: 1366px) {
    height: 90%;
  }
`;

export const Heading = styled.h1`
  margin: 0 0 20px;
`;
