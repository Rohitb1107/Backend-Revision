const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Rohit Bagadi!");
});

app.get("/contactus", (req, res) => {
  res.send("stylsihrb711@gmail.com");
});

app.get("/about", (req, res) => {
  res.send("I am Rohit. I am a full-stack web developer");
});

app.get("/faq", (req, res) => {
  res.send("FAQ Page");
});

app.listen(3000, () => {
  console.log("server starts running at port 3000");
});
