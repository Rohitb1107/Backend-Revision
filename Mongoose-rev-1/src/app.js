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
  gender: String,
});

// Create collection
const User = new mongoose.model("User", usersSchema);

// Create document
const createDoc = async () => {
  try {
    const user1 = new User({
      name: "Rohit",
      age: 19,
      email: "rohit@gmail.com",
      gender: "Male",
    });

    const user2 = new User({
      name: "Thor",
      age: 34,
      email: "thor@gmail.com",
      gender: "Male",
    });

    const res = await User.insertMany([user1, user2]);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

// createDoc();

// Get documents
const getDocuments = async () => {
  const result = await User.find();
  console.log(result);
};

getDocuments();