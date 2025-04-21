const express = require("express");
const router = express.Router();
const controller = require("../controllers/weaponAscensionController");

router.get("/", controller.getAll);
router.get("/:name", controller.getByName);
router.post("/", controller.create);
router.put("/:name", controller.update);
router.delete("/:name", controller.remove);
router.delete("/", controller.removeAll);

module.exports = router;
