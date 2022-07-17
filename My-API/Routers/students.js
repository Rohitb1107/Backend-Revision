const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

// POST data
router.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const addUser = await user.save();
    res.status(201).send(addUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

// GET all students data
router.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.status(200).send(studentsData);
  } catch (err) {
    res.status(400).send(err);
  }
});

// GET individual students data by id
router.get("/students/:id", async (req, res) => {
  try {
    const studentData = await Student.findById(req.params.id);
    console.log(req.params.id);
    res.status(200).send(studentData);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update student data by id
router.patch("/students/:id", async (req, res) => {
  try {
    const updateStData = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).send(updateStData);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete student data by id
router.delete("/students/:id", async (req, res) => {
  try {
    const deleteStData = await Student.findByIdAndDelete(req.params.id);
    res.status(200).send(deleteStData);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
