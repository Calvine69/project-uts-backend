const mongoose = require("mongoose");

const EnemySchema = new mongoose.Schema({
  name: String,
  family: String, // ← sebelumnya 'type', disesuaikan ke 'family'
  description: String,
  iconUrl: String,
  drops: [String]
});

module.exports = mongoose.model("Enemy", EnemySchema);
