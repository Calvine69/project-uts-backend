const EnemyDrop = require("../models/enemyDrop");

const getAllEnemyDrops = () => EnemyDrop.find();
const getEnemyDropByName = (name) => EnemyDrop.findOne({ name });

module.exports = {
  getAllEnemyDrops,
  getEnemyDropByName
};