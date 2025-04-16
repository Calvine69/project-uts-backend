const express = require("express");
const router = express.Router();
const weaponController = require("../controllers/weaponController");

router.get("/", weaponController.getAllWeapons);
router.get("/:name", weaponController.getWeaponByName);

module.exports = router;
