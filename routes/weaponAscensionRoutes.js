const express = require("express");
const router = express.Router();
const controller = require("../controllers/weaponAscensionController");

router.get("/", controller.getAllWeaponAscensions);
router.get("/:name", controller.getWeaponAscensionByName);
router.post("/", controller.createWeaponAscension);
router.put("/:name", controller.updateWeaponAscension);
router.delete("/:name", controller.deleteWeaponAscension);
router.delete("/", controller.deleteAllWeaponAscensions);

module.exports = router;
