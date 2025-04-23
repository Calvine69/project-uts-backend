// routes/talentBookRoutes.js
const express = require("express");
const router = express.Router();
const talentBookController = require("../controllers/talentBookController");

// CREATE: Add a new TalentBook
router.post("/", talentBookController.createTalentBook);

// READ: Get all TalentBooks
router.get("/", talentBookController.getAllTalentBooks);

// READ: Get a TalentBook by name
router.get("/:name", talentBookController.getTalentBookByName);

// UPDATE: Update a TalentBook by name
router.put("/:name", talentBookController.updateTalentBookByName);

// DELETE: Delete a TalentBook by name
router.delete("/:name", talentBookController.deleteTalentBookByName);

module.exports = router;