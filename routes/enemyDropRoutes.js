const express = require('express');
const router = express.Router();
const enemyDropController = require('../controllers/enemyDropController');

// POST satu
router.post('/', enemyDropController.createEnemyDrop);

// POST banyak
router.post('/many', enemyDropController.createManyEnemyDrops);

// GET semua
router.get('/', enemyDropController.getAllEnemyDrops);

// DELETE semua
router.delete('/', enemyDropController.deleteAllEnemyDrops);

module.exports = router;
