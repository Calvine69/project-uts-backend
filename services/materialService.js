const repo = require("../repositories/materialRepository");

const fetchAll = () => repo.getAllMaterials();
const fetchByName = (name) => repo.getMaterialByName(name);

module.exports = {
  fetchAll,
  fetchByName
};