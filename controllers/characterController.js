// ====== controllers/characterController.js ======
const characterService = require("../services/characterService");

const getAllCharacters = async (req, res) => {
  try {
    const characters = await characterService.fetchAllCharacters();
    res.json(characters);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCharacterByName = async (req, res) => {
  try {
    const name = req.params.name;
    const character = await characterService.fetchCharacterByName(name);
    if (!character) return res.status(404).json({ message: "Character not found" });
    res.json(character);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllCharacters,
  getCharacterByName
};
