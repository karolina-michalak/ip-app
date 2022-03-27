import { useState } from "react";
import * as S from "./style";

export const SearchForm = ({
  searchIp,
  setSearchIp,
  getSearchData,
  searchList,
  setSearchList,
}) => {
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setSearchIp(e.target.value);
  };

  const handleSearch = (e) => {
     e.preventDefault();
    const regexExp =
      /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
    const result = regexExp.test(searchIp);
    if (!result) {
      setError("Wrong value");
    } else {
      getSearchData();
      setSearchList([searchIp, ...searchList]);
    }
  };

  return (
    <S.Wrapper>
      {error}
      <form onSubmit={handleSearch}>
        <input value={searchIp} onChange={handleInputChange} />
        <button type="submit">search</button>
      </form>
    </S.Wrapper>
  );
};
