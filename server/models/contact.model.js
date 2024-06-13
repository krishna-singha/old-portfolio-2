const mongoose = require('mongoose');

// Creating a schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
},
{
    timestamps: true,
});

// Creating Contact Model
const contactModel = mongoose.model('contact', contactSchema);

// Exporting the model
module.exports = contactModel;