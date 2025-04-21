const enemy = require('../services/enemyService');

// CREATE: Tambah satu atau banyak enemy
exports.createEnemy = async (req, res) => {
  try {
    const data = Array.isArray(req.body) ? req.body : [req.body];
    const result = await enemy.createManyEnemies(data);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ: Ambil semua enemy
exports.getAllEnemies = async (req, res) => {
  try {
    const enemies = await enemy.fetchAllEnemies();
    res.json(enemies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ: Ambil enemy berdasarkan ID
exports.getEnemyById = async (req, res) => {
  try {
    const enemy = await enemy.fetchEnemyById(req.params.id);
    if (!enemy) {
      return res.status(404).json({ error: 'Enemy not found' });
    }
    res.json(enemy);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE: Ubah data enemy berdasarkan ID
exports.updateEnemy = async (req, res) => {
  try {
    const updatedEnemy = await enemy.updateEnemy(req.params.id, req.body);
    if (!updatedEnemy) {
      return res.status(404).json({ error: 'Enemy not found' });
    }
    res.json(updatedEnemy);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE: Hapus enemy berdasarkan ID
exports.deleteEnemy = async (req, res) => {
  try {
    const deleted = await enemy.deleteEnemyById(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Enemy not found' });
    }
    res.json({ message: 'Enemy deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE ALL: Hapus semua enemy
exports.deleteAllEnemies = async (req, res) => {
  try {
    await enemy.deleteAllEnemies();
    res.json({ message: 'All enemies deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
