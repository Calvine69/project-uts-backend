// services/enemyService.js

let enemies = []; // array untuk simpan data sementara

// CREATE: Tambah satu atau banyak enemy
async function createManyEnemies(data) {
  const newEnemies = data.map(enemy => ({
    ...enemy,
    id: Math.random().toString(36).substr(2, 9),
  }));
  enemies.push(...newEnemies);
  return newEnemies;
}

// READ: Ambil semua enemy
async function fetchAllEnemies() {
  return enemies;
}

// READ: Ambil enemy berdasarkan ID
async function fetchEnemyById(id) {
  return enemies.find(e => e.id === id);
}

// UPDATE: Ubah data enemy berdasarkan ID
async function updateEnemy(id, newData) {
  const index = enemies.findIndex(e => e.id === id);
  if (index === -1) return null;
  enemies[index] = { ...enemies[index], ...newData };
  return enemies[index];
}

// DELETE: Hapus enemy berdasarkan ID
async function deleteEnemyById(id) {
  const index = enemies.findIndex(e => e.id === id);
  if (index === -1) return false;
  enemies.splice(index, 1);
  return true;
}

// DELETE ALL: Hapus semua enemy
async function deleteAllEnemies() {
  enemies = [];
  return true;
}

module.exports = {
  createManyEnemies,
  fetchAllEnemies,
  fetchEnemyById,
  updateEnemy,
  deleteEnemyById,
  deleteAllEnemies,
};
