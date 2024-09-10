const mongoose = require("mongoose");

const buildSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  projectDetails: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: () => new Date().toISOString().split("T")[0],
  },
});

// Creating Build Model
const buildModel = mongoose.model("build-website", buildSchema);

// Exporting the model
module.exports = buildModel;
