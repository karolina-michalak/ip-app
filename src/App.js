import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import { SearchHistory } from './components/searchHistory/SearchHistory';
import { SearchForm } from './components/searchForm/SearchForm';
import { Map } from './components/map/Map';


function App() {
  const [clientsIp, setClientsIp] = useState('');
  const [clientsData, setClientsData] = useState(null);
  const [searchIp, setSearchIp] = useState('');
  const [searchData, setSearchData] = useState(null);
  const [searchList, setSearchList] = useState([]);
  const [error, setError] = useState(null);
  const [clientsCoords, setClientsCoords] = useState([]);
  const [searchCoords, setSearchCoords] = useState([])


  const getClientsIp = async () => {
    const response = await axios.get('https://geolocation-db.com/json/');
    setClientsIp(response.data.IPv4);
  };

  const getClientsData = async () => {
    const response = await axios.get(`http://ip-api.com/json/${clientsIp}`);
    setClientsData(response.data);
  };

  const getSearchData = async () => {
    const response = await axios.get(`http://ip-api.com/json/${searchIp}`)
    if (response.data.status === 'fail') {
      setError(response.data.message)
    } else {
      setSearchData(response.data)
      if (error) {
        setError(null)
      }
    }
  };

  useEffect(() => {
    getClientsIp()
  }, []);

  useEffect(() => {
    if (clientsIp === '') {
      return
    } else {
      getClientsData()
    }
  }, [clientsIp]);


  useEffect(() => {
    if (!clientsData) {
      return
    }
    setClientsCoords([clientsData.lat, clientsData.lon])
  }, [clientsData])

   useEffect(() => {
    if (!searchData) {
      return
    }
    setSearchCoords([searchData.lat, searchData.lon])
  }, [searchData])




  return (
    <div className="App">
      {clientsData && clientsData.city}
      <SearchForm
        searchIp={searchIp}
        setSearchIp={setSearchIp}
        getSearchData={getSearchData}
        searchList={searchList}
        setSearchList={setSearchList}
      />
      <div>{searchData && searchData.city}</div>
      <div>
        {error}
        <SearchHistory searchList={searchList} />
      </div>
      <Map coords={clientsCoords} />
      <Map coords={searchCoords} />
    </div>
  );
}

export default App;
