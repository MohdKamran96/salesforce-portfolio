require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
    res.send('Salesforce Portfolio API Running');
});

// Import Routes
const contactRoute = require('./routes/contact');
const authRoute = require('./routes/auth');
const couponRoute = require('./routes/coupons');

app.use('/api/contact', contactRoute);
app.use('/api/auth', authRoute);
app.use('/api/coupons', couponRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
