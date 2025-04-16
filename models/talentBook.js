const mongoose = require("mongoose");

const TalentBookSchema = new mongoose.Schema({
  name: String,
  iconUrl: String,
  rarity: Number,
  farmingDays: [String],
  characters: [
    {
      name: String,
      cardImageURL: String,
      compressedImageURL: String,
      weaponType: String,
      rarity: Number
    }
  ]
});

module.exports = mongoose.model("TalentBook", TalentBookSchema);