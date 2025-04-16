const repo = require("../repositories/weaponAscensionRepository");

const fetchAll = () => repo.getAllWeaponAscensions();
const fetchByName = (name) => repo.getWeaponAscensionByName(name);

module.exports = {
  fetchAll,
  fetchByName
};