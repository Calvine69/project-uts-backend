const mongoose = require("mongoose");

const MaterialSchema = new mongoose.Schema({
  name: String,
  iconUrl: String,
  rarity: Number,
  farmingDays: [String],
  characters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Character"
    }
  ],
  weapons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Weapon"
    }
  ]
});

module.exports = mongoose.model("Material", MaterialSchema);
