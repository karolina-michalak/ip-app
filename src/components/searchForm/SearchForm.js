

export const SearchForm = ({ searchIp, setSearchIp, getSearchData, searchList, setSearchList }) => {
  const handleInputChange = (e) => {
    setSearchIp(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault()
    getSearchData()
    setSearchList([searchIp, ...searchList])
  };

  return (
      <form onSubmit={handleSearch}>
        <input value={searchIp} onChange={handleInputChange} />
        <button type="submit">search</button>
      </form>
  )
};