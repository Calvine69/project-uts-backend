// ====== routes/character.js ======
const express = require("express");
const router = express.Router();
const characterController = require("../controllers/characterController");

router.get("/", characterController.getAllCharacters);
router.get("/:name", characterController.getCharacterByName);

module.exports = router;