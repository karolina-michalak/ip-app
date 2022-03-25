import { v4 as uuidv4 } from 'uuid';

export const SearchHistory = ({ searchList }) => {
  return (
    <div>
      {searchList.slice(0,20).map(o => <div key={uuidv4()}>{o}</div>)}
    </div>
  )
}