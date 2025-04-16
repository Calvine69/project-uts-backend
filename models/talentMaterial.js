// models/talentMaterial.js
const mongoose = require("mongoose");

const TalentMaterialSchema = new mongoose.Schema({
  name: String,
  iconUrl: String,
  characters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Character"
    }
  ]
});

module.exports = mongoose.model("TalentMaterial", TalentMaterialSchema);
