const mongoose = require("mongoose");

const WeaponSchema = new mongoose.Schema({
  name: String,
  baseAtk: String,
  iconUrl: String,
  rarity: Number,
  weaponType: String,
  isReleased: Boolean,
  description: String,
  source: String,
  ascensionMaterials: [String],
  ascensionEnemyDrops: [String],
  characters: [String]
});

module.exports = mongoose.model("Weapon", WeaponSchema);
