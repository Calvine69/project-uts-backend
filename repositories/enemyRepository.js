const Enemy = require("../models/enemy");

const getAllEnemies = () => Enemy.find();
const getEnemyByName = (name) => Enemy.findOne({ name });

module.exports = {
  getAllEnemies,
  getEnemyByName
};
