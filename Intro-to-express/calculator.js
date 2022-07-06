const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  res.send("Thanks for your submission!");
});

app.listen(3000, () => {
  console.log("Server starts running at port 3000.");
});
