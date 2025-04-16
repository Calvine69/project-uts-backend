const mongoose = require("mongoose");

const EnemySchema = new mongoose.Schema({
  name: String,
  family: String,
  description: String,
  iconUrl: String,
  drops: [String]
});

module.exports = mongoose.model("Enemy", EnemySchema);
