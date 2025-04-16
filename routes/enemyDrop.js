const express = require("express");
const router = express.Router();
const controller = require("../controllers/enemyDropController");

router.get("/", controller.getAllEnemyDrops);
router.get("/:name", controller.getEnemyDropByName);

module.exports = router;
