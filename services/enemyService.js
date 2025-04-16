const enemyRepo = require("../repositories/enemyRepository");

const fetchAllEnemies = () => enemyRepo.getAllEnemies();
const fetchEnemyByName = (name) => enemyRepo.getEnemyByName(name);

module.exports = {
  fetchAllEnemies,
  fetchEnemyByName
};
