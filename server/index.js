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
const buildModel = require('./models/build.model');

// Middleware
app.use(cors({
    origin: FRONTEND_URL,
    methods: ['GET', 'POST', 'DELETE'],
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

app.post('/admin', async (req, res) => {
    try {
        const { email, uid } = req.body;
        const user = await adminModel.findOne({ email, uid });
        if (user) {
            return res.status(200).send("admin");
        }
        return res.status(401).send("not an admin");
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
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
app.post('/admin/contact', async (req, res) => {
    try {
        const { email, uid } = req.body;
        const user = await adminModel.findOne({ email, uid });
        if (!user) {
            return res.status(401).send("Unauthorized");
        }
        const contacts = await contactModel.find({}).sort({ _id: -1 });
        return res.status(200).send(contacts);
    }
    catch (error) {
        return res.status(500).send("Internal Server Error");
    }
});


// Route to add a new build
app.post('/build', async (req, res) => {
    try {
        const { name, email, phone, projectDetails, budget } = req.body;
        await buildModel.create({
            name,
            email,
            phone,
            projectDetails,
            budget,
        });
        return res.sendStatus(201);
    } catch (error) {
        console.error("Error adding build:", error);
        return res.status(500).send("Internal Server Error");
    }
});

// Route to get all build messages
app.post('/admin/build', async (req, res) => {
    try {
        const { email, uid } = req.body;
        const user = await adminModel.findOne({ email, uid });
        if (!user) {
            return res.status(401).json("Unauthorized");
        }
        const build = await buildModel.find({}).sort({ _id: -1 });
        return res.status(200).json(build);
    } catch (error) {
        return res.status(500).json("Internal Server Error");
    }
});

// Admin route to delete a contact
app.delete('/admin/contact/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await contactModel.findOneAndDelete({ _id: id });
        return res.status(200).send("Deleted");
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
});
// Admin route to delete a build
app.delete('/admin/build/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await buildModel.findOneAndDelete({ _id: id });
        return res.status(200).send("Deleted");
    } catch (error) {
        return res.status(500).send("Internal Server Error");
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
