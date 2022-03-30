import styled from "styled-components";
import Grid from "@mui/material/Grid";

export const AppWrapper = styled(Grid)`
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  height: 100vh;

  @media screen and (min-width: 1366px) {
    overflow: hidden;
  }
`;

export const Wrapper = styled(Grid)`
  height: calc(100vh - 40px);
`;

export const ErrorWrapper = styled(Grid)`
  font-size: 20px;
`;
