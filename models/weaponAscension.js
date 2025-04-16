const mongoose = require("mongoose");

const WeaponAscensionSchema = new mongoose.Schema({
  name: String,
  categoryName: String,
  rarity: Number,
  description: String,
  iconUrl: String,
  farmingDays: [String],
  weapons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Weapon"
    }
  ],
  domainName: String
});

module.exports = mongoose.model("WeaponAscension", WeaponAscensionSchema);