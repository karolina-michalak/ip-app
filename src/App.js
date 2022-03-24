import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import './App.css';


function App() {
  const [clientsIp, setClientsIp] = useState('');
  const [clientsData, setClientsData] = useState(null);
  const [searchIp, setSearchIp] = useState('');
  const [searchData, setSearchData] = useState(null);
  const [searchList, setSearchList] = useState([]);
  const [error, setError] = useState(null);

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

  const handleInputChange = (e) => {
    setSearchIp(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault()
    getSearchData()
    setSearchList([searchIp, ...searchList])
  };


  return (
    <div className="App">
      {clientsData && clientsData.city}
      <form onSubmit={handleSearch}>
        <input value={searchIp} onChange={handleInputChange} />
        <button type="submit">search</button>
      </form>
      <div>{searchData && searchData.city}</div>
      <div>
        {error}
        {searchList.slice(0,10).map(o => <div key={uuidv4()}>{o}</div>)}
      </div>
    </div>
  );
}

export default App;
