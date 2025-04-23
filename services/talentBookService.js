// ====== services/talentMaterialService.js ======
const repo = require("../repositories/talentMaterialRepository");

const fetchAll = () => repo.getAllTalentMaterials();
const fetchByName = (name) => repo.getTalentMaterialByName(name);

module.exports = {
  fetchAll,
  fetchByName
};