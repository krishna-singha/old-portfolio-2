const mongoose = require("mongoose");

// Creating a schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: () => new Date().toISOString().split("T")[0],
  },
});

// Creating Contact Model
const contactModel = mongoose.model("contact", contactSchema);

// Exporting the model
module.exports = contactModel;
