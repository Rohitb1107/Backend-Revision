const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
require("../db/connect");
const Student = require("../models/students");

app.use(express.json());

// POST data
app.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const addUser = await user.save();
    res.status(201).send(addUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

// GET all students data
app.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.status(200).send(studentsData);
  } catch (err) {
    res.status(400).send(err);
  }
});

// GET individual students data
app.get("/students/:id", async (req, res) => {
  try {
    const studentData = await Student.findById(req.params.id);
    res.status(200).send(studentData);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Listen to server
app.listen(port, () => {
  console.log(`Server start running on port ${port}.`);
});
