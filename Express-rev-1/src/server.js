const express = require("express");
const path = require("path");
const hbs = require("hbs");
// const staticPath = path.join(__dirname, "../client");
// const templatePath = path.join(__dirname, "../template");
// app.use(express.static(staticPath));

const partialsPath = path.join(__dirname, "../partials");

const app = express();
const port = process.env.PORT || 8080;

// Set up view engine
app.set("view engine", "hbs");
// app.set("views", templatePath);

hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  res.render("index", {
    user: "Rohit Bagadi",
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});
app.listen(port, () => {
  console.log(`server start running on port ${port}.`);
});
