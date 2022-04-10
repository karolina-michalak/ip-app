const PORT = 8000;

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

app.use(express.static(path.resolve(__dirname, '../build')));

app.get("/", (req, res) => {
  const options = {
    method: "GET",
    url: "https://geolocation-db.com/json/",
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/client", (req, res) => {
  const clientsIp = req.query.clientsIp;

  const options = {
    method: "GET",
    url: `http://ip-api.com/json/${clientsIp}`,
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/search", (req, res) => {
  const searchIp = req.query.searchIp;

  const options = {
    method: "GET",
    url: `http://ip-api.com/json/${searchIp}`,
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});
