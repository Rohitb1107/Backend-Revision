const mongoose = require("mongoose");

// Connect to mongo
mongoose
  .connect("mongodb://localhost:27017/learnmongodb", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected successfully...");
  })
  .catch((err) => {
    console.log("err");
  });

// Create Schema
const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  email: String,
  gender: Boolean,
});

//Crete collection
const User = new mongoose.model("User", usersSchema);
