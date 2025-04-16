const mongoose = require("mongoose");

const LocalSpecialtySchema = new mongoose.Schema({
  name: String,
  iconUrl: String,
  sources: [String],
  characters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Character"
    }
  ]
});

module.exports = mongoose.model("LocalSpecialty", LocalSpecialtySchema);
