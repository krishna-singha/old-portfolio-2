const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

// Creating Contact Model
const adminModel = mongoose.model('Admin', adminSchema);

// Exporting the model
module.exports = adminModel;