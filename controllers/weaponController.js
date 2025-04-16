const weaponService = require("../services/weaponService");

const getAllWeapons = async (req, res) => {
  try {
    const weapons = await weaponService.fetchAllWeapons();
    res.json(weapons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getWeaponByName = async (req, res) => {
  try {
    const name = req.params.name;
    const weapon = await weaponService.fetchWeaponByName(name);
    if (!weapon) return res.status(404).json({ message: "Weapon not found" });
    res.json(weapon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllWeapons,
  getWeaponByName
};
