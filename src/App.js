import { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import * as S from "./style";
import { SearchHistory } from "./components/searchHistory/SearchHistory";
import { SearchForm } from "./components/searchForm/SearchForm";
import { MapWithDetails } from "./components/mapWithDetails/MapWithDetails";

const Item = styled(Paper)(({ theme }) => ({
  padding: "20px",
  color: "red",
}));

function App() {
  const [clientsIp, setClientsIp] = useState(null);
  const [clientsData, setClientsData] = useState(null);
  const [searchIp, setSearchIp] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [searchList, setSearchList] = useState([]);
  const [error, setError] = useState(null);

  const getClientsIp = async () => {
    const options = {
      method: "GET",
      url: "http://localhost:8000",
    };

    const response = await axios.request(options);
    setClientsIp(response.data.IPv4);
  };

  const getClientsData = async () => {
    const options = {
      method: "GET",
      url: "http://localhost:8000/client",
      params: { clientsIp: clientsIp },
    };

    const response = await axios.request(options);
    setClientsData(response.data);
  };

  const getSearchData = async () => {
    if (!searchIp) {
      return;
    }

    const options = {
      method: "GET",
      url: "http://localhost:8000/search",
      params: { searchIp: searchIp },
    };

    const response = await axios.request(options);

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
    <S.AppWrapper container>
      <SearchHistory searchList={searchList} />
      <S.Wrapper item xs={12} sm={9}>
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
        {error && (
          <S.ErrorWrapper item xs={12}>
            <Item>{error}</Item>
          </S.ErrorWrapper>
        )}
        <MapWithDetails data={searchData} searchResult />
      </S.Wrapper>
    </S.AppWrapper>
  );
}

export default App;
