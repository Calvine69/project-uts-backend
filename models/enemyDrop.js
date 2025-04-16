const mongoose = require("mongoose");

const EnemyDropSchema = new mongoose.Schema({
  name: String,
  iconUrl: String,
  rarity: Number,
  type: String,
  enemyFamily: [String]
});
module.exports = mongoose.model("EnemyDrop", EnemyDropSchema);