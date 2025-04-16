const express = require("express");
const router = express.Router();
const controller = require("../controllers/materialController");

router.get("/", controller.getAll);
router.get("/:name", controller.getByName);

module.exports = router;