// Importing dependencies
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Untuk menggunakan variabel dari .env

// Inisialisasi Express
const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB URI dari .env
const mongoURI = process.env.DB_CONNECTION;

// Koneksi ke MongoDB menggunakan mongoose
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Middleware
app.use(express.json());

// Route untuk root URL '/'
app.get('/', (req, res) => {
  res.send('Welcome to the API! Successfully connected to MongoDB.');
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
