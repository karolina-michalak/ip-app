import { v4 as uuidv4 } from "uuid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import * as S from "./style";

const Item = styled(Paper)(({ theme }) => ({
  padding: "20px",
  marginBottom: "20px",
  color: theme.palette.text.secondary,
  [theme.breakpoints.up("sm")]: {
    margin: "0 20px 0 0",
    height: "calc(100vh - 80px)",
  },
}));

export const SearchHistory = ({ searchList }) => {
  return (
    <S.GridWrapper item xs={12} sm={3}>
      <Item>
        <S.Heading>Search history</S.Heading>
        <S.Wrapper searchList={searchList}>
          {searchList.map((o) => (
            <div key={uuidv4()}>{o}</div>
          ))}
        </S.Wrapper>
      </Item>
    </S.GridWrapper>
  );
};
