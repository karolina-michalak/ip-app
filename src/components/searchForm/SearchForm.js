import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

export const SearchForm = ({
  searchIp,
  setSearchIp,
  getSearchData,
  searchList,
  setSearchList,
  setSearchData,
  error,
  setError,
}) => {
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
      setSearchData(null);
    } else {
      getSearchData();
      setSearchList([searchIp, ...searchList]);
      if (error) {
        setError("");
      }
    }
  };

  return (
    <Item>
      <form onSubmit={handleSearch}>
        <TextField
          value={searchIp}
          onChange={handleInputChange}
          size="small"
          placeholder="Search for IP"
        />
        <Button variant="contained" type="submit">
          search
        </Button>
      </form>
    </Item>
  );
};
