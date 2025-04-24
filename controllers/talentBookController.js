// controllers/talentBookController.js
const TalentBook = require("../models/talentBook");

// CREATE: Add a new TalentBook
exports.createTalentBook = async (req, res) => {
  try {
    const newItem = await TalentBook.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ: Get all TalentBooks or filter by character
exports.getAllTalentBooks = async (req, res) => {
  const character = req.query.character; // Get character from query parameter
  const query = character ? { "characters.name": { $regex: character, $options: "i" } } : {}; // If character is provided, filter by character name

  try {
    const items = await TalentBook.find(query); // Fetch all TalentBooks with optional filter for character

    // If a character is specified, filter out others from the characters array
    if (character) {
      items.forEach(item => {
        item.characters = item.characters.filter(c => c.name.toLowerCase() === character.toLowerCase());
      });
    }

    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ: Get a TalentBook by name
exports.getTalentBookByName = async (req, res) => {
  try {
    const name = req.params.name;
    const item = await TalentBook.findOne({ name }); // Find by name
    if (!item) {
      return res.status(404).json({ message: "Talent Book not found" });
    }
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE: Update a TalentBook by name
exports.updateTalentBookByName = async (req, res) => {
  try {
    const updatedItem = await TalentBook.findOneAndUpdate(
      { name: req.params.name },
      req.body,
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ message: "Talent Book not found" });
    }
    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE: Delete a TalentBook by name
exports.deleteTalentBookByName = async (req, res) => {
  try {
    const deleted = await TalentBook.findOneAndDelete({ name: req.params.name });
    if (!deleted) {
      return res.status(404).json({ message: "Talent Book not found" });
    }
    res.status(200).json({ message: "Talent Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
