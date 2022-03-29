import { v4 as uuidv4 } from 'uuid';
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import * as S from './style';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

export const SearchHistory = ({ searchList }) => {
  return (
    <Item>
            <h2>Search history</h2>

    <S.Wrapper>
      {searchList.map(o => <div key={uuidv4()}>{o}</div>)}
    </S.Wrapper>
    </Item>
  )
}