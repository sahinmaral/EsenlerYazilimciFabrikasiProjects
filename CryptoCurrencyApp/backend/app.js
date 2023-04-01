const express = require("express");
const axios = require("axios");
const cors = require('cors')
require("dotenv").config();

const app = express();

app.use(cors())


app.get("/", (req, res) => {
  axios
    .get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CRYPTOCURRENCY_API_KEY,
        },
      }
    )
    .then((request) => {
      res.send(request.data);
    })
    .catch((err) => {
      res.send(err);
    });
});

const port = 3005

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});
