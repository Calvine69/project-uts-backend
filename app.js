// Importing dependencies
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Inisialisasi Express
const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB URI
const mongoURI = process.env.DB_CONNECTION;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());

// Tambahkan routing karakter
const characterRoutes = require('./routes/characterRoutes');
app.use('/characters', characterRoutes);
//Tambahkan routing enemy drop
const enemyDropRoutes = require('./routes/enemyDropRoutes');
app.use('/enemyDrop', enemyDropRoutes);
//Tambahkan routing weapon
const weaponRoutes = require('./routes/weaponRoutes');
app.use('/weapon', weaponRoutes);
//Tambahkan routing weapon ascension
const weaponAscensionRoutes = require('./routes/weaponAscensionRoutes');
app.use('/weaponAscension', weaponAscensionRoutes);
//Tambahkan routing enemy
const enemyRoutes = require('./routes/enemyRoutes');
app.use('/enemy', enemyRoutes);
//Tambahkan routing talentbook
const talentBookRoutes = require("./routes/talentBookRoutes");
app.use("/talentBook", talentBookRoutes)
const eventRoutes = require('./routes/eventRoutes');
app.use('/events', eventRoutes);
// Tambahkan routing Local Specialty
const localSpecialtyRoutes = require('./routes/localSpecialtyRoutes');
app.use('/localSpecialty', localSpecialtyRoutes);



// Route default
app.get('/', (req, res) => {
  res.send('Welcome to the API! Successfully connected to MongoDB.');
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
