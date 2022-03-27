import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import { SearchHistory } from "./components/searchHistory/SearchHistory";
import { SearchForm } from "./components/searchForm/SearchForm";
import { Map } from "./components/map/Map";

function App() {
  const [clientsIp, setClientsIp] = useState(null);
  const [clientsData, setClientsData] = useState(null);
  const [searchIp, setSearchIp] = useState('');
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
    if(!searchIp) {
      return
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
    <div className="App">
      <SearchHistory searchList={searchList} />
      <div>
        <Map data={clientsData} />
        {clientsData && clientsData.city}
      </div>
      <SearchForm
        searchIp={searchIp}
        setSearchIp={setSearchIp}
        getSearchData={getSearchData}
        searchList={searchList}
        setSearchList={setSearchList}
      />
      <div>{error}</div>
      <div>
        <Map data={searchData} />
        <div>{searchData && searchData.city}</div>
      </div>
    </div>
  );
}

export default App;
