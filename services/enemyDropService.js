const repo = require("../repositories/enemyDropRepository");

const fetchAll = () => repo.getAllEnemyDrops();
const fetchByName = (name) => repo.getEnemyDropByName(name);

module.exports = {
  fetchAll,
  fetchByName
};