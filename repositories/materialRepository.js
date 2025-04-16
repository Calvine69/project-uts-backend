const Material = require("../models/material");

const getAllMaterials = () => Material.find().populate("characters weapons");
const getMaterialByName = (name) => Material.findOne({ name }).populate("characters weapons");

module.exports = {
  getAllMaterials,
  getMaterialByName
};
