// ====== repositories/characterRepository.js ======
const Character = require("../models/character");

const getAllCharacters = () => Character.find();
const getCharacterByName = (name) => Character.findOne({ name });

module.exports = {
  getAllCharacters,
  getCharacterByName
};