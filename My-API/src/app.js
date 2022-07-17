const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
require("../db/connect");
const Student = require("../models/students");

app.use(express.json());

app.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const addUser = await user.save();
    res.status(201).send(addUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server start running on port ${port}.`);
});
