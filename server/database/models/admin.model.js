const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
  },
  uid: {
    type: String,
    required: true,
    unique: true,
  },
});

// Creating Admin Model
const adminModel = mongoose.model("admin", adminSchema);

// Exporting the model
module.exports = adminModel;
