const mongoose = require('mongoose');

// Creating a schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    time: {
        type: String,
        default: Date().slice(4, 21),
    }
});

// Creating Contact Model
const contactModel = mongoose.model('contact', contactSchema);

// Exporting the model
module.exports = contactModel;