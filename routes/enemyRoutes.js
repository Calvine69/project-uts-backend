const express = require("express");
const router = express.Router();
const enemyController = require("../controllers/enemyController");

router.post("/", enemyController.createEnemy);
router.get("/", enemyController.getAllEnemies);
router.get("/:id", enemyController.getEnemyById);
router.put("/:id", enemyController.updateEnemy);
router.delete("/:id", enemyController.deleteEnemy);
router.delete("/", enemyController.deleteAllEnemies);

module.exports = router;
