const mongoose = require('mongoose');

const buildSchema = mongoose.Schema({
    name: String,
    email: String,
    // phone: String,
    projectDetails: String,
    budget: Number,
},
{
    timestamps: true,
});

// Creating Contact Model
const buildModel = mongoose.model('build-website', buildSchema);

// Exporting the model
module.exports = buildModel;