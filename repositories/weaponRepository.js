const Weapon = require("../models/weapon");

const getAllWeapons = () => Weapon.find();
const getWeaponByName = (name) => Weapon.findOne({ name });

module.exports = {
  getAllWeapons,
  getWeaponByName
};
