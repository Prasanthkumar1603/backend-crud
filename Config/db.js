const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://pk16032002:CDmZLOnLjZX5PYCt@crudimgdata.b9vg7.mongodb.net/?retryWrites=true&w=majority&appName=crudimgdata'); // Removed deprecated options
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
