const express = require("express");
const mongoose = require("mongoose");

// create schema
const mensSchema = new mongoose.Schema({
  ranking: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  dob: {
    type: Date,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  score: {
    type: Number,
    required: true,
    trim: true,
  },
  event: {
    type: String,
    default: "100m",
  },
});

// create collections
const MensRanking = new mongoose.model("MensRanking", mensSchema);

// export
module.exports = MensRanking;
