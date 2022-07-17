const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
require("./db/connect");

app.get("/", async (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server start running on port ${port}.`);
});
