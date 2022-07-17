const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
require("../db/connect");
const Student = require("../models/students");

app.use(express.json());

app.post("/students", (req, res) => {
  console.log(req.body);
  const user = new Student(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });

  res.send("Welcome Students");
});

app.listen(port, () => {
  console.log(`Server start running on port ${port}.`);
});
