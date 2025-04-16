// ====== services/characterService.js ======
const characterRepo = require("../repositories/characterRepository");

const fetchAllCharacters = async () => {
  return await characterRepo.getAllCharacters();
};

const fetchCharacterByName = async (name) => {
  return await characterRepo.getCharacterByName(name);
};

module.exports = {
  fetchAllCharacters,
  fetchCharacterByName
};