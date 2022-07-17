const express = require("express");
const router = new express.Router();

const MensRanking = require("../models/mens.model");

// post data
router.post("/mens", async (req, res) => {
  try {
    const addMensData = new MensRanking(req.body);
    const addDataToDB = await addMensData.save();
    res.status(201).send(addDataToDB);
  } catch (err) {
    res.status(400).send(err);
  }
});

// get data
router.get("/mens", async (req, res) => {
  try {
    const getMensData = await MensRanking.find();
    res.status(200).send(getMensData);
  } catch (err) {
    res.status(400).send(err);
  }
});

//get single data
router.get("/mens/:id", async (req, res) => {
  try {
    const getSingleData = await MensRanking.findById(req.params.id);
    res.status(200).send(getSingleData);
  } catch (err) {
    res.status(400).send(err);
  }
});

// patch single data
router.patch("/mens/:id", async (req, res) => {
  try {
    const updateMensData = await MensRanking.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send(updateMensData);
  } catch (err) {
    res.status(400).send(err);
  }
});

// delete data by id
router.delete("/mens/:id", async (req, res) => {
  try {
    const updateMensData = await MensRanking.findByIdAndDelete(req.params.id);
    res.status(200).send(updateMensData);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
