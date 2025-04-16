const mongoose = require('mongoose');

const TalentMaterialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  iconUrl: {
    type: String,
    required: true
  },
  characters: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Character'
  }]
});

module.exports = mongoose.model('TalentMaterial', TalentMaterialSchema);
