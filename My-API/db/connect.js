const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/students-api", {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected successfully!");
  })
  .catch((err) => {
    console.log(err);
  });
