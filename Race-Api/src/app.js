const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
require("./db/connect");

app.use(express.json());

const MensRanking = require("./models/mens.model");

app.post("/mens", async (req, res) => {
  try {
    const addMensData = new MensRanking(req.body);
    const addDataToDB = await addMensData.save();
    res.status(201).send(addDataToDB);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/mens", async (req, res) => {
  try {
    const getMensData = await MensRanking.find();
    res.status(200).send(getMensData);
  } catch (err) {
    res.status(400).send(err);
  }
});
app.listen(port, () => {
  console.log(`Server start running on port ${port}.`);
});
