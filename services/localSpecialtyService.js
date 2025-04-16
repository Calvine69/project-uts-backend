const repo = require("../repositories/localSpecialtyRepository");

const fetchAll = () => repo.getAllLocalSpecialties();
const fetchByName = (name) => repo.getLocalSpecialtyByName(name);

module.exports = {
  fetchAll,
  fetchByName
};