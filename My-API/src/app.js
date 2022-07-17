const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
require("../db/connect");
const studentRouter = require("../Routers/students");

app.use(express.json());
app.use(studentRouter);

// Listen to server
app.listen(port, () => {
  console.log(`Server start running on port ${port}.`);
});
