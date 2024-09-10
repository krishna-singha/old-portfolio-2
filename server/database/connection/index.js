const mongoose = require("mongoose");
const MONGODB_URL = process.env.MONGODB_URL;

// Connect to MongoDB
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log('Connected to database');
    } catch (err) {
        console.error('Error connecting to database', err);
    }
}

module.exports = connectToMongoDB;