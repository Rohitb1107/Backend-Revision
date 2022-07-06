const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var num1 = +req.body.num1;
  var num2 = +req.body.num2;
  var ans = num1 + num2;

  res.send("The result of your calculation is " + ans);
});

app.listen(3000, () => {
  console.log("Server starts running at port 3000.");
});
