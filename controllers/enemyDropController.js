const EnemyDrop = require('../models/enemyDrop');

// POST satu data enemy drop
exports.createEnemyDrop = async (req, res) => {
  try {
    const newDrop = await EnemyDrop.create(req.body);
    res.status(201).json(newDrop);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// POST banyak data enemy drop
exports.createManyEnemyDrops = async (req, res) => {
  try {
    const newDrops = await EnemyDrop.insertMany(req.body);
    res.status(201).json(newDrops);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET semua enemy drop dengan filter
exports.getAllEnemyDrops = async (req, res) => {
  try {
    const { name, rarity, enemyFamily } = req.query;

    // Membuat filter berdasarkan query parameter
    const filter = {};

    if (name) {
      filter.name = { $regex: name, $options: 'i' }; // Pencarian nama yang tidak sensitif terhadap huruf besar/kecil
    }
    if (rarity) {
      filter.rarity = rarity; // Menyaring berdasarkan rarity
    }
    if (enemyFamily) {
      filter.enemyFamily = { $in: [enemyFamily] }; // Menyaring berdasarkan enemyFamily
    }

    // Ambil data dengan filter
    const drops = await EnemyDrop.find(filter);

    res.status(200).json(drops);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE semua enemy drop
exports.deleteAllEnemyDrops = async (req, res) => {
  try {
    await EnemyDrop.deleteMany({});
    res.status(200).json({ message: 'Semua enemy drop berhasil dihapus.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
