const repo = require("../repositories/talentBookRepository");

const fetchAll = () => repo.getAllTalentBooks();
const fetchByName = (name) => repo.getTalentBookByName(name);

module.exports = {
  fetchAll,
  fetchByName
};