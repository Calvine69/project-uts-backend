// ====== repositories/talentMaterialRepository.js ======
const TalentMaterial = require("../models/talentMaterial");

const getAllTalentMaterials = () => TalentMaterial.find();
const getTalentMaterialByName = (name) => TalentMaterial.findOne({ name });

module.exports = {
  getAllTalentMaterials,
  getTalentMaterialByName
};