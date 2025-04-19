const express = require("express");
const router = express.Router();
const weaponController = require("../controllers/weaponController");

// Create a new weapon
router.post("/", weaponController.createWeapon);

// Get all weapons
router.get("/", weaponController.getAllWeapons);

// Get weapon by name
router.get("/:name", weaponController.getWeaponByName);

// Update weapon by name
router.put("/:name", weaponController.updateWeapon);

// Delete weapon by name
router.delete("/:name", weaponController.deleteWeapon);

// Delete all weapons
router.delete("/", weaponController.deleteAllWeapons);

module.exports = router;