const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, // The character's _id (as an ObjectId)
  name: String,
  weaponType: String,
  rarity: Number,
  cardImageURL: String
});

const TalentBookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  iconUrl: {
    type: String,
    required: true
  },
  rarity: {
    type: Number,
    required: true
  },
  farmingDays: {
    type: [String],
    required: true
  },
  characters: [CharacterSchema]
});

module.exports = mongoose.model("TalentBook", TalentBookSchema);
