const Enemy = require('../models/enemy');

// CREATE: Tambah satu atau banyak enemy
exports.createEnemy = async (req, res) => {
  try {
    const data = Array.isArray(req.body) ? req.body : [req.body];
    const result = await Enemy.insertMany(data);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ: Ambil semua enemy (dengan optional filter by name)
exports.getAllEnemies = async (req, res) => {
  try {
    const { name } = req.query;
    let filter = {};

    if (name) {
      filter.name = { $regex: name, $options: 'i' }; // case-insensitive
    }

    const enemies = await Enemy.find(filter);
    res.status(200).json(enemies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ: Ambil enemy berdasarkan ID
exports.getEnemyById = async (req, res) => {
  try {
    const enemy = await Enemy.findById(req.params.id);
    if (!enemy) {
      return res.status(404).json({ error: 'Enemy not found' });
    }
    res.status(200).json(enemy);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE: Ubah data enemy berdasarkan ID
exports.updateEnemy = async (req, res) => {
  try {
    const updatedEnemy = await Enemy.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEnemy) {
      return res.status(404).json({ error: 'Enemy not found' });
    }
    res.status(200).json(updatedEnemy);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE: Hapus enemy berdasarkan ID
exports.deleteEnemy = async (req, res) => {
  try {
    const deleted = await Enemy.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Enemy not found' });
    }
    res.status(200).json({ message: 'Enemy deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE ALL: Hapus semua enemy
exports.deleteAllEnemies = async (req, res) => {
  try {
    await Enemy.deleteMany({});
    res.status(200).json({ message: 'All enemies deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
