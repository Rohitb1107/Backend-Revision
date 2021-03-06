const mongoose = require("mongoose");
const validator = require("validator");

// Create Schema
const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlenght: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
  phone: Number,
  address: String,
});

// Create collection
const Student = new mongoose.model("Student", studentsSchema);

// Export collection
module.exports = Student;
