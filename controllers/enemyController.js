const enemyService = require("../services/enemyService");

const getAllEnemies = async (req, res) => {
  try {
    const enemies = await enemyService.fetchAllEnemies();
    res.json(enemies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getEnemyByName = async (req, res) => {
  try {
    const name = req.params.name;
    const enemy = await enemyService.fetchEnemyByName(name);
    if (!enemy) return res.status(404).json({ message: "Enemy not found" });
    res.json(enemy);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllEnemies,
  getEnemyByName
};
