const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('connect you mongodb Cluster url'); // Removed deprecated options
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
