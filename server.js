const express = require('express');
const connectDB = require('./Config/db');
const cors = require('cors');
const studentRoutes = require('./Routes/studentRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));
 

// Routes
app.use('/api/students', studentRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
