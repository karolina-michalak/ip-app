import { v4 as uuidv4 } from 'uuid';
import * as S from './style';

export const SearchHistory = ({ searchList }) => {
  return (
    <S.Wrapper>
      {searchList.slice(0,20).map(o => <div key={uuidv4()}>{o}</div>)}
    </S.Wrapper>
  )
}