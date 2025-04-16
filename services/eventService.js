const repo = require("../repositories/eventRepository");

const fetchAll = () => repo.getAllEvents();
const fetchByName = (name) => repo.getEventByName(name);

module.exports = {
  fetchAll,
  fetchByName
};