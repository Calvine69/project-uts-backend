const WeaponAscension = require("../models/weaponAscension");

const getAllWeaponAscensions = () => WeaponAscension.find().populate("weapons");
const getWeaponAscensionByName = (name) => WeaponAscension.findOne({ name }).populate("weapons");

module.exports = {
  getAllWeaponAscensions,
  getWeaponAscensionByName
};