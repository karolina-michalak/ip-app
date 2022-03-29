import { useState, useEffect } from "react";
import axios from "axios";

import * as S from "./style";
import { SearchHistory } from "./components/searchHistory/SearchHistory";
import { SearchForm } from "./components/searchForm/SearchForm";
import { MapWithDetails } from "./components/mapWithDetails/MapWithDetails";

function App() {
  const [clientsIp, setClientsIp] = useState(null);
  const [clientsData, setClientsData] = useState(null);
  const [searchIp, setSearchIp] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [searchList, setSearchList] = useState([]);
  const [error, setError] = useState(null);

  const getClientsIp = async () => {
    const response = await axios.get("https://geolocation-db.com/json/");
    setClientsIp(response.data.IPv4);
  };

  const getClientsData = async () => {
    const response = await axios.get(`http://ip-api.com/json/${clientsIp}`);
    setClientsData(response.data);
  };

  const getSearchData = async () => {
    if (!searchIp) {
      return;
    }
    const response = await axios.get(`http://ip-api.com/json/${searchIp}`);
    if (response.data.status === "fail") {
      setError("Invalid query");
      setSearchData(null);
    } else {
      setSearchData(response.data);
      if (error) {
        setError(null);
      }
    }
  };

  console.log(searchData)
  useEffect(() => {
    getClientsIp();
  }, []);

  useEffect(() => {
    if (!clientsIp) {
      return;
    } else {
      getClientsData();
    }
  }, [clientsIp]);

  return (
    <S.AppWrapper>
      <SearchHistory searchList={searchList} />
      <S.Wrapper>
        <MapWithDetails data={clientsData} />
        <SearchForm
          searchIp={searchIp}
          setSearchIp={setSearchIp}
          getSearchData={getSearchData}
          searchList={searchList}
          setSearchList={setSearchList}
          setSearchData={setSearchData}
          error={error}
          setError={setError}
        />
        <S.ErrorWrapper>{error}</S.ErrorWrapper>
        <MapWithDetails data={searchData} searchResult />
      </S.Wrapper>
    </S.AppWrapper>
  );
}

export default App;
