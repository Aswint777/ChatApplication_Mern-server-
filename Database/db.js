const mongoose = require('mongoose');
require('dotenv').config();



console.log(process.env.MONGODB_URL);
const connectDB = async () => {
    try {
        console.log('haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaai');
        
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
