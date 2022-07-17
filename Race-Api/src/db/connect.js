const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/race-api", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected successfully!");
  })
  .catch((err) => {
    console.log(err);
  });
