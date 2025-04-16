// ====== models/character.js ======
const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
  name: String,
  title: String,
  element: String,
  weaponType: String,
  gender: String,
  birthday: String,
  description: String,
  cardImageURL: String,
  rarity: Number
});

module.exports = mongoose.model("Character", CharacterSchema);

