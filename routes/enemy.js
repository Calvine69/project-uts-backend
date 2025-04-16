const express = require("express");
const router = express.Router();
const enemyController = require("../controllers/enemyController");

router.get("/", enemyController.getAllEnemies);
router.get("/:name", enemyController.getEnemyByName);

module.exports = router;
