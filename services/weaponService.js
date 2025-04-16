const weaponRepo = require("../repositories/weaponRepository");

const fetchAllWeapons = async () => {
  return await weaponRepo.getAllWeapons();
};

const fetchWeaponByName = async (name) => {
  return await weaponRepo.getWeaponByName(name);
};

module.exports = {
  fetchAllWeapons,
  fetchWeaponByName
};
