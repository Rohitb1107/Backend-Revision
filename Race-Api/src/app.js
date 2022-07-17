const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
require("./db/connect");
const mensRouter = require("./controllers/mens.router");

app.use(express.json());
app.use(mensRouter);

app.listen(port, () => {
  console.log(`Server start running on port ${port}.`);
});
