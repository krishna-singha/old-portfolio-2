require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');


const port = process.env.PORT || 8000;
const MongoDBUrl = process.env.MONGODB_URL;
const { FRONTEND_URL } = require('./config');
const contactModel = require('./models/contact.model');
const adminModel = require('./models/admin.model');

// Middleware
app.use(cors({
    origin: FRONTEND_URL,
    methods: ['GET', 'POST'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
async function connectToMongoDB() {
    try {
        await mongoose.connect(MongoDBUrl);
        console.log('Connected to database');
    } catch (err) {
        console.error('Error connecting to database', err);
    }
}
connectToMongoDB();

app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Route to add a new contact
app.post('/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        await contactModel.create({
            name,
            email,
            message,
        });
        return res.sendStatus(201);
    } catch (error) {
        console.error("Error adding contact:", error);
        return res.status(500).send("Internal Server Error");
    }
});

// Admin route to fetch contacts from backend
app.post('/admin', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await adminModel.findOne({ email, password });
        if (user) {
            const response = await contactModel.find({}).sort({ _id: -1 });
            return res.send(response);
        } else {
            return res.send("No Record");
        }
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
