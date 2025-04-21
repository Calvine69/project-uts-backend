// enemyService.js

async function createManyEnemies(data) {
  // Misalnya: simpan ke DB atau array
  return data;
}

async function fetchAllEnemies() {
  return []; // atau ambil dari DB
}

async function fetchEnemyById(id) {
  return null; // contoh stub
}

async function updateEnemy(id, newData) {
  return null;
}

async function deleteEnemyById(id) {
  return false;
}

async function deleteAllEnemies() {
  return true;
}

module.exports = {
  createManyEnemies,
  fetchAllEnemies,
  fetchEnemyById,
  updateEnemy,
  deleteEnemyById,
  deleteAllEnemies
};
