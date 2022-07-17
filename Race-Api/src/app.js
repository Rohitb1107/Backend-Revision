const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
require("./db/connect");
const router = require("./controllers/mens.router");

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server start running on port ${port}.`);
});
